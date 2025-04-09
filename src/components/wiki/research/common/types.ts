import type { AstroComponentFactory } from 'astro/runtime/server/index.js';

export interface ResearchTabs {
  name: string;
  component: AstroComponentFactory;
}
