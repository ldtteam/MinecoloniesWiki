---
type: building
building: rabbithutch
layout: building
---
{% capture content %}
 The Rabbit Hutch is where the Rabbit Herder will raise and butcher rabbits. You will have to capture and bring in two rabbits to the Rabbit Hutch, as the Rabbit Herder will not catch and bring in any rabbits.

**Note:** The Rabbit Herder will only keep two rabbits alive per hut level, so at level 5 they will have ten rabbits in their holding pens to breed and butcher. This means they will be faster at producing and collecting meat and other drops.

| Building Level | Rabbits Housed |
| -------------- | -------------- |
| 1              | 2              |
| 2              | 4              |
| 3              | 6              |
| 4              | 8              |
| 5              | 10             |
{% endcapture %}
{% capture infobox %}
{% include infobox/building.html %}
{% endcapture %}
{% include page-infobox-wrapper.html content=content infobox=infobox %}

## Rabbit Hutch GUI

{% include contentblock/building/main-gui.html header="When accessing the Rabbit Hutch hut block by right-clicking on it, you will see a GUI with different options. You start on the main tab:" image="../../assets/images/gui/rabbithutchgui1.png" %}

{% include contentblock/building/stock-gui.html buildingname="Rabbit Hutch" header="The second tab of the GUI is <strong>Minimum Stock</strong>. It has one button:" image="../../assets/images/gui/rabbithutchgui2.png" %}

{% include contentblock/building/settings-gui.html key="rabbithutch" header="The third tab of the GUI is <strong>Settings</strong>." image="../../assets/images/gui/rabbithutchgui3.png" %}