<script lang="ts">
  import type { CollectionEntry } from 'astro:content';
  import { fromUnixTime, isBefore } from 'date-fns';
  import EventHeader from './EventHeader.svelte';

  export let events: CollectionEntry<'events'>[];

  interface SortedEvents {
    activeEvents: CollectionEntry<'events'>[];
    upcomingEvents: CollectionEntry<'events'>[];
    pastEvents: CollectionEntry<'events'>[];
  }

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
</script>

<div class="container py-3">
  <h1>Active Events</h1>
  <hr />
  {#each sortedEvents.activeEvents as event}
    <EventHeader {event} {now} clickable />
  {/each}
  {#if sortedEvents.activeEvents.length === 0}
    <p>No events are currently running.</p>
  {/if}
</div>

<div class="container py-3">
  <h1>Upcoming Events</h1>
  <hr />
  {#each sortedEvents.upcomingEvents as event}
    <EventHeader {event} {now} relative="start" clickable />
  {/each}
  {#if sortedEvents.upcomingEvents.length === 0}
    <p>No upcoming events are scheduled.</p>
  {/if}
</div>

<div class="container py-3">
  <h1>Past Events</h1>
  <hr />
  {#each sortedEvents.pastEvents as event}
    <EventHeader {event} {now} clickable />
  {/each}
  {#if sortedEvents.pastEvents.length === 0}
    <p>No past events are currently known.</p>
  {/if}
</div>
