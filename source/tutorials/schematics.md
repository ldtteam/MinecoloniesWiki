---
title: Minecolonies Wiki
layout: default
---
# Schematics

Schematics are files containing block and entity information of a certain area a player scanned with the [Scan Tool](../items/scantool) in-game. You can use the scan tool and scan ANY building or structure you like in SSP or even SMP and then have your builder "Build it" for you (provided that you give him all the materials needed of course).

- [Schematics](#schematics)
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
{: .box .py-3 .pr-4 }

## Placing a Schematic.

Once you have scanned a structure, you can use the build tool to have your builder "build it" for you. Once you right click with the Build Tool you will have to select "My Schematics" (in the left drop down menu) and on the right side drop down menu you will see the scans that you have made.There is also a "Rename" button where you can change the name that was originally assigned to the scan (for example: SCAN_1533778290135) to whatever you like. You can also "delete" any of your saved scans.

![Schematic](../../assets/images/tutorial/schematic.png)

## FAQ

This is a FAQ section to answer most questions regarding schematics in Minecolonies.

#### What and Where is the scans folder?

The scans folder is where the schematics are saved after performing a scan using the scan tool in Minecolonies. This is a client side only directory which is located in Minecraft's folder under: `*/minecolonies/scans/`. Freshly scanned schematics can be found in `*/minecolonies/scans/new/` unless they have been renamed in game. This directory is shared between all your Single Player games and Multi Player games.

#### Where is the schematic folder?

Custom schematics need to be copied inside the schematic folder: `*\minecolonies\schematics\` (or `*\minecolonies\schematics\` for Mac and Linux).

The location of this folder depends of the type of game:

- For a Single Player game, there are 2 possible locations:
  * In the world folder: `*/minecraft/saves/(World Name)/minecolonies/schematics/`
    + **Note:** Use this directory when you want to use custom schematics restricted to the world. When this directory exists (even empty), minecolonies will completely ignore the other directory.
  * In the Minecraft's folder: `*/minecraft/minecolonies/schematics/`
    + **Note:** Use this folder when you want to have the same custom schematics across multiple worlds.
- For a Multiplayer game, the schematics are always loaded from the world's directory under: `*/minecolonies/schematics/` directory.

#### I have a "*/minecolonies/01e6a291-8a01-4763-bcae-f3a8797b1d52/cache/" folder, what is that for?

When playing on a server, the server needs to send the schematics to the players so that the build tool's preview works. Those schematics are saved in Minecraft's directory under `*/minecolonies/{ServerUUID}/cache/`, where ServerUUID is the unique identifier of the server. Those directories can be safely removed as they are automatically created by the server when needed.

#### How to create custom huts?

To create new schematics for existing huts, there are some guidelines that you must follow: The scans MUST have the same footprint for the same style/Hut's type; The scans must contain the hut's chest i.e. builder's chest for the builder's hut, Citizen's chest for the Citizen's hut and so on. The hut chest need to be exactly at the same place and have the same rotation for each level; The scans' filenames need to follow the naming convention: {StyleName}/{HutName}{HutLevel}.nbt. For example, for the builder's huts with the MyOwn style, we would have:

*MyOwn/Builder1.nbt*
*MyOwn/Builder2.nbt*
*MyOwn/Builder3.nbt*
*MyOwn/Builder4.nbt*
*MyOwn/Builder5.nbt*

- **Note:** in the build tool, the extension is hidden. HutName can be Builder, Citizen, Deliveryman, Farmer, Fisherman, GuardTower, Lumberjack, Miner, TownHall and WareHouse. The maximum level is 5.

Once ready, move the MyOwn folder into the schematics folder and start your game. You should be able to see it with the the build tool.

- **Note:** Remember that you need the appropriate chest in your inventory to be able to see the schematics in the build tool.

Custom Hut Filenames

Here is a full list, up-to-date as of 13 February 2018, of the building names. **Please note**, *capitalization matters*.

| Level 1        | Level 2        | Level 3        | Level 4        | Level 5        |
| :------------- | :------------- | :------------- | :------------- | :------------- |
| Baker1         | Baker2         | Baker3         | Baker4         | Baker5         |
| Barracks1      | Barracks2      | Barracks3      | Barracks4      | Barracks5      |
| BarracksTower1 | BarracksTower2 | BarracksTower3 | BarracksTower4 | BarracksTower5 |
| Builder1       | Builder2       | Builder3       | Builder4       | Builder5       |
| ChickenHerder1 | ChickenHerder2 | ChickenHerder3 | ChickenHerder4 | ChickenHerder5 |
| Citizen1       | Citizen2       | Citizen3       | Citizen4       | Citizen5       |
| Cook1          | Cook2          | Cook3          | Cook4          | Cook5          |
| Cowboy1        | Cowboy2        | Cowboy3        | Cowboy4        | Cowboy5        |
| Deliveryman1   | Deliveryman2   | Deliveryman3   | Deliveryman4   | Deliveryman5   |
| Farmer1        | Farmer2        | Farmer3        | Farmer4        | Farmer5        |
| Fisherman1     | Fisherman2     | Fisherman3     | Fisherman4     | Fisherman5     |
| GuardTower1    | GuardTower2    | GuardTower3    | GuardTower4    | GuardTower5    |
| Lumberjack1    | Lumberjack2    | Lumberjack3    | Lumberjack4    | Lumberjack5    |
| Miner1         | Miner2         | Miner3         | Miner4         | Miner5         |
| Shepherd1      | Shepherd2      | Shepherd3      | Shepherd4      | Shepherd5      |
| Smeltery1      | Smeltery2      | Smeltery3      | Smeltery4      | Smeltery5      |
| SwineHerder1   | SwineHerder2   | SwineHerder3   | SwineHerder4   | SwineHerder5   |
| TownHall1      | TownHall2      | TownHall3      | TownHall4      | TownHall5      |
| WareHouse1     | WareHouse2     | WareHouse3     | WareHouse4     | WareHouse5     |

#### How to override some built-in schematics?

Simply create a schematic file with the same style/name. For instance to override the Builder's hut level 1 in wooden, create a schematic file name called wooden/Builder1.nbt.

#### How to use custom huts?

The custom huts need to be copied in the schematics folder. Once copied, you may start your single player or your multiplayer game as usual, you should see them in the build tool.

#### How to allow my players to use their own huts' schematics on my server?

You will have to copy them yourself in the schematics folder on the server and restart it.

#### How to allow my players to use their scanned schematics on my server?

Edit the configuration file and set allowPlayerSchematics to true. This allow the player to use its own decorations. It is not possible for the player to use is own huts' schematics. You can also limit the number of players' schematics at any given time by editing maxCachedSchematics (default is 100). When the limit is reacher, the server will start deleting unused schematics.

#### How to disable built-in schematics completely?

Edit the configuration file and set ignoreSchematicsFromJar to true. Be aware: things will break if some huts' schematics are missing. 
