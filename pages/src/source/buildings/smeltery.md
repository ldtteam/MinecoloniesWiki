---
type: building
building: smeltery
layout: building
---
{% capture content %}
### Note: The Smeltery cannot be built until you have a level 2 {% building_link mine %} (or two level 1 Mines) and have finished the research in the {% building_link university %}.
<br>

The Smeltery is where the Smelter will smelt ores into ingots.

**Hint:** The higher the level of the Smeltery, the more furnaces the Smelter will be able to use. A higher level will also have a higher chance to double and even triple the ingot output per block of ore. In 1.16, the Smelter's Strength level will sometimes determine the chance to double or triple the ingot output of ores, according to the Smeltery level. In 1.18+, the smelter applies Fortune to the ores they smelt instead. See the Smelter's page for how their strength affects the output.
{% endcapture %}
{% capture infobox %}
{% include infobox/building.html %}
{% endcapture %}
{% include infobox/wrapper.html content=content infobox=infobox %}

## Smeltery GUI

{% include contentblock/building/main-gui.html header="When accessing the Smeltery hut block by right-clicking on it, you will see a GUI with different options. You start on the main tab:" image="../../assets/images/gui/smelterygui1.png" %}

{% include contentblock/building/other-gui.html header="The second tab of the GUI is <strong>Custom Recipes</strong>." content="Here you can see all the crafting recipes this hut knows. The arrows allow you to move them up or down in priority. You are also able to disable specific recipes." image="../../assets/images/gui/smelterygui2.png" %}

{% include contentblock/building/other-gui.html header="The third tab of the GUI is <strong>Fuel</strong>." content="Listed here are items that can be used by the Smeltery as fuel in their furnaces. Simply turn on any that you want your Smelter to use, and a Courier will deliver those items to the Smelter when they need fuel. All items are off by default. The black box at the top is to search for items." image="../../assets/images/gui/smelterygui3.png" %}

{% include contentblock/building/stock-gui.html buildingname="Smeltery" header="The fourth tab of the GUI is <strong>Minimum Stock</strong>. It has one button:" image="../../assets/images/gui/smelterygui4.png" %}

{% include contentblock/building/other-gui.html header="The fifth tab of the GUI is <strong>Smeltable Ore</strong>." content="Listed here are all ore blocks the Smeltery can smelt. All ores are on by default. Turn off any ores you do not want smelted. All coded ores (even if they come from other mods) are automatically added to this list. If you have ores that are not on the list, they can be added to the <a href='../../source/misc/configfile'>config file</a>. The black box at the top is to search for items." image="../../assets/images/gui/smelterygui5.png" %}