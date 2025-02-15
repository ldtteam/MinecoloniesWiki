/*
   Copyright 2024, Jaen - https://github.com/jaens
   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at
       http://www.apache.org/licenses/LICENSE-2.0
   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

import { z, type ZodDiscriminatedUnionOption } from 'astro/zod';

const RESOLVING = Symbol('mapOnSchema/resolving');

export function mapOnSchema<T extends z.ZodTypeAny, TResult extends z.ZodTypeAny>(
  schema: T,
  fn: (schema: z.ZodTypeAny) => TResult
): TResult;

/**
 * Applies {@link fn} to each element of the schema recursively, replacing every schema with its return value.
 * The rewriting is applied bottom-up (ie. {@link fn} will get called on "children" first).
 */
export function mapOnSchema(schema: z.ZodTypeAny, fn: (schema: z.ZodTypeAny) => z.ZodTypeAny): z.ZodTypeAny {
  // Cache results to support recursive schemas
  const results = new Map<z.ZodTypeAny, z.ZodTypeAny | typeof RESOLVING>();

  function mapElement(s: z.ZodTypeAny) {
    const value = results.get(s);
    if (value === RESOLVING) {
      throw new Error('Recursive schema access detected');
    } else if (value !== undefined) {
      return value;
    }

    results.set(s, RESOLVING);
    const result = mapOnSchema(s, fn);
    results.set(s, result);
    return result;
  }

  function mapInner() {
    if (schema instanceof z.ZodObject) {
      const newShape: Record<string, z.ZodTypeAny> = {};
      for (const [key, value] of Object.entries(schema.shape)) {
        newShape[key] = mapElement(value as z.ZodTypeAny);
      }

      return new z.ZodObject({
        ...schema._def,
        shape: () => newShape
      });
    } else if (schema instanceof z.ZodArray) {
      return new z.ZodArray({
        ...schema._def,
        type: mapElement(schema._def.type)
      });
    } else if (schema instanceof z.ZodMap) {
      return new z.ZodMap({
        ...schema._def,
        keyType: mapElement(schema._def.keyType),
        valueType: mapElement(schema._def.valueType)
      });
    } else if (schema instanceof z.ZodSet) {
      return new z.ZodSet({
        ...schema._def,
        valueType: mapElement(schema._def.valueType)
      });
    } else if (schema instanceof z.ZodOptional) {
      return new z.ZodOptional({
        ...schema._def,
        innerType: mapElement(schema._def.innerType)
      });
    } else if (schema instanceof z.ZodNullable) {
      return new z.ZodNullable({
        ...schema._def,
        innerType: mapElement(schema._def.innerType)
      });
    } else if (schema instanceof z.ZodDefault) {
      return new z.ZodDefault({
        ...schema._def,
        innerType: mapElement(schema._def.innerType)
      });
    } else if (schema instanceof z.ZodReadonly) {
      return new z.ZodReadonly({
        ...schema._def,
        innerType: mapElement(schema._def.innerType)
      });
    } else if (schema instanceof z.ZodLazy) {
      return new z.ZodLazy({
        ...schema._def,
        // NB: This leaks `fn` into the schema, but there is no other way to support recursive schemas
        getter: () => mapElement(schema._def.getter())
      });
    } else if (schema instanceof z.ZodBranded) {
      return new z.ZodBranded({
        ...schema._def,
        type: mapElement(schema._def.type)
      });
    } else if (schema instanceof z.ZodEffects) {
      return new z.ZodEffects({
        ...schema._def,
        schema: mapElement(schema._def.schema)
      });
    } else if (schema instanceof z.ZodFunction) {
      return new z.ZodFunction({
        ...schema._def,
        args: schema._def.args.map((arg: z.ZodTypeAny) => mapElement(arg)),
        returns: mapElement(schema._def.returns)
      });
    } else if (schema instanceof z.ZodPromise) {
      return new z.ZodPromise({
        ...schema._def,
        type: mapElement(schema._def.type)
      });
    } else if (schema instanceof z.ZodCatch) {
      return new z.ZodCatch({
        ...schema._def,
        innerType: mapElement(schema._def.innerType)
      });
    } else if (schema instanceof z.ZodTuple) {
      return new z.ZodTuple({
        ...schema._def,
        items: schema._def.items.map((item: z.ZodTypeAny) => mapElement(item)),
        rest: schema._def.rest && mapElement(schema._def.rest)
      });
    } else if (schema instanceof z.ZodDiscriminatedUnion) {
      const optionsMap = new Map(
        [...schema.optionsMap.entries()].map(([k, v]) => [k, mapElement(v) as ZodDiscriminatedUnionOption<string>])
      );

      return new z.ZodDiscriminatedUnion({
        ...schema._def,
        options: [...optionsMap.values()],
        optionsMap: optionsMap
      });
    } else if (schema instanceof z.ZodUnion) {
      return new z.ZodUnion({
        ...schema._def,
        options: schema._def.options.map((option: z.ZodTypeAny) => mapElement(option))
      });
    } else if (schema instanceof z.ZodIntersection) {
      return new z.ZodIntersection({
        ...schema._def,
        right: mapElement(schema._def.right),
        left: mapElement(schema._def.left)
      });
    } else if (schema instanceof z.ZodRecord) {
      return new z.ZodRecord({
        ...schema._def,
        keyType: mapElement(schema._def.keyType),
        valueType: mapElement(schema._def.valueType)
      });
    } else {
      return schema;
    }
  }

  return fn(mapInner());
}

export function deepPartial<T extends z.ZodTypeAny>(schema: T): T {
  return mapOnSchema(schema, (s) => (s instanceof z.ZodObject ? s.partial() : s)) as T;
}

/** Make all object schemas "strict" (ie. fail on unknown keys), except if they are marked as `.passthrough()` */
export function deepStrict<T extends z.ZodTypeAny>(schema: T): T {
  return mapOnSchema(schema, (s) =>
    s instanceof z.ZodObject && s._def.unknownKeys !== 'passthrough' ? s.strict() : s
  ) as T;
}

export function deepStrictAll<T extends z.ZodTypeAny>(schema: T): T {
  return mapOnSchema(schema, (s) => (s instanceof z.ZodObject ? s.strict() : s)) as T;
}
