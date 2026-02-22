import { z } from 'astro/zod';
import { reference } from 'astro:content';

export const versionedObjectSchema = z.object({
  baseId: z.string(),
  version: reference('versions')
});
