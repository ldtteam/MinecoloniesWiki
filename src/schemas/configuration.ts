import { z } from 'astro/zod';

import { versionedObjectSchema } from './version-object';

export const configurationTypeSchema = z.enum(['COMMON', 'CLIENT', 'SERVER']);

export const configurationTypeValueTypeSchema = z.enum(['boolean', 'number', 'enum', 'string']);

export type ConfigurationTypeValue =
  | { type: 'category'; name: string; children: ConfigurationTypeValue[] }
  | {
      type: 'config';
      name: string;
      'value-type': z.infer<typeof configurationTypeValueTypeSchema>;
      defaultValue: string | number | boolean;
      description?: string;
      comment?: string;
      needsRestart: boolean;
      min?: number;
      max?: number;
      enum?: string[];
    };

export const configurationTypeValueSchema: z.ZodType<ConfigurationTypeValue> = z.discriminatedUnion('type', [
  z.object({
    type: z.literal('category'),
    name: z.string(),
    children: z.lazy(() => configurationTypeValueSchema.array())
  }),
  z.object({
    type: z.literal('config'),
    name: z.string(),
    ['value-type']: configurationTypeValueTypeSchema,
    defaultValue: z.string().or(z.number()).or(z.boolean()),
    description: z.string().optional(),
    comment: z.string().optional(),
    needsRestart: z.boolean(),
    min: z.number().optional(),
    max: z.number().optional(),
    enum: z.array(z.string()).optional()
  })
]);

export const configurationSchemaWithoutVersion = z.object({
  name: z.string(),
  types: z.array(
    z.object({
      type: configurationTypeSchema,
      values: configurationTypeValueSchema.array()
    })
  )
});

export const configurationSchema = configurationSchemaWithoutVersion.and(versionedObjectSchema).and(
  z.object({
    modId: z.string()
  })
);
