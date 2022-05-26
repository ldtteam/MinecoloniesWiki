---
type: building
building: mechanic
layout: building
---
{% capture content %}
### Note: The Mechanic's Hut cannot be built until you have a level 3 [Blacksmith's Hut](../../source/buildings/blacksmith) (or three level 1 Blacksmith's Huts, or another equivalent) and have finished the research in the [University](../../source/buildings/university).

The Mechanic's Hut is where the Mechanic will craft redstone items, rails, minecarts, clocks, compasses, sea lanterns, torches, lanterns, jack-o-lanterns, storage blocks (like blocks of iron, coal, quartz, etc), dried kelp blocks, blue ice, packed ice, enchantment tables, ender chests, tripwire hooks, sticky pistons, [gates](../../source/items/gates), [multi-pistons](../../source/items/multipiston), glowstone blocks, anything made with blaze rods, and many other items that no other crafter can make. For the Mechanic to work, they must receive a request from another worker and have the necessary materials. The Mechanic's Hut must also have been taught the crafting recipes for all the items you want the Mechanic to be able to craft.

**Hint:** The number of recipes you can teach the Mechanic's Hut doubles per building level. So:

| Mechanic's Hut Level | Number of Recipes |
| :------------------: | :---------------: |
|          1           |        10         |
|          2           |        20         |
|          3           |        40         |
|          4           |        80         |
|          5           |        160        |
{% endcapture %}
{% capture infobox %}
{% include infobox/building.html %}
{% endcapture %}
{% include infobox/wrapper.html content=content infobox=infobox %}

## Mechanic's Hut GUI

{% include contentblock/building/main-gui.html header="When accessing the Mechanic's Hut block by right-clicking on it, you will see a GUI with different options. You start on the main tab:" image="../../assets/images/gui/mechanicgui1.png" %}

{% include contentblock/building/other-gui.html header="The second tab of the GUI is <strong>Crafting Recipes</strong>." content="Here you can see all the crafting recipes this hut knows.  The arrows allow you to move them up or down in priority.  You are also able to disable specific recipes.<p><strong> Teach Recipe:</strong> When clicking teach recipe, it opens a crafting grid which allows you to teach this hut recipes (not the worker).</p>" image="../../assets/images/gui/mechanicgui2.png" %}

{% include contentblock/building/other-gui.html header="The third tab of the GUI is <strong>Custom Recipes</strong>." content="Here you can see all the <a href='../items/shingles'>Architect Cutter</a> recipes this hut knows.  The arrows allow you to move them up or down in priority.  You are also able to disable specific recipes.<p><strong> Teach Recipe:</strong> When clicking teach recipe, it opens a crafting grid for the Architect Cutter.  Input 1 is the top left slot of the cutter, input 2 is the top right, and input 3 the bottom left slot in the cutter. When you have put the items in the slots, you will see various items below the input slots, the mechanic can create ALL of those items from the recipe you have input.</p>" image="../../assets/images/gui/mechanicgui3.png" %}

{% include contentblock/building/other-gui.html header="The fourth tab of the GUI is <strong>Tasks</strong>." content="This tab shows you any requests the hut is working on, and where it is going." image="../../assets/images/gui/mechanicgui4.png" %}

{% include contentblock/building/settings-gui.html key="mechanic" header="The fifth tab of the GUI is <strong>Settings</strong>." image="../../assets/images/gui/mechanicgui5.png" %}