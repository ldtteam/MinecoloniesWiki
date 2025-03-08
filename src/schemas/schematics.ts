import { type ImageFunction, reference, z } from 'astro:content';

const schematicTypeDecoration = (image: ImageFunction) =>
  z.object({
    id: z.string(),
    type: z.literal('decoration'),
    invisible: z.boolean().default(false),
    path: z.string(),
    size: z.object({
      x: z.number(),
      y: z.number(),
      z: z.number()
    }),
    images: image().array()
  });

const schematicTypeBuilding = (image: ImageFunction) =>
  schematicTypeDecoration(image).extend({
    type: z.literal('building'),
    building: reference('buildings')
  });

const schematicTypes = (image: ImageFunction) =>
  z.discriminatedUnion('type', [schematicTypeDecoration(image), schematicTypeBuilding(image)]);

export const schematicSchema = (image: ImageFunction) =>
  z.object({
    id: z.string(),
    displayName: z.string(),
    authors: z.string().array(),
    schematics: schematicTypes(image).array()
  });
