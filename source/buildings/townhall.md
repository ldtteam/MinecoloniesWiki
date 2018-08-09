# Town Hall

## Basics

**Note:** The Town Hall block can **not** be crafted, this is intentional. It can however be obtained either by crafting and placing the supply ship *OR* the supply camp (only 1 of these two options can be placed in the World by each player). If needed it can also be obtained in Creative like any other block or by commands. (check our [Commands](../tutorials/commands) page).

**Perks! - Perks! - Perks!**

For each level of the Town Hall you build you will spawn 1 additional Citizen! So: 

| Building Level | New Citizens |
| ----- | ----- |
| 1 | 1 |
| 2 | 2 |
| 3 | 3 |
| 4 | 4 |
| 5 | 5 |

<br><br>

The Town Hall is the central part of your Town. once you have placed the "Town Hall block" the area of your Town will be established and the entire area will be protected. The protection system includes blocking any player from placing/breaking or interacting with blocks of *any* kind, setting lava, water or TNT, explosions won't damage your blocks. Once established it will also show in the "informational screen" (pressing F3 - bottom left). Be sure to use your [Building Tool](../tutorials/building_tool) to place the building. 

The protected area of your Colony (once the Town Hall has been placed) will be a 8 chunks radius, measured from where you placed your Town Hall block the first time (Default config). Therefore, plan carefully where you want to place your Town Hall. 128 blocks (8 chunks x 8 chunks) in every direction will be your protected Town area including mountains, hills, lakes, oceans, caves, world generated structures, etc. from bedrock to the sky limit.

- **Note**: You can configure your own Town area radius in the configuration options of the mod or the the minecolonies.cfg file inside the ```../minecraft/config/``` folder of your own world. (see minecolonies config server section for details)

Due to the protected area of each Town, you have to scout carefully your surroundings to make sure you are clear of any other Towns nearby preventing you from placing your Town hall or limit your Town area in that direction.

If there is another Colony too close to your current position you won't be able to place a Town Hall.

If you want to know whether there is a colony too close to your current position we included some information in the debug screen (Displayed when you press the F3 button) which contains a real time tracker showing you the distance to the next colony, the colony you're currently in, or if there is no colony close at all plus - if there is a colony close to your current position - the required distance to place your Town Hall.

<p style="text-align:center;"><img src="../../assets/images/tutorial/next_colony.png" alt="Next Colony"></p>

<p style="text-align:center;"><img src="../../assets/images/tutorial/players_colony.png" alt="Player's Colony"></p>

<p style="text-align:center;"><img src="../../assets/images/tutorial/no_colony.png" alt="No Colony"></p>

For example, in the official Minecolonies server it will be the default 8 chunk radius (8 + 8 + 1 {center Chunk where TownHall was placed} = 17 chunks or 272 total blocks required). It therefore, will tell you: "Next colony is XXX blocks away. (272 required to place a Colony)."

After you have carefully decided where you want to place your Town Hall (Remember, the position where you placed the Town Hall block will be the center of your Town's protected area. Once placed, the area will be set and cannot be changed). Use your <a href="#build_tool">Build Tool</a> to place the Town Hall block, once you "commit" to the placement of the Town Hall, the Town hall block will be set and your Citizens will automagically appear. You can right click the Town Hall block to look at its graphical user interface.

**Note:** Once you place your Town Hall block this will set the CENTER of your Town's protected radius. If you decide that your actual Town Hall building be "Built" in a different location (within your now set Town's protected radius) you can break the block and place it again with your Building Tool. Removing and replacing the Town Hall block will NOT remove the Protected area of your Town. The only way to remove the Protected area of your Town so that you can place a Town Hall somewhere else is by a person with /op or /admin permission deleting your Town through [commands](../tutorials/commands). 

### Town Hall GUI

You may use the tabs on the left side to switch between different categories:

- **Information.-** This will give you some statistics about your citizens and workers.
  
[File:TH_InformationGUI.png]

- **Actions.-** This is the most important tab. You are able to see your Towns name and various Buttons here:
    Build Town Hall (also upgrades it),
    Repair Town Hall (in case it gets "accidentally" modified),
    Recall Citizens (not implemented yet)
    Toggle Specialization (future use)
    and Rename Colony (in case you don't want it to have the player's name or coop playing and decide on a colony name).

[File:TH_ActionsGUI.png]

- **Permissions.-** It will show the Owner(s) and other players invited to your Town to collaborate. You can add a player and give him a status in your Town. Each status will have certain privileges in the protection system.

[File:TH_Permissions.png]

- **Citizens.-** Just the names of the Citizens. Your npc citizens, not players.

[File:TH_CitizensGUI.png]

- **Settings.-** You may set it automatic hiring mode or Manual mode. Every time a building is finished and you have an unemployed citizen, he may be automatically assigned or you can manually assign him according to his "Traits".

[File:TH_SettingsGUI.png]

- **Work Orders.-** Here you will see the work orders the [Builder](../../source/workers/builder) has in the order they have been assigned. The builder will not start another order until he has successfully completed the top one. Here you can delete any build order he has or change their priorities. When you delete a work order which is currently being built the builder will stop building and only continue when you assign him to this building again.

[File:TH_WorkOrdersGUI.png]
