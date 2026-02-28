import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";

interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  videoId: string;
  addedAt: string; // When video was added to playlist
}

export const YouTubeFeed = () => {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const playlistId = "PLFRRQCWz9XkBc-oeOwBak5NulA0wpXt1y";
  const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;

  useEffect(() => {
    const fetchPlaylistVideos = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=15&playlistId=${playlistId}&key=${apiKey}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch videos");
        }

        const data = await response.json();

        const videoList: YouTubeVideo[] = data.items
          .filter((item: any) => {
            // Filter out private/deleted videos (no thumbnails or no resourceId)
            const title = item.snippet.title;
            return (
              item.snippet.thumbnails &&
              item.snippet.resourceId?.videoId &&
              title !== "Private video" &&
              title !== "Deleted video"
            );
          })
          .map((item: any) => ({
            id: item.id,
            title: item.snippet.title,
            thumbnail:
              item.snippet.thumbnails?.high?.url ||
              item.snippet.thumbnails?.medium?.url ||
              item.snippet.thumbnails?.default?.url ||
              "",
            videoId: item.snippet.resourceId.videoId,
            addedAt: item.snippet.publishedAt, // When added to playlist
          }));

        // Sort by date added - newest first (appears on left)
        videoList.sort((a, b) => new Date(b.addedAt).getTime() - new Date(a.addedAt).getTime());

        setVideos(videoList);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching YouTube playlist:", err);
        setError(true);
        setLoading(false);
      }
    };

    if (apiKey) {
      fetchPlaylistVideos();
    } else {
      console.error("YouTube API key not found");
      setError(true);
      setLoading(false);
    }
  }, [apiKey, playlistId]);

  if (loading) {
    return (
      <section id="youtube-feed" className="py-24 px-4">
        <div className="w-full max-w-[1100px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-normal text-foreground mb-2">
            Now Watching
          </h2>
          <p className="text-muted-foreground mb-8">
            Cool content I've been watching on YouTube.
          </p>
          <div className="bg-card p-8 rounded-lg border border-border text-center">
            <p className="text-muted-foreground">Loading videos...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error || videos.length === 0) {
    return (
      <section id="youtube-feed" className="py-24 px-4">
        <div className="w-full max-w-[1100px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-normal text-foreground mb-2">
            Now Watching
          </h2>
          <p className="text-muted-foreground mb-8">
            Cool content I've been watching on YouTube.
          </p>
          <div className="bg-card p-6 rounded-lg border border-border text-center">
            <p className="text-muted-foreground">
              Unable to load videos.{" "}
              <a
                href={`https://www.youtube.com/playlist?list=${playlistId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                View playlist on YouTube →
              </a>
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="youtube-feed" className="py-24 px-4">
      <div className="w-full max-w-[1100px] mx-auto">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-3xl md:text-4xl font-normal text-foreground">
            Now Watching
          </h2>
        </div>

        <p className="text-muted-foreground mb-8">
          Cool content I've been watching on YouTube.
        </p>

        {/* Bento Box Grid - 3 Across with Scroll */}
        <div className="overflow-x-auto pb-4 scroll-smooth">
          <div className="flex gap-4">
            {videos.map((video) => (
              <a
                key={video.id}
                href={`https://www.youtube.com/watch?v=${video.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-card rounded-lg border border-border overflow-hidden hover:border-muted-foreground/50 transition-all duration-300 flex-shrink-0 w-[320px] md:w-[340px]"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Play overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-foreground/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg
                        className="w-8 h-8 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-4">
                  <h3 className="text-sm font-medium text-foreground line-clamp-2 group-hover:text-muted-foreground transition-colors">
                    {video.title}
                  </h3>
                  <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                    <ExternalLink className="h-3 w-3" />
                    <span>Watch on YouTube</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* View Full Playlist Link */}
        <div className="mt-6 text-center">
          <a
            href={`https://www.youtube.com/playlist?list=${playlistId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            View full playlist on YouTube
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
