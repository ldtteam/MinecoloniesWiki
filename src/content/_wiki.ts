import { z } from 'astro/zod';
import { reference, defineCollection } from 'astro:content';

const regularPage = z.object({
  type: z.literal('page'),
  title: z.string()
});

const buildingPage = z.object({
  type: z.literal('building'),
  building: reference('buildings')
});

const workerPage = z.object({
  type: z.literal('worker'),
  worker: reference('workers')
});

export const wikiCollection = defineCollection({
  type: 'content',
  schema: z.discriminatedUnion('type', [regularPage, buildingPage, workerPage])
});

export const wikiCategories = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    order: z.number()
  })
});

export const buildingsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    plural: z.string(),
    workers: reference('workers').array().optional(),
    recipes: z.array(z.string()).optional(),
    settings: z
      .array(
        z.object({
          name: z.string(),
          description: z.string(),
          options: z
            .array(
              z.object({
                name: z.string(),
                description: z.string()
              })
            )
            .optional()
        })
      )
      .optional()
  })
});

export const workersCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    plural: z.string(),
    type: z.enum(['animals', 'crafter', 'gatherer', 'guard', 'other']),
    traits: z.object({
      primary: z.string().optional(),
      secondary: z.string().optional()
    }),
    effects: z.object({
      primary: z.string().optional(),
      secondary: z.string().optional()
    }),
    buildings: reference('buildings').array().optional()
  })
});

export const recipesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    recipes: z.array(
      z.object({
        firstRow: z.object({
          firstItem: z.string().or(z.array(z.string())).optional(),
          secondItem: z.string().or(z.array(z.string())).optional(),
          thirdItem: z.string().or(z.array(z.string())).optional()
        }),
        secondRow: z.object({
          firstItem: z.string().or(z.array(z.string())).optional(),
          secondItem: z.string().or(z.array(z.string())).optional(),
          thirdItem: z.string().or(z.array(z.string()).optional())
        }),
        thirdRow: z.object({
          firstItem: z.string().or(z.array(z.string())).optional(),
          secondItem: z.string().or(z.array(z.string())).optional(),
          thirdItem: z.string().or(z.array(z.string())).optional()
        }),
        product: z.string(),
        amount: z.number().default(1)
      })
    )
  })
});
