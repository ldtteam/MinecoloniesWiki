---
title: Minecolonies Wiki
layout: default
---
# Town Hall

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/townhall.png" alt="Town Hall's Hut" />
    <hr />
</div>

# About the Building

### Basics

**Note:** The Town Hall block can **not** be crafted, until after you have already placed the TownHall you get from the supply ship/camp. If needed it can also be obtained in Creative like any other block or by commands. (check our [Commands](../systems/commands) page).

If you try to place another TownHall, you will get a message <br> <img src="../../assets/images/gui/th_secondplace.png" alt="Placing a Second TownHall" />

The Town Hall is the central part of your Town. once you have placed the "Town Hall block" the area of your Town will be established and the entire area will be protected. The protection system includes blocking any player from placing/breaking or interacting with blocks of *any* kind, setting lava, water or TNT, explosions won't damage your blocks. Once established it will also show in the "informational screen" (pressing F3 - bottom left). Be sure to use your [Building Tool](../items/buildingtool) to place the building. 

The protected area of your Colony (once the Town Hall has been placed) will be a 8 chunks radius, measured from where you placed your Town Hall block the first time (Default config). Therefore, plan carefully where you want to place your Town Hall. 128 blocks (8 chunks x 8 chunks) in every direction will be your protected Town area including mountains, hills, lakes, oceans, caves, world generated structures, etc. from bedrock to the sky limit.

- **Note**: You can configure your own Town area radius in the configuration options of the mod or the the minecolonies.cfg file inside the ```../minecraft/config/``` folder of your own world. (see minecolonies config server section for details)

Due to the protected area of each Town, you have to scout carefully your surroundings to make sure you are clear of any other Towns nearby preventing you from placing your Town hall or limit your Town area in that direction.

If there is another Colony too close to your current position you won't be able to place a Town Hall.

If you want to know whether there is a colony too close to your current position we included some information in the debug screen (Displayed when you press the F3 button) which contains a real time tracker showing you the distance to the next colony, the colony you're currently in, or if there is no colony close at all plus - if there is a colony close to your current position - the required distance to place your Town Hall.

<p style="text-align:center;"><img src="../../assets/images/tutorial/next_colony.png" alt="Next Colony"></p>

<p style="text-align:center;"><img src="../../assets/images/tutorial/players_colony.png" alt="Player's Colony"></p>

<p style="text-align:center;"><img src="../../assets/images/tutorial/no_colony.png" alt="No Colony"></p>

For example, in the official Minecolonies server it will be the default 8 chunk radius (8 + 8 + 1 {center Chunk where TownHall was placed} = 17 chunks or 272 total blocks required). It therefore, will tell you: "Next colony is XXX blocks away. (272 required to place a Colony)."

After you have carefully decided where you want to place your Town Hall (Remember, the position where you placed the Town Hall block will be the center of your Town's protected area. Once placed, the area will be set and cannot be changed). Use your [Building Tool] (../items/buildingtool) to place the Town Hall block, once you "commit" to the placement of the Town Hall, the Town hall block will be set and your Citizens will automagically appear. You can right click the Town Hall block to look at its graphical user interface.

**Note:** Once you place your Town Hall block this will set the CENTER of your Town's protected radius. If you decide that your actual Town Hall building be "Built" in a different location (within your now set Town's protected radius) you can break the block and place it again with your Building Tool. Removing and replacing the Town Hall block will NOT remove the Protected area of your Town. The only way to remove the Protected area of your Town so that you can place a Town Hall somewhere else is by a person with /op or /admin permission deleting your Town through [Commands](../systems/commands). 


# Town Hall GUI

<li><i>You may use the tabs on the left side to switch between different categories:</i></li>

<br>

### <strong>Information:</strong> This is the overall information section of the Town Hall GUI
   
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/th_information.png" class="img-fluid mx-auto" alt="TH GUI Information Tab">
  </div>
  <div class="col-sm-12 col-md">
    <ul>
     <li><strong>Page 1: </strong>you will see some statistics on your Citizens: The number of Citizens you have and a listing of the unemployed and workers. It will show you how many and what type you have.</li>
     <br>
     <li><strong>Page 2: </strong>you will see the overall happiness of the Town's Citizens as well as any "Events" that the Town is having (future use atm).</li>
    </ul>
  </div>
</div>  

### <strong>Actions:</strong> This is the most important section. Here you will see your Town's name and the Buttons:

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/th_actions.png" class="img-fluid mx-auto" alt="TH GUI Actions Tab">
  </div>
  <div class="col-sm-12 col-md">
    <p><strong>Page 1: </strong>Here you will see the name of your Colony and the buttons:</p>
    <ul>
     <li><strong>Build Building/Switch Style.- </strong> The button will say; "Build Building" when no level has been built yet, then it will say; "Switch Style", so you can change the style (at same level you have currently) or also to "upgrade" to next level.</li><br>
     <li><strong>Repair Building.- </strong>So the builder can "restore" the building to it's original schematic, when alterations have changes something.</li><br>
     <li><strong>Recall Citizens.- </strong>So you can make <i>ALL</i> citizens (wokers or unemployed) to gather at the Town Hall block location, they will be teleported there. .</li><br>
     <li><strong>Toggle Specialization.- </strong>For future use, has no purpose at the moment.</li><br>
     <li><strong>Rename Colony.- </strong>To change the name of the Colony (from player's name) to anything you want, f.e. in coop play and everyone decides on a name.</li>
    </ul>
   <p><strong>Page 2: </strong>This is for the PVP part of the mod, here you have:</p>
    <ul>
     <li><strong>Allies.- </strong>Other Colonies that you have added as "Allies" and they have confirmed your Colony as ally as well.</li><br>
     <li><strong>Feuds.- </strong>Other Colonies that you have added as "Feud" and they have confirmed your Colony as feud as well.</li>
    </ul>
  </div>
</div>  

### <strong>Permissions:</strong> Here you can invite other players to your Town to collaborate. 

<p><strong>Permissions Pg. 1 & 2: </strong>You can add a player and give him a <i>Rank</i> in your Town. Each Rank will have certain privileges in the protection system that you can configure. Also you can set individual players as "Hostile".</p>

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/th_permissions.png" class="img-fluid mx-auto" alt="TH GUI Permissions Tab">
  </div>
  <div class="col-sm-12 col-md">
    <ul>
     <li><strong>Page 1: </strong>Here you can type the name of the player you want to add to your list and grant them certain permissions.</li><br>
     <li><strong>Page 2: </strong>It shows you the list of players that have ben added as well as their current rank. You can click on the "-" or "+" to give them more rank or less rank.</li>
    </ul>
  </div>
</div>  

---
<p><strong>Permissions Pg. 3 & 4: </strong>Here you check and manage the individual permissions for each Rank.</p>

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/th_permissions2.png" class="img-fluid mx-auto" alt="TH GUI Permissions Tab Pg.2">
  </div>
  <div class="col-sm-12 col-md">
    <ul>
     <li><strong>Page 3: </strong>Here are the buttons for you to select each "Rank" that you would like to view and manage the individual permissions for.</li><br>
     <li><strong>Page 4: </strong>Here are the individual permissions (for the rank you have selected on the previous page) tha you can toggle <i>ON</i> or <i>OFF</i>, giving each rank the permission <b>you</b> want.</li>
    </ul>
  </div>
</div>  

---
<p><strong>Permissions Pg. 5 & 6: </strong>In this section you can add a certain block's position that will bypass the protection system for "interaction". Any player will be able to interact with that block regardless of having a rank or not in your Colony.</p>

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/th_permissions3.png" class="img-fluid mx-auto" alt="TH GUI Permissions Tab Pg.3">
  </div>
  <div class="col-sm-12 col-md">
    <ul><br>
     <li><strong>Page 5: </strong>The field where you can enter the position (X, Y, Z) of the block that you want to make "Free for interaction".</li><br>
     <li><strong>Page 6: </strong>Here you will see the list of block positions that you have added as free for interaction.</li>
    </ul>
  </div>
</div>  

### <strong>Citizens: </strong>This section just displays the names of the citizens in your Colony.

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/th_citizens.png" class="img-fluid mx-auto" alt="TH GUI Citizens Tab">
  </div>
  <div class="col-sm-12 col-md">
    <ul>
     <br>
     <li><strong>Page 1: </strong>Blank page except for the header (future use).</li><br>
     <li><strong>Page 2: </strong>Here you will see the list of names of the citizens in your Colony.</li>
    </ul>
  </div>
</div>  

### <strong>Settings: </strong>This section is where you can control how your Citizens will be hired and assigned housing in your Colony.

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/th_settings.png" class="img-fluid mx-auto" alt="TH GUI Settings Tab">
  </div>
  <div class="col-sm-12 col-md">
    <ul>
    <br>
     <li><strong>Page 1: </strong>There are two buttons here:</li>
       <ul>
       <br>
        <li><strong>Worker hiring mode: </strong>Clicking on this button you can switch between automatic or manual. If it's in automatic mode, you can't fire or hire any Citizen from any Worker's hut and the best "unemployed" citizen will be hired for you. In manual mode you will be able to <i>Hire</i> and <i>Fire</i> which ever citizen you want at any time.</li><br>
        <li><strong>Housing assignment mode: </strong>Clicking on this button you can switch between automatic or manual. if it's in automatic mode the citizens will be assigned as soon as they are spawned and housing is available. In manual mode, you can select which Citizen will be housed at in each Citizen Hut (this is specially better if you have a large Colony and many workers spread out in a large area, so they are housed as close as possible to the workplace).</li>
       </ul>
     <li><strong>Page 2: </strong>Pick team Color: What ever color you pick from here, your guards will have a "glow", of this color, around them when you place them in "follow" mode. this is for the PVP system, so you know which are your guards when you are fighting. </li>
    </ul>
  </div>
</div>  

### <strong>Work Orders: </strong>Here you will see the work orders the [Builder](../../source/workers/builder) has in the order they have been assigned. The builder will not start another order until he has successfully completed the top one.

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/th_workorders.png" class="img-fluid mx-auto" alt="TH GUI Work Orders Tab">
  </div>
  <div class="col-sm-12 col-md">
    <ul>
     <br>
     <li><strong>Page 1: </strong>Blank page except for the header (future use).</li><br>
     <li><strong>Page 2: </strong>Here are all the <i>Build</i> orders listed, that have been created by you (including decorations and your own schematics as well as the mod's buildings). The builder will complete the builds in that order, from top to bottom. Here you can <i>Manage</i> the priority of the builds and even delete work orders. When you delete a work order which is currently being built the builder will stop building and will continue where he left off when you create the build/upgrade order again.</li>
    </ul>
  </div>
</div>  

### <strong>Happiness: </strong>This is the section for the global happiness of your Town, so you can see what area needs more attention to raise the happiness level.

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/th_happiness.png" class="img-fluid mx-auto" alt="TH GUI Work Orders Tab">
  </div>
  <div class="col-sm-12 col-md">
    <ul>
     <br>
     <li><strong>Page 1: </strong>The happiness indices. You can keep track of the 3 main areas that will lower or raise the happiness of your Town. There are 3 colors; Green (everything is fine), Orange (needs attention it's below optimal level), Red (Immediate attention is needed - it's in critically low level).</li><br>
     <li><strong>Page 2: </strong>Intentionally blank for now.</li>
    </ul>
  </div>
</div>  

---  
  
  <br>
  
### **To see build options please see the [Builder](../../source/workers/builder) Page**  


