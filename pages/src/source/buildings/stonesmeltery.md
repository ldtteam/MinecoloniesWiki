---
type: building
building: stonesmeltery
layout: building
---
{% capture content %}
### Note: The Stone Smeltery cannot be built until you have a level 3 {% building_link smeltery %} (or three level 1 Smelteries, or another equivalent) and have finished the research in the {% building_link university %}.
<br>

The Stone Smeltery is where the Stone Smelter will smelt cobblestone into stone, stone bricks into cracked stone bricks, clay balls into bricks, clay blocks into terracotta, terracotta into glazed terracotta, all types of stone into all types of smooth stone, and logs into charcoal. They can also pop chorus fruits! The Stone Smelter will only work when they have been taught the recipe, receive a request from another worker, and have the needed materials. 

**Special Note: Charcoal cannot be used as a fuel for making charcoal in the stone smeltery.**

**Hint:** The higher the level of the Stone Smeltery, the more furnaces the Stone Smelter will have available. The number of furnaces they *use* depends on their Athletics level. So:

| Building Level | Furnaces |
|----------------|----------|
| 1              | 1        |
| 2              | 2        |
| 3              | 3        |
| 4              | 4        |
| 5              | 5        |

**Hint:** The higher the Stone Smelter's Dexterity level, the faster things will smelt. At high levels, they can go *much* faster than the player!
{% endcapture %}
{% capture infobox %}
{% include infobox/building.html %}
{% endcapture %}
{% include infobox/wrapper.html content=content infobox=infobox %}

## Stone Smeltery GUI

{% include contentblock/building/main-gui.html header="When accessing the Stone Smeltery hut block by right-clicking on it, you will see a GUI with different options. You start on the main tab:" image="../../assets/images/gui/stonesmelterygui1.png" %}

{% include contentblock/building/other-gui.html header="The second tab of the GUI is <strong>Crafting Recipes</strong>." content="Here you can see all the crafting recipes this hut knows. The arrows allow you to move them up or down in priority. You are also able to disable specific recipes.<p><strong> Teach Recipe:</strong> When clicking teach recipe, it opens a crafting grid which allows you to teach this hut recipes (not the worker).</p>" image="../../assets/images/gui/stonesmelterygui2.png" %}

{% include contentblock/building/other-gui.html header="The third tab of the GUI is <strong>Fuel</strong>." content="Listed here are items that can be used by the Stone Smelter as fuel in their furnaces. Simply turn on any that you want your Stone Smelter to use, and a Courier will deliver those items to the Stone Smelter when they need fuel. All items are off by default. The black box at the top is to search for items." image="../../assets/images/gui/stonesmelterygui3.png" %}

{% include contentblock/building/other-gui.html header="The fourth tab of the GUI is <strong>Tasks</strong>." content="This tab shows you any requests the hut is working on, and where it is going." image="../../assets/images/gui/stonesmelterygui4.png" %}

{% include contentblock/building/settings-gui.html key="stonesmeltery" header="The fifth tab of the GUI is <strong>Settings</strong>." image="../../assets/images/gui/stonesmelterygui5.png" %}
