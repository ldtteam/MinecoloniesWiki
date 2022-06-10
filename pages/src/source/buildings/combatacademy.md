---
type: building
building: combatacademy
layout: building
---
{% capture content %}
### Note: The Combat Academy cannot be built until you have a level 3 [Barracks](../../source/buildings/barracks) (or three level 1 Barracks, or another equivalent) and have finished the research in the [University](../../source/buildings/university) .
<br> 

The Combat Academy is where your Knights in Training will train to become [Knights](../../source/workers/knight). This also allows them to level up without a risk of dying to mobs. A new Knight in Training will need a bed in a house in order to spawn. However, once they are hired at the Combat Academy, that becomes their new residence and the bed in the house will open up for another new citizen (child or recruit).

The number of students that can be trained at a time depends on the level of the Academy. 

| Combat Academy Level | Max # of Students |
| :------------------: | :---------------: |
|          1           |         1         |
|          2           |         2         |
|          3           |         3         |
|          4           |         4         |
|          5           |         5         |

The Knights in Training require a sword and shield to practice. They will attack the practice dummies, a pumpkin on top of a bale of hay. 

The Knights in Training are not actual Guards even though they will be dressed as Knight Guards. They will not help defend the colony.
{% endcapture %}
{% capture infobox %}
{% include infobox/building.html %}
{% endcapture %}
{% include infobox/wrapper.html content=content infobox=infobox %}

## Combat Academy GUI

{% include contentblock/building/main-gui.html header="When accessing the Combat Academy hut block by right-clicking on it, you will see a GUI with different options. You start on the main tab:" image="../../assets/images/gui/combatacademygui.png" %}

{% include contentblock/building/stock-gui.html buildingname="Combat Academy" header="The second tab of the GUI is <strong>Minimum Stock</strong>. It has one button:" image="../../assets/images/gui/minstockgui.png" %}