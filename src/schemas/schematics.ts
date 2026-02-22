import { z } from 'astro/zod';
import { type CollectionEntry, type ImageFunction, reference } from 'astro:content';

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

export const FILTER_ID_PACK = 'pack';
export const FILTER_ID_NAME = 'name';
export const FILTER_ID_BUILDING = 'building';
export const FILTER_ID_SIZE_X = 'size_x';
export const FILTER_ID_SIZE_Y = 'size_y';
export const FILTER_ID_SIZE_Z = 'size_z';
export const FILTER_ID_INVISIBLE = 'invisible';

export type PackInfo = Omit<CollectionEntry<'schematics'>['data'], 'schematics'>;
export type BuildingInfo = { id: string; name: string };

export interface SchematicsResponse {
  success: boolean;
  warning?: string;
  packs: CollectionEntry<'schematics'>['data'][];
}
