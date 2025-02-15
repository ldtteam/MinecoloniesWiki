import { z } from 'astro:content';

const primitives = z.enum(['string', 'boolean', 'integer', 'double']).array();

const primitiveValue = z.union([z.string(), z.number(), z.boolean()]);

const baseFieldSchema = z.object({
  key: z.string(),
  description: z.string(),
  optional: z.boolean().default(false).optional()
});

type BaseField = z.infer<typeof baseFieldSchema>;

interface PrimitiveField extends BaseField {
  type: 'primitive';
  example: z.infer<typeof primitiveValue>;
  default?: z.infer<typeof primitiveValue>;
  primitive: z.infer<typeof primitives>;
}

interface ObjectField extends BaseField {
  type: 'object';
  children: AnyField[];
}

interface ArrayField extends BaseField {
  type: 'array';
  children: AnyField[];
}

interface ArrayPrimitiveField extends BaseField {
  type: 'array_primitive';
  example: z.infer<typeof primitiveValue>[];
  default?: z.infer<typeof primitiveValue>[];
  primitive: z.infer<typeof primitives>;
}

export type AnyField = PrimitiveField | ObjectField | ArrayField | ArrayPrimitiveField;

const primitiveFieldSchema: z.ZodType<PrimitiveField> = baseFieldSchema.extend({
  type: z.literal('primitive'),
  example: primitiveValue,
  default: primitiveValue.optional(),
  primitive: primitives
});

const objectFieldSchema: z.ZodType<ObjectField> = baseFieldSchema.extend({
  type: z.literal('object'),
  children: z.lazy(() => allFieldTypes.array())
});

const arrayFieldSchema: z.ZodType<ArrayField> = baseFieldSchema.extend({
  type: z.literal('array'),
  children: z.lazy(() => allFieldTypes.array())
});

const arrayPrimitiveFieldSchema: z.ZodType<ArrayPrimitiveField> = baseFieldSchema.extend({
  type: z.literal('array_primitive'),
  example: primitiveValue.array(),
  default: primitiveValue.array().optional(),
  primitive: primitives
});

const allFieldTypes = z.union([primitiveFieldSchema, objectFieldSchema, arrayFieldSchema, arrayPrimitiveFieldSchema]);

export const jsonStructureSchema = z.object({
  name: z.string(),
  path: z.string(),
  fields: allFieldTypes.array()
});
