import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

interface ProjectCarouselProps {
  media: string[];
  projectTitle: string;
}

export const ProjectCarousel = ({ media, projectTitle }: ProjectCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrentIndex(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="relative aspect-video bg-muted">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        setApi={setApi}
        className="w-full h-full"
      >
        <CarouselContent className="h-full">
          {media.map((image, index) => (
            <CarouselItem key={index} className="h-full">
              <img
                src={image}
                alt={`${projectTitle} - Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious 
          className="absolute left-2 top-1/2 -translate-y-1/2" 
          onClick={(e) => e.stopPropagation()}
        />
        <CarouselNext 
          className="absolute right-2 top-1/2 -translate-y-1/2"
          onClick={(e) => e.stopPropagation()}
        />
      </Carousel>
      
      {/* Navigation dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {media.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex 
                ? "bg-foreground w-4" 
                : "bg-foreground/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
