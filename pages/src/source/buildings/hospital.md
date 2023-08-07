---
type: building
building: hospital
layout: building
---
{% capture content %}
### Note: The Hospital cannot be built until you have finished the research in the {% building_link university %}.

The Hospital is where injured or sick citizens go. The Healer will heal them with various items. The possible diseases can be changed in the [config file](../../source/misc/configfile), however, these are the defaults:

| Disease             | Items Needed to Cure          |
| ------------------- | ----------------------------- |
| Influenza (the flu) | Carrot and Potato             |
| Measles             | Dandelion, Kelp, and Poppy    |
| Smallpox            | Honey Bottle and Golden Apple |

The higher the level of the Hospital, the more people can be healed at a time. So:

| Building Level | Number of Beds |
| -------------- | -------------- |
| 1              | 1              |
| 2              | 2              |
| 3              | 3              |
| 4              | 4              |
| 5              | 5              |
{% endcapture %}
{% capture infobox %}
{% include infobox/building.html %}
{% endcapture %}
{% include infobox/wrapper.html content=content infobox=infobox %}

## Hospital GUI

{% include contentblock/building/main-gui.html header="When accessing the Hospital hut block by right-clicking on it, you will see a GUI with different options. You start on
the main tab:" image="../../assets/images/gui/hospitalgui.png" %}

{% include contentblock/building/stock-gui.html buildingname="Hospital" header="The second tab of the GUI is <strong>Minimum Stock</strong>. It has one button:" image="../../assets/images/gui/minstockgui.png" %}