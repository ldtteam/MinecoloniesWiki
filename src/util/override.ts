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
import { getSortedVersions, type VersionedResult } from './version';
import { deepPartial } from './zod';

export type Overrideable<V> = V & {
  overrides?: Array<
    DeepPartial<V> & {
      version: PartialCollectionEntry<'versions'>;
    }
  >;
};
export type OverrideableFieldGetter<V, T> = (value: Omit<V, 'overrides'>) => T | undefined;

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
