import { type ImageFunction, z } from 'astro:content';

export const itemSchema = (image: ImageFunction) =>
  z.object({
    name: z.string(),
    description: z.string(),
    icons: z.array(image())
  });

export const tagSchema = z.array(z.string());
