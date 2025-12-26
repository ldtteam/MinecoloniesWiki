import { z } from 'astro:content';

export const citizenNamesSchema = z.object({
  parts: z.number().min(1).max(3),
  order: z.enum(['WESTERN', 'EASTERN']),
  male_firstname: z.array(z.string()),
  female_firstname: z.array(z.string()),
  surnames: z.array(z.string())
});

export const citizenNamesWithAuthorSchema = z.object({
  name: z.string(),
  filename: z.string(),
  credits: z.string(),
  data: citizenNamesSchema
});
