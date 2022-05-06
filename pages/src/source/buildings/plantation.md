---
type: building
building: plantation
layout: building
---
{% capture content %}
### Note: The Plantation cannot be built until you have a level 3 [Farm](../../source/buildings/farm) (or three level 1 Farms, or another equivalent) and have finished the research in the [University](../../source/buildings/university).
<br>

The Plantation is where the Planter will grow either sugar cane, bamboo, or cactus.

The Plantation's level determines how many crops the Planter can plant at a time.

| Plantation Level | Crops Grown |
| ---------------- | ----------- |
| 1                | 4           |
| 2                | 8           |
| 3                | 12          |
| 4                | 16          |
| 5                | 20          |

The Planter can also craft paper, books, sugar, and anything made with bamboo. The Planter will only make these items when they have been taught the recipes, receive a request for an item, and have the needed materials.

**Note:** The Planter can only learn a certain amount of recipes per their hut level. 

| Building Level | Number of Recipes |
| :------------: | :---------------: |
|       1        |        10         |
|       2        |        20         |
|       3        |        40         |
|       4        |        80         |
|       5        |        160        |
{% endcapture %}
{% capture infobox %}
{% include infobox/building.html %}
{% endcapture %}
{% include page-infobox-wrapper.html content=content infobox=infobox %}

## Plantation GUI

{% include contentblock/building/main-gui.html header="When accessing the Plantation hut block by right-clicking on it, you will see a GUI with different options. You start on the main tab:" image="../../assets/images/gui/plantationgui1.png" %}

{% include contentblock/building/other-gui.html header="The second tab of the GUI is <strong>Crafting Recipes</strong>." content="Here you can see all the crafting recipes this hut knows.  The arrows allow you to move them up or down in priority.  You are also able to disable specific recipes.<p><strong> Teach Recipe:</strong> When clicking teach recipe, it opens a crafting grid which allows you to teach this hut recipes (not the worker).</p>" image="../../assets/images/gui/plantationgui2.png" %}

{% include contentblock/building/other-gui.html header="The third tab of the GUI is <strong>Tasks</strong>." content="This tab shows you any requests the hut is working on, and where it is going." image="../../assets/images/gui/plantationgui3.png" %}

{% include contentblock/building/settings-gui.html key="plantation" header="The fourth tab of the GUI is <strong>Settings</strong>." image="../../assets/images/gui/plantationgui4.png" %}