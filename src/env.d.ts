/// <reference types="astro/client" />

declare namespace App {
  interface Locals {
    wikiPage?: import('astro:content').CollectionEntry<'wiki'>;
  }
}
