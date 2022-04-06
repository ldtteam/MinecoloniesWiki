---
title: Raid System
layout: default
---
# Raid System

<p style="text-align:center; font-size:20pt;"><img src="../../assets/images/misc/Sleep.png" alt="Sleep"><b> If a raid is currently in progress, your colonists will stop working and run home!</b></p>

## Before the Raid
As your colony develops, you may get raided by hostile forces. These forces can spawn almost anywhere except near your buildings. Generally, this means they'll spawn outside of the colony, but if your buildings are spread out, they could spawn between them!

Raids will only spawn at the start of a night. There will be a chat message giving a general direction of where the raid spawned and a bar at the top of your screen showing your progress in defeating the raiders. (An image of this is coming soon(tm).) Raids spawn randomly, with a minimum number of nights between them and an average number of nights as set in the [config file](../../source/misc/configfile).

If you have a [Barracks](../../source/buildings/barracks) at level 3 or higher, you can hire spies to make raiders glow. This can help you find that one pesky raider that got stuck or is hiding and finish the raid.

## Types of Raids
The type of raiders that can spawn are determined by the biome in which they spawn.

| Biome               | Raider type      |
| ------------------- | ---------------- |
| Taiga               | Nordic           |
| Desert              | Mummy            |
| Large body of water | Pirate           |
| Jungle              | Amazon           |
| Other               | Barbarian        |

Notably, Pirate raids can spawn on any large body of water, not just the ocean. They will spawn with a ship that has spawners that continuously spawn more pirates until you break the spawners. If any of the environment would be clipped by the pirate ship's spawning, the environment will be restored after the ship sails away (in 3 days, by default).

Mummy raids may include Pharaohs, who may drop their scepter on defeat. These scepters are essentially bows, and as such can be used by your archers.

## During the Raid
Raiders will run around the colony breaking down doors and trying to attack your guards and colonists. Generally, raiders will path toward hut blocks in your colony, similar to what guards do on patrol.

Trying to "cheese" the raiders usually will not work. They are able to path fairly well, though if they are unable to find any path to their destination, they will break through any block, place ladders to climb up obstacles, or place blocks to bridge gaps to get to your colony. They can swim straight through moving water and lava, taking no damage from lava. Any attack that hits a raider *too* hard will be reflected back at the attacker. Similarly, turrets (from other mods) generally will not be effective on raiders.

Raiders have a chance to drop their equipment when you or your [Guards](../../source/workers/guard) defeat them. They may also drop [Ancient Tomes](../../source/items/ancient_tome), which are used in enchanting.

## After the Raid
After all of the raiders have been defeated and spawners broken, your colonists will go back to their jobs. If any of your colonists die, then their family will mourn their death for a day and not work that day. However, guards will not be mourned.

As you defeat more raiders and develop your colony, the raids will increase in difficulty. How quickly they increase in difficulty or what affects their difficulty is not publicly known.
