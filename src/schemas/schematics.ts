import { z } from 'astro/zod';
import { type CollectionEntry, type ImageFunction, reference } from 'astro:content';

import { versionedObjectSchema } from './version-object';

const schematicTypeDecorationBase = z.object({
  id: z.string(),
  type: z.literal('decoration'),
  invisible: z.boolean().default(false),
  path: z.string(),
  size: z.object({
    x: z.number(),
    y: z.number(),
    z: z.number()
  })
});

const schematicTypeBuildingBase = schematicTypeDecorationBase.extend({
  type: z.literal('building'),
  building: reference('buildings')
});

export const rawSchematicTypeDecoration = schematicTypeDecorationBase.extend({
  images: z.string().array()
});

export const rawSchematicTypeBuilding = schematicTypeBuildingBase.extend({
  images: z.string().array()
});

export const rawSchematicTypes = z.discriminatedUnion('type', [rawSchematicTypeDecoration, rawSchematicTypeBuilding]);

export const rawSchematicPackSchema = z.object({
  id: z.string(),
  displayName: z.string(),
  authors: z.string().array(),
  schematics: rawSchematicTypes.array()
});

const schematicTypeDecoration = (image: ImageFunction) =>
  schematicTypeDecorationBase.extend({ images: image().array() });

const schematicTypeBuilding = (image: ImageFunction) => schematicTypeBuildingBase.extend({ images: image().array() });

const schematicTypes = (image: ImageFunction) =>
  z.discriminatedUnion('type', [schematicTypeDecoration(image), schematicTypeBuilding(image)]);

export const schematicSchema = (image: ImageFunction) =>
  z
    .object({
      displayName: z.string(),
      authors: z.string().array(),
      schematics: schematicTypes(image).array()
    })
    .and(versionedObjectSchema);

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
