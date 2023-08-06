---
type: building
building: warehouse
layout: building
---
{% capture content %}
The Warehouse is the central storage from where a Courier will store and retrieve everything your workers harvest, craft, or need. Items will be stored in [racks](../../source/items/rack).

The level of the Warehouse will determine how many Couriers will be able to use it at the same time. Level up the Warehouse to increase the amount of Couriers that can work in it. Leveling up the Warehouse will also increase its storage capacity.

| Building Level | Max Couriers |
| -------------- | ------------ |
| 1              | 2            |
| 2              | 4            |
| 3              | 6            |
| 4              | 8            |
| 5              | 10           |
{% endcapture %}
{% capture infobox %}
{% include infobox/building.html %}
{% endcapture %}
{% include infobox/wrapper.html content=content infobox=infobox %}

## Warehouse GUI

<div class="row">
  <div class="col">
    {% include contentblock/building/main-gui.html data=site.data.gui.warehouse header="When accessing the Warehouse hut block by right-clicking on it, you will see a GUI with different options. You start on the main tab:" image="../../assets/images/gui/warehousegui1.png" %}

    {% include contentblock/building/other-gui.html header="The second tab of the GUI is <strong>Workers</strong>." content="<ul>
      <li><strong>Assigned Workers: </strong>A list of the <a href='../workers/courier'>Couriers</a> assigned to this Warehouse.</li>
      <li><strong>Manage Workers: </strong>You can choose which Couriers to hire at the Warehouse. <b>Note:</b> this only works if you have turned the worker hiring mode in the <a href='../../source/buildings/townhall'> Town Hall</a> block to manual, otherwise your citizens will be hired automatically.</li>
      <li><strong>Recall Workers: </strong>Recalls the Couriers at this Warehouse to the hut block. You might use it if they are stuck somewhere, you want to see what they have, or want to give them something directly.</li>
    </ul>" image="../../assets/images/gui/warehousegui2.png" %}

    {% include contentblock/building/other-gui.html header="The third tab of the GUI is <strong>Minimum Stock</strong>." content="<strong>Add:</strong> Use this button to tell the Warehouse to request a minimum stock to keep on hand. If a worker requests an item that is set as the minimum stock, the minimum stock will be given to them but the Warehouse will request more if it no longer has enough. Set items will be displayed above the button." image="../../assets/images/gui/warehousegui3.png" %}

    {% include contentblock/building/other-gui.html header="The fourth tab of the GUI is <strong>Storage</strong>." content="<ul>
      <li><strong>Block of Emerald: </strong>You can increase the max amount of stacks in each rack by pressing this button. This can only be done when the Warehouse is at level 5 and you have at least one block of emerald in your inventory. The storage can be increased 3 times.</li><br>
      <li><strong>Sort: </strong>The sort option is available when the Warehouse reaches level 3. It sorts and stacks all the items in the racks.</li>
    </ul>" image="../../assets/images/gui/warehousegui4.png" %}
  </div>
</div>
