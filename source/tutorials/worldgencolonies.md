---
title: World Generation Colonies
layout: default
---
# World Generation Colonies

As you explore the world, you'll notice that there are some colonies abandoned by the former residents. Moving into one of these abandoned colonies is a way to quickstart your own colony!

(Note: This feature is only available in 1.18+.)

## Getting Started

To find a world generation colony... just start exploring! They spawn randomly at a low chance in the world in one of several styles. Currently, only a subset of official style colonies can spawn naturally in the world, but more will be added in the future!

Only a subset of possible buildings can generate in a world generation colony, and most will be level 1, though some buildings might be level 2. Sometimes, multiple of the same type of building can spawn, too!

First, find the town hall and click "Create new colony." This is equivalent to you placing a town hall down from the supply camp.

From there, go to each hut block in the found (and now, founded) colony and click "Reactivate" to reclaim the building and add it to the town hall.

Additionally, you can repair each building to make your new colony look like new.

That's it! You've claimed a colony in the world, and now you can start building your new colony!

# Creating Your Own World Generation Colonies Style

First, you need to design and build your own [schematic] (https://wiki.minecolonies.ldtteam.com/source/tutorials/schematics). Once you've built your style, you can add jigsaw block connectors at appropriate places and export the structure as a .nbt file. That way, Minecraft knows how to build an abandoned colony in your style!

## Tagging and Prepping

The most important thing to ensure that colonies register as abandoned — and can be restored — is to use the tag tool to tag the hut block appropriately.
<ol>
  <li> Tag the hut block with its style name (e.g., "medieval_oak" for the Medieval Oak style). The name must match the style's folder name in the MineColonies.jar file or resource pack.</li>
  <li> Add the tag "abandoned" to the hut block. If you right-click the building with an empty hand, it should now say that the building is abandoned and tell you to seek out the town hall.</li>
</ol>

## Adding Jigsaw Blocks

Place jigsaw blocks where a structure would naturally connect to a road or — if creating a road — where it would connect to a structure. Make sure the block is placed at the edge of the structure facing toward a connecting block.

When editing a jigsaw block, there are a few different properties that can be set.

<ul>
  <li> name: the name of this jigsaw block. The name can be unique or generic. For the styles in MineColonies, all buildings have the name "minecolonies:building_entrance" and all roads "minecolonies:street". Some styles will also use "minecolonies:field"; this one is used exclusively to connect a field to a farmer building when the farmer building does not a field as part of the level 1 structure.</li>
  <li> target: When a structure is placed, the target of its jigsaw block determines the next jigsaw block that is added. The target of a placed structure must match the name of the next one to be placed.</li>
  <li> pool: To restrict the list of applicable structures, use the target pool. MineColonies uses three dedicated pools for each colony style: "<stylename>/roads", "<stylename>/buildings", and "<stylename>/terminators".</li>
</ul>

Edit the jigsaw block to set the following properties. 
(Note that the following is an example using the Medieval Oak style. Replace "medieval_oak" with your style's name.)

Temporarily removing something.

## Processors

Processors are used to alter a structure's blocks during placement. Specifically for MineColonies, we use different processors depending on the structure that is placed.

There are three processor files for each style.

### street.json
Road processors are defined in "<stylename>/street.json". The main purpose of this processor is to replace porous materials like dirt, dirt paths, and gravel with wooden planks when the road is in water. This will also add minor decay in the form of grass blocks instead of dirt paths.

### decoration.json

Park processors are defined in "<stylename>/decoration.json". This processor adds decay to the parks by turning some stone brick into weathered variants like mossy or cracked stone bricks or replaces some dirt blocks with coarse dirt.

### placeholder_replacement.json

Building processors are defined in "<stylename>/placeholder_replacement.json". Similar to how zombie villages decay, this processor removes various building blocks or replaces them with cobweb. Which blocks and how often depends on the given style. In addition to decay, the placeholder replacement is also responsible for converting the Structurize placeholder blocks into suitable in-game similar to how a builder treats these blocks when constructing a building.

<ul>
  <li> "structurize:blocksolidsubstitution" turns into dirt, which may be converted to another block by a processor defined later in the same file.</li>
  <li> "structurize:blocksubstitution" is ignored, meaning that existing blocks in the world will remain in place when the structure generates.</li>
</ul>

#### Decay Example

The rule below replaces oak logs with cobwebs at a 4&#37; probability. That probability may be fine for one style but be too high or too low for another style.

{ "output_state": { "Name": "minecraft:cobweb" }, "input_predicate": { "block": "minecraft:oak_log", "probability": 0.04, "predicate_type": "minecraft:random_block_match" }, "location_predicate": { "predicate_type": "minecraft:always_true" } },
