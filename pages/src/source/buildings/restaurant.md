---
title: Restaurant
layout: default
---
# Restaurant

{% capture content %}
The Restaurant is where the Cook will cook food, provided they have the necessary ingredients and fuel. When citizens are hungry, they will come to the Restaurant and the Cook will give them food. The Assistant Cook also works at the Restaurant. They craft needed food to help supply the colony.

**Note:** You can only hire an Assistant Cook when the Restaurant is level 3 or higher.
{% endcapture %}
{% capture infobox %}
{% include infobox/building.html key="restaurant" %}
{% endcapture %}
{% include page-infobox-wrapper.html content=content infobox=infobox %}

## Restaurant GUI
<div class="row">
  <div class="col">
    {% include contentblock/main-gui.html header="When accessing the Restaurant hut block by right-clicking on it, you will see a GUI with different options. You start on the main tab:" image="../../assets/images/gui/restaurantgui1.png" %}

    {% include contentblock/basic.html header="The second tab of the GUI is <strong>Crafting Recipes</strong>." content="Here you can see all the crafting recipes this hut knows.  The arrows allow you to move them up or down in priority.  You are also able to disable specific recipes.<p><strong> Teach Recipe:</strong> When clicking teach recipe, it opens a crafting grid which allows you to teach this hut recipes (not the worker).</p>" image="../../assets/images/gui/restaurantgui2.png" %}

    {% include contentblock/basic.html header="The third tab of the GUI is <strong>Smelting Recipes</strong>." content="Here you can see all the smelting recipes this hut knows.  The arrows allow you to move them up or down in priority.  You are also able to remove any recipes you've taught them.<p><strong> Teach Recipe:</strong> When clicking teach recipe, it opens a furnace grid which allows you to teach this hut recipes (not the worker).  Place the item to smelt in the upper slot.</p>" image="../../assets/images/gui/restaurantgui3.png" %}

    {% include contentblock/stock-gui.html buildingname="Restaurant" header="The fourth tab of the GUI is <strong>Minimum Stock</strong>. It has one button:" image="../../assets/images/gui/restaurantgui4.png" %}

    {% include contentblock/basic.html header="The fifth tab of the GUI is <strong>Fuel</strong>." content="Listed here are items that can be used by the Restaurant as fuel in their furnaces. Simply turn on any that you want your Cook to use, and a Courier will deliver those items to the Cook when they need fuel.  All items are off by default.  The black box at the top is to search for items." image="../../assets/images/gui/restaurantgui5.png" %}

    {% include contentblock/basic.html header="The sixth tab of the GUI is <strong>Food</strong>." content="Listed here are food items that will be handed out by the Cook. Disable any you don't want to be handed out or produced. However, if a colonist finds a disabled item, they'll still eat it - the Cook just won't hand it out. (The black box at the top is to search for items.)" image="../../assets/images/gui/restaurantgui6.png" %}

    {% include contentblock/basic.html header="The seventh tab of the GUI is <strong>Tasks</strong>." content="This tab shows you any requests the hut is working on, and where it is going." image="../../assets/images/gui/restaurantgui7.png" %}

  </div>
</div>