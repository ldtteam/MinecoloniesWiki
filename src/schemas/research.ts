import { reference, z } from 'astro:content';

import { versionedObjectSchema } from './version';

export const researchTreeSchema = z
  .object({
    name: z.string(),
    sortOrder: z.number()
  })
  .and(versionedObjectSchema);

export const researchSchema = z
  .object({
    tree: reference('research_tree'),
    parent: reference('research').optional(),
    name: z.string(),
    subtitle: z.string().optional(),
    researchLevel: z.number(),
    sortOrder: z.number().default(1),
    requirements: z
      .discriminatedUnion('type', [
        z.object({
          type: z.literal('building'),
          building: reference('buildings'),
          single: z.boolean(),
          level: z.number().default(1)
        }),
        z.object({
          type: z.literal('buildings_alternate'),
          buildings: reference('buildings').array(),
          level: z.number().default(1)
        })
      ])
      .array(),
    costs: z
      .discriminatedUnion('type', [
        z.object({
          type: z.literal('item'),
          items: reference('items').array(),
          quantity: z.number().default(1)
        }),
        z.object({
          type: z.literal('item_tag'),
          name: z.string(),
          quantity: z.number().default(1)
        })
      ])
      .array(),
    effects: z.array(
      z.object({
        effect: reference('research_effect'),
        level: z.number()
      })
    )
  })
  .and(versionedObjectSchema);

export const researchEffectsSchema = z
  .discriminatedUnion('type', [
    z.object({
      type: z.literal('regular'),
      format: z.string(),
      levels: z.array(z.number())
    }),
    z.object({
      type: z.literal('building'),
      building: reference('buildings')
    })
  ])
  .and(versionedObjectSchema);
