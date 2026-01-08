import { overrideSchema } from '@utils/override';
import { reference, z } from 'astro:content';

export const buildingSchema = overrideSchema(
  z.object({
    id: z.string(),
    name: z.string(),
    plural: z.string(),
    description: z.string(),
    workers: reference('workers').array().optional(),
    recipes: z.string().array().optional(),
    singular: z.boolean().default(false),
    rotation: z.number().optional()
  })
);
