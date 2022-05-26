---
type: building
building: shepherd
layout: building
---
{% capture content %}
The Shepherd's Hut is where the Shepherd will breed and butcher sheep for food and wool. You will have to capture and bring in two sheep to the Shepherd's Hut, as the Shepherd will not catch and bring in any sheep.

**Note:** The Shepherd will only keep two sheep alive per hut level, so at level 5 they will have ten sheep in their holding pens to breed and butcher. This means they will be faster at producing and collecting meat and wool. So:


| Building Level | Sheep Housed |
| -------------- | ------------ |
| 1              | 2            |
| 2              | 4            |
| 3              | 6            |
| 4              | 8            |
| 5              | 10           |
{% endcapture %}
{% capture infobox %}
{% include infobox/building.html %}
{% endcapture %}
{% include infobox/wrapper.html content=content infobox=infobox %}

## Shepherd's Hut GUI

{% include contentblock/building/main-gui.html header="When accessing the Shepherd hut block by right-clicking on it, you will see a GUI with different options. You start on the main tab:" image="../../assets/images/gui/shepherdgui1.png" %}

{% include contentblock/building/stock-gui.html buildingname="Shepherd" header="The second tab of the GUI is <strong>Minimum Stock</strong>. It has one button:" image="../../assets/images/gui/shepherdgui2.png" %}

{% include contentblock/building/settings-gui.html key="shepherd" header="The third tab of the GUI is <strong>Settings</strong>." image="../../assets/images/gui/shepherdgui3.png" %}