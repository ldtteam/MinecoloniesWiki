---
title: Courier's Hut
layout: default
---
# Courier's Hut

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/deliveryman.png" alt="Courier's Hut" />
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Worker:</strong></p>
        </div>
        <div class="col">
        <p><a href="../workers/courier">Courier</a></p>
        </div>
    </div>
    <hr />
    <recipe>courier</recipe>
</div>

The Courier runs back and forth from the [Warehouse](../../source/buildings/warehouse) to all the worker huts in your colony, delivering materials to workers and putting finished products in the Warehouse.

The level of the Courier's Hut will dictate how many items the Courier can deliver, so if you want them to carry more materials/tools, upgrade their hut. Upgrading the hut will also increase the amount of requests they can keep track of at a time.

| Courier's Hut Level | Max Stacks Carried |
| :-----------------: | :----------------: |
| 1                   | 2                  |
| 2                   | 3                  |
| 3                   | 4                  |
| 4                   | 5                  |
| 5                   | unlimited          |


The greater a Courier's Agility skill, the faster they'll run. The greater their Adaptability skill, the more huts they can visit before going back to the Warehouse.

**Note:** You MUST build the Warehouse to at least level 1 so the Courier can do their work.

**Note:** You can have up to 10 Couriers per Warehouse, depending on the Warehouse's level. The default [configuration](../../source/misc/configfile) only allows for 1 Warehouse, but this can be changed. However, Couriers assigned to subsequent Warehouses will only see the items in the Warehouse they are assigned to.

## Courier's Hut GUI

When accessing the Courier's Hut block by right-clicking on it, you will see a GUI with different options:

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/deliverymangui1.png" class="img-fluid mx-auto" alt="Courier's Hut GUI">
  </div>
  <div class="col-sm-12 col-md">
    <br>
    <ul>
      {% for item in site.data.gui.global %}
        <li><strong>{{ item.button }}:</strong> {{ item.content }}</li>
      {% endfor %}
    </ul>
  </div>
</div>
<br>
<br>

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/deliverymangui2.png" class="img-fluid mx-auto" alt="Deliveries">
  </div>
  <div class="col-sm-12 col-md">
    <ul>
      <li><strong>Deliveries:</strong> This shows a list of all the deliveries the Courier at this hut has. It also shows the priority of each delivery and who requested it.</li><br>
    </ul>
  </div>
</div>
<br>
