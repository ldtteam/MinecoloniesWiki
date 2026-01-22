import { z } from 'astro/zod';

import { versionedObjectSchema } from './version-object';

export const itemSchemaWithoutVersionData = z.object({
  name: z.string(),
  isBlock: z.boolean().default(false)
});

export const itemSchema = itemSchemaWithoutVersionData.and(versionedObjectSchema);
