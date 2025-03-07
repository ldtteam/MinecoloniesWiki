import { file, glob } from 'astro/loaders';
import { defineCollection, type ImageFunction, reference, z } from 'astro:content';

import { buildingLoader } from './loaders/building-loader';
import { itemLoader } from './loaders/item-loader';
import { researchEffectsLoader, researchLoader, researchTreesLoader } from './loaders/research-loader';
import { buildingSchema } from './schemas/building';
import { itemSchema, tagSchema } from './schemas/item';
import { jsonStructureSchema } from './schemas/json_structures';
import { recipeSchema } from './schemas/recipe';
import { researchEffectsSchema, researchSchema, researchTreeSchema } from './schemas/research';
import { schematicSchema } from './schemas/schematics';
import { versionSchema } from './schemas/version';
import { workerSchema } from './schemas/workers';

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

const socialsCollection = defineCollection({
  loader: file('./src/data/site/socials.yaml'),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    link: z.string(),
    color: z.string()
  })
});

const eventCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdoc', base: './src/content/events' }),
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
  schema: versionSchema
});

const regularPage = (image: ImageFunction) =>
  z.object({
    type: z.literal('page'),
    title: z.string(),
    image: image().optional(),
    excerpt: z.string().optional()
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

const wikiCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdoc', base: './src/content/wiki' }),
  schema: ({ image }) =>
    z
      .discriminatedUnion('type', [
        regularPage(image),
        buildingSchema(image).extend({ type: z.literal('building') }),
        itemPage,
        itemCombinedPage
      ])
      .and(
        z.object({
          sections: z.array(reference('wiki')).optional()
        })
      )
});

const wikiCategories = defineCollection({
  loader: file('./src/data/wiki/categories.yaml'),
  schema: z.object({
    name: z.string(),
    order: z.number()
  })
});

const buildingsCollection = defineCollection({
  loader: buildingLoader,
  schema: ({ image }) => buildingSchema(image)
});

const workersCollection = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/data/wiki/workers' }),
  schema: ({ image }) => workerSchema(image)
});

const itemsCollection = defineCollection({
  loader: itemLoader(),
  schema: itemSchema
});

const tagsCollection = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/data/wiki/tags' }),
  schema: tagSchema
});

const recipesCollection = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/data/wiki/recipes' }),
  schema: recipeSchema
});

const citizenNamesCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/data/wiki/citizen_name_packs' }),
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
  loader: researchTreesLoader,
  schema: researchTreeSchema
});

const researchEffectCollection = defineCollection({
  loader: researchEffectsLoader,
  schema: researchEffectsSchema
});

const researchCollection = defineCollection({
  loader: researchLoader,
  schema: researchSchema
});

// |---------|
// | SCHEMAS |
// |---------|

const jsonStructuresCollection = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/data/wiki/json_structures' }),
  schema: jsonStructureSchema
});

// |---------|
// | SCHEMATICS |
// |---------|

const schematicsCollection = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/data/schematics' }),
  schema: ({ image }) => schematicSchema(image)
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
  socials: socialsCollection,
  events: eventCollection,
  json_structures: jsonStructuresCollection,
  schematics: schematicsCollection
};
