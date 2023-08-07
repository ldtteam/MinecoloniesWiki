---
type: building
building: blacksmith
layout: building
---
{% capture content %}
### Note: The {% building %} cannot be built until you have a level 3 {% building_link mine %} (or three level 1 Mines, or another equivalent) and have finished the research in the {% building_link university %}.
<br>

The Blacksmith is a 3x3 crafter and can make any vanilla tools, armor, swords, and shields (no bows or redstone items). The Blacksmith will work when they receive a request for any of those items from another worker. 

**Note:** You will need to teach the Blacksmith the recipes of the items you want them to create. The number of items the Blacksmith can learn are listed below:

| Building Level | Number of Recipes |
|----------------|-------------------|
| 1              | 10                |
| 2              | 20                |
| 3              | 40                |
| 4              | 80                |
| 5              | 160               |

Additionally, upon reaching level 5, the Blacksmith learns the nine netherite recipes (shovel, hoe, pickaxe, axe, sword, helmet, chestplate, leggings, and boots), which count toward the recipe total above.

When a colonist is requesting a tool from the Blacksmith with multiple accepted levels, the Blacksmith will craft whichever tool type is highest in their list of recipes that they have the materials for (when you teach them a new recipe, it'll go on the bottom).
{% endcapture %}
{% capture infobox %}
{% include infobox/building.html %}
{% endcapture %}
{% include infobox/wrapper.html content=content infobox=infobox %}

## Blacksmith's Hut GUI

{% include contentblock/building/main-gui.html header="When accessing the Blacksmith's Hut block by right-clicking on it, you will see a GUI with different options. You start on the main tab:" image="../../assets/images/gui/blacksmithgui.png" %}

{% include contentblock/building/other-gui.html header="The second tab of the GUI is <strong>Crafting Recipes</strong>." content="Here you can see all the crafting recipes this hut knows.  The arrows allow you to move them up or down in priority.  You are also able to disable specific recipes.<p><strong> Teach Recipe:</strong> When clicking teach recipe, it opens a crafting grid which allows you to teach this hut recipes (not the worker).</p>" image="../../assets/images/gui/blacksmithgui2.png" %}

{% include contentblock/building/other-gui.html header="The third tab of the GUI is <strong>Tasks</strong>." content="This tab shows you any requests the hut is working on, and where it is going." image="../../assets/images/gui/blacksmithgui3.png" %}

{% include contentblock/building/settings-gui.html key="blacksmith" header="The fourth tab of the GUI is <strong>Settings</strong>." image="../../assets/images/gui/blacksmithgui4.png" %}