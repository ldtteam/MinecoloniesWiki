---
type: building
building: bakery
layout: building
---
{% capture content %}
The Baker will craft bread dough, cookie dough, cake dough, and raw pumpkin pie, then bake these in a furnace to create bread, cookies, cakes, and pumpkin pies. They will only do this upon request, whether from the [Cook](../../source/workers/cook), the [postbox](../../source/items/postbox), or as a minimum stock in the [Warehouse](../../source/buildings/warehouse).

The Baker can also craft some non-vanilla breads:

- Sweet bread, made from wheat and a honey bottle. Available at Bakery level 3. Has slightly higher saturation than normal bread, also gives you a speed boost and removes poison.
- Milk-infused bread, made from wheat and a milk bucket. Available at Bakery level 4. Removes all potion effects (like milk buckets do).
- Golden bread, made from wheat and a gold ingot. Available at Bakery level 5. Instantly heals 2 hearts.
- Chorus bread, made from wheat and a chorus fruit. Available after completing the Know the End research in the [University](../../source/buildings/university). Has higher saturation than normal bread and teleports you to the surface after eating it.
{% endcapture %}
{% capture infobox %}
{% include infobox/building.html %}
{% endcapture %}
{% include page-infobox-wrapper.html content=content infobox=infobox %}

## Bakery GUI

{% include contentblock/building/main-gui.html header="When accessing the Bakery hut block by right-clicking on it, you will see a GUI with different options. You start on the main tab:" image="../../assets/images/gui/bakerygui1.png" %}

{% include contentblock/building/other-gui.html header="The second tab of the GUI is <strong>Crafting Recipes</strong>." content="Here you can see all the crafting recipes this hut knows.  The arrows allow you to move them up or down in priority.  You are also able to disable specific recipes.<p><strong> Teach Recipe:</strong> When clicking teach recipe, it opens a crafting grid which allows you to teach this hut recipes (not the worker).</p>" image="../../assets/images/gui/bakerygui2.png" %}

{% include contentblock/building/other-gui.html header="The third tab of the GUI is <strong>Smelting Recipes</strong>." content="Here you can see all the smelting recipes this hut knows.  The arrows allow you to move them up or down in priority.  You are also able to remove any recipes you've taught them.<p><strong> Teach Recipe:</strong> When clicking teach recipe, it opens a furnace grid which allows you to teach this hut recipes (not the worker).  Place the item to smelt in the upper slot.</p>" image="../../assets/images/gui/bakerygui3.png" %}

{% include contentblock/building/stock-gui.html buildingname="Bakery" header="The fourth tab of the GUI is <strong>Minimum Stock</strong>. It can be useful to set a minimum stock of dough, so the Baker can quickly bake items without needing to craft the dough first. It has one button:" image="../../assets/images/gui/bakerygui4.png" %}

{% include contentblock/building/other-gui.html header="The fifth tab of the GUI is <strong>Fuel</strong>." content="Listed here are items that can be used by the Bakery as fuel in their furnaces. Simply turn on any that you want your Baker to use, and a Courier will deliver those items to the Baker when they need fuel.  All items are off by default.  The black box at the top is to search for items." image="../../assets/images/gui/bakerygui5.png" %}

{% include contentblock/building/other-gui.html header="The sixth tab of the GUI is <strong>Tasks</strong>." content="This tab shows you any requests the hut is working on, and where it is going." image="../../assets/images/gui/bakerygui6.png" %}

{% include contentblock/building/settings-gui.html key="bakery" header="The seventh tab of the GUI is <strong>Settings</strong>." image="../../assets/images/gui/bakerygui7.png" %}