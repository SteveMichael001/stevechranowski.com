import { useEffect } from "react";

export const TwitterFeed = () => {
  useEffect(() => {
    // Load Twitter widget script
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.charset = "utf-8";
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script);
    };
  }, []);

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

        {/* Twitter Embedded Timeline */}
        <div className="bg-card rounded-lg border border-border overflow-hidden">
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
