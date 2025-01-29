import type {
  objectInputType,
  objectOutputType,
  UnknownKeysParam,
  ZodObject,
  ZodRawShape,
  ZodTypeAny
} from 'astro/zod';
import { type CollectionEntry, getEntry, reference, z } from 'astro:content';

import type { DeepPartial, PartialCollectionEntry } from './util';
import { deepPartial } from './zod';

export type Overrideable<V> = V & {
  overrides?: Array<
    DeepPartial<V> & {
      version: PartialCollectionEntry<'versions'>;
    }
  >;
};
export type OverrideableFieldGetter<V> = (value: Omit<V, 'overrides'>) => string | undefined;

export function overrideSchema<
  T extends ZodRawShape,
  UnknownKeys extends UnknownKeysParam = UnknownKeysParam,
  Catchall extends ZodTypeAny = ZodTypeAny,
  Output = objectOutputType<T, Catchall, UnknownKeys>,
  Input = objectInputType<T, Catchall, UnknownKeys>
>(schema: ZodObject<T, UnknownKeys, Catchall, Output, Input>) {
  return schema.extend({
    overrides: z
      .array(
        deepPartial(schema).extend({
          version: reference('versions')
        })
      )
      .optional()
  });
}

export async function getOverrideValue<V, O extends Overrideable<V>>(
  value: O,
  fieldGetter: OverrideableFieldGetter<O>,
  version: CollectionEntry<'versions'>
): Promise<string | undefined> {
  let targetValue = fieldGetter(value);
  if (value.overrides) {
    for (const override of value.overrides) {
      const fullVersion = await getEntry(override.version);
      if (version.data.order >= fullVersion.data.order) {
        const newValue = fieldGetter(override as Omit<O, 'overrides'>);
        if (newValue !== undefined) {
          targetValue = newValue;
        }
      }
    }
  }
  return targetValue;
}
