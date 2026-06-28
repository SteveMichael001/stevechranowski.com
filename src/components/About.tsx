import { siteConfig } from "@/data/siteData";
import { MapPin, Waves, UtensilsCrossed, Code2 } from "lucide-react";
import portraitImage from "@/assets/portrait.png";

const chips = [
  { icon: MapPin, label: "San Diego" },
  { icon: Waves, label: "Surfing" },
  { icon: UtensilsCrossed, label: "Cooking" },
  { icon: Code2, label: "Building" },
];

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-5 md:px-10">
      <div className="w-full max-w-[1100px] mx-auto grid lg:grid-cols-[1fr_0.72fr] gap-12 lg:gap-20 items-start">
        {/* Left: copy */}
        <div>
          <h2 className="text-4xl md:text-6xl font-black tracking-[-0.03em] leading-[0.95] mb-10 text-foreground">
            Who I am
          </h2>
          <div className="prose-reading space-y-4 text-foreground/90 max-w-[58ch]">
            {siteConfig.about_text.split("\n\n").map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-2.5">
            {chips.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-border rounded-full text-sm text-muted-foreground"
              >
                <Icon className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden />
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Right: portrait with a solid accent offset block (bold, locked accent) */}
        <div className="relative mx-auto lg:mx-0 w-full max-w-[340px]">
          <div
            className="absolute inset-0 translate-x-4 translate-y-4 -z-10 rounded-lg bg-[hsl(36_36%_72%)]"
            aria-hidden
          />
          <img
            src={portraitImage}
            alt="Steve Chranowski"
            className="relative w-full rounded-lg grayscale ring-1 ring-foreground/10"
          />
        </div>
      </div>
    </section>
  );
};
