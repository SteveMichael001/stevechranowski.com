import { blogPosts } from "@/data/siteData";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { Clock } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

export const BlogIndex = () => {
  const publishedPosts = blogPosts
    .filter((p) => p.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const featuredPost = publishedPosts.find((p) => p.featured);
  const recentPosts = publishedPosts.filter((p) => !p.featured).slice(0, 5);
  const { ref, shown } = useReveal<HTMLDivElement>();

  return (
    <section id="writing" className="py-24 md:py-32 px-5 md:px-10">
      <div ref={ref} className={`w-full max-w-[1100px] mx-auto reveal ${shown ? "is-visible" : ""}`}>
        <h2 className="text-4xl md:text-6xl font-black tracking-[-0.03em] leading-[0.95] text-foreground">
          Writing
        </h2>
        <p className="mt-4 mb-12 text-muted-foreground">Essays, notes, profiles, research.</p>

        {/* Featured Post */}
        {featuredPost && (
          <Link to={`/blog/${featuredPost.slug}`} className="block mb-16 group">
            <article className="bg-card border border-border rounded-lg overflow-hidden transition-colors hover:border-accent/50">
              {featuredPost.featured_image ? (
                <div className="aspect-[21/9] bg-muted relative overflow-hidden">
                  <img
                    src={featuredPost.featured_image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              ) : (
                <div className="aspect-[21/9] bg-muted relative">
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    <span className="text-sm">Featured</span>
                  </div>
                </div>
              )}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4 text-sm text-muted-foreground">
                  <time>{format(new Date(featuredPost.date), "MMM d, yyyy")}</time>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3 w-3" strokeWidth={1.75} />
                    {featuredPost.reading_time} min
                  </span>
                  <span>·</span>
                  <span className="text-accent">{featuredPost.category}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3 text-foreground transition-colors group-hover:text-accent">
                  {featuredPost.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-[65ch]">{featuredPost.excerpt}</p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {featuredPost.tags.map((tag) => (
                    <span key={tag} className="text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Link>
        )}

        {/* Recent Posts Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {recentPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.slug}`} className="group">
              <article className="bg-card border border-border rounded-lg p-6 h-full flex flex-col transition-colors hover:border-accent/50">
                <div className="flex items-center gap-3 mb-3 text-sm text-muted-foreground">
                  <time>{format(new Date(post.date), "MMM d, yyyy")}</time>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3 w-3" strokeWidth={1.75} />
                    {post.reading_time} min
                  </span>
                </div>
                <h3 className="text-xl font-semibold tracking-tight mb-2 text-foreground transition-colors group-hover:text-accent">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
