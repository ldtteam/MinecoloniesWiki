import { z } from 'astro/zod';
import { reference } from 'astro:content';

import { versionedObjectSchema } from './version-object';

const requirementSchema = z.discriminatedUnion('type', [
  z.object({
    type: z.literal('block'),
    item: z.string(),
    minAmount: z.number().default(1),
    note: z.string().optional()
  }),
  z.object({ type: z.literal('tag'), name: z.string(), note: z.string().optional() }),
  z.object({ type: z.literal('custom'), text: z.string() })
]);

const requirementsSchema = z.object({
  mandatory: z.array(requirementSchema).optional(),
  optional: z.array(requirementSchema).optional()
});

export const buildingBaseSchema = z.object({
  id: z.string(),
  name: z.string(),
  plural: z.string(),
  description: z.string(),
  workers: reference('workers').array().optional(),
  singular: z.boolean().default(false),
  blockhutname: z.string().optional().or(z.string().array().optional()),
  rotation: z.number().optional(),
  requirements: requirementsSchema.optional()
});

export const buildingSchema = buildingBaseSchema.and(versionedObjectSchema);

export type BuildingRequirements = z.infer<typeof requirementSchema>;
