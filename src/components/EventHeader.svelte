<script lang="ts">
  import type { EventRelative } from '@utils/util';
  import type { CollectionEntry } from 'astro:content';
  import { format, formatDistance, fromUnixTime } from 'date-fns';

  export let event: CollectionEntry<'events'>;
  export let now: Date;
  export let clickable: boolean = false;
  export let relative: EventRelative = undefined;

  const startDate = fromUnixTime(event.data.start);
  const endDate = fromUnixTime(event.data.end);
</script>

{#if clickable}
  <a href={`/events/${event.slug}`}>
    <h2>{event.data.name}</h2>
  </a>
{:else}
  <h2>{event.data.name}</h2>
{/if}
<h5>{event.data.description}</h5>

{#if relative === 'start'}
  <p>
    {`Starts ${formatDistance(startDate, now, {
      addSuffix: true
    })} - Ends at ${format(endDate, 'P')}`}
  </p>
{:else if relative === 'end'}
  <p>
    {`Started at ${format(startDate, 'P')} - Ends ${formatDistance(endDate, now, {
      addSuffix: true
    })}`}
  </p>
{:else}
  <p>{`Started ${format(startDate, 'P')} - Ended ${format(endDate, 'P')}`}</p>
{/if}
