---
type: building
building: forester
layout: building
---
{% capture content %}
The Forester's Hut is where the Forester will go in between chopping down trees. The Forester will cut down any tree in an approximate 150 block area (from themselves) that is not in a hut schematic and doesn't have cobblestone placed beneath it.

**Note:** In addition to axes for chopping down trees, Foresters require hoes for breaking leaves.
{% endcapture %}
{% capture infobox %}
{% include infobox/building.html %}
{% endcapture %}
{% include page-infobox-wrapper.html content=content infobox=infobox %}

## Forester's Hut GUI

{% include contentblock/building/main-gui.html header="When accessing the Forester's Hut block by right-clicking on it, you will see a GUI with different options. You start on the main tab:" image="../../assets/images/gui/forestergui1.png" %}

{% include contentblock/building/other-gui.html header="The second tab of the GUI is <strong>Custom Recipes</strong>." content="Here you can see all the crafting recipes this hut knows.  The arrows allow you to move them up or down in priority.  You are also able to disable specific recipes." image="../../assets/images/gui/forestergui2.png" %}

{% include contentblock/building/other-gui.html header="The third tab of the GUI is <strong>Saplings</strong>." content="It shows a list of recognized saplings the Forester can work with, even modded ones (if coded correctly). Here you can turn on or off which type of trees the Forester will chop down. (The black box at the top is to search for saplings.)" image="../../assets/images/gui/forestergui3.png" %}

{% include contentblock/building/other-gui.html header="The fourth tab of the GUI is <strong>Tasks</strong>." content="This tab shows you any requests the hut is working on, and where it is going." image="../../assets/images/gui/forestergui4.png" %}

{% include contentblock/building/settings-gui.html key="forester" header="The fifth tab of the GUI is <strong>Settings</strong>. It has three options:" image="../../assets/images/gui/forestergui5.png" %}

{% include contentblock/building/other-gui.html header="The sixth tab of the GUI is <strong>Tool</strong>." content="This will give you a define area tool so you can select a specific area for the Forester to work. Right click one corner of the area you want, then left click the opposite corner, and this will set a rectangle inside which the Forester will search for trees. Vertical coordinates do not affect this too much; keeping them all around the same y-level can avoid unintentional bugs, though." image="../../assets/images/gui/forestergui6.png" %}

{% include contentblock/building/stock-gui.html buildingname="Forester's Hut" header="The seventh tab of the GUI is <strong>Minimum Stock</strong>. It has one button:" image="../../assets/images/gui/forestergui7.png"%}