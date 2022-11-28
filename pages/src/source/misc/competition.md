---
title: Competition
layout: default
---

# Colony Style Competition

To celebrate reaching 30 million downloads we present you the Colony Style Competition.
In a nutshell, the idea is to take existing styles and replace their main blocks with alternative blocks.
With a special focus on using blocks from other mods.

First we'll quickly talk about the amazing prizes we got sponsored from Bisect.

- #1 gets 120$ + A Mug per team member
- #2 gets 60$ + A Mug per team member
- #3+#4 get each a 25$ bisect server for a month + A Mug per team member 
- \+ Small Consolation Prizes

You can watch a video on [Youtube](https://www.youtube.com/watch?v=7XomsuBsy9o) explaining the competition

## Overview

### What has to be done
You paste in an existing style, which can be done with the following command:

`/structurize pasteFolder <x> <y> <z> <style.name> <folder.name> <rotation> <playername(or @p)> <mirror> <prettypaste> 32`<br>

`x`, `y`, `z` are the coordinates you want to start pasting the style, `style.name` is the name of the style, where words are separated by periods. `folder.name` is the name of one folder that could be pasted, with periods instead of slashes or backslashes. `Rotation` is a number from 0 to 3 (inclusive), with the amount of times it needs to be rotated 90 degrees. The `playername` is the name of the one that would be pasting (which could be important for e.g. permissions). `mirror` is either `true` (mirrored) or `false`, and the same holds for `prettypaste`. The 32 denotes the plot size, which needs to be 32 such that every building fits on the plot. (For this style competition you want to use 0 rotation, no mirror, no prettypaste (false)).

e.g. `/structurize pasteFolder x y z Medieval.Oak agriculture.horticulture 0 Dev false false 32` would paste in all plant-based Medieval Oak buildings without rotation or mirror at the specified coordinate for the player "Dev"


You can then use the scan tool to mark multiple buildings, replace some of the main blocks. The [scan tool](../../source/items/scantool) page has more information about that.
Afterwards you should go through and make sure lanterns, doors, etc are still in place.<br>
You are also allowed to do more profound changed than this, but keep in mind you only have 2 weeks to do this.

### How do you submit
We require as a minimum to have the complete "Fundamentals" folders finished + guard tower & barracks.
However, a more complete style will result in a better grade, so keep that in mind.

Then you scan in the buildings. Check out the [schematics page](../../source/tutorials/schematics) in this regard

You'll then find the schematics in the blueprints folder, which you then bundle as a zip and send us over discord in the #competition-submission channel until Saturday 15th (inclusive)

### How and where to sign up
You are allowed to join in the competition in a team of up to three people.
While pre-registration is over you can sign up at [this link](https://forms.gle/791VVJDyAFGdAccp8) and pick up to three mods out of the list below (also linked in the form).

Note: While you can pick up to three mods, keep in mind that the more mods you use, the less compatible your style will be with most modpacks, so make sure you stick to the more popular mods.
Also keep in mind you can have optional mods, that is, if you use certain deco blocks and the mod is not installed, they will just become air which is also fine.

## Rules
- We will determine the winner in two rounds, first with the help of a jury which counts 60% and second with a public vote (counting 40%).
- You can participate alone or in a team of up to 3 people (max team size of 3). Prizes get distributed equally among team members.
- For all builders: you are not allowed to adjust your own style or a style you've already contributed to.
- The competition is in 1.19.2 only.
- You don't have to hand in a finished style. But we expect as a minimum all buildings in the fundamentals folder + guard tower + barracks
- Higher completeness results in a better grade.
- Don't use more than 3 mods aside minecolonies and dependencies (not counting the dependencies of the other mods). Make sure to use more popular mods.
- Make sure that the builder is able to build the blocks from that mod (Might result in disqualification if not).
- All blocks must be obtainable in survival
- End of competition is Saturday 15th anywhere in the world (Basically the moment the last country enters Sunday entrance is over)
- You have to deliver a blueprint zip on #competition-submission on discord with the [pack.json](../../source/tutorials/schematics#style-packs) filled in:

```json
{
  "version": 1,
  "pack-format": 1,
  "desc": "<description of style>",
  "authors": "<The names of the team members>",
  "mods": ["minecraft","structurize","domum-ornamentum", "mod1", "mod2", "mod3"],
  "name": "<The name of the style>",
}
```

and all blueprints.

## List of mods that may be used
Up to three mods out of the following list are allowed to be used:

| Mod name                 | Version to be used     | Link to mod                                                                   |
|--------------------------|------------------------|-------------------------------------------------------------------------------|
| Biomes O'Plenty          | 1.19.2-17.1.1.152      | <https://www.curseforge.com/minecraft/mc-mods/biomes-o-plenty>                |
| Oh the Biomes You'll Go  | 1.19.2-2.0.0.11        | <https://www.curseforge.com/minecraft/mc-mods/oh-the-biomes-youll-go>         |
| Rechiseled               | 1.0.10c for Forge 1.19 | <https://www.curseforge.com/minecraft/mc-mods/rechiseled>                     |
| Decorative blocks        | 1.19.2-3.0.0           | <https://www.curseforge.com/minecraft/mc-mods/decorative-blocks>              |
| Immersive Engineering    | 1.19.2-9.0.0-153       | <https://www.curseforge.com/minecraft/mc-mods/immersive-engineering>          |
| Engineer's decor         | 1.19.2-forge-1.3.26    | <https://www.curseforge.com/minecraft/mc-mods/engineers-decor>                |
| MrCrayfish Furniture Mod | 7.0.0-pre34            | <https://www.curseforge.com/minecraft/mc-mods/mrcrayfish-furniture-mod>       |
| Twilight Forest          | 1.19.2 - 4.2.1421      | <https://www.curseforge.com/minecraft/mc-mods/the-twilight-forest>            |
| Create                   | 1.19.2 v0.5.0f         | <https://www.curseforge.com/minecraft/mc-mods/create>                         |
| Blue Skies               | 1.19.2-v1.3.20         | <https://www.curseforge.com/minecraft/mc-mods/blue-skies>                     |
| Quark                    | 3.3-371                | <https://www.curseforge.com/minecraft/mc-mods/quark>                          |
| Farmers Delight          | 1.2 - 1.19+            | <https://www.curseforge.com/minecraft/mc-mods/farmers-delight>                |
| Supplementaries          | 1.19.2-2.2.4           | <https://www.curseforge.com/minecraft/mc-mods/supplementaries>                |
| Ars Nouveau              | 1.19.2-3.4.0           | <https://www.curseforge.com/minecraft/mc-mods/ars-nouveau/files>              |
| Epic Knights and Armor   | 1.19.2 6.6v            | <https://www.curseforge.com/minecraft/mc-mods/epic-knights-armor-and-weapons> |
| Create Crystal Clear     | 0.1e 1.19.2            | <https://www.curseforge.com/minecraft/mc-mods/create-crystal-clear>           |
| Biome Makeover           | 1.19.2-1.5.12.jar      | <https://www.curseforge.com/minecraft/mc-mods/biome-makeover-forge>           |
| Ecologics                | 2.1.10 (Forge 1.19.2)  | <https://www.curseforge.com/minecraft/mc-mods/ecologics>                      |
