import { type CollectionEntry, getCollection, getEntry } from "astro:content";
import minecraftData from 'minecraft-data';

import { parseResourceLocation } from "./string";

interface ItemData {
    namespace: string;
    name: string;
    link: string | undefined;
    versions: CollectionEntry<"versions">[];
}

export async function getItemData(item: string): Promise<ItemData[] | undefined> {
    const parsed = parseResourceLocation(item);
    const versions = await getCollection("versions");

    if (parsed === undefined) {
        return [{ namespace: "", name: item, link: undefined, versions }];
    }

    const results: ItemData[] = [];

    for (const version of versions) {
        if (parsed.namespace === "minecraft") {
            const data = minecraftData(version.id);
            if (!data.itemsByName[parsed.id]) {
                continue;
            }

            const name = data.itemsByName[parsed.id].displayName;
            const existingResult = results.find(f => f.namespace === parsed.namespace && f.name === name);
            if (existingResult) {
                existingResult.versions.push(version);
            } else {
                results.push({
                    namespace: parsed.namespace,
                    name,
                    link: 'https://minecraft.wiki/w/' + name.replaceAll(" ", "_"),
                    versions: [version]
                })
            }
        }

        const pageData = await getEntry('wiki', 'items/' + parsed.id);
        if (pageData && pageData.data.type === 'page') {
            const name = pageData.data.title;
            const existingResult = results.find(f => f.namespace === parsed.namespace && f.name === name);
            if (existingResult) {
                existingResult.versions.push(version);
            } else {
                results.push({
                    namespace: parsed.namespace,
                    name,
                    link: '/wiki/items/' + parsed.id,
                    versions: [version]
                })
            }
        }
    }
    return results;
}