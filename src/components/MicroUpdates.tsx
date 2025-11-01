import { microUpdates } from "@/data/siteData";
import { ExternalLink } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

export const MicroUpdates = () => {
  const allUpdates = microUpdates.filter(u => u.published);

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
          <div className="space-y-4">
            {allUpdates.map((update) => (
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
                        className="text-xs px-2 py-1 rounded text-muted-foreground bg-muted"
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
                        className="flex items-center gap-1 hover:text-foreground hover:underline transition-colors"
                      >
                        <ExternalLink className="h-3 w-3" />
                        Link
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
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
