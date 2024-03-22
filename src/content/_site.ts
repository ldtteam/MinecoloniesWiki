import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';

export const teamCollection = defineCollection({
  type: 'data',
  schema: z.array(
    z.object({
      username: z.string(),
      realName: z.string(),
      uuid: z.string().optional(),
      tagline: z.string().optional(),
      role: z.enum(['lead', 'dev', 'art', 'voice', 'web']),
      sub: z.array(z.string()),
      inactive: z.boolean(),
      joinedYear: z.number().optional()
    })
  )
});

export const sponsorCollection = defineCollection({
  type: 'data',
  schema: z.array(
    z.object({
      link: z.string(),
      image: z.string(),
      imageAlt: z.string()
    })
  )
});

export const supporterCollection = defineCollection({
  type: 'data',
  schema: z.array(
    z.object({
      id: z.string(),
      name: z.string()
    })
  )
});

export const eventCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    description: z.string(),
    start: z.number(),
    end: z.number()
  })
});
