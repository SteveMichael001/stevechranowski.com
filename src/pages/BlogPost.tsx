import { useParams, Link } from "react-router-dom";
import { blogPosts } from "@/data/siteData";
import { format } from "date-fns";
import { Clock, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Footer } from "@/components/Footer";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-normal mb-4">Post not found</h1>
          <Link to="/">
            <Button variant="outline">Back home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({ title: post.title, url });
    } else {
      navigator.clipboard.writeText(url);
      toast.success("Link copied to clipboard");
    }
  };

  return (
    <>
      <article className="min-h-screen">
        {/* Header */}
        <header className="py-8 px-4 border-b border-border bg-background/95 backdrop-blur sticky top-0 z-10">
          <div className="w-full max-w-[1100px] mx-auto flex items-center justify-between">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            </Link>
            <Button variant="ghost" size="sm" onClick={handleShare}>
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </header>

        {/* Featured Image */}
        {post.featured_image && (
          <div className="w-full max-w-[1100px] mx-auto px-4 py-8">
            <div className="aspect-[21/9] rounded-lg overflow-hidden">
              <img 
                src={post.featured_image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        {/* Content */}
        <div className="py-16 px-4">
          <div className="w-full max-w-[780px] mx-auto">
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 mb-6 text-sm text-muted-foreground">
              <time>{format(new Date(post.date), 'MMMM d, yyyy')}</time>
              <span>·</span>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {post.reading_time} min read
              </div>
              <span>·</span>
              <span className="text-foreground">{post.category}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-12">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  to={`/blog/tag/${tag}`}
                  className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full hover:bg-muted hover:text-muted-foreground hover:underline transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>

            {/* Body */}
            <div 
              className="prose-reading"
              dangerouslySetInnerHTML={{ __html: post.body_html }}
            />

            {/* Footer CTA */}
            <div className="mt-16 pt-8 border-t border-border">
              <p className="text-muted-foreground mb-4">
                Enjoyed this? <Link to="/#contact" className="text-foreground hover:text-muted-foreground hover:underline">Send me a note</Link> or <a href="#" onClick={handleShare} className="text-foreground hover:text-muted-foreground hover:underline">share it</a>.
              </p>
              <Link to="/#writing">
                <Button variant="outline">
                  ← More writing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </article>
      
      <Footer />
    </>
  );
};

export default BlogPost;
