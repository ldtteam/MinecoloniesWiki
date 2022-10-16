---
title: Scan Tool
layout: default
---
# Scan Tool

<div class="infobox box text-center">
    <p style="text-align:center;"><img src="../../assets/images/icons/minecolonies/scan_tool.png" alt="Scantool"></p>
    <recipe>scantool</recipe>
</div>
<br>

The scan tool is a very useful tool. With the scan tool, you can scan any structure you like and have your [Builder](../../source/workers/builder) build it for you! So if you build a house, wall, bridge, tower, shop or any other structure that you want in your colony, you can scan it. You can scan a structure in Singleplayer or Multiplayer (even on a server). The scanned structure will be in a [schematic](../../source/tutorials/schematics) file that you can then use the build tool to place and have your Builder build it for you. Want your Builder to clear an area for you (and level up while working)? Then scan an area of air and place it with the [build tool](../../source/items/buildtool) over what you want the Builder to clear-they'll clear that area away, leaving only air! Watch a short video of how it works here:

<p class="h4">Scan Tool Video</p>

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/UO4ePh0N4Mc" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>
<br>

**Hint:** There are three blocks in MineColonies that are made specifically for helping players make schematics.
1. [Placeholder Block](../../source/items/placeholderblocks): This block will not be scanned and will use the block that is already there, like air, grass, cobblestone, etc.
2. [Solid Placeholder Block](../../source/items/placeholderblocks): This block will guarantee the block placed will be solid according to the biome it's being built on.
3. [Fluid Placeholder Block](../../source/items/placeholderblocks): This block replaces any non-solid blocks with the biome's preferred fluid (water in the overworld, lava in the Nether). Already-existing solid blocks or fluids will be left alone.

### Step One

The first step is to craft a scan tool.
<br>

### Step Two

Then left-click a lower front corner (left or right makes no difference) at the ground level of the structure.

![Point 1](../../assets/images/tutorial/scan1.png)

### Step Three

Right-click on the top opposite corner of the structure (you can use a [Placeholder Block](../../source/items/placeholderblocks) for this), leaving the entire structure inside this imaginary box.

![Point 2](../../assets/images/tutorial/scan2.png)

### Step Four

Next, right-click in the air to get the scan tool GUI.

![Scan Tool GUI](../../assets/images/gui/scan_tool_gui.png)

Here you will be able to see the coordinates for the scan you just did and can change them. You will also be able to give your scan a name. Use the green arrow if you are ready to save your scan or the red X to cancel the scan and start over.  

You can click on the Show Resources button to see all the blocks that are in your scan. When scrolling through the blocks that are in your scan, you have two options:

* Remove, to remove any of the blocks you see in your scan that you don't want in there.
* Replace, to replace that block with any other block you prefer for that scan.

You can also shift + left-click on a block to set the anchor position. (You can set it to a block outside of the scan, but that won't work for obvious reasons.) The anchor position is where the scan will rotate around when placing it with the [build tool](../../source/items/buildtool). When using the build tool, you can tell which block the anchor position is by its red outline. By default (if you don't shift + left-click), the anchor position will be the hut block (for huts) or the center block of the schematic (for decorations). If you're making an upgradable decoration, the anchor block will be the [deco controller](../../source/items/decocontroller). **Do not** change the anchor block in this case, as if you do, the decoration won't be upgradable!

# Multiple Scan Slots (1.19+ only)

The scan tool has 10 separate slots that can hold scan coordinates and names. You can use these however you like, but one example is to scan each level of a single building to a separate slot, with some extra slots used for temporary boxes (such as using the replace function).

With the scan tool selected on your hotbar, you can switch slots by using sneak+scrollwheel, or using (sneak+)Pick-Block in air. With the GUI open, you can also press the number keys to switch slots.

To clear a slot, simply overwrite it with another scan, or delete the name in the GUI. Or to reset everything, throw away your scan tool and make another.

# Command Blocks

When doing a lot of scanning, such as when making an entire custom style, it can be useful to use command blocks to automate the scanning process using the [scan command](../../source/systems/command#structurize-commands).

In 1.19+ only, you can click the scan tool on a command block using Pick-Block:

* With pick-block alone, the scan command is copied to the current slot of the scan tool.
* With shift+pick-block, the current slot of the scan tool is pasted to the command block.

After interacting with a command block in this way at least once, you can press your Scan Tool Teleport keybind (unset by default) to quickly teleport between your command block and the corresponding build.
