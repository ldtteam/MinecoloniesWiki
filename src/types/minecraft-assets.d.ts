declare module 'minecraft-assets' {
  export interface TextureData {
    name: string;
    texture: string;
  }

  export interface BlockTextureData extends TextureData {
    blockState: string;
    model: string | null;
    variations?: Array<{
      metadata: number;
      texture: string;
    }>;
  }

  export type ItemTextureData = TextureData;

  export interface BlockStateVariant {
    model: string;
    x?: number;
    y?: number;
    uvlock?: boolean;
    weight?: number;
  }

  export interface BlockStateMultipartCondition {
    OR?: Record<string, string>[];
    [key: string]: string | Record<string, string>[] | undefined;
  }

  export interface BlockStateMultipartCase {
    apply: BlockStateVariant | BlockStateVariant[];
    when?: BlockStateMultipartCondition;
  }

  export interface BlockState {
    variants?: Record<string, BlockStateVariant | BlockStateVariant[]>;
    multipart?: BlockStateMultipartCase[];
  }

  export interface ModelElement {
    from: number[];
    to: number[];
    rotation?: {
      angle: number;
      axis: string;
      origin: number[];
    };
    faces: Record<string, { uv?: number[]; texture: string; rotation?: number } | undefined>;
  }

  export interface BlockModel {
    parent?: string;
    textures?: Record<string, string>;
    elements?: ModelElement[];
    display?: Record<string, unknown>;
    // Forge-specific composite loader children
    children?: Record<
      string,
      {
        textures?: Record<string, string>;
        elements?: ModelElement[];
      }
    >;
  }

  export interface MinecraftAssets {
    /** Blocks textures indexed by name */
    blocks: Record<string, BlockTextureData>;
    /** Array of all blocks textures */
    blocksArray: BlockTextureData[];

    /** Items textures indexed by name */
    items: Record<string, ItemTextureData>;
    /** Array of all items textures */
    itemsArray: ItemTextureData[];

    /** Texture content indexed by name */
    textureContent: Record<string, TextureData>;
    /** Array of all texture content */
    textureContentArray: TextureData[];

    /** Block states data */
    blocksStates: Record<string, BlockState>;
    /** Block models data */
    blocksModels: Record<string, BlockModel>;

    /** Directory path to minecraft assets data */
    directory: string;
    /** Minecraft version string */
    version: string;

    /**
     * Find a block or item texture by name
     * @param name - The name of the block or item
     * @returns The texture data or undefined if not found
     */
    findItemOrBlockByName(name: string): TextureData | undefined;

    /**
     * Get the texture path by name
     * @param name - The name of the block or item
     * @returns The texture path (without 'minecraft:' prefix)
     */
    getTexture(name: string): string;

    /**
     * Generate the base64 representation of a texture from the name
     * @param name - The name of the block or item
     * @returns Base64 encoded image data with data URI prefix, or null if not found
     */
    getImageContent(name: string): string | null;
  }

  /**
   * Load Minecraft assets for a specific version
   * @param version - Minecraft version string (e.g., '1.20', '1.19.4', '1.8.8')
   * @returns Minecraft assets object for the specified version
   */
  function mcAssets(version: string): MinecraftAssets;

  export default mcAssets;
}
