---
type: building
building: flowershop
layout: building
---
{% capture content %}
### Note: The Flower Shop cannot be built until you have a level 3 [Composter's Hut](../../source/buildings/composter) (or three level 1 Composter's Huts, or another equivalent) and have finished the research in the [University](../../source/buildings/university).
<br>

The Flower Shop is where your Florist will grow flowers for your colony, if given [compost](../../source/items/compost) and an axe.

**Hint:** The higher the level of the Flower Shop, the more daily output the Florist can handle. So:

| Building Level | Number of Plants |
| -------------- | ---------------- |
| 1              | 4                |
| 2              | 8                |
| 3              | 12               |
| 4              | 16               |
| 5              | 20               |
{% endcapture %}
{% capture infobox %}
{% include infobox/building.html %}
{% endcapture %}
{% include infobox/wrapper.html content=content infobox=infobox %}

## Flower Shop GUI

{% include contentblock/building/main-gui.html header="When accessing the Flower Shop's Hut block by right-clicking on it, you will see a GUI with different options. You start on the main tab:" image="../../assets/images/gui/flowershopgui1.png" %}

{% include contentblock/building/other-gui.html header="The second tab of the GUI is <strong>Plantables</strong>." content="This shows a list of items the Florist can plant. As the Florist is leveled up, your Florist will be able to grow more types of flowers. At level 3 or higher, you can toggle the plantables on or off. The black box at the top lets you search for plants." image="../../assets/images/gui/flowershopgui2.png" %}

{% include contentblock/building/stock-gui.html buildingname="Flower Shop's Hut" header="The third tab of the GUI is <strong>Minimum Stock</strong>. It has one button:" image="../../assets/images/gui/flowershopgui3.png"%}
