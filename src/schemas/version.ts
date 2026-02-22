import { z } from 'astro/zod';

const supportedSubmodules = z.enum(['12000', '12100']);

export const versionSchema = z.object({
  id: z.string(),
  order: z.number(),
  supported: z.boolean().default(false),
  submodule: supportedSubmodules,
  packFormat: z.number()
});

export type SupportedSubmodules = z.infer<typeof supportedSubmodules>;
