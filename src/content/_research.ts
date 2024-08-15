import { defineCollection, reference, z } from 'astro:content';
import { researchLoader } from 'src/loaders/research';
import { researchEffectLoader } from 'src/loaders/research_effect';
import { researchTreeLoader } from 'src/loaders/research_tree';

const researchTreeSchema = z.object({
  name: z.string()
});

export const researchTreeCollection = defineCollection({
  type: 'content_layer',
  loader: researchTreeLoader,
  schema: researchTreeSchema
});

const buildingRequirementSchema = z.object({
  type: z.literal('building'),
  building: reference('wiki'),
  level: z.number().default(1)
});

const itemRequirementSchema = z.object({
  type: z.literal('item'),
  items: z.string().array(),
  quantity: z.number().default(1)
});

const requirementSchema = z.discriminatedUnion('type', [buildingRequirementSchema, itemRequirementSchema]);

const researchSchema = z.object({
  tree: reference('research_tree'),
  parent: reference('research').optional(),
  name: z.string(),
  requirements: z.array(requirementSchema).optional(),
  effects: z.record(z.string(), z.number()).optional(),
  researchLevel: z.number()
});

export const researchCollection = defineCollection({
  type: 'content_layer',
  loader: researchLoader,
  schema: researchSchema
});

const regularResearchEffectSchema = z.object({
  type: z.literal('regular'),
  format: z.string(),
  levels: z.array(z.number()).optional()
});

const buildingResearchEffectSchema = z.object({
  type: z.literal('building'),
  building: reference('wiki')
});

const researchEffectSchema = z.discriminatedUnion('type', [regularResearchEffectSchema, buildingResearchEffectSchema]);

export const researchEffectCollection = defineCollection({
  type: 'content_layer',
  loader: researchEffectLoader,
  schema: researchEffectSchema
});

export type ResearchTree = { id: string } & z.infer<typeof researchTreeSchema>;
export type Research = { id: string } & z.infer<typeof researchSchema>;
export type ResearchRequirement = z.infer<typeof requirementSchema>;
export type ResearchRequirementBuilding = z.infer<typeof buildingRequirementSchema>;
export type ResearchRequirementItem = z.infer<typeof itemRequirementSchema>;
export type ResearchEffect = { id: string } & z.infer<typeof researchEffectSchema>;
export type ResearchEffectRegular = z.infer<typeof regularResearchEffectSchema>;
export type ResearchEffectBuilding = z.infer<typeof buildingResearchEffectSchema>;
