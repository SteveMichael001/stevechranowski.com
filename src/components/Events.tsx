import { events } from "@/data/siteData";
import { format } from "date-fns";
import { Calendar, MapPin, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Events = () => {
  const upcomingEvents = events.filter(e => !e.past);
  const pastEvents = events.filter(e => e.past);
  
  // Group past events into blocks of 3
  const pastEventGroups = [];
  for (let i = 0; i < pastEvents.length; i += 3) {
    pastEventGroups.push(pastEvents.slice(i, i + 3));
  }

  const EventCard = ({ event, isPast = false }: { event: typeof events[0], isPast?: boolean }) => (
    <div 
      className={`bg-card border border-border rounded-lg p-4 hover:border-accent/50 transition-colors ${isPast ? 'opacity-60' : ''}`}
    >
      <div className="flex flex-col gap-3">
        <h4 className="text-base font-normal text-foreground">
          {event.title}
        </h4>
        <div className="flex flex-col gap-2 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="h-3 w-3" />
            <time>{format(new Date(event.date), isPast ? 'MMM d, yyyy' : 'MMM d, yyyy · h:mm a')}</time>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-3 w-3" />
            <span>{event.location}</span>
          </div>
        </div>
        {event.link && !isPast && (
          <a
            href={event.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-accent hover:underline text-xs"
          >
            <ExternalLink className="h-3 w-3" />
            Details
          </a>
        )}
      </div>
    </div>
  );

  return (
    <section id="events" className="py-16 px-4">
      <div className="w-full max-w-[1100px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-normal mb-2 text-foreground">
          Events
        </h2>
        <p className="text-muted-foreground mb-8">
          Where to find me. Past and upcoming.
        </p>

        {upcomingEvents.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 text-foreground">Upcoming</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {upcomingEvents.slice(0, 3).map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        )}

        {pastEventGroups.length > 0 && (
          <div>
            <h3 className="text-lg font-medium mb-4 text-foreground">Past</h3>
            <Carousel className="w-full">
              <CarouselContent>
                {pastEventGroups.map((group, groupIndex) => (
                  <CarouselItem key={groupIndex}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {group.map((event) => (
                        <EventCard key={event.id} event={event} isPast />
                      ))}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {pastEventGroups.length > 1 && (
                <>
                  <CarouselPrevious className="left-0 -translate-x-12" />
                  <CarouselNext className="right-0 translate-x-12" />
                </>
              )}
            </Carousel>
          </div>
        )}
      </div>
    </section>
  );
};
