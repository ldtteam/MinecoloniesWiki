---
type: building
building: barracks
layout: building
---
{% capture content %}
### Note: The Barracks cannot be built until you have a level 3 {% building_link guardtower %} (or three level 1 Guard Towers, or another equivalent) and have finished the research in the {% building_link university %}. 
<br>

The Barracks is the ultimate protection for your colony. Each Barracks can hold multiple {% building_link barrackstower %} within its structure. The Barracks Towers (unlike the normal {% building_link guardtower %}) will employ *and* house one Guard for every level built, for a total of 5 Guards per Barracks Tower! Each new Guard will need a bed in a house in order to spawn. However, once they are hired at the Barracks Tower, that becomes their new residence and the bed in the house will open up for another new citizen. Currently, all official-style Barracks contain 4 Barracks Towers for a total of 20 Guards per Barracks for your colony. However, custom styles can have more or fewer than 4 Barracks Towers. Colonists like feeling safe, so building Barracks close to colonists' work and homes can improve their [happiness](../../source/systems/happinessandsaturation).

| Barracks Level | Max # of Barracks Towers | Max Level of Barracks Towers |
|----------------|--------------------------|------------------------------|
| 1              | 1                        | 1                            |
| 2              | 2                        | 2                            |
| 3              | 3                        | 3                            |
| 4              | 4                        | 4                            |
| 5              | 4                        | 5                            |

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
