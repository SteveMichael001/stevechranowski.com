import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/siteData";
import portraitImage from "@/assets/portrait.png";

export const Hero = () => {
  return (
    <section className="min-h-[85vh] flex items-center justify-center px-4 py-20 pb-8 pt-32">
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
          </div>
        </div>

        {/* Right: Portrait Image */}
        <div className="relative flex items-center justify-center">
          <img
            src={portraitImage}
            alt="Steve Chranowski portrait"
            className="max-w-full max-h-[65vh] w-auto h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};
