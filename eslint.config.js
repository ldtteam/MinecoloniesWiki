// @ts-check
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import ts from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import eslintPluginAstro from 'eslint-plugin-astro';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import astroEslintParser from 'astro-eslint-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(
  js.configs.recommended,
  ts.configs.eslintRecommended,
  ...ts.configs.strict,
  eslintPluginPrettierRecommended,
  ...eslintPluginAstro.configs.recommended,
  {
    name: 'Application rules (Astro)',
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroEslintParser,
      parserOptions: {
        parser: ts.parser,
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        extraFileExtensions: ['.astro']
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
    name: 'Application rules (Typescript)',
    files: ['**/*.ts', '**/*.astro/*.js'],
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
    name: 'Ignore patterns',
    ignores: ['.astro', '.vscode', 'chart', 'dist', 'minecolonies', 'node_modules', 'public', 'pnpm-lock.yaml']
  }
);
