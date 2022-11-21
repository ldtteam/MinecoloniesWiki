---
type: building
building: fisher
layout: building
---
{% capture content %}
The Fisher's Hut is where the Fisher will catch fish. The Fisher requires a fishing rod and a body of water of a minimum of 6 blocks wide x 5 blocks long x 1 block tall to be able to work, and the water must be near the hut.

<p style="text-align:center;"><img src="../../assets/images/misc/pond.png" alt="Pond"></p>

Upgrading the Fisher's Hut will expand the range at which the Fisher can fish, and the higher the level of the Fisher's Hut, the more loot the Fisher will be fishing out (instead of fish). This includes prismarine and sponges!

**Note:** The Fisher will only catch fish and junk in most biomes.  If the Fisher is in an ocean biome, items from treasure category will also be caught.
{% endcapture %}
{% capture infobox %}
{% include infobox/building.html %}
{% endcapture %}
{% include infobox/wrapper.html content=content infobox=infobox %}

## Fisher's Hut GUI

{% include contentblock/building/main-gui.html header="When accessing the Fisher's Hut block by right-clicking on it, you will see a GUI with different options. You start on the main tab:" image="../../assets/images/gui/fishergui.png" %}

{% include contentblock/building/stock-gui.html buildingname="Fisher's Hut" header="The second tab of the GUI is <strong>Minimum Stock</strong>. It has one button:" image="../../assets/images/gui/minstockgui.png"%}
