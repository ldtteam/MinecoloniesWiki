---
type: building
building: swineherd
layout: building
---
{% capture content %}
The Swineherd's Hut is where the Swineherd will breed and butcher pigs for food. You will have to capture and bring in two pigs to the Swineherd's Hut, as the Swineherd will not catch and bring in any pigs.

**Note:** The Swineherd will only keep two pigs alive per hut level, so at level 5 they will have ten pigs in their holding pens to breed and butcher. This means they will be faster at producing and collecting meat. So:

| Building Level | Pigs Housed |
| -------------- | ----------- |
| 1              | 2           |
| 2              | 4           |
| 3              | 6           |
| 4              | 8           |
| 5              | 10          |
{% endcapture %}
{% capture infobox %}
{% include infobox/building.html %}
{% endcapture %}
{% include page-infobox-wrapper.html content=content infobox=infobox %}

## Swineherd's Hut GUI

{% include contentblock/building/main-gui.html header="When accessing the Swineherd's Hut block by right-clicking on it, you will see a GUI with different options. You start on the main tab:" image="../../assets/images/gui/swineherdgui1.png" %}

{% include contentblock/building/stock-gui.html buildingname="Swineherd's Hut" header="The second tab of the GUI is <strong>Minimum Stock</strong>. It has one button:" image="../../assets/images/gui/swineherdgui2.png" %}

{% include contentblock/building/settings-gui.html key="swineherd" header="The third tab of the GUI is <strong>Settings</strong>." image="../../assets/images/gui/swineherdgui3.png" %}