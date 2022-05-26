---
type: building
building: barracks
layout: building
---
{% capture content %}
### Note: The Barracks cannot be built until you have a level 3 [Guard Tower](../../source/buildings/guardtower) (or three level 1 Guard Towers, or another equivalent) and have finished the research in the [University](../../source/buildings/university). 
<br> 

The Barracks is the ultimate protection for your colony. The Barracks will hold 4 [Barracks Towers](../buildings/barrackstower) within its structure. The Barracks Towers (unlike the normal [Guard Towers](../../source/buildings/guardtower)) will employ *and* house one Guard for every level built! Each new Guard will need a bed in a house in order to spawn. However, once they are hired at the Barracks Tower, that becomes their new residence and the bed in the house will open up for another new citizen. Each Barracks Tower can house and employ 5 Guards for a total of 20 Guards for your colony. Colonists like feeling safe, so building Barracks close to colonists' work and homes can improve their [happiness](../../source/systems/happinessandsaturation).

| Barracks Level | Max # of Barracks Towers | Max Level of Barracks Towers |
| :------------: | :----------------------: | :--------------------------: |
|       1        |            1             |              1               |
|       2        |            2             |              2               |
|       3        |            3             |              3               |
|       4        |            4             |              4               |
|       5        |            4             |              5               |

**Note:** The Barracks has slightly higher border expansion than other buildings. See the [border system](../../source/systems/border) page for more information.
<br>
{% endcapture %}
{% capture infobox %}
{% include infobox/building.html %}
{% endcapture %}
{% include infobox/wrapper.html content=content infobox=infobox %}

## Barracks GUI

{% include contentblock/building/main-gui.html data=site.data.gui.barracks header="When accessing the House's hut block by right-clicking on it, you will see a GUI with different options. You start on the main tab:" image="../../assets/images/gui/barracksgui.png" %}

{% include contentblock/building/stock-gui.html buildingname="Barracks" header="The second tab of the GUI is <strong>Minimum Stock</strong>. It has one button:" image="../../assets/images/gui/minstockgui.png" %}