import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/siteData";

export const Hero = () => {
  return (
    <section className="min-h-[85vh] flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-[1100px] grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-foreground leading-tight">
            {siteConfig.hero_headline}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: siteConfig.hero_subhead }} />
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              size="lg"
              onClick={() => document.querySelector(siteConfig.hero_cta1_anchor)?.scrollIntoView({ behavior: 'smooth' })}
              className="text-base"
            >
              {siteConfig.hero_cta1_text}
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.querySelector(siteConfig.hero_cta2_anchor)?.scrollIntoView({ behavior: 'smooth' })}
              className="text-base"
            >
              {siteConfig.hero_cta2_text}
            </Button>
          </div>
        </div>

        {/* Right: Image placeholder */}
        <div className="relative aspect-square md:aspect-[4/5] rounded-lg bg-muted overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
            <span className="text-sm">Portrait placeholder</span>
          </div>
        </div>
      </div>
    </section>
  );
};
