import { z } from 'astro/zod';

import { versionedObjectSchema } from './version-object';

export const citizenNamesDataSchema = z.object({
  parts: z.number().min(1).max(3),
  order: z.enum(['WESTERN', 'EASTERN']),
  male_firstname: z.array(z.string()),
  female_firstname: z.array(z.string()),
  surnames: z.array(z.string())
});

export const citizenNamesPackFileSchema = z.object({
  name: z.string(),
  filename: z.string(),
  credits: z.string(),
  data: citizenNamesDataSchema
});

export const citizenNamesPackSchema = z
  .object({
    name: z.string(),
    filename: z.string(),
    credits: z.string(),
    official: z.boolean(),
    packFormat: z.number(),
    data: citizenNamesDataSchema
  })
  .and(versionedObjectSchema);
