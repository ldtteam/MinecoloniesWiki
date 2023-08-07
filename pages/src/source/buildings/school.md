---
type: building
building: school
layout: building
---
{% capture content %}
### Note: The School cannot be built until you finish the research in the {% building_link university %}.

The School is where the Teacher will level up the Pupils' (children) Intelligence skill. Paper will increase the leveling speed of the Pupils. 

The level of the School determines how many Pupils can be taught at a time.

| School Level | Pupils Taught |
| ------------ | ------------- |
| 1            | 2             |
| 2            | 4             |
| 3            | 6             |
| 4            | 8             |
| 5            | 10            |
{% endcapture %}
{% capture infobox %}
{% include infobox/building.html %}
{% endcapture %}
{% include infobox/wrapper.html content=content infobox=infobox %}

## School GUI

{% include contentblock/building/main-gui.html header="When accessing the School hut block by right-clicking on it, you will see a GUI with different options. You start on the main tab:" image="../../assets/images/gui/schoolgui.png" %}

{% include contentblock/building/stock-gui.html buildingname="School" header="The second tab of the GUI is <strong>Minimum Stock</strong>. It has one button:" image="../../assets/images/gui/minstockgui.png" %}