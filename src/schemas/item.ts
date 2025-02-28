import { overrideSchema } from '@utils/override';
import { reference, z } from 'astro:content';

export const itemSchema = overrideSchema(
  z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    icons: z.array(z.string())
  })
);

export const tagSchema = z.array(reference('items'));
