export const YouTubeFeed = () => {
  const playlistId = "PLFRRQCWz9XkBc-oeOwBak5NulA0wpXt1y";

  return (
    <section id="youtube-feed" className="py-16 px-4 bg-muted/30">
      <div className="w-full max-w-[1100px] mx-auto">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-3xl md:text-4xl font-normal text-foreground">
            Now Watching
          </h2>
        </div>

        <p className="text-muted-foreground mb-8">
          Cool content I've been watching on YouTube.
        </p>

        {/* YouTube Playlist Embed */}
        <div className="bg-card rounded-lg border border-border overflow-hidden">
          <iframe
            width="100%"
            height="600"
            src={`https://www.youtube.com/embed/videoseries?list=${playlistId}`}
            title="YouTube Playlist"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full"
          />
        </div>

        <div className="mt-4 text-center">
          <a
            href={`https://www.youtube.com/playlist?list=${playlistId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-accent transition-colors"
          >
            View full playlist on YouTube →
          </a>
        </div>
      </div>
    </section>
  );
};
