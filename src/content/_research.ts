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

const regularResearchEffect = z.object({
  type: z.literal('regular'),
  format: z.string(),
  levels: z.array(z.number()).optional()
});

const buildingResearchEffect = z.object({
  type: z.literal('building'),
  building: reference('buildings')
});

export const researchEffectCollection = defineCollection({
  type: 'data',
  schema: z.discriminatedUnion('type', [regularResearchEffect, buildingResearchEffect])
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
