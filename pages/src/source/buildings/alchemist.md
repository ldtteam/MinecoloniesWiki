---
type: building
building: alchemist
layout: building
---
{% capture content %}
The {% buildings/name.html %} is where the {% workers/name.html key="alchemist" %} works. The {% workers/name.html key="alchemist" %} brews potions and harvests netherwart and mistletoe.

**Hint:** The number of recipes you can teach the {% buildings/name.html %} doubles per building level. So:

| {% buildings/name.html %} Level | Number of Recipes |
| :-----------: | :---------------: |
|       1       |        10         |
|       2       |        20         |
|       3       |        40         |
|       4       |        80         |
|       5       |        160        |

{% endcapture %}
{% capture infobox %}
{% include infobox/building.html %}
{% endcapture %}
{% include infobox/wrapper.html content=content infobox=infobox %}

## Alchemist GUI

{% include contentblock/building/main-gui.html header="When accessing the Alchemist Tower by right-clicking on it, you will see a GUI with different options. You start on the main tab:" image="../../assets/images/gui/alchemistgui1.png" %}

{% include contentblock/building/other-gui.html header="The second tab of the GUI is <strong>Crafting Recipes</strong>." content="Here you can see all the crafting recipes this hut knows.  The arrows allow you to move them up or down in priority.  You are also able to disable specific recipes.<p><strong> Teach Recipe:</strong> When clicking teach recipe, it opens a crafting grid which allows you to teach this hut recipes (not the worker).</p>" image="../../assets/images/gui/alchemistgui2.png" %}

{% include contentblock/building/other-gui.html key="alchemist" header="The third tab of the GUI is <strong>Brewing Recipes</strong>. It functions the same as the Crafting Recipe page, but for brewed potions." image="../../assets/images/gui/alchemistgui3.png" %}

{% include contentblock/building/other-gui.html header="The fourth tab of the GUI is <strong>Tasks</strong>." content="This tab shows you any requests the hut is working on, and where it is going." image="../../assets/images/gui/alchemistgui4.png" %}
