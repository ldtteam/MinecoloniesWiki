import type { ImageMetadata } from 'astro';

export type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

export async function loadDynamicImage(path: string): Promise<ImageMetadata> {
  return (await import(path)).default;
}
