---
type: building
building: composter
layout: building
---
{% capture content %}
### Note: The Composter's Hut cannot be built until you have a level 3 [Farm](../../source/buildings/farm) (or three level 1 Farms, or another equivalent) and have finished the research in the [University](../../source/buildings/university).
<br> 

The Composter's Hut is where the Composter will turn organic materials into [compost](../../source/items/compost), which can be used by the [Farmer](../../source/workers/farmer) or [Florist](../../source/workers/florist) to fertilize crops or flowers. They can also create dirt if you have the setting enabled, which the [Builder](../../source/workers/builder) can use in buildings. The Composter uses [compost barrels](../../source/items/compostbarrel) to make compost or dirt.

**Hint:** The higher the level of the Composter's Hut, the more compost barrels the Composter will be able to use. So:


| Building Level | Compost Barrels |
| :------------: | :-------------: |
|       1        |        1        |
|       2        |        2        |
|       3        |        3        |
|       4        |        4        |
|       5        |        5        |
{% endcapture %}
{% capture infobox %}
{% include infobox/building.html %}
{% endcapture %}
{% include page-infobox-wrapper.html content=content infobox=infobox %}

## Composter's Hut GUI

{% include contentblock/building/main-gui.html header="When accessing the Composter's Hut block by right-clicking on it, you will see a GUI with different options. You start on the main tab:" image="../../assets/images/gui/compostergui1.png" %}

{% include contentblock/building/other-gui.html header="The second tab of the GUI is <strong>Items to Compost</strong>." content="
  <ul>
    <li><strong>Items to compost:</strong> Here you will see a list of all the items that were recognized for the composter to use, including modded items. All items are off by default. You can then select which items you want the composter to use by clicking on the button. The black box at the top lets you search for items.</li>
    <li><strong>Reset to Default:</strong> Resets all items to off.</li>
  </ul>" image="../../assets/images/gui/compostergui2.png" %}

{% include contentblock/building/settings-gui.html key="composter" header="The third tab of the GUI is <strong>Settings</strong>." image="../../assets/images/gui/compostergui3.png" %}