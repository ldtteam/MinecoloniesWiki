import { file, glob } from 'astro/loaders';
import { defineCollection, type ImageFunction, reference, z } from 'astro:content';

import { researchLoader, researchSchema } from './loaders/research-loader';

// |------|
// | SITE |
// |------|

const teamCollection = defineCollection({
  loader: file('./src/data/site/team.yaml'),
  schema: z.object({
    realName: z.string(),
    uuid: z.string().optional(),
    tagline: z.string().optional(),
    role: z.enum(['lead', 'dev', 'art', 'voice', 'web']),
    sub: z.array(z.string()),
    inactive: z.boolean(),
    joinedYear: z.number().optional()
  })
});

const sponsorCollection = defineCollection({
  loader: file('./src/data/site/sponsors.yaml'),
  schema: z.object({
    link: z.string(),
    image: z.string(),
    imageAlt: z.string()
  })
});

const supporterCollection = defineCollection({
  loader: file('./src/data/site/supporters.yaml'),
  schema: z.object({
    id: z.string(),
    name: z.string()
  })
});

const eventCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdoc', base: './src/content2/events' }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    start: z.number(),
    end: z.number()
  })
});

// |------|
// | WIKI |
// |------|

const versionsCollection = defineCollection({
  loader: file('./src/data/wiki/versions.yaml'),
  schema: z.object({
    order: z.number(),
    supported: z.boolean().default(false)
  })
});

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

const wikiCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdoc', base: './src/content2/wiki' }),
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

const wikiCategories = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content2/wiki_categories' }),
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
    recipes: reference('recipes').array().optional(),
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

const buildingsCollection = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content2/buildings' }),
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

const workersCollection = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content2/workers' }),
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

const itemsCollection = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content2/items' }),
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

const tagsCollection = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content2/tags' }),
  schema: z.array(z.string())
});

const craftingConditions = z.discriminatedUnion('type', [buildingCraftingCondition, researchCraftingCondition]);
const itemOrArray = z.undefined().or(z.null()).or(z.string()).or(z.array(z.string()));

export type RecipeItemEntry = z.infer<typeof itemOrArray>;

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

const recipesCollection = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content2/recipes' }),
  schema: z.discriminatedUnion('type', [shapedRecipe, customRecipe]).and(
    z.object({
      output: z.string(),
      amount: z.number().default(1),
      conditions: z.array(craftingConditions).default([])
    })
  )
});

const citizenNamesCollection = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/data/wiki/citizen_name_packs' }),
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

const metaCollection = defineCollection({
  loader: file('./src/data/wiki/meta.yaml'),
  schema: z.object({
    value: z.string()
  })
});

// |----------|
// | RESEARCH |
// |----------|

const researchTreeCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content2/researc_tree' }),
  schema: z.object({
    name: z.string()
  })
});

const researchEffectCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content2/research_effect' }),
  schema: z.discriminatedUnion('type', [
    z.object({
      type: z.literal('regular'),
      format: z.string(),
      levels: z.array(z.number()).optional()
    }),
    z.object({
      type: z.literal('building'),
      building: reference('buildings')
    })
  ])
});

const researchCollection = defineCollection({
  loader: researchLoader,
  schema: researchSchema
});

export const collections = {
  wiki: wikiCollection,
  wiki_categories: wikiCategories,
  buildings: buildingsCollection,
  workers: workersCollection,
  tags: tagsCollection,
  items: itemsCollection,
  recipes: recipesCollection,
  research_tree: researchTreeCollection,
  research_effect: researchEffectCollection,
  research: researchCollection,
  versions: versionsCollection,
  citizen_name_packs: citizenNamesCollection,
  meta: metaCollection,
  team: teamCollection,
  sponsors: sponsorCollection,
  supporters: supporterCollection,
  events: eventCollection
};
