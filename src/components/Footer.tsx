import { siteConfig } from "@/data/siteData";

const connect = [
  { href: "https://www.linkedin.com/in/stevenchranowski/", label: "LinkedIn", external: true },
  { href: "https://www.instagram.com/stevemichael.001/", label: "Instagram", external: true },
  { href: "mailto:stevenchranowski3@gmail.com", label: "Email", external: false },
];

export const Footer = () => {
  return (
    <footer className="py-20 md:py-28 px-5 md:px-10 border-t border-border">
      <div className="w-full max-w-[1100px] mx-auto">
        <p className="text-5xl md:text-7xl font-black tracking-[-0.04em] leading-[0.9] text-foreground">
          Let&apos;s build
          <br />
          something.
        </p>

        <div className="mt-14 grid sm:grid-cols-2 gap-12 max-w-md">
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-4">Navigate</h3>
            <nav className="flex flex-col gap-2">
              {[
                ["#writing", "Writing"],
                ["#projects", "Projects"],
                ["#about", "About"],
              ].map(([href, label]) => (
                <a key={href} href={href} className="w-fit text-muted-foreground transition-colors hover:text-accent">
                  {label}
                </a>
              ))}
            </nav>
          </div>
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-4">Connect</h3>
            <nav className="flex flex-col gap-2">
              {connect.map(({ href, label, external }) => (
                <a
                  key={label}
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="w-fit text-muted-foreground transition-colors hover:text-accent"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-sm text-muted-foreground">{siteConfig.now_status}</p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.site_name}.
          </p>
        </div>
      </div>
    </footer>
  );
};
