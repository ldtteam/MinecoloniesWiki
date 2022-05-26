---
type: building
building: concretemixer
layout: building
---
{% capture content %}
### Note: The Concrete Mixer's Hut cannot be built until you have a level 1 [Crusher's Hut](../../source/buildings/crusher) and have finished the [research](../../source/systems/research) in the [University](../../source/buildings/university).
<br>

The Concrete Mixer will craft all types of concrete powder and place them in flowing water (built in to their hut), then mine the resulting concrete. The Concrete Mixer will only make concrete and concrete powder when they receive a request for a block and have the needed materials. (All their recipes are pretaught.)
{% endcapture %}
{% capture infobox %}
{% include infobox/building.html %}
{% endcapture %}
{% include infobox/wrapper.html content=content infobox=infobox %}

## Concrete Mixer's Hut GUI

{% include contentblock/building/main-gui.html header="When accessing the Concrete Mixer's Hut block by right-clicking on it, you will see a GUI with different options. You start on the main tab:" image="../../assets/images/gui/concretemixergui.png" %}

{% include contentblock/building/other-gui.html header="The second tab of the GUI is <strong>Crafting Recipes</strong>." content="Here you can see all the crafting recipes this hut knows. The arrows allow you to move them up or down in priority. You are also able to disable specific recipes." image="../../assets/images/gui/concretemixergui2.png" %}

{% include contentblock/building/other-gui.html header="The third tab of the GUI is <strong>Tasks</strong>." content="This tab shows you any requests the hut is working on, and where it is going." image="../../assets/images/gui/concretemixergui3.png" %}

{% include contentblock/building/settings-gui.html key="concretemixer" header="The fourth tab of the GUI is <strong>Settings</strong>." image="../../assets/images/gui/concretemixergui4.png" %}