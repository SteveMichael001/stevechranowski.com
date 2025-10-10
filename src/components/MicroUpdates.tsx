import { microUpdates } from "@/data/siteData";
import { ExternalLink } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

export const MicroUpdates = () => {
  const publishedUpdates = microUpdates.filter(u => u.published);

  return (
    <section id="micro-updates" className="py-20 px-4 bg-muted/30">
      <div className="w-full max-w-[1100px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-normal mb-2 text-foreground">
          Now
        </h2>
        <p className="text-muted-foreground mb-12">
          Quick updates. Stream-of-consciousness notes. The latest.
        </p>

        <div className="space-y-6">
          {publishedUpdates.map((update) => (
            <div 
              key={update.id} 
              className="bg-card p-6 rounded-lg border border-border hover:border-accent/50 transition-colors"
            >
              <p className="text-foreground mb-3 leading-relaxed">
                {update.text}
              </p>
              
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-3">
                  {update.tags && update.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <time>
                    {formatDistanceToNow(new Date(update.date), { addSuffix: true })}
                  </time>
                  {update.external_link && (
                    <a 
                      href={update.external_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-accent hover:underline"
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
      </div>
    </section>
  );
};
