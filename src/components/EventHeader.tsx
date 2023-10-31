import type { CollectionEntry } from 'astro:content';
import { format, formatDistance, fromUnixTime } from 'date-fns';

export interface EventHeaderProps {
  event: CollectionEntry<'events'>;
  now: Date;
  clickable?: boolean;
  relative?: 'start' | 'end';
}

export function EventHeader({
  event,
  now,
  clickable = false,
  relative
}: EventHeaderProps) {
  const startDate = fromUnixTime(event.data.start);
  const endDate = fromUnixTime(event.data.end);

  return (
    <>
      {clickable ? (
        <a href={`/events/${event.slug}`}>
          <h2>{event.data.name}</h2>
        </a>
      ) : (
        <h2>{event.data.name}</h2>
      )}
      <h5>{event.data.description}</h5>

      {relative === 'start' && (
        <p>{`Starts ${formatDistance(startDate, now, {
          addSuffix: true
        })} - Ends at ${format(endDate, 'P')}`}</p>
      )}

      {relative === 'end' && (
        <p>{`Started at ${format(startDate, 'P')} - Ends ${formatDistance(
          endDate,
          now,
          {
            addSuffix: true
          }
        )}`}</p>
      )}

      {relative === undefined && (
        <p>{`Started ${format(startDate, 'P')} - Ended ${format(
          endDate,
          'P'
        )}`}</p>
      )}
    </>
  );
}
