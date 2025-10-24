import { blogPosts } from "@/data/siteData";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export const BlogIndex = () => {
  const publishedPosts = blogPosts.filter(p => p.published).sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  
  const featuredPost = publishedPosts.find(p => p.featured);
  const recentPosts = publishedPosts.filter(p => !p.featured).slice(0, 5);

  return (
    <section id="writing" className="py-20 px-4">
      <div className="w-full max-w-[1100px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-normal mb-2 text-foreground">
          Writing
        </h2>
        <p className="text-muted-foreground mb-12">
          Essays, notes, and experiments. The long form.
        </p>

        {/* Featured Post */}
        {featuredPost && (
          <Link to={`/blog/${featuredPost.slug}`} className="block mb-16 group">
            <article className="bg-card border border-border rounded-lg overflow-hidden hover:border-muted-foreground/50 transition-all">
              <div className="aspect-[21/9] bg-muted relative">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  <span className="text-sm">Featured image</span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4 text-sm text-muted-foreground">
                  <time>{format(new Date(featuredPost.date), 'MMM d, yyyy')}</time>
                  <span>·</span>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {featuredPost.reading_time} min
                  </div>
                  <span>·</span>
                  <span className="text-foreground">{featuredPost.category}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-normal mb-3 text-foreground group-hover:text-muted-foreground group-hover:underline transition-colors">
                  {featuredPost.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {featuredPost.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Link>
        )}

        {/* Recent Posts Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {recentPosts.map((post) => (
            <Link 
              key={post.id} 
              to={`/blog/${post.slug}`}
              className="group"
            >
              <article className="bg-card border border-border rounded-lg p-6 hover:border-muted-foreground/50 transition-all h-full flex flex-col">
                <div className="flex items-center gap-3 mb-3 text-sm text-muted-foreground">
                  <time>{format(new Date(post.date), 'MMM d, yyyy')}</time>
                  <span>·</span>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.reading_time} min
                  </div>
                </div>
                <h3 className="text-xl font-normal mb-2 text-foreground group-hover:text-muted-foreground group-hover:underline transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded"
                    >
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
