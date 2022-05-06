---
type: building
building: chickenfarmer
layout: building
---
{% capture content %}
The Chicken Farmer's Hut is where the Chicken Farmer will raise chickens, collect eggs, and butcher chickens for food. You will have to capture and bring in two chickens to the Chicken Farmer's Hut, as the Chicken Farmer will not catch and bring in any chickens.

**Note:** The Chicken Farmer will only keep two chickens alive per hut level, so at level 5 they will have ten chickens in their holding pens to breed and butcher. This means they will be faster at producing and collecting meat, drops, and other byproducts, like eggs. So:

| Building Level | Chickens Housed |
| -------------- | --------------- |
| 1              | 2               |
| 2              | 4               |
| 3              | 6               |
| 4              | 8               |
| 5              | 10              |
{% endcapture %}
{% capture infobox %}
{% include infobox/building.html %}
{% endcapture %}
{% include page-infobox-wrapper.html content=content infobox=infobox %}

## Chicken Farmer's Hut GUI

{% include contentblock/building/main-gui.html header="When accessing the Chicken Farmer's Hut block by right-clicking on it, you will see a GUI with different options. You start on the main tab:" image="../../assets/images/gui/chickenfarmergui1.png" %}

{% include contentblock/building/stock-gui.html buildingname="Chicken Farmer's Hut" header="The second tab of the GUI is <strong>Minimum Stock</strong>. It has one button:" image="../../assets/images/gui/chickenfarmergui2.png" %}

{% include contentblock/building/settings-gui.html key="chickenfarmer" header="The third tab of the GUI is <strong>Settings</strong>." image="../../assets/images/gui/chickenfarmergui3.png" %}