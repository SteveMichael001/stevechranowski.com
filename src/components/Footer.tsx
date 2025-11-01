import { siteConfig } from "@/data/siteData";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="w-full max-w-[1100px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-8">
          {/* Navigate Section */}
          <div>
            <h3 className="font-medium mb-4 text-foreground">Navigate</h3>
            <nav className="flex flex-col gap-2">
              <a href="#writing" className="text-muted-foreground hover:text-foreground hover:underline transition-colors">
                Writing
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-foreground hover:underline transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground hover:underline transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="font-medium mb-4 text-foreground">Connect</h3>
            <nav className="flex flex-col gap-2">
              <a
                href="https://www.linkedin.com/in/stevechranowski"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground hover:underline transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/stevechranowski"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground hover:underline transition-colors"
              >
                Instagram
              </a>
              <a
                href="mailto:stevechranowski@gmail.com"
                className="text-muted-foreground hover:text-foreground hover:underline transition-colors"
              >
                Email
              </a>
            </nav>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-2">
            {siteConfig.now_status}
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.site_name}. Built with care.
          </p>
        </div>
      </div>
    </footer>
  );
};
