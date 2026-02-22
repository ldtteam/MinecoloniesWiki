import { z } from 'astro/zod';

export const translationsSchema = z.record(z.string(), z.string());

export type Translations = z.infer<typeof translationsSchema>;
