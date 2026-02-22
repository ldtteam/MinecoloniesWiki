import { z } from 'astro/zod';
import { type ImageFunction, reference } from 'astro:content';

import { overrideSchema } from '../util/override';

export const workerSchema = (image: ImageFunction) =>
  overrideSchema(
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
    })
  );
