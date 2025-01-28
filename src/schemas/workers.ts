import { type ImageFunction, reference, z } from 'astro:content';

const workerInfo = (image: ImageFunction) =>
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

export const workerSchema = (image: ImageFunction) =>
  workerInfo(image).extend({
    overrides: z
      .lazy(() =>
        z.array(
          workerInfo(image)
            .partial()
            .and(
              z.object({
                version: reference('versions')
              })
            )
        )
      )
      .optional()
  });
