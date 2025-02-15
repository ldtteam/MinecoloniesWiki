import { overrideSchema } from '@utils/override';
import { type ImageFunction, reference, z } from 'astro:content';

export const buildingSchema = (image: ImageFunction) =>
  overrideSchema(
    z.object({
      id: z.string(),
      name: z.string(),
      plural: z.string(),
      description: z.string(),
      icon: image(),
      workers: reference('workers').array().optional(),
      recipes: reference('recipes').array().optional(),
      singular: z.boolean().default(false),
      settings: z
        .array(
          z.object({
            name: z.string(),
            description: z.string(),
            options: z
              .array(
                z.object({
                  name: z.string(),
                  description: z.string()
                })
              )
              .optional()
          })
        )
        .optional()
    })
  );
