---
type: building
building: cowhand
layout: building
---
{% capture content %}
The Cowhand's Hut is where the Cowhand will breed, butcher, and milk (if you have the option enabled) cows for food and leather. You will have to capture and bring in two cows to the Cowhand's Hut, as the Cowhand will not catch and bring in any cows.

**Note:** The Cowhand will only keep two cows alive per hut level, so at level 5 they will have ten cows in their holding pens to breed and butcher. This means they will be faster at producing and collecting meat and leather. So:


| Building Level | Cows Housed |
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

## Cowhand's Hut GUI

{% include contentblock/building/main-gui.html header="When accessing the Cowhand's Hut block by right-clicking on it, you will see a GUI with different options. You start on the main tab:" image="../../assets/images/gui/cowhandgui1.png" %}

{% include contentblock/building/stock-gui.html buildingname="Cowhand's Hut" header="The second tab of the GUI is <strong>Minimum Stock</strong>. It has one button:" image="../../assets/images/gui/cowhandgui2.png" %}

{% include contentblock/building/settings-gui.html key="cowhand" header="The third tab of the GUI is <strong>Settings</strong>." image="../../assets/images/gui/cowhandgui3.png" %}