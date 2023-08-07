---
type: building
building: dyer
layout: building
---
{% capture content %}
### Note: The Dyer cannot be built until you have a level 3 {% building_link flowershop %} (or three level 1 Flower Shops, or another equivalent) and have finished the research in the {% building_link university %}.
<br>

The Dyer's Hut is where the Dyer will craft dyes and dye other items, including red nether bricks and dark prismarine. They won't dye concrete or concrete powder, though. The Dyer will only do this if they receive a request from another worker and have the necessary materials. The Dyer's Hut automatically knows how to make green dye and red sand, but you must teach it the recipes for the other dyes and the dyed items.

**Hint:** The number of recipes you can teach the Dyer's Hut doubles per building level. So:

| Dyer's Hut Level | Number of Recipes |
|------------------|-------------------|
| 1                | 10                |
| 2                | 20                |
| 3                | 40                |
| 4                | 80                |
| 5                | 160               |

<br>

**Hint:** The higher the level of the Dyer's Hut, the more furnaces the Dyer will have available. The number of furnaces they *use* depends on their Creativity level. So:

| Dyer's Hut Level | Furnaces |
|------------------|----------|
| 1                | 1        |
| 2                | 2        |
| 3                | 3        |
| 4                | 4        |
| 5                | 5        |

**Hint:** The higher the Dyer's Dexterity level, the faster things will smelt. At high levels, they can go *much* faster than the player!
{% endcapture %}
{% capture infobox %}
{% include infobox/building.html %}
{% endcapture %}
{% include infobox/wrapper.html content=content infobox=infobox %}

## Dyer's Hut GUI

{% include contentblock/building/main-gui.html header="When accessing the Dyer's Hut block by right-clicking on it, you will see a GUI with different options. You start on the main tab:" image="../../assets/images/gui/dyergui1.png" %}

{% include contentblock/building/other-gui.html header="The second tab of the GUI is <strong>Crafting Recipes</strong>." content="Here you can see all the crafting recipes this hut knows.  The arrows allow you to move them up or down in priority.  You are also able to disable specific recipes.<p><strong> Teach Recipe:</strong> When clicking teach recipe, it opens a crafting grid which allows you to teach this hut recipes (not the worker).</p>" image="../../assets/images/gui/dyergui2.png" %}

{% include contentblock/building/other-gui.html header="The third tab of the GUI is <strong>Smelting Recipes</strong>." content="Here you can see all the smelting recipes this hut knows.  The arrows allow you to move them up or down in priority.  You are also able to remove any recipes you've taught them.<p><strong> Teach Recipe:</strong> When clicking teach recipe, it opens a furnace grid which allows you to teach this hut recipes (not the worker).  Place the item to smelt in the upper slot.</p>" image="../../assets/images/gui/dyergui3.png" %}

{% include contentblock/building/other-gui.html header="The fourth tab of the GUI is <strong>Fuel</strong>." content="Listed here are items that can be used by the Dyer as fuel in their furnaces. Simply turn on any that you want your Dyer to use, and a Courier will deliver those items to the Dyer when they need fuel.  All items are off by default.  The black box at the top is to search for items." image="../../assets/images/gui/dyergui4.png" %}

{% include contentblock/building/other-gui.html header="The fifth tab of the GUI is <strong>Tasks</strong>." content="This tab shows you any requests the hut is working on, and where it is going." image="../../assets/images/gui/dyergui5.png" %}

{% include contentblock/building/settings-gui.html key="dyer" header="The sixth tab of the GUI is <strong>Settings</strong>." image="../../assets/images/gui/dyergui6.png" %}