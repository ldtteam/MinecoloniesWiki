import { z, type ZodObject } from 'astro/zod';
import { type CollectionEntry, getEntry, reference } from 'astro:content';

import type { DeepPartial, PartialCollectionEntry } from './util';
import { getSortedVersions, type VersionedResult } from './version';

function deepPartialValue(value: z.ZodTypeAny): z.ZodTypeAny {
  if (value instanceof z.ZodObject) {
    return deepPartial(value).optional();
  } else if (value instanceof z.ZodOptional && value.def.innerType instanceof z.ZodObject) {
    return deepPartial(value.def.innerType).optional();
  }
  return value.optional();
}

function deepPartial(schema: z.ZodObject<z.ZodRawShape>): z.ZodObject<z.ZodRawShape> {
  const partialShape: Record<string, z.ZodTypeAny> = {};
  for (const [key, value] of Object.entries(schema.shape) as [string, z.ZodTypeAny][]) {
    partialShape[key] = deepPartialValue(value);
  }
  return z.object(partialShape);
}

export type Overrideable<V> = V & {
  overrides?: Array<
    DeepPartial<V> & {
      version: PartialCollectionEntry<'versions'>;
    }
  >;
};
export type OverrideableFieldGetter<V, T> = (value: Omit<V, 'overrides'>) => T | undefined;

export function overrideSchema<Shape extends z.core.$ZodShape, Config extends z.core.$ZodObjectConfig>(
  schema: ZodObject<Shape, Config>
) {
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

export async function getOverrideValues<V, O extends Overrideable<V>, T>(
  value: O,
  fieldGetter: OverrideableFieldGetter<O, T>,
  defaultValue: T
): Promise<VersionedResult<T>> {
  const versions = await getSortedVersions();
  const values = new Map<T, CollectionEntry<'versions'>[]>();
  let highestValue = fieldGetter(value) ?? defaultValue;
  for (const version of versions) {
    const versionedValue = await getOverrideValue(value, fieldGetter, version);
    if (versionedValue === undefined) {
      continue;
    }

    if (!values.has(versionedValue)) {
      values.set(versionedValue, []);
    }
    values.get(versionedValue)?.push(version);
    highestValue = versionedValue;
  }
  return values.entries().reduce<VersionedResult<T>>(
    (prev, [value, versions]) => {
      prev.values.push({
        value,
        versions
      });
      return prev;
    },
    { highestValue, values: [] }
  );
}

export async function getOverrideValue<V, O extends Overrideable<V>, T>(
  value: O,
  fieldGetter: OverrideableFieldGetter<O, T>,
  version: CollectionEntry<'versions'>
): Promise<T | undefined> {
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
