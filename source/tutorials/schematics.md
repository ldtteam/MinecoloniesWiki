---
title: Schematics
layout: default
---
# Schematics

Schematics are files containing block and entity information of a certain area a player scanned with the [Scan Tool](../items/scantool) in-game. You can use the scan tool and scan ANY building or structure you like in singleplayer or multiplayer and then have your [Builder](../../source/workers/builder) build it for you (provided that you give them all the materials needed, of course).

- [Schematics](#schematics)
  - [Scanning a New Structure](#scanning-a-new-structure)
  - [Placing a Schematic.](#placing-a-schematic)
  - [FAQ](#faq)
      - [What and Where is the scans folder?](#what-and-where-is-the-scans-folder)
      - [Where is the schematic folder?](#where-is-the-schematic-folder)
      - [I have a "*/minecolonies/01e6a291-8a01-4763-bcae-f3a8797b1d52/cache/" folder, what is that for?](#i-have-a-%22minecolonies01e6a291-8a01-4763-bcae-f3a8797b1d52cache%22-folder-what-is-that-for)
      - [How to create custom huts?](#how-to-create-custom-huts)
      - [How to override some built-in schematics?](#how-to-override-some-built-in-schematics)
      - [How to use custom huts?](#how-to-use-custom-huts)
      - [How to allow my players to use their own huts' schematics on my server?](#how-to-allow-my-players-to-use-their-own-huts-schematics-on-my-server)
      - [How to allow my players to use their scanned schematics on my server?](#how-to-allow-my-players-to-use-their-scanned-schematics-on-my-server)
      - [How to disable built-in schematics completely?](#how-to-disable-built-in-schematics-completely)

## Scanning a New Structure

Once you have a structure or area you want to scan to have your Builder build, you need to determine the exact area that needs to be scanned. 

![TestBuilding](../../assets/images/tutorial/testbuilding.png)

Take your [Scan Tool](../items/scantool) and left-click the lowest left block of the area and then place a block (it can be a [placeholder block](../../source/items/placeholderblocks) in the top right corner and right-click on it.

![ScanPoint1](../../assets/images/tutorial/scan1.png)

![ScanPoint2](../../assets/images/tutorial/scan2.png)

Then click in the air to see the entire structure.

![ScanFull](../../assets/images/tutorial/scan3.png)

Once you have the full area set, you can press Escape and the white outline of the scan area will stay in place. Go around it to double-check that everything you want is in the scan area. When you are ready, you can right-click in the air again to get the GUI to display where you can enter your scan name. Then press the green checkmark to save the scan.

Scans are saved in `../minecolonies/scan/new/...`

Once the scans are saved, they need to be moved to the `../structurize/schematics/(folder)/file` if they are a <a href="#customhuts">custom hut</a>.

## Placing a Schematic.

Once you have scanned a structure, you can use the [build tool](../../source/items/buildtool) to have your [Builder](../../source/workers/builder) build it for you. Once you right-click with the build tool, you will have to select "My Schematics" (in the left dropdown menu) and on the right dropdown menu you will see the scans that you have made. There is also a Rename button where you can change the name of the scan. You can also delete any of your saved scans.

![Schematic](../../assets/images/tutorial/schematic.png)

## FAQ

This is a FAQ section to answer common questions regarding schematics in MineColonies.

#### What and where is the scans folder?

The scans folder is where the schematics are saved after performing a scan using the scan tool in MineColonies. This is a client-side-only directory which is located in Minecraft's folder under: `*/structurize/scans/`. Freshly scanned schematics can be found in `*/structurize/scans/new/` unless they have been renamed in-game. (If they aren't there, look in `*/minecolonies/scans/new`.) This directory is shared between all your singleplayer games and multiplayer games.

#### Where is the schematic folder?

Custom schematics need to be copied inside the schematic folder: `*\structurize\schematics\`.

The location of this folder depends of the type of game:

- For a singleplayer game, there are 2 possible locations:
  * In the world folder: `*/minecraft/saves/(World Name)/structurize/schematics/`
    + **Note:** Use this directory when you want to use custom schematics restricted to the world. When this directory exists (even empty), MineColonies will completely ignore the other directory.
  * In the Minecraft folder: `*/minecraft/structurize/schematics/`
    + **Note:** Use this folder when you want to have the same custom schematics across multiple worlds.
- For a multiplayer game, the schematics are always loaded from the world's directory under the `*/structurize/schematics/` directory.

#### I have a "*/minecolonies/01e6a291-8a01-4763-bcae-f3a8797b1d52/cache/" folder, what is that for?

When playing on a server, the server needs to send the schematics to the players so that the build tool's preview works. Those schematics are saved in Minecraft's directory under `*/structurize/{ServerUUID}/cache/`, where ServerUUID is the unique identifier of the server. Those directories can be safely removed as they are automatically created by the server when needed.

#### How to create <a id="customhuts">custom huts</a>?

To create new schematics for existing huts, there are some guidelines that you must follow: the scans MUST have the same footprint for the same style/hut's type; the scans must contain the hut's block, for example the Builder's Hut block for the [Builder's Hut](../../source/buildings/builder); the hut block need to be exactly at the same place and have the same rotation for each level; the scans' filenames need to follow the naming convention: {StyleName}/{HutName}{HutLevel}.blueprint. For example, for the Builder's Huts with the MyOwn style, we would have:

*myown/builder1.blueprint*
*myown/builder2.blueprint*
*myown/builder3.blueprint*
*myown/builder4.blueprint*
*myown/builder5.blueprint*

- **Note:** In the [build tool](../../source/items/buildtool), the extension is hidden. HutName can be any of the listed huts below. The maximum level is 5 (except for the Tavern, its max level is 3).

Once ready, move the `myown` folder into the schematics folder and start your game. You should be able to see it with the the build tool.

**Note:** Remember that you need the appropriate hut in your inventory to be able to see the schematics in the build tool.

## Custom Hut Filenames

Here is a full list, up-to-date as of 20 January 2021, of the building names. Please note that *capitalization matters*.

| Level 1        | Level 2        | Level 3        | Level 4        | Level 5        |
| :------------- | :------------- | :------------- | :------------- | :------------- |
| archery1       | archery2       | archery3       | archery4       | archery5       |
| baker1         | baker2         | baker3         | baker4         | baker5         |
| barracks1      | barracks2      | barracks3      | barracks4      | barracks5      |
| barrackstower1 | barrackstower2 | barrackstower3 | barrackstower4 | barrackstower5 |
| beekeeper1     | beekeeper2     | beekeeper3     | beekeeper4     | beekeeper5     |
| blacksmith1    | blacksmith2    | blacksmith3    | blacksmith4    | blacksmith5    |
| builder1       | builder2       | builder3       | builder4       | builder5       |
| chickenherder1 | chickenherder2 | chickenherder3 | chickenherder4 | chickenherder5 |
| citizen1       | citizen2       | citizen3       | citizen4       | citizen5       |
| combatacademy1 | combatacademy2 | combatacademy3 | combatacademy4 | combatacademy5 |
| composter1     | composter2     | composter3     | composter4     | composter5     |
| concretemixer1 | concretemixer2 | concretemixer3 | concretemixer4 | concretemixer5 |
| cook1          | cook2          | cook3          | cook4          | cook5          |
| cowboy1        | cowboy2        | cowboy3        | cowboy4        | cowboy5        |
| crusher1       | crusher2       | crusher3       | crusher4       | crusher5       |
| deliveryman1   | deliveryman2   | deliveryman3   | deliveryman4   | deliveryman5   |
| dyer1          | dyer2          | dyer3          | dyer4          | dyer5          |
| enchanter1     | enchanter2     | enchanter3     | enchanter4     | enchanter5     |
| farmer1        | farmer2        | farmer3        | farmer4        | farmer5        |
| fisherman1     | fisherman2     | fisherman3     | fisherman4     | fisherman5     |
| florist1       | florist2       | florist3       | florist4       | florist5       |
| glassblower1   | glassblower2   | glassblower3   | glassblower4   | glassblower5   |
| guardtower1    | guardtower2    | guardtower3    | guardtower4    | guardtower5    |
| hospital1      | hospital2      | hospital3      | hospital4      | hospital5      |
| library1       | library2       | library3       | library4       | library5       |
| lumberjack1    | lumberjack2    | lumberjack3    | lumberjack4    | lumberjack5    |
| mechanic1      | mechanic2      | mechanic3      | mechanic4      | mechanic5      |
| miner1         | miner2         | miner3         | miner4         | miner5         |
| mysticalsite1  | mysticalsite2  | mysticalsite3  | mysticalsite4  | mysticalsite5  |
| plantation1    | plantation2    | plantation3    | plantation4    | plantation5    |
| rabbithutch1   | rabbithutch2   | rabbithutch3   | rabbithutch4   | rabbithutch5   |
| sawmill1       | sawmill2       | sawmill3       | sawmill4       | sawmill5       |
| school1        | school2        | school3        | school4        | school5        |
| shepherd1      | shepherd2      | shepherd3      | shepherd4      | shepherd5      |
| sifter1        | sifter2        | sifter3        | sifter4        | sifter5        |
| smeltery1      | smeltery2      | smeltery3      | smeltery4      | smeltery5      |
| stonemason1    | stonemason2    | stonemason3    | stonemason4    | stonemason5    |
| stonesmeltery1 | stonesmeltery2 | stonesmeltery3 | stonesmeltery4 | stonesmeltery5 |
| swineherder1   | swineherder2   | swineherder3   | swineherder4   | swineherder5   |
| tavern1        | tavern2        | tavern3        | N/A            | N/A            |
| townhall1      | townhall2      | townhall3      | townhall4      | townhall5      |
| university1    | university2    | university3    | university4    | university5    |
| warehouse1     | warehouse2     | warehouse3     | warehouse4     | warehouse5     |

## Custom Supply Ships and Camps

The process for custom [supply ships and camps](../../source/items/supplycampandship) is slightly different: 

| Camp or Ship | File Name and Path |
| :----------: | :----------------: |
| Camp | myown/supplycamp/myownsupplycamp |
| Ship | myown/supplyship/myownsupplyship |

So, for example, the path could be `wildwest/builder1` for the Builder's Hut level 1 and `wildwest/supplycamp/wildwestsupplycamp` for the supply camp.

## Hut Requirements

| Building                                                | Requirements                                                         | Suggested           | 
| :-----------------------------------------------------: | :------------------------------------------------------------------: | :-----------------: | 
| [Archery](../../source/buildings/archery)               | 1 archery dummy per level (a hay bale with a button on it, or a target block in 1.16) |    | 
| [Bakery](../../source/buildings/bakery)                 | 1 furnace                                                            |                     | 
| [Barracks](../../source/buildings/barracks)             | 1 Barracks Tower per level (up to lvl 4)                             |                     |
| [Barracks Tower](../../source/buildings/barrackstower)  |                                                                      | 1 bed per level     |
| [Builder's Hut](../../source/buildings/builder)         |                                                                      | 1 rack per level    |
| [Combat Academy](../../source/buildings/combatacademy)  | 1 combat dummy per level (a pumpkin on top of a bale of hay)         |                     |
| [Composter's Hut](../../source/buildings/composter)     | 1 [compost barrel](../../source/items/compostbarrel) per level       |                     |
| [Concrete Mixer's Hut](../../source/buildings/concretemixer) | Flowing water with solid blocks below and air blocks above      |                     |
| [Dyer's Hut](../../source/buildings/dyer)               | 1 furnace                                                            |                     |
| [Flower Shop](../../source/buildings/flowershop)        | 4 [compost blocks](../../source/items/compost) per level             |                     |
| [Glassblower's Hut](../../source/buildings/glassblower) | 1 furnace per level                                                  |                     |
| [Guard Tower](../../source/buildings/guardtower)        |                                                                      | 1 bed per level     |
| [Hospital](../../source/buildings/hospital)             | 1 bed per level                                                      |                     |
| [House](../../source/buildings/house)                   | 1 bed per level                                                      |                     |
| [Library](../../source/buildings/library)               | Bookshelves                                                          |                     |
| [Mine](../../source/buildings/mine)                     | A few starting ladders where the shaft's ladders will go             |                     |
| [Plantation](../../source/buildings/plantation)         | 4 per level: brick under sand, cobble under sand, sand next to water |                     |
| [Restaurant](../../source/buildings/restaurant)         | 1 furnace per level                                                  |                     |
| [School](../../source/buildings/school)                 | 2 carpets per level                                                  | 4 carpets per level |
| [Smeltery](../../source/buildings/school)               | 1 furnace per level                                                  |                     |
| [Stone Smeltery](../../source/buildings/stonesmeltery)  | 1 furnace per level                                                  |                     |
| [Tavern](../../source/buildings/tavern)                 | 4 beds and a dining room                                             | [Horizontal barrels](../../source/items/barrel_horizontal) and/or [vertical barrels](../../source/items/barrel_vertical) |
| [University](../../source/buildings/university)         | Bookshelves                                                          |                     |
| [Warehouse](../../source/buildings/warehouse)           | [Racks](../../source/items/rack) (more each level)                   |                     |

## Level Requirements for Overworld Styles

| Level          | Requirements          |
| :------------: | :-------------------: |
| Level 1        | Very Easy - Wooden    | 
| Level 2        | Easy - Iron           | 
| Level 3        | Medium - Nether       | 
| Level 4        | Difficult - Ocean     |
| Level 5        | Very Difficult - End  |

## Level Requirements for Nether Styles

| Level          | Requirements          |
| :------------: | :-------------------: |
| Level 1        | Very Easy - Nether    | 
| Level 2        | Easy - Rarer Nether   | 
| Level 3        | Medium - Overworld    | 
| Level 4        | Difficult - Ocean     |
| Level 5        | Very Difficult - End  |

<br>
<br>

## Tips on Building

### Do
<ul>
  <li>Make all levels of a hut have the same footprint for x, y, and z</li>
  <li>Place the hut block in the same location with the same rotation</li>
  <li>Make sure all <a href="../../source/items/rack">racks</a> and furnaces are in the same location through all levels (to prevent the contents spilling out when they're getting moved)</li>
  <li>Use <a href="../../source/items/placeholderblocks">placeholders</a> where you want to keep any existing block (including from level to level), like the <a href="../../source/buildings/barrackstower">Barracks Towers</a> in the <a href="../../source/buildings/barracks">Barracks</a> schematic</li>
  <li>Use <a href="../../source/items/placeholderblocks">solid placeholders</a> at or below ground level</li>
  <li>Use only vanilla blocks or Structurize blocks (for official styles)</li>
  <li>Use Books and Quills instead of blank books</li>
</ul>

### Don't 
<ul>
  <li>Use unobtainable items in builds (no command blocks, petrified wood, infested blocks, or mob heads (including player heads))</li>
  <li>Change someone else's style (officially) unless specifically asked to do so</li>
</ul>

## Additional Information

### How to override some built-in schematics?

Simply create a schematic file with the same style/name. For instance, to override the [Builder's Hut](../../source/buildings/builder) wooden level 1, create a schematic file name called wooden/builder1.blueprint.

### How to use custom huts?

The custom huts need to be copied in the schematics folder. Once copied, you can start your singleplayer or multiplayer game as usual. You should see them in the [build tool](../../source/items/buildtool) (if you have the hut block in your inventory).

### How to allow my players to use their own huts' schematics on my server?

You will have to copy them yourself in the schematics folder on the server and restart it.

### How to allow my players to use their scanned decoration schematics on my server?

Edit the Structurize configuration file at `minecraft/config/structurize-common.toml` and set allowPlayerSchematics to true. This allows the player to use their own decorations. It is not possible for the player to use their own huts' schematics. You can also limit the number of players' schematics at any given time by editing maxCachedSchematics (default is 100). When the limit is reached, the server will start deleting unused schematics.

### How to disable built-in schematics completely?

Edit the Structurize configuration file at `minecraft/config/structurize-common.toml` and set ignoreSchematicsFromJar to true. Be aware: things will break if some huts' schematics are missing.

### How to create upgradable decoration schematics?

Add the [deco controller](../../source/items/decocontroller) somewhere in the schematic with the name of the schematic, where you'll put it in the file directory, and its level. Make sure to actually put the decoration in that file path, but only after scanning - don't include the path in the scan name.

![Upgradable Decos](../../assets/images/tutorial/upgradabledecos.png)
