---
title: Config File
layout: default
---

# Configuration File

The configuration file, commonly called the *config file,* is a way to change MineColonies settings. It is found within your Minecraft files:

**Main Config File Path:** <code>(Your Minecraft folder)/saves/(your world's name)/serverconfigs/minecolonies-server.toml</code>

**Client Config File Path:** <code>(Your Minecraft folder)/config/minecolonies-client.toml</code>

## Config Options

The following will be for the 1.16.5 and 1.18.2 config files.

### Client-Side Config

| Setting | Default | Description |
| enablecitizenvoices | true | Citizens will talk. Set to false to turn off citizens talking. |
| neighborbuildingrendering | true | By default, when placing a schematic near other buildings, the already-placed buildings will show as if they were at level 5 and have a blue outline around them. You can disable that by setting this to false. |
| colonyteamborders | true | The colony border will be the same as the colony's team color (set in the {% building_link townhall %}). Setting this to false will set your town border to white, and all other town borders to red. |

### Server-Side Config

#### Name Configuration

| Setting | Default | Description |
| usemiddleinitial | true | If this is set to false, citizen names won't have a middle initial. For example, "John Smith" instead of "John D. Smith". |
| useeasternnameorder | false | If this is set to true, citizen names will have the last name first. For example, "SmithJohn" instead of "John D. Smith" (it's recommended that if you enable this, also change the actual names to Eastern ones). |
| malefirstnames<br>femalefirstnames<br>lastnames | (various) | Lists of names to be used for colonists. Comes pre-filled with English ones, but you can change it to whatever you like. We have some templates [here](../../source/misc/customcitizennames). |

#### Gameplay Configuration

| Setting | Default | Description |
| initialcitizenamount | 4 |The number of citizens you get when you first start your colony. If the number of your citizens ever goes below this, more citizens will spawn until it's at this number again. |
| builderplaceconstructiontape | true | If this is set to false, no construction tape will be placed around buildings being built or upgraded. |
| allowinfinitesupplychests | false | By default, players can only place one (crafted) supply camp/ship. (However, supply camps/ships found in loot chests can be placed infinitely.) With this enabled, players can place an infinite number of crafted supply ships/camps. |
| allowinfinitecolonies | false | Allows players to abandon their colony to start a new one. **Note:** This is buggy! |
| allowotherdimcolonies | true | This allows you to create colonies in the Nether, the End, and modded dimensions. |
| citizenrespawninterval | 60 | Changes the amount of time (ticks) before a new citizen spawns. This only applies when a colony is under the initial citizen number, however. | 
| maxcitizenpercolony | 250 | The maximum limit of citizens that can exist in each colony. If you're below this limit and you can't get more citizens, you probably need to complete the [research](../../source/systems/research) in the {% building_link university %} . |
| builderbuildblockdelay | 15 | The delay (ticks) for placing blocks. Applies to Builders, Miners, and other colonists that place blocks. |
| blockminingdelaymodifier | 500 | The delay (ticks) for breaking blocks. Applies to Builders, Miners, and other colonists that mine blocks. |
| enableindevelopmentfeatures | false | Enables some features geared toward developers. | 
| alwaysrendernametag | true | If disabled, citizen names will only show in the citizen GUI and not above their head.
| workersalwaysworkinrain | false | Workers won't normally work if it's raining. Enabling this option or completing the Rainman [research](../../source/systems/research) causes them to continue working in rain. |
| sendenteringleavingmessages | true | Players entering or leaving a colony where they don't have the Receive Messages permission in, players will be send a message notifying them that they have entered/left the colony. Players that *do* have the Receive Messages permission in that colony will also be informed of this. If you disable this config option, neither type of player will get that message. This applies to all colonies. | 
| allowglobalnamechanges | 1 | Sets if players can rename citizens with name tags. To set which players can change the names, see "Special Permissions Group" below. |
| holidayfeatures | true | Citizens get some special looks around holidays. Turn off this option to disable that. |
| updaterate | 1 | Basically, how fast citizens think. Increasing it decreases how fast they "think", but improves performance. If you increase it too much, your citizens will take hours to do anything! |
| dirtfromcompost | 1 | How many dirt blocks the {% worker_link composter %} can get from filling one [compost barrel](../../source/items/compostbarrel). |
| luckyblockchance | 1 | The Miner has a chance to get an ore when mining cobblestone or stone (by default, can be expanded with datapacks to other materials). Change this to change their chance. This is a percentage. (To change which ores the Miner can find, see "List of Lucky Ores".) |
| restrictbuilderunderground | true | By default, the Builder works slower when building underground. Disable this to make them work at the same rate both above and belowground. This can be useful for underground colonies. |
| minthleveltoteleport | 3 | By default, you can teleport to allied colonies from your {% building_link townhall %}. However, it requires a certain Town Hall level or higher (default 3). Here, you can change level. |
| suggestbuildtoolplacement | true | By default, when trying to place a hut without the [build tool](../../source/items/buildtool), a window will pop up suggesting you use it. Disabling this option will disable that window. |
| foodmodifier | 1.0 | The multiplier for when citizens eat food.  Increasing this makes the citizens require more food. | 
| diseasemodifier | 5 | How common diseases are. Increasing this makes citizens get sick less often. | 
| forceloadcolony | false | If an owner/officer is inside the colony and this is enabled, some of the rest of the colony chunks will be kept loaded. Useful for large colonies. Set how many chunks are loaded with the below option. |
| colonyloadstrictness | 3 | Only takes effect if the above option is enabled. Set this higher to decrease the number of loaded chunks (the innermost chunks will be loaded first). Set to 1 to load all chunks. |
| badvisitorchance | 2 | Sometimes, a {% building_link tavern %} visitor will run off with the resources you give them instead of joining your colony. This option sets the percentage chance for them to do that. |
| generatesupplyloot | true | By default, [supply ships and camps](../../source/items/supplycampandship) will generate in loot chests. You can disable that by setting this to false. |
| maxtreesize | 400 | The maximum logs in one tree for the {% worker_link forester %} to detect it as a tree. |
| nosupplyplacementrestrictions | false | Disables supply camp placing restrictions.  This is intended for skyworlds and similar worldgen. |
| skyraiders | false | Raiders will spawn in the sky if this is enabled. This is intended for skyworlds and similar worldgen. |
  
#### Research System Configuration

| Setting | Default | Description |
| researchcreativecompletion | true | Allows automatic and (near) instant completion of research for players in creative mode. If false, creative players will still be able to begin researches, but will have normal progress rates. |
| researchdebuglog | false | If true, this significantly increases the amount of information related to research datapacks that is logged during the world load. |	
| researchresetcost | [Ancient Tome](../../source/items/ancient_tome) | A list of items to charge players when undoing an already-completed research |

#### Command Configuration

| Setting | Default | Description |
| canplayerusertpcommand | false | Sets whether players can use the /mc rtp [command](../../source/systems/command). |
| canplayerusecolonytpcommand | false | Sets whether players can use the /mc colony teleport command. |
| canplayeruseallytownhallteleport | true | By default, players can teleport from their Town Hall to an allied colony. Turn off this option to disable that. |
| canplayerusehometpcommand | false | Sets whether players can use the /mc home command. However, even with this enabled, only owners of the colony can use this command, as you can be an officer in multiple colonies. |
| canplayeruseshowcolonyinfocommand | true | Sets whether players can use the /mc colony info command. |
| canplayerusekillcitizenscommand | false | Sets whether players can use the /mc citizens kill command. |
| canplayeruseaddofficercommand | true | Sets whether players can use the /mc colony addOfficer command. |
| canplayerusedeletecolonycommand | true | Sets whether players can use the /mc colony delete command. |
| numberofattemptsforsafetp | 4 | when using /mc rtp, MineColonies will try several locations to see if they're safe and not within a colony before teleporting you. This sets the number of locations it will try. |

#### Claims Configuration

| Setting | Default | Description |
| maxColonySize | 20 | The max number of chunks that can be within a colony's [border](../../source/systems/border). |
| minColonyDistance | 8 | The minimum distance between two Town Halls, measured in chunks. |
| initialColonySize | 4 | The number of chunks (in radius) claimed when starting a new colony. |
| restrictcolonyplacement | false | Should the min/max distance from spawn also affect colony placement? Enabling this sets whether the below two options have any effect. |
| maxdistancefromworldspawn | 8000 | Sets the maximum distance {in blocks) from spawn a colony can be started at. Only takes effect if the previous option is set to true. |
| mindistancefromworldspawn | 512 | Sets the minimum distance (in blocks) from spawn a colony can be started at. Only takes effect if "Should the min/max distance from spawn also affect colony placement?" is set to true. |
| officersreceiveadvancements | true | Sets if officers of a colony will receive advancements for things done in that colony. Disabling this means that only the colony owner will receive advancements. |

#### Combat Configuration

| Setting | Default | Description |
| dobarbariansspawn | true | Disable this setting to turn off raids. |
| barbarianhordedifficulty | 5 | The difficulty setting for raiders. The higher the number, the higher the difficulty. |
| spawnbarbariansize | 5 | The minimum size (percentage) of a raider horde. By default, this is 5 (or 50%).  If the game decides to spawn 10 raiders, by default only 5 will spawn. |
| maxBarbarianSize | 80 | The maximum total size of a raider horde. |
| dobarbariansbreakthroughwalls | true | Whether or not raiders can break, scale, and bridge obstacles. |
| averagenumberofnightsbetweenraids | 14 | The average number of nights between raids. |
| minimumnumberofnightsbetweenraids | 10 | The minimum number of nights between raids. |
| mobattackcitizens | true | By default mobs will attack citizens. |
| shouldraiderbreakdoors | true | Whether or not raiders can break through doors. |
| citizencallforhelp | true | By default, citizens will call for nearby guards if attacked |
| rangerdamagemult | 1.0 | Attack damage multiplier for {% worker_link archer %}. |
| knightdamagemult | 1.0 | Attack damage multiplier for {% worker_link knight %}.  |
| guardhealthmult | 1.0 | Health multiplier for all Guards. |
| pvp_mode | false | Enabling this option turns on MineColonies PvP mode. Colonies can be destroyed and griefed under certain conditions, which can be set in the Enemies permission settings in the Town Hall.  **Note:** PvP mode has not been fleshed out yet.
| daysuntilpirateshipsdespawn | 3 | Days until the pirate ships despawn |
| maxyforbarbarians | 200 | Max Y level (height) for raiders to spawn. |

#### Permission Configuration

| Setting | Default | Description |
| enablecolonyprotection |  true | By default, colony protection is on. This enables the Permission system in the Town Hall. |
| maxkeptbackups | 50 | Sets the maximum amount of backups kept. |
| turnoffexplosionsincolonies | "DAMAGE_ENTITIES" | By default, explosions within colony borders only affect players & citizens, not blocks.  This can be changed to nothing, players, or everything.
| specialpermgroup | ["_Raycoms_"] | Players who have special permissions to change citizen names (see "Name Changes" above). |
| freetointeractblocks | ["dirt", "0 0 0"] | Blocks players should be able to interact with in any colony. You can list a type of block or specific locations. |
| secondsBetweenPermissionMessages | 30 |Seconds between each permission message. |

#### Mod Compatibility Configuration

| Setting | Default | Description |
| enabledmodtags | (various) | List of recognized and enabled tags. |
| configliststudyitems | Paper, book | Items consumed by citizens in the Library. The first value is item name, the second value is skillchance (between 100 and 1000), and the third value is breakchance (between 100 and 0). |
| configlistrecruitmentitems | (various) | Items requested by Tavern visitors. The first value is the item, the second value is the quantity. |
| luckyores | (various) | List of ore blocks rarely found magically by Miners (see "Ore Chance"). The first value is the block and the second value its chance. |
| enchanterexperiencemultiplier | 2.0 | Experience multiplier of the enchanter (how much more experience do they get from a citizen than they drain). |
| dynamictreeharvestsize | 5 | Forester harvest trunk size for dynamic trees |
| fishingroddurabilityadjustt2 | 6 | Offset for the maximum durability unenchanted rod a T2 Fishing Hut can use, compared to iron tools (250). Thermal Foundation Iron requires +6. T3 huts can use unenchanted rods of any durability level, so long as they can take damage at all. Anything below -250 will only allow vanilla rods, except as allowed by T1. |
| fishingroddurabilityadjustt1 | 22 | Offset for the maximum durability unenchanted rod a T1 Fishing Hut can use, compared to other wooden tools (59). Vanilla rods always work, but equivalents would need +6. Default value allows up to Thermal Foundation Silver  Anything below -59 will only allow vanilla rods. |
| diseases | (various) | All diseases citizens can get. The name, how common it is, and all ingredients to cure it. |
| debuginventories | false | Enable inventory debugging. |
| auditcraftingtags | false | Generate crafting_audit.csv on loading recipes to verify tags. |

#### Pathfinding Configuration

| Setting | Default | Description |
| pathfindingdebugverbosity | 0 | Increasing this value makes longer pathfinding debug messages. | 
| minimumrailstopath | 8 |The minimum number of consecutive rails to be detected as a path for a citizen to use. |
| pathfindingmaxthreadcount | 2 | Amount of additional threads to be used for pathfinding. Affects performance. |

#### Request System Configuration

| Setting | Default | Description |
| enabledebuglogging | false | Enabling this setting puts request system debug information in the debug.log |
| maximalretries | 3 | The maximum amount of tries that the request system will perform for retryable requests. Increasing this number increases server load. |
| delaybetweenretries | 1200 | The amount of ticks between retries of the request system for retryable requests. Decreasing this number increases server load. |
| creativeresolve | false | Enable only when debugging.  The request system will creatively resolve (if possible) when the player is required to resolve a request. |
| canplayeruseresetcommand | false | Sets whether players can use the /mc colony requestsystem-reset command. |
