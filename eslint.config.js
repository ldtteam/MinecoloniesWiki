// @ts-check
import path from 'path';
import { fileURLToPath } from 'url';
import js from '@eslint/js';
import ts from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import eslintPluginAstro from 'eslint-plugin-astro';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default ts.config(
  js.configs.recommended,
  ts.configs.eslintRecommended,
  ...ts.configs.strict,
  ...eslintPluginAstro.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    name: 'Ignore patterns',
    ignores: ['.astro', '.vscode', 'chart', 'dist', 'minecolonies', 'node_modules', 'public', 'pnpm-lock.yaml']
  },
  {
    name: 'Application rules (Astro)',
    files: ['**/*.astro'],
    plugins: {
      '@typescript-eslint': ts.plugin,
      'simple-import-sort': simpleImportSort
    },
    rules: {
      'simple-import-sort/imports': 'warn',
      'simple-import-sort/exports': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_'
        }
      ]
    }
  },
  {
    name: 'Application rules (Typescript)',
    files: ['**/*.ts'],
    languageOptions: {
      parser: ts.parser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname
      }
    },
    plugins: {
      '@typescript-eslint': ts.plugin,
      'simple-import-sort': simpleImportSort
    },
    rules: {
      'simple-import-sort/imports': 'warn',
      'simple-import-sort/exports': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_'
        }
      ]
    }
  },
  {
    name: 'Disable triple slash reference for auto-generated env.d.ts',
    files: ['src/env.d.ts'],
    rules: {
      '@typescript-eslint/triple-slash-reference': 'off'
    }
  }
);
