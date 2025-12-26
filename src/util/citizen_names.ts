import { z } from 'astro:content';
import type { citizenNamesSchema, citizenNamesWithAuthorSchema } from 'src/schemas/citizen_names';

import { toTitleCase } from './string';

export type CitizenNamesPackWithoutAuthor = z.infer<typeof citizenNamesSchema> & { id: string };
export type CitizenNamesPackWithAuthor = z.infer<typeof citizenNamesWithAuthorSchema> & { id: string };
export type CitizenNamesPack = CitizenNamesPackWithAuthor | CitizenNamesPackWithoutAuthor;

export function getCitizenNamesPackWithAuthor(id: string, pack: CitizenNamesPack): CitizenNamesPackWithAuthor {
  if (isAuthored(pack)) {
    return pack;
  }
  return {
    id: 'official_' + id,
    name: `Official ${toTitleCase(id.replaceAll(/[\W_]+/g, ' '))}`,
    filename: 'Official_' + toTitleCase(id.replaceAll(/[\W_]+/g, ' ')).replaceAll(' ', '_') + '_Names',
    credits: 'Minecolonies Team',
    data: pack
  };
}

function isAuthored(pack: CitizenNamesPack): pack is CitizenNamesPackWithAuthor {
  return 'name' in pack;
}
