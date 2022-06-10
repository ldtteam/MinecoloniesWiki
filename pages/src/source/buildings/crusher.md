---
type: building
building: crusher
layout: building
---
{% capture content %}
### Note: The Crusher's Hut cannot be built until you have a level 1 [Stonemason's Hut](../../source/buildings/stonemason) and have finished the research in the [University](../../source/buildings/university).
<br>

The Crusher's Hut is where the Crusher will take items and crush them into other blocks. The defaults are: 

| Starting Item | Created Item                 |
| ------------- | ---------------------------- |
| Bone          | Bonemeal                     |
| Bone Block    | Bonemeal                     |
| Cobblestone   | Gravel (chance to get flint) |
| Clay          | Clay Ball                    |
| Gravel        | Sand                         |
| Sand          | Clay                         |

Note: By default the Crusher's ratio is 2:1, but there is a [research](../../source/systems/research) in the [University](../../source/buildings/university) to make them work on a 1:1 ratio.

The higher the level of the Crusher's Hut, the more daily output the Crusher can handle. So:

| Building Level | Daily Max |
| -------------- | --------- |
| 1              | 16        |
| 2              | 64        |
| 3              | 144       |
| 4              | 256       |
| 5              | 999       |
{% endcapture %}
{% capture infobox %}
{% include infobox/building.html %}
{% endcapture %}
{% include infobox/wrapper.html content=content infobox=infobox %}

## Crusher's Hut GUI

{% include contentblock/building/main-gui.html header="When accessing the Crusher's Hut block by right-clicking on it, you will see a GUI with different options. You start on the main tab:" image="../../assets/images/gui/crushergui1.png" %}

{% include contentblock/building/other-gui.html header="The second tab of the GUI is <strong>Crafting Recipes</strong>." content="Here you can see all the crafting recipes this hut knows.  The arrows allow you to move them up or down in priority.  You are also able to disable specific recipes." image="../../assets/images/gui/crushergui3.png" %}

{% include contentblock/building/other-gui.html header="The third tab of the GUI is <strong>Tasks</strong>." content="This tab shows you any requests the hut is working on, and where it is going." image="../../assets/images/gui/crushergui4.png" %}

{% include contentblock/building/settings-gui.html key="crusher" header="The fourth tab of the GUI is <strong>Settings</strong>." image="../../assets/images/gui/crushergui5.png" %}
