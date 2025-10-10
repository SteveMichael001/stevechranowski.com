import { events } from "@/data/siteData";
import { format } from "date-fns";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

export const Events = () => {
  const upcomingEvents = events.filter(e => !e.past);
  const pastEvents = events.filter(e => e.past);

  return (
    <section id="events" className="py-20 px-4">
      <div className="w-full max-w-[1100px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-normal mb-2 text-foreground">
          Events
        </h2>
        <p className="text-muted-foreground mb-12">
          Where to find me. Past and upcoming.
        </p>

        {upcomingEvents.length > 0 && (
          <div className="mb-12">
            <h3 className="text-xl font-medium mb-6 text-foreground">Upcoming</h3>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div 
                  key={event.id}
                  className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-grow">
                      <h4 className="text-lg font-normal text-foreground mb-2">
                        {event.title}
                      </h4>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <time>{format(new Date(event.date), 'MMM d, yyyy · h:mm a')}</time>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                    {event.link && (
                      <a
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-accent hover:underline text-sm"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Details
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {pastEvents.length > 0 && (
          <div>
            <h3 className="text-xl font-medium mb-6 text-foreground">Past</h3>
            <div className="space-y-4 opacity-60">
              {pastEvents.map((event) => (
                <div 
                  key={event.id}
                  className="bg-card border border-border rounded-lg p-6"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-grow">
                      <h4 className="text-lg font-normal text-foreground mb-2">
                        {event.title}
                      </h4>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <time>{format(new Date(event.date), 'MMM d, yyyy')}</time>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
