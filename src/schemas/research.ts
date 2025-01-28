import { reference, z } from 'astro:content';

export const researchTreeSchema = z.object({
  id: z.string(),
  name: z.string(),
  sortOrder: z.number()
});

export const researchSchema = z.object({
  id: z.string(),
  tree: reference('research_tree'),
  parent: reference('research').optional(),
  name: z.string(),
  requirements: z
    .discriminatedUnion('type', [
      z.object({
        type: z.literal('building'),
        building: reference('buildings'),
        level: z.number().default(1)
      }),
      z.object({
        type: z.literal('item'),
        items: z.string().array(),
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
      level: z.number(),
      effect: reference('research_effect')
    })
  ),
  researchLevel: z.number()
});

export const researchEffectsSchema = z
  .object({
    id: z.string()
  })
  .and(
    z.discriminatedUnion('type', [
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
  );
