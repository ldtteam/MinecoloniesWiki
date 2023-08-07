---
type: building
building: library
layout: building
---
{% capture content %}
### Note: The Library cannot be built until you finish the research in the {% building_link university %}.

The Library is a way for you to raise your adult citizens' Intelligence skill, which influences all other skill increases (at other jobs). A citizen will randomly level up their Intelligence as long as they're assigned to the Library. Being a Library Student is their full-time job, so you can't have one citizen work at the Library and another worker hut at the same time.

Two citizens can study per Library level. So: 

| Building Level | Citizens Educated at a Time |
| -------------- | --------------------------- |
| 1              | 2                           |
| 2              | 4                           |
| 3              | 6                           |
| 4              | 8                           |
| 5              | 10                          |

**Hint:** Paper and books help Library Students increase their skills faster.
{% endcapture %}
{% capture infobox %}
{% include infobox/building.html %}
{% endcapture %}
{% include infobox/wrapper.html content=content infobox=infobox %}

## Library GUI

{% include contentblock/building/main-gui.html header="When accessing the Library hut block by right-clicking on it, you will see a GUI with different options. You start on the main tab:" image="../../assets/images/gui/librarygui.png" %}

{% include contentblock/building/stock-gui.html buildingname="Library" header="The second tab of the GUI is <strong>Minimum Stock</strong>. It has one button:" image="../../assets/images/gui/minstockgui.png" %}