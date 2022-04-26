---
title: Courier's Hut
layout: default
---
# Courier's Hut

{% capture content %}
The Courier runs back and forth from the [Warehouse](../../source/buildings/warehouse) to all the worker huts in your colony, delivering materials to workers and putting finished products in the Warehouse. Each Courier needs their own hut, and you can have up to 10 Couriers per Warehouse, depending on the Warehouse's level (2 per Warehouse level).

The level of the Courier's Hut will dictate how many items the Courier can deliver, so if you want them to carry more materials/tools, upgrade their hut. Upgrading the hut will also increase the amount of requests they can keep track of at a time.

| Courier's Hut Level | Max Stacks Carried |
| :-----------------: | :----------------: |
|          1          |         2          |
|          2          |         3          |
|          3          |         4          |
|          4          |         5          |
|          5          |     unlimited      |


The greater a Courier's Agility skill, the faster they'll run. The greater their Adaptability skill, the more huts they can visit before going back to the Warehouse.

**Note:** You MUST build the Warehouse to at least level 1 so the Courier can do their work.

**Note:** If you have multiple Warehouses, Couriers will only see the items in the Warehouse they are assigned to.
{% endcapture %}
{% capture infobox %}
{% include infobox/building.html key="courier" %}
{% endcapture %}
{% include page-infobox-wrapper.html content=content infobox=infobox %}


## Courier's Hut GUI

<div class="row">
  <div class="col">
    {% include contentblock/main-gui.html header="When accessing the Courier's Hut block by right-clicking on it, you will see a GUI with different options. You start on
    the main tab:" image="../../assets/images/gui/couriergui1.png" %}

    {% include contentblock/basic.html header="The second tab of the GUI is <strong>Tasks</strong>." content="This tab shows you any requests the hut is working on, and where it is going." image="../../assets/images/gui/couriergui2.png" %}
  </div>
</div>
