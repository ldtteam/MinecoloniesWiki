---
title: Build Tool
layout: default
---
# Build Tool

<div class="infobox box text-center">
    <p style="text-align:center;"><img src="../../assets/images/icons/minecolonies/build_tool.png" alt="Build Tool"></p>
    <recipe>buildingtool</recipe>
</div>

<br>
The build tool is *THE* most important tool in the entire mod! With it, you can place all the buildings, worker huts, and even any structure scanned by you (see [Schematics](../../source/tutorials/schematics)) perfectly. The possibilities are endless! Watch a short video of how it works here:
<br><br>

<p class="h4"><a id="build_tool">Build Tool Video</a></p>

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/3Oz627IutL0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>
<br>

### Step One: Crafting

The first step is to craft the build tool. You can also get a build tool in the [Supply Camp or Ship](../../source/items/supplycampandship) in the same rack as the [Town Hall](../../source/buildings/townhall).
<br>

### Step Two: Designating a Building Location

To place a worker hut or building from the mod, you'll first need to craft the specific block for that building (see [Recipes](../../source/misc/recipes)). Then, right-click with the build tool on a solid block where you want to place that building. The GUI will pop up:


<p style="text-align:center;"><img src="../../assets/images/misc/buildtool1.png" alt="Build Tool GUI"></p>
<br>

**Left Dropdown:** Here you will see 3 general categories: My Schematics, Decorations and Huts.

- Hut Blocks/Building Blocks- When you have a Hut/Building block in your inventory it will appear in this list for you to place and view.
- Decorations- Here are several structures considered decorations that you can use and any of your own scans in this folder.
- My Schematics- In this category, you will see all the scans you have made with the <a href="../../source/items/scantool">scan tool</a>. If you haven't made any, this category will not show up.

**Middle Dropdown:** This is where you will see the different styles of the buildings available. The current styles (as of March 20, 2021) are Acacia, Asian, Birch, Caledonia, Cave, Dark Oak, Fortress, Jungle, Medieval Birch, Medieval Dark Oak, Medieval Oak, Medieval Spruce, Mesa, Nordic, Sandstone, Spacewars, Stone, True Dwarven, Warped, and Wooden.


**Right Dropdown:** Here you will be able to see the individual schematics, depending on what you chose:

- From My Schematics - the name of the schematic (either auto-generated or if you have named it).
- From Decorations - all decorations that are of the specified style previously chosen in the middle dropdown.
- From Huts - The level of the hut from level 1 to level 5. Even if you place a hut with level 5 selected, it'll still place as level 1. This is because you need to *upgrade* it to levels 2+.


**In the middle of the screen** are the controls to adjust the structure you are about to place.

- The blue arrows are to you move the 3D structure you are viewing (front - back - right - left).
- The orange minus and plus signs are to raise or lower the structure on the Y axis.
- The orange curved arrows are to rotate the structure left or right.
- The orange triangles in the middle are to mirror the schematic.
- The green check mark is for when you are done and want to commit to placing it.
- The red X is to cancel the whole process and turn off the ghost image of the building.

<br>

<b>Hint:</b> Once you have the GUI open, you can press the ESC button on your keyboard so that the 3D image will remain. Then, you can move around and take a better look at it from all sides to make sure it's the way you want it! Right-click with the build tool again towards the 3D image (on a block or in the air) to go back to the GUI so you can "nudge" your structure to the place and orientation that you want. You can repeat this process as many times as you want before clicking the green check mark to commit to the placement of the structure.

**Note:** When in Creative Mode, you will also see options in the lower right. The one on the left will paste it into the world completely, including all the [placeholder blocks](../../source/items/placeholderblocks). This is useful for designing schematics. The button on the right will paste the structure into the world exactly as if a [Builder](../../source/workers/builder) had built it (without placeholder blocks).

**Note:** To help with planning hut locations, buildings can preview as their level 5 versions and with blue outlines. These only render if their anchor blocks — usually the hut block — are close enough to each other. This preview can be turned off in the clientside [config](../../source/misc/configfile) settings.

<br>
### Step Three

Now that you have the structure ready to place, click on the green check mark and voilá: construction tape will appear and the building is planned! Decorations and custom schematics will automatically create a build request, but you will need to create the build request manually for hut blocks. To create the build request, go into the hut block's GUI and click the Build Options button, then Build Building. Your Builders will then pick up a build request and start building the building.

You can check in the [Town Hall](../../source/buildings/townhall) GUI under the Work Orders (! symbol) tab to see the queue of all build requests you have for the Builders in your colony.
