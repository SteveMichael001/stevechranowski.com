import { projects } from "@/data/siteData";
import { ExternalLink } from "lucide-react";
import { ProjectCarousel } from "./ProjectCarousel";
import { useReveal } from "@/hooks/useReveal";

export const Projects = () => {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <section id="projects" className="py-24 md:py-32 px-5 md:px-10 bg-muted/30">
      <div ref={ref} className={`w-full max-w-[1100px] mx-auto reveal ${shown ? "is-visible" : ""}`}>
        <h2 className="text-4xl md:text-6xl font-black tracking-[-0.03em] leading-[0.95] text-foreground">
          Projects
        </h2>
        <p className="mt-4 mb-12 text-muted-foreground">Things I'm building. Experiments worth sharing.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="bg-card border border-border rounded-lg overflow-hidden h-full flex flex-col group transition-colors hover:border-accent/50"
            >
              <div className="aspect-square bg-muted relative overflow-hidden">
                {project.images && project.images.length > 0 ? (
                  <ProjectCarousel images={project.images} title={project.title} />
                ) : project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-contain bg-black" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    <span className="text-sm">Project</span>
                  </div>
                )}
                {project.tags.includes("in progress") && (
                  <span className="absolute top-3 left-3 z-10 inline-flex items-center rounded-full bg-accent px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-accent-foreground">
                    In progress
                  </span>
                )}
              </div>
              <div className="p-6 flex-grow flex flex-col">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start justify-between mb-2"
                  >
                    <h3 className="text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent">
                      {project.title}
                    </h3>
                    <ExternalLink
                      className="h-4 w-4 text-muted-foreground flex-shrink-0 ml-2 transition-colors group-hover:text-accent"
                      strokeWidth={1.75}
                    />
                  </a>
                ) : (
                  <h3 className="text-xl font-semibold tracking-tight text-foreground mb-2">{project.title}</h3>
                )}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">{project.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
