import type { CollectionEntry } from 'astro:content';
import { fromUnixTime, isBefore } from 'date-fns';

import { EventHeader } from './EventHeader';

interface SortedEvents {
  activeEvents: CollectionEntry<'events'>[];
  upcomingEvents: CollectionEntry<'events'>[];
  pastEvents: CollectionEntry<'events'>[];
}

interface EventListProps {
  events: CollectionEntry<'events'>[];
}

export function EventList({ events }: EventListProps) {
  const now = new Date();

  const sortedEvents = events.reduce<SortedEvents>(
    (prev, curr) => {
      const startDate = fromUnixTime(curr.data.start);
      const endDate = fromUnixTime(curr.data.end);

      if (isBefore(now, startDate)) {
        prev.upcomingEvents.push(curr);
      } else if (isBefore(now, endDate)) {
        prev.activeEvents.push(curr);
      } else {
        prev.pastEvents.push(curr);
      }
      return prev;
    },
    {
      activeEvents: [],
      upcomingEvents: [],
      pastEvents: []
    }
  );

  return (
    <>
      <div className="container py-3">
        <h1>Active Events</h1>
        <hr />
        {sortedEvents.activeEvents.map((event) => (
          <EventHeader
            key={`event_content_${event.slug}`}
            event={event}
            now={now}
            clickable
          />
        ))}
        {sortedEvents.activeEvents.length === 0 && (
          <p>No events are currently running.</p>
        )}
      </div>

      <div className="container py-3">
        <h1>Upcoming Events</h1>
        <hr />
        {sortedEvents.upcomingEvents.map((event) => (
          <EventHeader
            key={`event_content_${event.slug}`}
            event={event}
            now={now}
            relative="start"
            clickable
          />
        ))}
        {sortedEvents.upcomingEvents.length === 0 && (
          <p>No upcoming events are scheduled.</p>
        )}
      </div>

      <div className="container py-3">
        <h1>Past Events</h1>
        <hr />
        {sortedEvents.pastEvents.map((event) => (
          <EventHeader
            key={`event_content_${event.slug}`}
            event={event}
            now={now}
            clickable
          />
        ))}
        {sortedEvents.pastEvents.length === 0 && (
          <p>No past events are currently known.</p>
        )}
      </div>
    </>
  );
}
