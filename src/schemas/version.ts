import { z } from 'astro/zod';
import { reference } from 'astro:content';

const supportedSubmodules = z.enum(['12000', '12100']);

export const versionSchema = z.object({
  id: z.string(),
  order: z.number(),
  supported: z.boolean().default(false),
  submodule: supportedSubmodules,
  packFormat: z.number()
});

export const versionedObjectSchema = z.object({
  baseId: z.string(),
  version: reference('versions')
});

export type SupportedSubmodules = z.infer<typeof supportedSubmodules>;
