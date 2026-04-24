import { z } from 'astro/zod';
import { type ImageFunction, reference } from 'astro:content';

import { versionedObjectSchema } from './version-object';

export const workerBaseSchema = (image: ImageFunction) =>
  z.object({
    name: z.string(),
    plural: z.string(),
    description: z.string(),
    icon: image(),
    type: z.enum(['animals', 'crafter', 'gatherer', 'guard', 'other']),
    traits: z.object({
      primary: z
        .object({
          name: z.string(),
          effect: z.string()
        })
        .optional(),
      secondary: z
        .object({
          name: z.string(),
          effect: z.string()
        })
        .optional()
    }),
    primaryBuilding: reference('buildings')
  });

export const workerSchema = (image: ImageFunction) => workerBaseSchema(image).and(versionedObjectSchema);
