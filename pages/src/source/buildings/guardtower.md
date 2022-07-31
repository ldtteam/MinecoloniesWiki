---
type: building
building: guardtower
layout: building
---
{% capture content %}
The Guard Tower will employ and house one Guard to protect your colony. The new Guard will need a bed in a house in order to spawn. However, once they are hired at the Guard Tower, that becomes their new residence and the bed in the house will open up for another new citizen (child or recruit). Colonists like feeling safe, so building Guard Towers close to colonists' work and homes can improve their [happiness](../../source/systems/happinessandsaturation). Additionally, if you place Guard Towers near your colony border and level them up, your border will [expand](../../source/systems/border).

The Guard will patrol a set distance around their tower, which is based on their tower's level.

| Tower Level | Max Patrol Distance |
| ----------- | ------------------- |
| 1           | 80 blocks           |
| 2           | 110 blocks          |
| 3           | 140 blocks          |
| 4           | 170 blocks          |
| 5           | 200 blocks          |

{% endcapture %}
{% capture infobox %}
{% include infobox/building.html %}
{% endcapture %}
{% include infobox/wrapper.html content=content infobox=infobox %}

## Guard Tower GUI

{% include contentblock/building/main-gui.html header="When accessing the Guard Tower hut block by right-clicking on it, you will see a GUI with different options. You start on
the main tab:" image="../../assets/images/gui/guardtowergui1.png" %}

{% include contentblock/building/stock-gui.html buildingname="Guard Tower" header="The second tab of the GUI is <strong>Minimum Stock</strong>. It has one button:" image="../../assets/images/gui/guardtowergui2.png" %}

{% include contentblock/building/other-gui.html header="The third tab of the GUI is <strong>Selection Tools</strong>." content="Click the <strong>Obtain Tools</strong> button to get the Guard Scepter. Right-clicking on a block with the Guard Scepter will set it as a guard spot or a patrol point. " image="../../assets/images/gui/guardtowergui3.png" %}

{% include contentblock/building/other-gui.html header="The fourth tab of the GUI is <strong>Hostiles</strong>." content="You can tell the Guard which mobs to attack and which ones to ignore. All hostile mobs are set to on by default." image="../../assets/images/gui/guardtowergui4.png" %}

{% include contentblock/building/settings-gui.html key="guardtower" header="The fifth tab of the GUI is <strong>Settings</strong>." image="../../assets/images/gui/guardtowergui5.png" %}
