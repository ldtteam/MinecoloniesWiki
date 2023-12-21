import { defineCollection, reference, z } from 'astro:content';

const requirements = z.discriminatedUnion('type', [
  z.object({
    type: z.literal('building'),
    building: reference('buildings'),
    level: z.number().default(1)
  }),
  z.object({
    type: z.literal('item'),
    items: z.string().array(),
    quantity: z.number().default(1)
  })
]);

export const researchTreeCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string()
  })
});

export const researchEffectCollection = defineCollection({
  type: 'data',
  schema: z.object({
    format: z.string(),
    levels: z.array(z.number()).optional()
  })
});

export const researchCollection = defineCollection({
  type: 'data',
  schema: z.object({
    tree: reference('research_tree'),
    parent: reference('research').optional(),
    name: z.string(),
    requirements: z.array(requirements).optional(),
    effects: z.record(z.string(), z.number()).optional(),
    researchLevel: z.number()
  })
});
