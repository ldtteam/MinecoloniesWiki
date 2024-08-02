import { defineCollection, reference, z } from 'astro:content';

const buildingRequirement = z.object({
  type: z.literal('building'),
  building: reference('wiki'),
  level: z.number().default(1)
});

const itemRequirement = z.object({
  type: z.literal('item'),
  items: z.string().array(),
  quantity: z.number().default(1)
});

const requirements = z.discriminatedUnion('type', [buildingRequirement, itemRequirement]);

export type ResearchRequirement = z.infer<typeof requirements>;
export type ResearchRequirementBuilding = z.infer<typeof buildingRequirement>;
export type ResearchRequirementItem = z.infer<typeof itemRequirement>;

export const researchTreeCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string()
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

const regularResearchEffect = z.object({
  type: z.literal('regular'),
  format: z.string(),
  levels: z.array(z.number()).optional()
});

const buildingResearchEffect = z.object({
  type: z.literal('building'),
  building: reference('wiki')
});

const researchEffects = z.discriminatedUnion('type', [regularResearchEffect, buildingResearchEffect]);

export const researchEffectCollection = defineCollection({
  type: 'data',
  schema: researchEffects
});

export type ResearchEffect = z.infer<typeof researchEffects>;
export type ResearchEffectRegular = z.infer<typeof regularResearchEffect>;
export type ResearchEffectBuilding = z.infer<typeof buildingResearchEffect>;
