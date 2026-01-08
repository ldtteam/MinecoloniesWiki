import { z } from 'astro:content';

import { versionedObjectSchema } from './version';

export const itemSchemaWithoutVersionData = z.object({
  name: z.string(),
  description: z.string(),
  isBlock: z.boolean().default(false),
  modelPath: z.string().optional(),
  modelNamespace: z.string().optional()
});

export const itemSchema = itemSchemaWithoutVersionData.and(versionedObjectSchema);
