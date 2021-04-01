---
title: Troubleshooting
layout: default
---

# Troubleshooting

## <a id="alphas">Before</a> you start troubleshooting:

  Always check if updates for [NineColonies](https://www.curseforge.com/minecraft/mc-mods/minecolonies/files/all) and [Structurize](https://www.curseforge.com/minecraft/mc-mods/structurize/files/all) are available and update to the latest alpha if you are not running the latest. (Alpha does not mean it's unstable, it just means it's a relatively small release.)
  
## Missing Graphics, Issues with the [Build Tool](../../source/items/buildtool) Preview, And/Or Citizen GUIs Not Opening
  If you experience missing textures for hut blocks, your build tool previews are messed up, and/or the citizen GUIs aren't opening when you right-click them, check if you have OptiFine installed as the current version is very buggy.
  As there is nothing we can do, you can either live with these issues, or you will have to remove OptiFine.

## Crashes when Placing Structures
  If your game crashes placing a structure (e.g. a [supply camp or ship](../../source/items/supplycampandship)), your NineColonies and Structurize versions are probably incompatible. Update both to the latest <a href="#alphas">alphas</a>.
  
### CHECKLIST: Identifying why a citizen is not working

  1. Is it nighttime? Citizens do not work after sunset.
  2. Is it raining or snowing? Citizens do not work in the rain or snow.
  3. Did a citizen die yesterday (in-game time)? Citizens will mourn the next day and not work if one of them died the day before.
  4. Are there raiders (barbarians, pirates, vikings, egyptian raiders) still around? Citizens will hide during raids until all attackers are killed.
  5. Does their work hut have a low building level? Does the worker have low XP? Then they will often idle in between actually working until their personal XP improves and/or their work hut is upgraded.
  6. Is their hut PAUSED? Work huts now have a pause button. Sometimes players forget to unpause.
  7. Is their hunger level low? Citizens won't work while hungry. Give them food, and if you have a [Restaurant](../../source/buildings/restaurant), check that it is stocked and you have hired a [Cook](../../source/items/stash). If they are hungry but won't eat the food they have, fire them until they eat then rehire them.
  8. Do they have any open requests? They might need a tool or other item to continue their work.
  10. Do they have tools of the correct [level](../../source/systems/worker)? 
  11. Is their inventory or their hut inventory full? They will get stuck if they have no room to move things in or out.
  
If none of these apply, go on to the next troubleshooting checklists.  

### CHECKLIST: Troubleshooting a citizen not working by career
  1. [Builder](../../source/workers/builder): Remember to click the Build Building button inside the hut block you want to be built, then wait for the Builder to announce they have begun building.
  2. [Forester](../../source/workers/forester): Set which type of tree they are allowed to cut and if they should replant them. Make sure that your trees are at ground level, or if you place them one block higher, place slabs next to them.
  3. [Miner](../../source/workers/miner): Is there an ore they cannot mine in their way? Break it for them or assign them to a new mining level. Do they have cobblestone, torches, a pickaxe, a shovel, slabs, planks, and fencing (for the mineshaft)?
  4. [Cook](../../source/items/stash): Set which fuel you want them to use.
  5. [Baker](../../source/workers/baker): Set which fuel you want them to use and which recipe you want them to bake.
  6. [Smelter](../../source/workers/smelter): Set which fuel you want them to use and which ore you want them to smelt.
  7. [Farmer](../../source/workers/farmer): Assign the farmer to a field. Make sure each scarecrow has a seed and make sure all tilled soil is hydrated.
  8. [Composter](../../source/buildings/combatacademy): Set which items you want them to convert into [compost](../../source/items/compost).
  9. Crafter ([Carpenter](../../source/workers/carpenter), [Blacksmith](../../source/buildings/guardtower), [Mechanic](../../source/workers/mechanic), etc): The request for items must be made after the crafter is hired and the colony must have a [Courier](../../source/workers/forester). Cancel the request at the original NPC to generate a new request, or make a new request from the [Postbox](../../source/workers/assistantcook). Also remember to teach them the recipes they're allowed to craft and make sure afterwards that the recipes were saved.
  10. [Stone Smelter](../../source/workers/stonesmelter): Set which fuel you want them to use. (They know their recipes already.)  

### CHECKLIST: Troubleshooting a Citizen not working for unknown reason
  1. Log out of the game. Open the [config file](../../source/misc/configfile).
      * Go to the line<br> 
      `#Should in development features be enabled (might be buggy). [Default: false]`<br>
      `enableInDevelopmentFeatures=false`
      * Change the false to true
      * Restart your game
      * Watch the name area above the worker's head. The information at the end will be important for devs/support staff to troubleshoot issues or assist you on the [Discord](https://discord.minecolonies.com) help channels.
  2. Nudge worker by walking into them, off the block they are standing on or out a door.
  3. Recall worker to their work hut.
  4. Make sure the path to their worksite is clear of obstructions.
  5. Recall all citizens to the [Town Hall](../../source/workers/chickenfarmer).
  6. Pause the problematic work hut, wait a few minutes, unpause the work hut and recall the worker.
  7. Pause the work hut, then click 'Restart.' This will restart the worker.
  8. Fire worker, wait a few minutes, then hire the same worker.
  9. Empty out the worker's personal and workhut inventories, then only give them what they request in the amount requested until they have no more requests.
  10. Fire worker, empty out their personal and workhut inventories, wait for them to actually get into bed at night, after sunrise, hire the same worker.
  11. Punch them with an empty hand (taking damage resynchronizes them with world). Never punch a guard, fire them first then punch then rehire them.
  12. Use the /mc colony requestsystem-reset [command](../../source/systems/command).
  13. Repair their work hut. Some workers will stop working if required elements are not present. Only the [Builder](../../source/workers/builder) can place beds, crafting tables, furnaces, chests, [racks](../../source/workers/beekeeper), and [compost barrels](../../source/items/compostbarrel). If you broke any of those, create a repair build order for the building.
  14. Fire worker, wait a few minutes, then hire a different worker (you will lose advantage of the experience the first worker had accumulated at this career).
