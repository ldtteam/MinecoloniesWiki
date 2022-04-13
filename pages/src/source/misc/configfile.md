---
title: Config File
layout: default
---

### This page is still a work-in-progress! Expect it to change!

# Configuration File

The configuration file, commonly called the *config file,* is a way to change MineColonies settings. It is found within your Minecraft files:

**1.16 Main Config File Path:** <code>(Your Minecraft folder)/saves/(your world's name)/serverconfigs/minecolonies-server.toml</code>

**1.16 Client Config File Path:** <code>(Your Minecraft folder)/config/minecolonies-client.toml</code>

## Config Options

The following will be for the 1.16 config. Updates for 1.18 versions will be added soon(tm).

### Client-Side Config

- Disable citizen voices - exactly what it says on the tin. Set to false to turn off citizens talking.
- Pathfinding debug draw - set to true to show citizens' pathfinding paths in-game (lines on the ground showing where citizens are going).
- Neighboring building rendering - by default, when placing a schematic near other buildings, the already-placed buildings will show as if they were at level 5 and have a blue outline around them. You can disable that by setting this to false.

### Server-Side Config

#### Name Configuration

- Should citizens have a middle initial? - if this is set to false, citizen names won't have a middle initial. For example, "John Smith" instead of "John D. Smith".
- Should citizens use the Eastern name order? - if this is set to true, citizen names will have the last name first. For example, "SmithJohn" instead of "John D. Smith" (it's recommended that if you enable this, also change the actual names to Eastern ones).
- Male first names, female first names, last names - lists of names to be used for colonists. Comes pre-filled with English ones, but you can change it to whatever you like. We have some templates [here](../../source/misc/customcitizennames).

#### Gameplay Configuration

- Amount of initial citizens - the number of citizens you get when you first start your colony. If the number of your citizens ever goes below this, more citizens will spawn until it's at this number again.
- Should construction tape be placed around in-construction builds? - also exactly what it says on the tin. If this is set to false, no construction tape will be placed.
- Should players be able to place an infinite amount of supply camps/ships? - by default, players can only place one (crafted) supply camp/ship. (However, supply camps/ships found in loot chests can be placed infinitely.) With this enabled, players can place an infinite number of crafted supply ships/camps.
- Should colonies in other dimensions be allowed? - this allows you to create colonies in the Nether, the End, and modded dimensions.
- Amount of time before a new citizen spawns - change this to change the amount of time before a new citizen spawns, pretty simple. This only applies when a colony is under the initial citizen number, however.
- Max citizens in one colony - the max limit of citizens that can exist in each colony. If you're below this limit and you can't get more citizens, you probably need to complete the [research](../../source/systems/research) in the [university](../../source/buildings/university).
- Should the [Builder](../../source/workers/builder) and [Miner](../../source/workers/miner) build without resources? - **DO NOT ENABLE THIS!!** This is a debug tool that, ironically, is very buggy. It *will* break your Builder!
- Delay after each block placement - the delay for placing blocks. Applies to Builders, Miners, and other colonists that place blocks.
- Delay modifier to mine a block - the delay for breaking blocks. Applies to Builders, Miners, and other colonists that mine blocks.
- Should development features be enabled? - enables some features geared toward developers.
- Should citizen name tags be rendered? - if disabled, citizen names will only show in the citizen GUI and not above their head.
- Child growth modifier - how long children take to grow up (on average).
- Should workers work during the rain? - by default, workers won't work if it's raining. Enabling this option or completing the Rainman [research](../../source/systems/research) causes them to continue working in rain.
- Should players be sent entering/leaving colony notifications? - by default, when entering or leaving a colony they don't have the Receive Messages permission in, players will be send a message notifying them that they have entered/left the colony. Players that *do* have the Receive Messages permission in that colony will also be informed of this. If you disable this config option, neither type of player will get that message. This applies to all colonies.
- Should players be allowed to change citizen names? - sets if players can rename citizens with name tags.
- Should special holiday content be displayed? - by default, citizens get some special looks around holidays. Turn off this option to disable that.
- AI update rate - basically how fast citizens think. Increasing it decreases how fast they "think", but improves performance. If you increase it too much, your citizens will take hours to do anything!
- Quantity of dirt per compost filling - how many dirt blocks the [Composter](../../source/workers/composter) can get from filling one [compost barrel](../../source/items/compostbarrel).
- Lucky block chance - The Miner has a chance to get an ore when mining cobblestone or stone (by default, can be expanded with datapacks to other materials). Change this to change their chance. This is a percentage. (To change which ores the Miner can find, see "List of Lucky Ores".)
- Automatically fix orphaned chunks - enable this to automatically unclaim chunks that are claimed, but don't have a colony any more.
- Should the Builder be slower when working underground? - by default, the Builder works slower when building underground. Disable this to make them work at the same rate both above and belowground. This can be useful for underground colonies.
- Chance to get a sponge from the Fisher - by default, the [Fisher](../../source/workers/fisher) has a small chance to get sponges when fishing. You can tweak this chance here.
- Chance to get a prismarine shard or crystal drop from the Fisher - same as above, but prismarine shards/crystals instead of sponges.
- The minimum level a Town Hall has to be to allow teleportation to allied colonies - by default, you can teleport to allied colonies from your [Town Hall](../../source/buildings/townhall). However, it requires a certain Town Hall level or higher (default 3). Here, you can change level.
- Suggest build tool usage - by default, when trying to place a hut without the [build tool](../../source/items/buildtool), a window will pop up suggesting you use it. Disabling this option will disable that window.
- Food consumption modifier - the multiplier for when citizens eat food.
- How common diseases are - changes the chance for citizens to get sick.
- Chunk load colony - if an owner/officer is inside the colony and this is enabled, some of the rest of the colony chunks will be kept loaded. Useful for large colonies. Set how many chunks are loaded with the below option.
- Colony chunk loading strictness - only takes effect if the above option is enabled. Set this higher to decrease the number of loaded chunks (the innermost chunks will be loaded first). Set to 1 to load all chunks.
- Bad visitor chance - sometimes, a [Tavern](../../source/buildings/tavern) visitor will run off with the resources you give them instead of joining your colony. This option sets the chance for them to do that.
- Supply loot - by default, [supply ships and camps](../../source/items/supplycampandship) will generate in loot chests. You can disable that by setting this to false.

#### Command Configuration

- Should players be allowed to use the /mc rtp command? - sets whether players can use the /mc rtp [command](../../source/systems/command).
- Should players be allowed to use the /mc colony teleport command? - sets whether players can use the /mc colony teleport command.
- Can players teleport to allied colonies? - by default, players can teleport from their Town Hall to an allied colony. Turn off this option to disable that.
- Should players be allowed to use the /mc home command? - sets whether players can use the /mc home command. However, even with this enabled, only owners of the colony can use this command, as you can be an officer in multiple colonies.
- Should players be allowed to use the /mc colony info command? - sets whether players can use the /mc colony info command.
- Should players be allowed to use the /mc citizens kill command? - sets whether players can use the /mc citizens kill command.
- Amount of attempts to find a safe random teleport - when using /mc rtp, MineColonies will try several locations to see if they're safe and not within a colony before teleporting you. This sets the number of locations it will try.

#### Claims Configuration

- Maximum claim range for a colony - the max number of chunks that can be within a colony's [border](../../source/systems/border).
- Minimum distance between colonies - the minimum distance between two Town Halls, measured in chunks.
- Initial claim size for colonies - the number of chunks (in radius) claimed when starting a new colony.
- Should the min/max distance from spawn also affect colony placement? - sets whether the below two options have any effect.
- Max distance from world spawn - sets the maximum distance from spawn a colony can be started at. Only takes effect if the previous option is set to True.
- Min distance from world spawn - sets the minimum distance from spawn a colony can be started at. Only takes effect if "Should the min/max distance from spawn also affect colony placement?" is set to True.
- Should officers of a colony receive advancements from that colony? - sets if officers of a colony will receive advancements for things done in that colony. Disabling this means that only the colony owner will receive advancements.

#### Combat Configuration

- The minimum number of nights between raids - exactly what it says on the tin. Decrease to increase the frequency of raids.
- Days until pirate ships despawn - 
