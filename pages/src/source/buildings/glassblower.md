---
type: building
building: glassblower
layout: building
---
{% capture content %}
### Note: The Glassblower's Hut cannot be built until you have a level 3 [Smeltery](../../source/buildings/smeltery) (or three level 1 Smelteries, or another equivalent) and have finished the research in the [University](../../source/buildings/university).
<br>

The Glassblower's Hut is where the Glassblower will smelt sand into glass and make glass panes from glass blocks. For the Glassblower to work, they must receive a request from another worker and have the necessary materials, including fuel if they're smelting sand into glass. The Glassblower's Hut must also have been taught the crafting recipe for glass panes.

**Hint:** The number of recipes you can teach the Glassblower's Hut doubles per building level. So:

| Glassblower's Hut Level | Number of Recipes |
| :---------------------: | :---------------: |
|            1            |        10         |
|            2            |        20         |
|            3            |        40         |
|            4            |        80         |
|            5            |        160        |

**Hint:** The higher the level of the Glassblower's Hut, the more furnaces the Glassblower will have available. The number of furnaces they *use* depends on their Creativity level. So:

| Building Level | Furnaces |
| :------------: | :------: |
|       1        |    1     |
|       2        |    2     |
|       3        |    3     |
|       4        |    4     |
|       5        |    5     |

**Hint:** The higher the Glassblower's Focus level, the faster things will smelt. At high levels, they can go *much* faster than the player!
{% endcapture %}
{% capture infobox %}
{% include infobox/building.html %}
{% endcapture %}
{% include infobox/wrapper.html content=content infobox=infobox %}

## Glassblower's Hut GUI

{% include contentblock/building/main-gui.html header="When accessing the Glassblower's Hut block by right-clicking on it, you will see a GUI with different options. You start on the main tab:" image="../../assets/images/gui/glassblowergui1.png" %}

{% include contentblock/building/other-gui.html header="The second tab of the GUI is <strong>Crafting Recipes</strong>." content="Here you can see all the crafting recipes this hut knows.  The arrows allow you to move them up or down in priority.  You are also able to disable specific recipes.<p><strong> Teach Recipe:</strong> When clicking teach recipe, it opens a crafting grid which allows you to teach this hut recipes (not the worker).</p>" image="../../assets/images/gui/glassblowergui2.png" %}

{% include contentblock/building/other-gui.html header="The third tab of the GUI is <strong>Smelting Recipes</strong>." content="Here you can see all the smelting recipes this hut knows.  The arrows allow you to move them up or down in priority.  You are also able to remove any recipes you've taught them.<p><strong> Teach Recipe:</strong> When clicking teach recipe, it opens a furnace grid which allows you to teach this hut recipes (not the worker).  Place the item to smelt in the upper slot.</p>" image="../../assets/images/gui/glassblowergui3.png" %}

{% include contentblock/building/other-gui.html header="The fourth tab of the GUI is <strong>Custom Recipes</strong>." content="Here you can see all the <a href='../items/shingles'>Architect Cutter</a> recipes this hut knows.  The arrows allow you to move them up or down in priority.  You are also able to disable specific recipes.<p><strong> Teach Recipe:</strong> When clicking teach recipe, it opens a crafting grid for the Architect Cutter.  Input 1 is the top left slot of the cutter, input 2 is the top right, and input 3 the bottom left slot in the cutter. When you have put the items in the slots, you will see various items below the input slots, the Glassblower can create ALL of those items from the recipe you have input.</p>" image="../../assets/images/gui/glassblowergui4.png" %}

{% include contentblock/building/other-gui.html header="The fifth tab of the GUI is <strong>Fuel</strong>." content="Listed here are items that can be used by the Glassblower as fuel in their furnaces. Simply turn on any that you want your Glassblower to use, and a Courier will deliver those items to the Glassbower when they need fuel.  All items are off by default.  The black box at the top is to search for items." image="../../assets/images/gui/glassblowergui5.png" %}

{% include contentblock/building/other-gui.html header="The sixth tab of the GUI is <strong>Tasks</strong>." content="This tab shows you any requests the hut is working on, and where it is going." image="../../assets/images/gui/glassblowergui6.png" %}

{% include contentblock/building/settings-gui.html key="glassblower" header="The seventh tab of the GUI is <strong>Settings</strong>." image="../../assets/images/gui/glassblowergui7.png" %}