---
type: building
building: fletcher
layout: building
---
{% capture content %}
### Note: The Fletcher's Hut cannot be built until you have a level 1 {% building_link sawmill %} and have finished the research in the {% building_link university %}.
<br>

The Fletcher's Hut is where the Fletcher will craft arrows and items that use string or wool, such as bows, fishing poles, and paintings. For the Fletcher to work, they must receive a request from another worker and have the necessary materials. The Fletcher's Hut must also have been taught the crafting recipes for all the items you want the Fletcher to be able to craft.

**Hint:** The number of recipes you can teach the Fletcher's Hut doubles per building level. So:


| Fletcher's Hut Level | Number of Recipes |
|----------------------|-------------------|
| 1                    | 10                |
| 2                    | 20                |
| 3                    | 40                |
| 4                    | 80                |
| 5                    | 160               |
{% endcapture %}
{% capture infobox %}
{% include infobox/building.html %}
{% endcapture %}
{% include infobox/wrapper.html content=content infobox=infobox %}

## Fletcher's Hut GUI

{% include contentblock/building/main-gui.html header="When accessing the Fletcher's Hut block by right-clicking on it, you will see a GUI with different options. You start on the main tab:" image="../../assets/images/gui/fletchergui1.png" %}

{% include contentblock/building/other-gui.html header="The second tab of the GUI is <strong>Crafting Recipes</strong>." content="Here you can see all the crafting recipes this hut knows.  The arrows allow you to move them up or down in priority.  You are also able to disable specific recipes.<p><strong> Teach Recipe:</strong> When clicking teach recipe, it opens a crafting grid which allows you to teach this hut recipes (not the worker).</p>" image="../../assets/images/gui/fletchergui2.png" %}

{% include contentblock/building/other-gui.html header="The third tab of the GUI is <strong>Custom Recipes</strong>." content="Here you can see all the <a href='../items/shingles'>Architect Cutter</a> recipes this hut knows.  The arrows allow you to move them up or down in priority.  You are also able to disable specific recipes.<p><strong> Teach Recipe:</strong> When clicking teach recipe, it opens a crafting grid for the Architect Cutter.  Input 1 is the top left slot of the cutter, input 2 is the top right, and input 3 the bottom left slot in the cutter. When you have put the items in the slots, you will see various items below the input slots, the Fletcher can create ALL of those items from the recipe you have input.</p>" image="../../assets/images/gui/fletchergui3.png" %}

{% include contentblock/building/other-gui.html header="The fourth tab of the GUI is <strong>Tasks</strong>." content="This tab shows you any requests the hut is working on, and where it is going." image="../../assets/images/gui/fletchergui4.png" %}

{% include contentblock/building/settings-gui.html key="fletcher" header="The fifth tab of the GUI is <strong>Settings</strong>. It has one button:" image="../../assets/images/gui/fletchergui5.png" %}