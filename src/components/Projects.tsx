import { projects } from "@/data/siteData";
import { ExternalLink } from "lucide-react";
import { ProjectCarousel } from "./ProjectCarousel";

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="w-full max-w-[1100px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-normal mb-2 text-foreground">
          Projects
        </h2>
        <p className="text-muted-foreground mb-12">
          Things I'm building. Experiments worth sharing.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <article className="bg-card border border-border rounded-lg overflow-hidden hover:border-muted-foreground/50 transition-all h-full flex flex-col">
                <div className="aspect-square bg-muted relative overflow-hidden">
                  {project.images && project.images.length > 0 ? (
                    <ProjectCarousel images={project.images} title={project.title} />
                  ) : project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                      <span className="text-sm">Project image</span>
                    </div>
                  )}
                  {project.featured && (
                    <div className="absolute top-3 right-3 bg-foreground text-background text-xs px-2 py-1 rounded z-10">
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-normal text-foreground group-hover:text-muted-foreground group-hover:underline transition-colors">
                      {project.title}
                    </h3>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-muted-foreground transition-colors flex-shrink-0 ml-2" />
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                    {project.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
