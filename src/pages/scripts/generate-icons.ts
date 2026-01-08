import { renderItemOrBlockBuffer } from '@utils/renderers';
import { getVersionCollectionId } from '@utils/version';
import type { APIRoute } from 'astro';
import type { CollectionEntry } from 'astro:content';
import { getCollection } from 'astro:content';
import fs from 'fs/promises';
import pLimit from 'p-limit';
import path from 'path';

const ICON_GENERATION_CONCCURRENCY = 50;

export const GET: APIRoute = async () => {
  await generateIcons();

  return new Response(undefined, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain'
    }
  });
};

async function generateIcons() {
  console.log('Starting icon generation...');

  try {
    const versions = await getCollection('versions');
    const sortedVersions = versions.sort((a, b) => a.data.order - b.data.order);

    // Collect all unique item IDs that are actually used
    const itemIdsNeeded = await collectUsedItemIds();

    console.log(`Found ${itemIdsNeeded.size} unique items used across recipes and buildings`);

    // Get all item entries
    const allItems = await getCollection('items');
    const itemsToRender = allItems.filter((item) => itemIdsNeeded.has(item.id));

    console.log(`Generating icons for ${itemsToRender.length} items across ${sortedVersions.length} versions`);

    // Ensure output directory exists
    const outputDir = './public/images/wiki/items';
    await fs.mkdir(outputDir, { recursive: true });

    // Generate icons with concurrency control
    const limit = pLimit(ICON_GENERATION_CONCCURRENCY);
    const total = itemsToRender.length * sortedVersions.length;

    console.log(`Rendering icons with concurrency of ${limit.concurrency}...`);

    const progressInterval = setInterval(() => {
      console.log(`Icons processing: ${limit.activeCount}, icons remaining: ${limit.pendingCount}/${total}`);
    }, 500);
    const progressIntervalId = progressInterval[Symbol.toPrimitive]();

    const promises: Promise<void>[] = [];

    for (const item of itemsToRender) {
      for (const version of sortedVersions) {
        promises.push(limit(() => generateIcon(item, version, outputDir)));
      }
    }

    const results = await Promise.allSettled(promises);

    clearInterval(progressIntervalId);
    process.stdout.write('\n');

    let successCount = 0;
    let failureCount = 0;

    for (const result of results) {
      if (result.status === 'fulfilled') {
        successCount++;
      } else {
        failureCount++;
      }
    }

    console.log(`Icon generation complete! Generated ${successCount}/${total} icons (${failureCount} failures)`);
  } catch (error) {
    console.error(`Icon generation failed: ${error}`);
    throw error;
  }
}

/**
 * Collects all item IDs that are actually used in recipes and buildings
 */
async function collectUsedItemIds(): Promise<Set<string>> {
  const itemIds = new Set<string>();

  const recipes = await getCollection('recipes');
  for (const recipe of recipes) {
    itemIds.add(recipe.data.output.id);

    if (recipe.data.type === 'shaped') {
      for (const row of recipe.data.items) {
        for (const itemArray of row) {
          if (itemArray) {
            for (const item of itemArray) {
              itemIds.add(item.id);
            }
          }
        }
      }
    } else if (recipe.data.type === 'shapeless') {
      for (const ingredient of recipe.data.items) {
        for (const item of ingredient.item) {
          itemIds.add(item.id);
        }
      }
    } else if (recipe.data.type === 'crafter') {
      itemIds.add(recipe.data.intermediate.id);
      for (const input of recipe.data.inputs) {
        for (const item of input.item) {
          itemIds.add(item.id);
        }
      }
      if (recipe.data.additionalOutput) {
        for (const output of recipe.data.additionalOutput) {
          for (const item of output.item) {
            itemIds.add(item.id);
          }
        }
      }
    } else if (recipe.data.type === 'smelting') {
      for (const item of recipe.data.item) {
        itemIds.add(item.id);
      }
    }
  }

  const buildings = await getCollection('buildings');
  const versions = await getCollection('versions');

  for (const version of versions) {
    for (const building of buildings) {
      itemIds.add(getVersionCollectionId('blockhut' + building.id, version.data));
    }
  }

  console.log(`Collected ${itemIds.size} unique items from recipes, buildings, and wiki pages`);
  return itemIds;
}

/**
 * Generates a single icon and saves it to the output directory
 */
async function generateIcon(
  item: CollectionEntry<'items'>,
  version: CollectionEntry<'versions'>,
  outputDir: string
): Promise<void> {
  const itemIdParts = item.id.split('/');
  const namespace = itemIdParts[0];
  const itemName = itemIdParts[1];
  const fileName = `${namespace}_${itemName}_${version.id}.png`;
  const filePath = path.join(outputDir, fileName);

  // Render the icon directly to buffer
  const buffer = await renderItemOrBlockBuffer(item, version, {
    width: 32,
    height: 32
  });

  if (!buffer) {
    throw new Error(`Failed to render icon for ${item.id}`);
  }

  // Write buffer directly to file (convert to Uint8Array for strict typing)
  await fs.writeFile(filePath, new Uint8Array(buffer));
}
