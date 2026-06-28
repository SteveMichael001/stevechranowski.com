import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/siteData";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center px-5 md:px-10 pt-24 pb-20 overflow-hidden">
      <div className="w-full max-w-[1320px] mx-auto">
        <p className="animate-fade-up font-mono text-[11px] md:text-xs uppercase tracking-[0.28em] text-accent mb-7">
          Builder · Operator · San Diego
        </p>

        <h1 className="animate-fade-up-2 font-black tracking-[-0.04em] leading-[0.9] text-foreground text-[clamp(3rem,12vw,10.5rem)] pb-2">
          Doing things.
          <br />
          <span className="italic font-semibold">Shamelessly</span> sharing&nbsp;them.
        </h1>

        <div className="animate-fade-up-3 mt-10 md:mt-12 flex flex-col sm:flex-row sm:items-center gap-6">
          <p
            className="max-w-[40ch] text-lg md:text-xl text-muted-foreground leading-relaxed"
            dangerouslySetInnerHTML={{ __html: siteConfig.hero_subhead }}
          />
          <Button
            size="lg"
            onClick={() => document.querySelector(siteConfig.hero_cta1_anchor)?.scrollIntoView({ behavior: "smooth" })}
            className="group h-12 px-7 text-base transition-transform hover:-translate-y-0.5 active:translate-y-0"
          >
            {siteConfig.hero_cta1_text}
            <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" strokeWidth={2} />
          </Button>
        </div>
      </div>

      <div
        className="animate-fade-up-3 absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground/40"
        aria-hidden
      >
        <ArrowDown className="h-5 w-5 animate-bounce" strokeWidth={1.5} />
      </div>
    </section>
  );
};
