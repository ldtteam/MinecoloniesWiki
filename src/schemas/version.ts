import { z } from 'astro/zod';

export const versionSchema = z.object({
  id: z.string(),
  order: z.number(),
  supported: z.boolean().default(false)
});
