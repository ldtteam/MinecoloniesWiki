---
type: building
building: barrackstower
layout: building
---
{% capture content %}
The Barracks Towers will employ and house one Guard for every level built (unlike the normal {% building_link guardtower %}, which can only have 1 Guard at a time). Each new Guard will need a bed in a house in order to spawn. However, once they are hired at the Barracks Tower, that becomes their new residence and the bed in the house will open up for another new citizen (child or recruit).

| Barracks Tower Level | Max # of Guards |
|----------------------|-----------------|
| 1                    | 1               |
| 2                    | 2               |
| 3                    | 3               |
| 4                    | 4               |
| 5                    | 5               |

The Barracks Tower locations are predetermined by the {% building_link barracks %} that you choose. They are placed in specific locations to fit within the Barracks. 

| Barracks Level | Max # of Barracks Towers | Max Level of Barracks Towers |
|----------------|--------------------------|------------------------------|
| 1              | 1                        | 1                            |
| 2              | 2                        | 2                            |
| 3              | 3                        | 3                            |
| 4              | 4                        | 4                            |
| 5              | 4                        | 5                            |

Guard(s) will patrol a set distance around their tower, which is based on their tower's level.

| Tower Level | Max Patrol Distance |
|-------------|---------------------|
| 1           | 80 blocks           |
| 2           | 110 blocks          |
| 3           | 140 blocks          |
| 4           | 170 blocks          |
| 5           | 200 blocks          |

**Note:** If you place Barracks/Barracks Towers near your colony border and level them up, your border will [expand](../../source/systems/border).
{% endcapture %}
{% capture infobox %}
{% include infobox/building.html %}
{% endcapture %}
{% include infobox/wrapper.html content=content infobox=infobox %}

## Barracks Tower GUI

{% include contentblock/building/main-gui.html header="When accessing the Barracks Tower hut block by right-clicking on it, you will see a GUI with different options. You start on the main tab:" image="../../assets/images/gui/barrackstowergui1.png" %}

{% include contentblock/building/stock-gui.html buildingname="Barracks Tower" header="The second tab of the GUI is <strong>Minimum Stock</strong>. It has one button:" image="../../assets/images/gui/barrackstowergui2.png" %}

{% include contentblock/building/other-gui.html header="The third tab of the GUI is <strong>Selection Tools</strong>." content="Click the <strong>Obtain Tools</strong> button to get the Guard Scepter. Right-clicking on a block with the Guard Scepter will set it as a guard spot or a patrol point. " image="../../assets/images/gui/barrackstowergui3.png" %}

{% include contentblock/building/other-gui.html header="The fourth tab of the GUI is <strong>Hostiles</strong>." content="You can tell the Guard which mobs to attack and which ones to ignore. All hostile mobs are set to on by default." image="../../assets/images/gui/barrackstowergui4.png" %}

{% include contentblock/building/settings-gui.html key="barrackstower" header="The fifth tab of the GUI is <strong>Settings</strong>." image="../../assets/images/gui/barrackstowergui5.png" %}