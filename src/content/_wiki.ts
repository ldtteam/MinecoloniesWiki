import { z } from 'astro/zod';
import { defineCollection, type ImageFunction, reference } from 'astro:content';

const regularPage = (image: ImageFunction) =>
  z.object({
    type: z.literal('page'),
    title: z.string(),
    image: image().optional(),
    excerpt: z.string().optional()
  });

const sectionGroupPage = (image: ImageFunction) =>
  z.object({
    type: z.literal('section-group'),
    title: z.string(),
    excerpt: z.string().optional(),
    image: image().optional(),
    initialSection: reference('wiki')
  });

const sectionPage = (image: ImageFunction) =>
  z.object({
    type: z.literal('section'),
    title: z.string(),
    excerpt: z.string().optional(),
    image: image().optional(),
    group: reference('wiki')
  });

const itemPage = z.object({
  type: z.literal('item'),
  item: reference('items'),
  infobox: z
    .object({
      show: z.boolean().optional()
    })
    .optional()
});

const itemCombinedPage = z.object({
  type: z.literal('item-combined'),
  title: z.string(),
  excerpt: z.string().optional(),
  items: z.array(reference('items')),
  infobox: z
    .object({
      show: z.boolean().optional(),
      cols: z.number().optional()
    })
    .optional()
});

const buildingPage = z.object({
  type: z.literal('building'),
  building: reference('buildings')
});

export const wikiCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.discriminatedUnion('type', [
      regularPage(image),
      sectionGroupPage(image),
      sectionPage(image),
      itemPage,
      itemCombinedPage,
      buildingPage
    ])
});

export const wikiCategories = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    order: z.number()
  })
});

const buildingInfo = (image: ImageFunction) =>
  z.object({
    name: z.string(),
    plural: z.string(),
    description: z.string(),
    icon: image(),
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
  });

export const buildingsCollection = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    buildingInfo(image).and(
      z.object({
        overrides: z
          .array(
            buildingInfo(image)
              .partial()
              .and(
                z.object({
                  version: reference('versions')
                })
              )
          )
          .optional()
      })
    )
});

const workerInfo = (image: ImageFunction) =>
  z.object({
    name: z.string(),
    plural: z.string(),
    description: z.string(),
    icon: image(),
    type: z.enum(['animals', 'crafter', 'gatherer', 'guard', 'other']),
    traits: z.object({
      primary: z
        .object({
          name: z.string(),
          effect: z.string()
        })
        .optional(),
      secondary: z
        .object({
          name: z.string(),
          effect: z.string()
        })
        .optional()
    }),
    primaryBuilding: reference('buildings')
  });

export const workersCollection = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    workerInfo(image).and(
      z.object({
        overrides: z
          .array(
            workerInfo(image)
              .partial()
              .and(
                z.object({
                  version: reference('versions')
                })
              )
          )
          .optional()
      })
    )
});

export const itemsCollection = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      description: z.string(),
      icons: z.array(image())
    })
});

const buildingCraftingCondition = z.object({
  type: z.literal('building'),
  building: reference('buildings'),
  level: z.number().optional()
});

const researchCraftingCondition = z.object({
  type: z.literal('research'),
  research: reference('research')
});

export const tagsCollection = defineCollection({
  type: 'data',
  schema: z.array(z.string())
});

const craftingConditions = z.discriminatedUnion('type', [buildingCraftingCondition, researchCraftingCondition]);
const itemOrArray = z.undefined().or(z.null()).or(z.string()).or(z.array(z.string()));

export type RecipeItemEntry = Zod.infer<typeof itemOrArray>;

const shapedRecipe = z.object({
  type: z.literal('shaped'),
  row1: z.object({
    item1: itemOrArray,
    item2: itemOrArray,
    item3: itemOrArray
  }),
  row2: z.object({
    item1: itemOrArray,
    item2: itemOrArray,
    item3: itemOrArray
  }),
  row3: z.object({
    item1: itemOrArray,
    item2: itemOrArray,
    item3: itemOrArray
  })
});

const customRecipe = z.object({
  type: z.literal('custom'),
  items: z
    .array(
      z.object({
        item: itemOrArray,
        amount: z.number().default(1)
      })
    )
    .max(9)
});

export const recipesCollection = defineCollection({
  type: 'data',
  schema: z.discriminatedUnion('type', [shapedRecipe, customRecipe]).and(
    z.object({
      output: z.string(),
      amount: z.number().default(1),
      conditions: z.array(craftingConditions).default([])
    })
  )
});

export const citizenNamesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    filename: z.string(),
    credits: z.string(),
    data: z.object({
      parts: z.number().min(1).max(3),
      order: z.enum(['WESTERN', 'EASTERN']),
      male_firstname: z.array(z.string()),
      female_firstname: z.array(z.string()),
      surnames: z.array(z.string())
    })
  })
});

export const metaCollection = defineCollection({
  type: 'data',
  schema: z.array(
    z.object({
      key: z.string(),
      value: z.string()
    })
  )
});
