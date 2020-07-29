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
    <recipe>deliveryman</recipe>
</div>

The Courier runs back and forth from the [Warehouse](../../source/buildings/warehouse) to all the worker huts in your colony, delivering materials to workers and putting finished products in the Warehouse.

**Note:** You *must* build the Warehouse to at least level 1, otherwise, the Courier won't be able to do their job.

The level of the Courier's Hut will dictate how many items/blocks the Courier can carry to/from Huts-Warehouse-Huts, so if you want them to carry more, be sure to upgrade the Courier's Hut. Also, the higher the level of the hut, the faster the Courier will move between huts and the Warehouse.

| Courier's Hut Level | Max Stacks Carried |
| :-----------------: | :----------------: |
| 1                   | 2                  |
| 2                   | 3                  |
| 3                   | 4                  |
| 4                   | 5                  |
| 5                   | unlimited          |

<br>

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
