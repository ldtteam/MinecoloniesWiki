---
type: building
building: sawmill
layout: building
---
{% capture content %}
### Note: The Sawmill cannot be built until you have a level 3 [Forester's Hut](../../source/buildings/forester) (or three level 1 Forester's Huts, or another equivalent) and have finished the research in the [University](../../source/buildings/university).
<br>

The Sawmill is where the Carpenter will craft any items made of at least 75% wood that do not include ingots, stone, redstone (or produce a redstone signal), or string. The Carpenter will also craft a few other items, including [compost barrels](../../source/items/compostbarrel) and [racks](../../source/items/rack), as well as [Domum Ornamentum](../../source/dependencies/domumornamentum) blocks that include wood. For them to do this, you must teach the Sawmill the recipes and the Carpenter must receive a request for an item from another worker.

**Hint:** The number of recipes you can teach the Sawmill doubles per building level. So:

| Sawmill Level | Number of Recipes |
| :-----------: | :---------------: |
|       1       |        10         |
|       2       |        20         |
|       3       |        40         |
|       4       |        80         |
|       5       |        160        |
{% endcapture %}
{% capture infobox %}
{% include infobox/building.html %}
{% endcapture %}
{% include infobox/wrapper.html content=content infobox=infobox %}

## Sawmill GUI

{% include contentblock/building/main-gui.html header="When accessing the Sawmill hut block by right-clicking on it, you will see a GUI with different options. You start on the main tab:" image="../../assets/images/gui/sawmillgui1.png" %}

{% include contentblock/building/other-gui.html header="The second tab of the GUI is <strong>Crafting Recipes</strong>." content="Here you can see all the crafting recipes this hut knows.  The arrows allow you to move them up or down in priority.  You are also able to disable specific recipes.<p><strong> Teach Recipe:</strong> When clicking teach recipe, it opens a crafting grid which allows you to teach this hut recipes (not the worker).</p>" image="../../assets/images/gui/sawmillgui2.png" %}

{% include contentblock/building/other-gui.html header="The third tab of the GUI is <strong>Custom Recipes</strong>." content="Here you can see all the <a href='../items/shingles'>Architect Cutter</a> recipes this hut knows.  The arrows allow you to move them up or down in priority.  You are also able to disable specific recipes.<p><strong> Teach Recipe:</strong> When clicking teach recipe, it opens a crafting grid for the Architect Cutter.  Input 1 is the top left slot of the cutter, input 2 is the top right, and input 3 the bottom left slot in the cutter. When you have put the items in the slots, you will see various items below the input slots, the sawmill can create ALL of those items from the recipe you have input.</p>" image="../../assets/images/gui/sawmillgui3.png" %}

{% include contentblock/building/other-gui.html header="The fourth tab of the GUI is <strong>Tasks</strong>." content="This tab shows you any requests the hut is working on, and where it is going." image="../../assets/images/gui/sawmillgui4.png" %}

{% include contentblock/building/settings-gui.html key="sawmill" header="The fifth tab of the GUI is <strong>Settings</strong>." image="../../assets/images/gui/sawmillgui5.png" %}
