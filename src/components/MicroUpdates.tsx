import { microUpdates, twitter_config } from "@/data/siteData";
import { ExternalLink, RefreshCw } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface TweetUpdate {
  id: string;
  text: string;
  date: string;
  tags?: string[];
  external_link?: string;
  published: boolean;
  engagement?: {
    likes: number;
    retweets: number;
    replies: number;
  };
}

interface FetchTweetsResponse {
  updates: TweetUpdate[];
  fetched_at: string;
  username: string;
}

const useTweets = (enabled: boolean) => {
  return useQuery({
    queryKey: ['tweets', twitter_config.username],
    queryFn: async () => {
      console.log('Fetching tweets from edge function...');
      const { data, error } = await supabase.functions.invoke('fetch-tweets', {
        body: {
          username: twitter_config.username,
          maxTweets: twitter_config.max_tweets
        }
      });

      if (error) {
        console.error('Error fetching tweets:', error);
        throw error;
      }

      console.log('Tweets fetched successfully:', data);
      return data as FetchTweetsResponse;
    },
    enabled: enabled,
    staleTime: twitter_config.refresh_interval,
    refetchInterval: twitter_config.refresh_interval,
    retry: 2,
  });
};

export const MicroUpdates = () => {
  const [showLiveTweets, setShowLiveTweets] = useState(twitter_config.enabled);
  const { data: tweetsData, isLoading, error, refetch } = useTweets(showLiveTweets);

  // Combine live tweets with manual updates
  const allUpdates = (() => {
    if (!showLiveTweets || !twitter_config.merge_with_manual) {
      // Show only live tweets if merge is disabled
      if (showLiveTweets && tweetsData?.updates) {
        return tweetsData.updates;
      }
      // Fallback to manual updates
      return microUpdates.filter(u => u.published);
    }

    // Merge both sources
    const manual = microUpdates.filter(u => u.published);
    const live = tweetsData?.updates || [];
    
    // Combine and sort by date (newest first)
    return [...manual, ...live].sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  })();

  // Group updates into blocks of 3
  const updateGroups = [];
  for (let i = 0; i < allUpdates.length; i += 3) {
    updateGroups.push(allUpdates.slice(i, i + 3));
  }

  return (
    <section id="micro-updates" className="py-16 px-4 bg-muted/30">
      <div className="w-full max-w-[1100px] mx-auto">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-3xl md:text-4xl font-normal text-foreground">
            Now
          </h2>
          
          {showLiveTweets && tweetsData?.fetched_at && (
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span>
                Updated {formatDistanceToNow(new Date(tweetsData.fetched_at), { addSuffix: true })}
              </span>
              <button
                onClick={() => refetch()}
                className="p-2 hover:bg-muted rounded-md transition-colors"
                title="Refresh tweets"
              >
                <RefreshCw className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
        
        <p className="text-muted-foreground mb-8">
          {showLiveTweets 
            ? "Live feed from Twitter. Stream-of-consciousness notes. The latest."
            : "Quick updates. Stream-of-consciousness notes. The latest."}
        </p>

        {/* Loading State */}
        {isLoading && showLiveTweets && (
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div 
                key={i} 
                className="bg-card p-6 rounded-lg border border-border animate-pulse"
              >
                <div className="h-4 bg-muted rounded w-3/4 mb-3"></div>
                <div className="h-4 bg-muted rounded w-1/2 mb-3"></div>
                <div className="flex gap-3">
                  <div className="h-6 bg-muted rounded w-16"></div>
                  <div className="h-6 bg-muted rounded w-20"></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {error && showLiveTweets && (
          <div className="bg-card p-6 rounded-lg border border-border">
            <p className="text-muted-foreground mb-3">
              Unable to load live tweets. {twitter_config.merge_with_manual ? "Showing manual updates instead." : ""}
            </p>
            <button
              onClick={() => refetch()}
              className="text-accent hover:underline text-sm"
            >
              Try again
            </button>
          </div>
        )}

        {/* Updates List */}
        {!isLoading && allUpdates.length > 0 && (
          <Carousel className="w-full">
            <CarouselContent>
              {updateGroups.map((group, groupIndex) => (
                <CarouselItem key={groupIndex}>
                  <div className="space-y-4">
                    {group.map((update) => {
                      const isTweet = update.id.startsWith('tweet-');
                      
                      return (
                        <div 
                          key={update.id} 
                          className="bg-card p-4 rounded-lg border border-border hover:border-accent/50 transition-colors"
                        >
                          <p className="text-foreground text-sm mb-2 leading-relaxed">
                            {update.text}
                          </p>
                          
                          <div className="flex items-center justify-between flex-wrap gap-2">
                            <div className="flex items-center gap-2">
                              {update.tags && update.tags.map((tag) => (
                                <span 
                                  key={tag} 
                                  className={`text-xs px-2 py-1 rounded ${
                                    tag === 'twitter' 
                                      ? 'text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-950' 
                                      : 'text-muted-foreground bg-muted'
                                  }`}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            
                            <div className="flex items-center gap-3 text-xs text-muted-foreground">
                              <time>
                                {formatDistanceToNow(new Date(update.date), { addSuffix: true })}
                              </time>
                              {update.external_link && (
                                <a 
                                  href={update.external_link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`flex items-center gap-1 hover:underline ${
                                    isTweet ? 'text-blue-600 dark:text-blue-400' : 'text-accent'
                                  }`}
                                >
                                  <ExternalLink className="h-3 w-3" />
                                  {isTweet ? 'View on X' : 'Link'}
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {updateGroups.length > 1 && (
              <>
                <CarouselPrevious className="left-0 -translate-x-12" />
                <CarouselNext className="right-0 translate-x-12" />
              </>
            )}
          </Carousel>
        )}

        {/* Empty State */}
        {!isLoading && allUpdates.length === 0 && (
          <div className="bg-card p-6 rounded-lg border border-border text-center">
            <p className="text-muted-foreground">No recent updates</p>
          </div>
        )}
      </div>
    </section>
  );
};
