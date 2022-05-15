---
type: building
building: townhall
layout: building
---
{% capture content %}
The Town Hall is the central part of your colony.

**Note:** The Town Hall block **cannot** be crafted until **after** you have already placed the Town Hall you get from the [Supply Ship/Camp](../../source/items/supplycampandship). If needed, it can also be obtained in creative mode like any other block or by commands.
{% endcapture %}
{% capture infobox %}
    {% include infobox/building.html %}
{% endcapture %}
{% include page-infobox-wrapper.html content=content infobox=infobox %}


## Starting a New Colony

### Scouting the Area

Make sure you scout your area carefully before you decide where you want to place your Town Hall. Your colony will start with a 4 chunk radius (4 chunks in each direction) from the Town Hall block. Make sure this is where you want your colony to be.

### Placing your Town Hall

After you have carefully decided where you want to place your Town Hall (remember, the position where you placed the Town Hall block will be the center of your colony's protected area. Once placed, the area will be set and cannot be changed), use your [build tool](../items/buildtool) to place the Town Hall block.

Right-click the ground in the area you want to place the Town Hall. The building GUI will display showing the 3D preview of the building. You will be able to use the arrow buttons to move the building to the location you desire. 

**Note:** Make sure you use the + and - options in the GUI to make sure you have the ground level of the hut where you want the ground level to be. Not all hut blocks sit on the ground.

Once you commit to the placement of the Town Hall (green checkmark), the Town Hall block will be placed.

### Creating your Colony

Once you have placed the Town Hall block you will need to right-click on it and select Create New Colony.
<br>
<img alt="Creating New Colony" src="../../assets/images/gui/th_colonycreationGUI.png"/>

A new colony will be created, the area of your colony will be established, and the entire area will be protected.

### Protection Area

When you start a colony, the area that is initially set also has protections added to it. The protection system includes blocking any player from placing/breaking or interacting with blocks of any kind, placing lava or water, and placing/lighting TNT. Once established it will also show in the informational screen.

The protected area of your colony (once the Town Hall has been placed) will depend on the [configuration](../../source/misc/configfile), but will be 4 chunks radius by default, measured from where you placed your Town Hall block the first time. Therefore, plan carefully where you want to place your Town Hall. Your protected colony area includes mountains, hills, lakes, oceans, caves, world generated structures, etc. from bedrock to the sky limit.

Due to the protected area of each colony, you have to carefully scout your surroundings to make sure you are clear of any other colonies nearby preventing you from placing your Town Hall or limiting your colony area in that direction.

**Note:** Once you place your Town Hall block, this will be the CENTER of your Town's protected radius. If you decide that you want your actual Town Hall building to be built in a different location (within your currently set protected radius), you can break the block and place it again with your build tool. Removing and replacing the Town Hall block will NOT remove the Protected area of your Town. The only way to remove the protected area of your colony so that you can place a Town Hall somewhere else is by a person with OP or admin permission deleting your colony through [commands](../../source/systems/command).

If there is another colony too close to your current position, you won't be able to place a Town Hall.

If you try to place another Town Hall outside of your protected area, you will get a message:

![Placing a Second Town Hall](../../assets/images/gui/th_secondplace.png)

### Deleting a Colony

To delete your colony, place a Town Hall outside your current colony border (either by mining or deconstructing your old Town Hall or by crafting a new one). Interacting with the newly placed Town Hall outside of the current borders will prompt you to delete your colony.
Alternatively, if you have the proper permissions, you can use [commands](../../source/systems/command).

## Town Hall GUI

*You can use the tabs on the left side to switch between different categories.*

### **Information:** This is the overall information section of the Town Hall GUI.

{% include contentblock/basic.html
content="**Page 1:** Here you will see some statistics on your citizens, like the number of citizens you have out of your max. Green is less than 90% of your max, orange is above 90%, and red is full. If it's red, hovering over the numbers will show what you need to do to get more citizens. The page also shows how many of each type of worker you have.

**Page 2:** Here you will see the overall happiness of the colony's citizens and any events that happened within the colony (the newest events are at the bottom). You can click the button to switch to a permission log, which will show any illegal actions that happened in the colony (like if a player tried to break a block when they aren't allowed to). Clicking the plus next to an illegal action will change it to a legal action if the player tries to do it again. For more information, see the [Protection system](../../source/systems/protection) and the Permission tab of the Town Hall GUI."
image="../../assets/images/gui/th_information.png" alt="Town hall GUI information tab" %}

### **Actions:** This is the most important section.

{% include contentblock/basic.html
content="**Page 1:** Here you will see the name of your colony as well as the building level of the Town Hall. And the buttons:
- **Build Options:** Lets you create a build, upgrade, reposition, or repair build order for the Town Hall. To learn more about the building system, please visit the [Builder](builder) page.
- **Rename Colony:** To change the name of your colony (from Your Username's Colony, which is the default) to anything you want.
- **Hire Mercenaries:** Here you can hire mercenaries to help defend your colony. Be warned, they're mean and will steal from citizens!

**Page 2:** This is only enabled if PVP is turned on in the [config file](../../source/misc/configfile). Here you have:
- **Allies:** Other colonies that you have added as allies and that have confirmed your colony as an ally as well.
- **Feuds:** Other colonies that you have added as a feud and that have confirmed your colony as a feud as well."
image="../../assets/images/gui/th_actions.png" alt="Town hall GUI actions tab" %}

### **Permissions:** Here you can invite other players to your colony to collaborate.

{% include contentblock/basic.html
content="**Page 1:** Here you type the name of the player you want to add.

**Page 2:** Shows the list of players that have ben added as well as their current rank. You can click on the \"-\" or \"+\" to give them a higher rank or lower rank."
image="../../assets/images/gui/th_permissions.png" alt="Town hall GUI permissions first tab" %}

{% include contentblock/basic.html
content="**Page 3:** Here you can select the rank that you would like to manage.

**Page 4:** Here are the individual permissions (for the rank you have selected on the previous page) that you can toggle *ON* or *OFF*, giving each rank the permission you want. **Note:** the Fight Guards permission causes Guards to treat the player as an enemy and attack them. It is only recommended for Hostile players."
image="../../assets/images/gui/th_permissions2.png" alt="Town hall GUI permissions second tab" %}

{% include contentblock/basic.html
content="**Page 5:** Where you enter the position (X, Y, Z) of the block that you want to make free for interaction.

**Page 6:** Here you will see the list of block positions that you have added as free for interaction and can remove them."
image="../../assets/images/gui/th_permissions3.png" alt="Town hall GUI permissions third tab" %}

### **Citizens:** This section displays the names and skill levels of the citizens in your colony.

{% include contentblock/basic.html
content="**Page 1:** When you select a citizen, their stats and job will appear here. You can also recall them to the Town Hall block on this page.

**Page 2:** Here you will see a list of the citizens in your colony. Select a citizen to see their skills."
image="../../assets/images/gui/th_citizens.png" alt="Town hall GUI citizens tab" %}

### **Settings:** This section is where you can control how your citizens will be hired and assigned housing in your colony, among other things.

{% include contentblock/basic.html
content="**Page 1:** There are four buttons here:
- **Worker hiring mode:** Clicking on this button lets you switch between automatic or manual. If it's in automatic mode, you can't fire or hire any citizen from any worker hut and the best unemployed citizen will be hired for you. In manual mode you will be able to *hire* and *fire* whichever citizen you want at any time.
- **Housing assignment mode:** Clicking on this button lets you switch between automatic or manual. If it's in automatic mode, citizens will be assigned a house as soon as they spawn (if housing is available). In manual mode, you can select which citizens will be housed in each [House](house) or [Tavern](tavern). This is better if you have a large colony and many workers spread out in a large area so you can house your citizens as close as possible to their workplace.
- **Print help messages:** Clicking on this button lets you choose whether MineColonies help messages will appear in the chat. It is recommended that this be turned on for first-time players.
- **Kids will be born:** Clicking on this button lets you choose whether new kids will be born in your colony.

**Page 2:** There are three buttons here:
- **Pick Team Color:** Whatever color you pick from here, your Guards will have a glow of this color around them when you put them in follow mode at their [Guard Tower](guardtower) or [Barracks Tower](barrackstower). This is for the PVP system, so you know which Guards are yours when you are fighting. Your citizens' names will also be in this color.
- **Edit Colony Flag:** Clicking this button will open up a banner designer where you can design your colony banner. Your [Knights](../../source/workers/knight) will wear the finished design on their shields, and it is also used in some schematics.
  ![Town hall GUI banner designer](../../assets/images/gui/th_colonybannerdesigner.png)
- **Pick Citizen Style:** The option controls how the citizens look. This feature is exclusive for donators."
image="../../assets/images/gui/th_settings.png" alt="Town hall GUI settings tab" %}

### **Work Orders:** Here you will see the work orders your

{% include contentblock/basic.html
header="[Builders](../../source/workers/builder) have in the order they have been assigned. Builders will not start another order until they have successfully completed the top one."
content="**Page 1:** Blank page except for the header (future use).

**Page 2:** Here are all the build orders for this colony (including decorations and your own schematics as well as huts). Your Builders will complete the builds from top to bottom, and you can change the priority of the builds by moving them up or down in the list. You can also delete work orders. When you delete a work order that is currently being built, the Builder will stop building and will continue where they left off if you create the work order again."
image="../../assets/images/gui/th_workorders.png" alt="Town hall GUI work orders tab" %}

### **Happiness: **This is the section for the global happiness of your colony so you can see what area needs more attention to raise the happiness level.

{% include contentblock/basic.html
content="**Page 1:** The happiness indices. You can keep track of the areas that will lower or raise the happiness of your citizens here. The colors, in order from best to worst, are:
- Green (positive)
- Blue (neutral)
- Yellow (slightly negative)
- Red (negative)

There's also black, which will show up if something went wrong.

**Page 2:** Blank for now (future use)."
image="../../assets/images/gui/th_happiness.png" alt="Town hall GUI happiness tab" %}
