const items = [
  "Building",
  "Writing",
  "Real estate",
  "AI agents",
  "Experiments",
  "Shipping",
  "Operating",
  "San Diego",
];

// One deliberate kinetic band. Edges fade into the band, motion pauses on hover,
// and the track is GPU-composited so the loop stays smooth (no stutter).
export const Marquee = () => {
  const loop = [...items, ...items];
  return (
    <section
      aria-hidden
      className="marquee-band overflow-hidden border-y border-foreground/10 bg-foreground py-5 md:py-7 select-none [mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)]"
    >
      <div className="marquee-track inline-flex w-max">
        {loop.map((word, i) => (
          <span
            key={i}
            className="mx-6 md:mx-10 inline-flex items-center gap-6 md:gap-10 text-2xl md:text-4xl font-semibold tracking-tight text-background"
          >
            {word}
            <span className="text-[hsl(36_42%_60%)]">/</span>
          </span>
        ))}
      </div>
    </section>
  );
};
