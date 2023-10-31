import { defineCollection, z } from 'astro:content';

export const versionsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    order: z.number(),
    supported: z.boolean().default(false)
  })
});
