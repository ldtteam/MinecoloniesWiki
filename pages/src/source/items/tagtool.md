---
title: Tag Tool
layout: default
---
# Tag Tool

<div class="infobox box text-center">
    <p style="text-align:center;"><img src="../../assets/images/icons/minecolonies/tag_tool.png" alt="Tag tool"></p>
</div>
<br>

The Tag Tool is a creative-only item used to help build custom [schematics](../../source/tutorials/schematics). It allows "tags" (specific words or phrases) to be attached to specific blocks in the schematic. Any tag can be attached to any block, but only specific ones will do something. Some building types require specific tags in order to function correctly, while others are optional.

## Using the Tag Tool

1. Shift-right-click the anchor block of the schematic that you want to view or edit. This will highlight it with a red border and make the associated tags visible.

    * For a building with a hut block, the hut block is the anchor block.
    * For an upgradeable decoration, the [decoration controller](../../source/items/decocontroller) is the anchor block.
    * For any other decoration, you must place a Tag Anchor Block as the anchor block.

2. While you are holding the tag tool, you will see all existing tags overlaying their blocks in-world, and they will be highlighted with a white border.

3. Right-click the tag tool in the air to open its GUI. This allows you to type in the tag that you want to apply or remove. Close the GUI afterwards. The GUI also shows a list of all currently tagged blocks.


4. Left-click on a block to apply the current tag to that block. Left-click again to remove the tag.

    * It is possible (although unusual) for a single block to have multiple tags. To remove a tag it must be the current tag entered in the GUI.

5. When finished, use the [scan tool](../../source/items/scantool) to save the schematic, including the tags. Tags will only take effect if the anchor block for the scan is the same anchor used to store the tags. (When there is only one anchor block in the scan area, it will be selected automatically; if you are including multiple hut blocks in a single schematic then you may need to select the right one manually.)

## Tag Anchor Block

<div class="infobox box text-center">
    <p style="text-align:center;"><img src="../../assets/images/items/tagsubstitutionblock.png" alt="Tag Anchor Block"></p>
</div>
<br>

The Tag Anchor Block is also a creative-only item, whose sole purpose is to act as the tag-containing anchor for non-upgradeable decorations. There should typically be at most one of these in any given schematic. (It is possible to include more than one, but only one can be the actual anchor, and that's the only one that matters.)

When built by a [Builder](../../source/workers/builder) or pasted normally, the Tag Anchor Block will disappear. As such it is only useful for tags that affect the build itself (but no other tags are interesting for decorations anyway). When pasting the schematic for editing, ensure that the left paste option is used to retain the block (similar to other [placeholder blocks](../../source/items/placeholderblocks)).

## Current Tags

The following tags are currently implemented (more may be added from time to time):

* `groundlevel`

    This tag is supported by all huts and decorations. It is optional. When included, it should only appear on exactly one block in the schematic that is at the nominal "ground level" of the building -- i.e. any blocks below this should be an underground "basement" area, blocks at the same level should be dirt/grass/other ground blocks (often [solid placeholders](../../source/items/placeholderblocks) are used for this, while underground can be either solid or light placeholders outside of the intended basement area), and blocks above should be the actual building. (If it is specified on more than one block, then only one will take effect. This is harmless if they're all on the same y level but can be confusing if not; hence the recommendation to stick with one at most.)

    When not included, the block immediately below the anchor block is assumed to be the ground level. It is recommended that the `groundlevel` tag be explicitly specified whenever the anchor block is placed anywhere other than directly on the intended ground level (or to just always specify it regardless, for safety).

    This affects the default alignment of the [build tool](../../source/items/buildtool) -- assuming that the player clicks the build tool on the ground (as is usually the case) it will align the groundlevel of the schematic to this position as well, so that they are less likely to bury the building underground or put the basement above.

    As such, this should be used even for "underground" styles -- in this case the ground level means the nominal "floor" of the colony area (where they're clicking the build tool), not necessarily the surface ground level.

* Building-specific tags

    The following tags are only used by specific building types:

    | Tag      | Used By | Amount | Description |
    | :------: | :-----: | :----: | :---------: |
    | `sit`    | Restaurant | 0-many | A "chair" where colonists will sit to eat their food |
    | `sit`    | Tavern | 0-many (~4) | A "chair" where visitors will occasionally sit |
    | `cobble` | Mine | Always 1 | The cobblestone block behind the top-most ladder at the start of the mineshaft |
    | `ladder` | Mine | Always 1 | The top-most ladder at the start of the mineshaft |
    | `bamboo` | Plantation | level-based | A block that bamboo can be planted on |
    | `cactus` | Plantation | level-based | A block that cactus can be planted on |
    | `sugar`  | Plantation | level-based | A block that sugarcane can be planted on |
    | `portal` | Nether Mine | Always 1 | An obsidian block in the bottom of the nether portal |
    | `vault`  | Nether Mine | Always 1 | A block in an enclosed room that the nether miner can stand on |
    | `work`   | Archery     | level-based | The block the archer squire stands on to shoot the targets |
