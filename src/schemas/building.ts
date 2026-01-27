import { z } from 'astro/zod';
import { reference } from 'astro:content';

import { overrideSchema } from '../util/override';

export const buildingSchema = overrideSchema(
  z.object({
    id: z.string(),
    name: z.string(),
    plural: z.string(),
    description: z.string(),
    workers: reference('workers').array().optional(),
    singular: z.boolean().default(false),
    blockhutname: z.string().optional().or(z.string().array().optional()),
    rotation: z.number().optional()
  })
);
