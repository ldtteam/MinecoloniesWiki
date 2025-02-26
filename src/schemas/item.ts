import { overrideSchema } from '@utils/override';
import { type ImageFunction, reference, z } from 'astro:content';

export const itemSchema = (image: ImageFunction) =>
  overrideSchema(
    z.object({
      id: z.string(),
      name: z.string(),
      description: z.string(),
      icons: z.array(image().or(z.string()))
    })
  );

export const tagSchema = z.array(reference('items'));
