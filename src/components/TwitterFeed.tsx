import { useEffect, useState } from "react";

export const TwitterFeed = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Check if script already exists
    const existingScript = document.getElementById('twitter-widget-script');

    if (existingScript) {
      // Script already loaded, just reload widgets
      if (window.twttr?.widgets) {
        window.twttr.widgets.load();
        setIsLoading(false);
      }
      return;
    }

    // Load Twitter widget script
    const script = document.createElement("script");
    script.id = 'twitter-widget-script';
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.charset = "utf-8";

    script.onload = () => {
      setIsLoading(false);
      setError(false);
    };

    script.onerror = () => {
      setIsLoading(false);
      setError(true);
      console.error("Failed to load Twitter widget script");
    };

    document.body.appendChild(script);

    // Don't remove script on unmount - let it persist
  }, []);

  if (error) {
    return (
      <section id="micro-updates" className="py-16 px-4 bg-muted/30">
        <div className="w-full max-w-[1100px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-normal text-foreground mb-2">
            Now
          </h2>
          <div className="bg-card p-6 rounded-lg border border-border text-center">
            <p className="text-muted-foreground">
              Unable to load Twitter feed. Visit{" "}
              <a
                href="https://twitter.com/stevemike_3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                @stevemike_3 on X/Twitter
              </a>
            </p>
          </div>
        </div>
      </section>
    );
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
          Latest thoughts and updates from X/Twitter.
        </p>

        {/* Loading State */}
        {isLoading && (
          <div className="bg-card p-8 rounded-lg border border-border text-center">
            <p className="text-muted-foreground">Loading tweets...</p>
          </div>
        )}

        {/* Twitter Embedded Timeline */}
        <div className={`bg-card rounded-lg border border-border overflow-hidden ${isLoading ? 'hidden' : ''}`}>
          <a
            className="twitter-timeline"
            data-height="600"
            data-width="100%"
            data-theme="light"
            data-tweet-limit="5"
            data-chrome="nofooter noborders transparent"
            href="https://twitter.com/stevemike_3"
          >
            Loading tweets by @stevemike_3...
          </a>
        </div>
      </div>
    </section>
  );
};
