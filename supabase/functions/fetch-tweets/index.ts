import { createHmac } from "node:crypto";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Get Twitter API credentials from environment
const API_KEY = Deno.env.get("TWITTER_CONSUMER_KEY")?.trim();
const API_SECRET = Deno.env.get("TWITTER_CONSUMER_SECRET")?.trim();
const ACCESS_TOKEN = Deno.env.get("TWITTER_ACCESS_TOKEN")?.trim();
const ACCESS_TOKEN_SECRET = Deno.env.get("TWITTER_ACCESS_TOKEN_SECRET")?.trim();

function validateEnvironmentVariables() {
  if (!API_KEY) throw new Error("Missing TWITTER_CONSUMER_KEY");
  if (!API_SECRET) throw new Error("Missing TWITTER_CONSUMER_SECRET");
  if (!ACCESS_TOKEN) throw new Error("Missing TWITTER_ACCESS_TOKEN");
  if (!ACCESS_TOKEN_SECRET) throw new Error("Missing TWITTER_ACCESS_TOKEN_SECRET");
}

// OAuth 1.0a signature generation for Twitter API
function generateOAuthSignature(
  method: string,
  url: string,
  params: Record<string, string>,
  consumerSecret: string,
  tokenSecret: string
): string {
  const signatureBaseString = `${method}&${encodeURIComponent(url)}&${encodeURIComponent(
    Object.entries(params)
      .sort()
      .map(([k, v]) => `${k}=${v}`)
      .join("&")
  )}`;
  
  const signingKey = `${encodeURIComponent(consumerSecret)}&${encodeURIComponent(tokenSecret)}`;
  const hmacSha1 = createHmac("sha1", signingKey);
  const signature = hmacSha1.update(signatureBaseString).digest("base64");
  
  return signature;
}

function generateOAuthHeader(method: string, url: string): string {
  // Parse URL to separate base URL and query parameters
  const urlObj = new URL(url);
  const baseUrl = `${urlObj.protocol}//${urlObj.host}${urlObj.pathname}`;
  
  // Extract query parameters
  const queryParams: Record<string, string> = {};
  urlObj.searchParams.forEach((value, key) => {
    queryParams[key] = value;
  });
  
  const oauthParams = {
    oauth_consumer_key: API_KEY!,
    oauth_nonce: Math.random().toString(36).substring(2),
    oauth_signature_method: "HMAC-SHA1",
    oauth_timestamp: Math.floor(Date.now() / 1000).toString(),
    oauth_token: ACCESS_TOKEN!,
    oauth_version: "1.0",
  };

  // Combine OAuth params and query params for signature
  const allParams = { ...oauthParams, ...queryParams };

  const signature = generateOAuthSignature(
    method,
    baseUrl, // Use base URL without query parameters
    allParams, // Include both OAuth and query parameters
    API_SECRET!,
    ACCESS_TOKEN_SECRET!
  );

  const signedOAuthParams = {
    ...oauthParams,
    oauth_signature: signature,
  };

  return (
    "OAuth " +
    Object.entries(signedOAuthParams)
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([k, v]) => `${encodeURIComponent(k)}="${encodeURIComponent(v)}"`)
      .join(", ")
  );
}

async function fetchTweets(username: string, maxTweets: number = 10) {
  const query = `from:${username} -is:reply -is:retweet`;
  const url = `https://api.twitter.com/2/tweets/search/recent?query=${encodeURIComponent(query)}&max_results=${maxTweets}&tweet.fields=created_at,public_metrics&expansions=author_id&user.fields=username`;
  
  const method = "GET";
  const oauthHeader = generateOAuthHeader(method, url);
  
  console.log("Fetching tweets for:", username);
  
  const response = await fetch(url, {
    method: method,
    headers: {
      Authorization: oauthHeader,
      "Content-Type": "application/json",
    },
  });

  const responseText = await response.text();
  console.log("Twitter API Response Status:", response.status);
  
  if (!response.ok) {
    console.error("Twitter API Error:", responseText);
    throw new Error(`Twitter API error: ${response.status} - ${responseText}`);
  }

  return JSON.parse(responseText);
}

// Transform Twitter data to MicroUpdate format
function transformTweetsToUpdates(twitterData: any) {
  if (!twitterData.data || twitterData.data.length === 0) {
    console.log("No tweets found");
    return [];
  }

  return twitterData.data.map((tweet: any) => {
    const metrics = tweet.public_metrics || {};
    const tags = ["twitter"];
    
    // Add engagement tags if significant
    if (metrics.like_count > 10) tags.push(`${metrics.like_count} likes`);
    if (metrics.retweet_count > 5) tags.push(`${metrics.retweet_count} retweets`);
    
    return {
      id: `tweet-${tweet.id}`,
      text: tweet.text,
      date: tweet.created_at,
      tags: tags,
      external_link: `https://twitter.com/i/web/status/${tweet.id}`,
      published: true,
      engagement: {
        likes: metrics.like_count || 0,
        retweets: metrics.retweet_count || 0,
        replies: metrics.reply_count || 0,
      }
    };
  });
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    validateEnvironmentVariables();
    
    const { username = "stevechranowski", maxTweets = 10 } = await req.json().catch(() => ({}));
    
    console.log(`Fetching up to ${maxTweets} tweets from @${username}`);
    
    const twitterData = await fetchTweets(username, maxTweets);
    const updates = transformTweetsToUpdates(twitterData);
    
    console.log(`Successfully transformed ${updates.length} tweets`);
    
    return new Response(
      JSON.stringify({ 
        updates,
        fetched_at: new Date().toISOString(),
        username 
      }), 
      {
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=900' // 15 minutes
        },
      }
    );
  } catch (error: any) {
    console.error("Error in fetch-tweets function:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        updates: [] // Return empty array on error for graceful degradation
      }), 
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
