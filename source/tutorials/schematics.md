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

This is a FAQ section to answer most questions regarding schematics in MineColonies.

#### What and where is the scans folder?

The scans folder is where the schematics are saved after performing a scan using the scan tool in MineColonies. This is a client side only directory which is located in Minecraft's folder under: `*/structurize/scans/`. Freshly scanned schematics can be found in `*/structurize/scans/new/` unless they have been renamed in game. This directory is shared between all your singleplayer games and multiplayer games.

#### Where is the schematic folder?

Custom schematics need to be copied inside the schematic folder: `*\structurize\schematics\`.

The location of this folder depends of the type of game:

- For a singleplayer game, there are 2 possible locations:
  * In the world folder: `*/minecraft/saves/(World Name)/structurize/schematics/`
    + **Note:** Use this directory when you want to use custom schematics restricted to the world. When this directory exists (even empty), MineColonies will completely ignore the other directory.
  * In the Minecraft folder: `*/minecraft/structurize/schematics/`
    + **Note:** Use this folder when you want to have the same custom schematics across multiple worlds.
- For a multiplayer game, the schematics are always loaded from the world's directory under: `*/minecolonies/schematics/` directory.

#### I have a "*/minecolonies/01e6a291-8a01-4763-bcae-f3a8797b1d52/cache/" folder, what is that for?

When playing on a server, the server needs to send the schematics to the players so that the build tool's preview works. Those schematics are saved in Minecraft's directory under `*/structurize/{ServerUUID}/cache/`, where ServerUUID is the unique identifier of the server. Those directories can be safely removed as they are automatically created by the server when needed.

#### How to create <a id="customhuts">custom huts</a>?

To create new schematics for existing huts, there are some guidelines that you must follow: the scans MUST have the same footprint for the same style/hut's type; the scans must contain the hut's block, for example the Builder's Hut block for the [Builder's Hut](../../source/buildings/builder); the hut block need to be exactly at the same place and have the same rotation for each level; the scans' filenames need to follow the naming convention: {StyleName}/{HutName}{HutLevel}.blueprint. For example, for the Builder's Huts with the MyOwn style, we would have:

*myown/builder1.blueprint*
*myown/builder2.blueprint*
*myown/builder3.blueprint*
*myown/builder4.blueprint*
*myown/builder5.blueprint*

- **Note:** In the [build tool](../../source/items/buildtool), the extension is hidden. HutName can be any of the listed huts below. The maximum level is 5.

Once ready, move the myown folder into the schematics folder and start your game. You should be able to see it with the the build tool.

- **Note:** Remember that you need the appropriate hut in your inventory to be able to see the schematics in the build tool.

## Custom Hut Filenames

Here is a full list, up-to-date as of 9 February 2020, of the building names. **Please note** that *capitalization matters*.

| Level 1        | Level 2        | Level 3        | Level 4        | Level 5        |
| :------------- | :------------- | :------------- | :------------- | :------------- |
| archery1       | archery2       | archery3       | archery4       | archery5       |
| baker1         | baker2         | baker3         | baker4         | baker5         |
| barracks1      | barracks2      | barracks3      | barracks4      | barracks5      |
| barrackstower1 | barrackstower2 | barrackstower3 | barrackstower4 | barrackstower5 |
| blacksmith1    | blacksmith2    | blacksmith3    | blacksmith4    | blacksmith5    |
| builder1       | builder2       | builder3       | builder4       | builder5       |
| chickenherder1 | chickenherder2 | chickenherder3 | chickenherder4 | chickenherder5 |
| citizen1       | citizen2       | citizen3       | citizen4       | citizen5       |
| combatacademy1 | combatacademy2 | combatacademy3 | combatacademy4 | combatacademy5 |
| composter1     | composter2     | composter3     | composter4     | composter5     |
| cook1          | cook2          | cook3          | cook4          | cook5          |
| cowboy1        | cowboy2        | cowboy3        | cowboy4        | cowboy5        |
| crusher1       | crusher2       | crusher3       | crusher4       | crusher5       |
| deliveryman1   | deliveryman2   | deliveryman3   | deliveryman4   | deliveryman5   |
| enchanter1     | enchanter2     | enchanter3     | enchanter4     | enchanter5     |
| farmer1        | farmer2        | farmer3        | farmer4        | farmer5        |
| fisherman1     | fisherman2     | fisherman3     | fisherman4     | fisherman5     |
| florist1       | florist2       | florist3       | florist4       | florist5       |
| guardtower1    | guardtower2    | guardtower3    | guardtower4    | guardtower5    |
| library1       | library2       | library3       | library4       | library5       |
| lumberjack1    | lumberjack2    | lumberjack3    | lumberjack4    | lumberjack5    |
| miner1         | miner2         | miner3         | miner4         | miner5         |
| sawmill1       | sawmill2       | sawmill3       | sawmill4       | sawmill5       |
| shepherd1      | shepherd2      | shepherd3      | shepherd4      | shepherd5      |
| sifter1        | sifter2        | sifter3        | sifter4        | sifter5        |
| smeltery1      | smeltery2      | smeltery3      | smeltery4      | smeltery5      |
| stonemason1    | stonemason2    | stonemason3    | stonemason4    | stonemason5    |
| stonesmeltery1 | stonesmeltery2 | stonesmeltery3 | stonesmeltery4 | stonesmeltery5 |
| swineherder1   | swineherder2   | swineherder3   | swineherder4   | swineherder5   |
| townhall1      | townhall2      | townhall3      | townhall4      | townhall5      |
| university1    | university2    | university3    | university4    | university5    |
| warehouse1     | warehouse2     | warehouse3     | warehouse4     | warehouse5     |

## Hut Requirements

| Building                                                | Requirements                                                         | Suggested           | 
| :-----------------------------------------------------: | :------------------------------------------------------------------: | :-----------------: | 
| [Archery](../../source/buildings/archery)               | 1 archery dummy per level (a hay bale with a button on it)           |                     | 
| [Bakery](../../source/buildings/bakery)                 | 1 furnace                                                            |                     | 
| [Barracks](../../source/buildings/barracks)             | 1 barracks tower per level (up to lvl 4)                             |                     |
| [Barracks Tower](../../source/buildings/barrackstower)  |                                                                      | 1 bed per level     |
| [Builder's Hut](../../source/buildings/builder)         |                                                                      | 1 rack per level    |
| [Citzen Hut](../../source/buildings/citizenhut)         | 1 bed per level                                                      |                     |
| [Combat Academy](../../source/buildings/combatacademy)  | 1 combat dummy per level (a pumpkin on top of a bale of hay)         |                     |
| [Composter's Hut](../../source/buildings/composter)     | 1 [barrel](../../source/items/barrel) per level                      |                     |
| [Restaurant](../../source/buildings/restaurant)         | 1 furnace per level                                                  |                     |
| [Dyer's Hut](../../source/buildings/dyer)               | 1 furnace                                                            |                     |
| [Flower Shop](../../source/buildings/flowershop)        | 4 [compost blocks](../../source/items/compost) per level             |                     |
| [Glassblower's Hut](../../source/buildings/glassblower) | 1 furnace per level                                                  |                     |
| [Guard Tower](../../source/buildings/guardtower)        |                                                                      | 1 bed per level     |
| [Hospital](../../source/buildings/hospital)             | 1 bed per level                                                      |                     |
| [Library](../../source/buildings/library)               | Bookshelves                                                          |                     |
| [Mine](../../source/buildings/mine)                     | A mineshaft                                                          |                     |
| [School](../../source/buildings/school)                 | 2 carpets per level                                                  | 4 carpets per level |
| [Smeltery](../../source/buildings/school)               | 1 furnace per level                                                  |                     |
| [Stone Smeltery](../../source/buildings/stonesmeltery)  | 1 furnace per level                                                  |                     |
| [Plantation](../../source/buildings/plantation)         | 4 per level: brick under sand, cobble under sand, sand next to water |                     |
| [Tavern](../../source/buildings/tavern)                 | 4 beds, [horizontal barrels](../../source/items/barrel_horizontal) and/or [vertical barrels](../../source/items/barrel_vertical), a dining room |                     |
| [University](../../source/buildings/university)         | Bookshelves                                                          |                     |
| [Warehouse](../../source/buildings/warehouse)           | [Racks](../../source/items/racks) (more each level)                  |                     |

## Level Requirements

| Level          | Requirements          | 
| :------------: | :-------------------: | 
| Level 1        | Very Easy - Wooden    | 
| Level 2        | Easy - Iron           | 
| Level 3        | Medium - Nether       | 
| Level 4        | Difficult - Ocean     |
| Level 5        | Very Difficult - End  | 

<br>
<br>

## Tips on Building

### Do
<ul>
  <li>Make all levels of a hut have the same footprint for x, y, and z</li>
  <li>Place the hut block in the same location with the same rotation</li>
  <li>Make sure all chests and [racks](../../source/items/rack) are in the same location through all levels</li>
  <li>Use [solid placeholder blocks](../../source/items/placeholderblocks) at or below ground level</li>
  <li>Use [light placeholder blocks](../../source/items/placeholderblocks) where you want to keep any existing block (including from level to level), like the [Barracks Towers](../../source/buildings/barrackstower) in the [Barracks](../../source/buildings/barracks) schematic</li>
  <li>Use only vanilla blocks or Structurize blocks (officially)</li>
  <li>Use Books and Quills instead of blank books</li>
  <li>If building upgradable deco, add the deco controller with the name of your deco item, LunaDragonStar (the schematics admin) will fix the pathing that goes in it to match where she puts it in the files</li>
</ul>

### Don't 
<ul>
  <li>Use unobtainable items in builds (no command blocks, petrified wood, infested blocks, or mob heads (including player heads))</li>
  <li>Change someone else's style (officially) unless specifically asked to do so</li>
</ul>

## Additional Information

#### How to override some built-in schematics?

Simply create a schematic file with the same style/name. For instance, to override the [Builder's Hut](../../source/buildings/builder) wooden level 1, create a schematic file name called wooden/builder1.blueprint.

#### How to use custom huts?

The custom huts need to be copied in the schematics folder. Once copied, you can start your singleplayer or multiplayer game as usual. You should see them in the [build tool](../../source/items/buildtool) (if holding the hut block).

#### How to allow my players to use their own huts' schematics on my server?

You will have to copy them yourself in the schematics folder on the server and restart it.

#### How to allow my players to use their scanned decoration schematics on my server?

Edit the configuration file and set allowPlayerSchematics to true. This allows the player to use their own decorations. It is not possible for the player to use their own huts' schematics. You can also limit the number of players' schematics at any given time by editing maxCachedSchematics (default is 100). When the limit is reached, the server will start deleting unused schematics.

#### How to disable built-in schematics completely?

Edit the configuration file and set ignoreSchematicsFromJar to true. Be aware: things will break if some huts' schematics are missing. 
