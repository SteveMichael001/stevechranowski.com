import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/siteData";
import portraitImage from "@/assets/portrait.png";

export const Hero = () => {
  return (
    <section className="relative min-h-[100dvh] flex items-center px-4 pt-24 pb-16 overflow-hidden">
      <div className="w-full max-w-[1100px] mx-auto grid md:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
        {/* Left: Text */}
        <div className="space-y-7">
          <h1 className="animate-fade-up text-5xl md:text-6xl lg:text-[5.25rem] font-medium tracking-[-0.035em] leading-[0.95] text-foreground">
            {siteConfig.hero_headline}
          </h1>
          <p
            className="animate-fade-up-2 max-w-[48ch] text-lg md:text-xl text-muted-foreground leading-relaxed"
            dangerouslySetInnerHTML={{ __html: siteConfig.hero_subhead }}
          />
          <div className="animate-fade-up-3 flex flex-col sm:flex-row gap-4 pt-2">
            <Button
              size="lg"
              onClick={() => document.querySelector(siteConfig.hero_cta1_anchor)?.scrollIntoView({ behavior: "smooth" })}
              className="text-base transition-transform hover:-translate-y-[1px] active:translate-y-[1px]"
            >
              {siteConfig.hero_cta1_text}
            </Button>
          </div>
        </div>

        {/* Right: Portrait, with a tinted offset frame (depth tied to brand accent) */}
        <div className="animate-fade-up-2 relative flex items-center justify-center md:justify-end">
          <div
            className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-lg bg-accent/10"
            aria-hidden
          />
          <img
            src={portraitImage}
            alt="Steve Chranowski"
            className="relative max-w-full max-h-[62vh] w-auto h-auto rounded-lg ring-1 ring-border"
          />
        </div>
      </div>
    </section>
  );
};
