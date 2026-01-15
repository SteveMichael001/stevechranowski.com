import { siteConfig } from "@/data/siteData";

export const About = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="w-full max-w-[780px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-normal mb-8 text-foreground">
          Who I am
        </h2>
        <div className="prose-reading space-y-4 text-foreground/90">
          {siteConfig.about_text.split('\n\n').map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
        
        <div className="mt-8 flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground">
            📍 San Diego
          </span>
          <span className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground">
            🏄 Surfing
          </span>
          <span className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground">
            🍳 Cooking
          </span>
          <span className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground">
            💻 Building
          </span>
        </div>
      </div>
    </section>
  );
};
