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
        // Check if it's a rate limit error and throw a specific error
        if (error.message?.includes('429')) {
          throw new Error('RATE_LIMIT');
        }
        throw error;
      }

      console.log('Tweets fetched successfully:', data);
      return data as FetchTweetsResponse;
    },
    enabled: enabled,
    staleTime: Infinity, // Cache indefinitely
    refetchInterval: false, // Disable automatic refetching
    refetchOnWindowFocus: false, // Don't refetch on window focus
    retry: (failureCount, error) => {
      // Don't retry if it's a rate limit error
      if (error.message === 'RATE_LIMIT') {
        return false;
      }
      // Only retry once for other errors
      return failureCount < 1;
    },
  });
};

export const MicroUpdates = () => {
  // Completely disable Twitter integration for now
  const showLiveTweets = false;
  const tweetsData = undefined;
  const isLoading = false;
  const error = null;
  const refetch = () => {};

  // Use only manual updates
  const allUpdates = microUpdates.filter(u => u.published);

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
        </div>
        
        <p className="text-muted-foreground mb-8">
          Quick updates. Stream-of-consciousness notes. The latest.
        </p>


        {/* Updates List */}
        {allUpdates.length > 0 && (
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
                          className="bg-card p-4 rounded-lg border border-border hover:border-muted-foreground/50 transition-colors"
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
                                      ? 'text-background bg-foreground' 
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
                                  className={`flex items-center gap-1 hover:text-muted-foreground hover:underline ${
                                    isTweet ? 'text-foreground' : 'text-foreground'
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
        {allUpdates.length === 0 && (
          <div className="bg-card p-6 rounded-lg border border-border text-center">
            <p className="text-muted-foreground">No recent updates</p>
          </div>
        )}
      </div>
    </section>
  );
};
