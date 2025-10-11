const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Get Twitter Bearer Token from environment
const BEARER_TOKEN = Deno.env.get("TWITTER_BEARER_TOKEN")?.trim();

function validateEnvironmentVariables() {
  if (!BEARER_TOKEN) throw new Error("Missing TWITTER_BEARER_TOKEN");
}

async function fetchTweets(username: string, maxTweets: number = 10) {
  const query = `from:${username} -is:reply -is:retweet`;
  const url = `https://api.twitter.com/2/tweets/search/recent?query=${encodeURIComponent(query)}&max_results=${maxTweets}&tweet.fields=created_at,public_metrics`;
  
  console.log("Fetching tweets for:", username);
  
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${BEARER_TOKEN}`,
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
