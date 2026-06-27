import { siteConfig } from "@/data/siteData";
import { MapPin, Waves, UtensilsCrossed, Code2 } from "lucide-react";

const chips = [
  { icon: MapPin, label: "San Diego" },
  { icon: Waves, label: "Surfing" },
  { icon: UtensilsCrossed, label: "Cooking" },
  { icon: Code2, label: "Building" },
];

export const About = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="w-full max-w-[780px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-8 text-foreground">
          Who I am
        </h2>
        <div className="prose-reading space-y-4 text-foreground/90">
          {siteConfig.about_text.split("\n\n").map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-2.5">
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
    </section>
  );
};
