import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ProjectCarouselProps {
  images: string[];
  title: string;
}

export const ProjectCarousel = ({ images, title }: ProjectCarouselProps) => {
  return (
    <Carousel className="w-full h-full" onClick={(e) => e.stopPropagation()}>
      <CarouselContent className="-ml-0 h-full">
        {images.map((image, index) => (
          <CarouselItem key={index} className="pl-0 h-full basis-full">
            <div className="w-full h-full">
              <img
                src={image}
                alt={`${title} - Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious 
        className="left-2" 
        onClick={(e) => e.stopPropagation()} 
      />
      <CarouselNext 
        className="right-2" 
        onClick={(e) => e.stopPropagation()} 
      />
      
      {/* Dot indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {images.map((_, index) => (
          <div
            key={index}
            className="w-1.5 h-1.5 rounded-full bg-background/60"
          />
        ))}
      </div>
    </Carousel>
  );
};
