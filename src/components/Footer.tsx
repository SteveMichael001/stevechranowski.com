import { siteConfig } from "@/data/siteData";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="w-full max-w-[1100px] mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-medium mb-4 text-foreground">Navigate</h3>
            <nav className="space-y-2">
              <a href="#about" className="block text-muted-foreground hover:text-accent transition-colors">
                About
              </a>
              <a href="#micro-updates" className="block text-muted-foreground hover:text-accent transition-colors">
                Now
              </a>
              <a href="#writing" className="block text-muted-foreground hover:text-accent transition-colors">
                Writing
              </a>
              <a href="#projects" className="block text-muted-foreground hover:text-accent transition-colors">
                Projects
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-accent transition-colors">
                Contact
              </a>
            </nav>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-foreground">Connect</h3>
            <nav className="space-y-2">
              {siteConfig.social_links.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted-foreground hover:text-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-foreground">Meta</h3>
            <nav className="space-y-2">
              <a href="/feed.xml" className="block text-muted-foreground hover:text-accent transition-colors">
                RSS Feed
              </a>
              <a href="#" className="block text-muted-foreground hover:text-accent transition-colors">
                Privacy
              </a>
            </nav>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-2">
            {siteConfig.now_status}
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.site_name}. Built with care. Open source.
          </p>
        </div>
      </div>
    </footer>
  );
};
