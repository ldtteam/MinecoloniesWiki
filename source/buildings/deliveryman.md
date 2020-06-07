---
title: Minecolonies Wiki
layout: default
---
# Deliveryman's Hut

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/deliveryman.png" alt="Deliveryman's Hut" />
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Worker:</strong></p>
        </div>
        <div class="col">
        <p><a href="../workers/deliveryman">Deliveryman</a></p>
        </div>
    </div>
    <hr />
    <recipe>deliveryman</recipe>
</div>

# About the Deliveryman's Hut

The Deliveryman runs back and forth from the [Warehouse](../../source/buildings/warehouse) to all the worker huts in your colony, delivering materials to workers and putting finished products in the Warehouse. The Deliveryman will visit one worker's hut per trip, then go back to the Warehouse.

**Note:** You must build the Warehouse to at least level 1, otherwise, the Deliveryman won't be able to do their job.

The level of the Deliveryman's Hut will dictate how much materials/tools it will carry to/from Huts - Warehouse - Huts, so if you want it to carry more materials/tools, be sure to upgrade the Deliveryman's Hut. Also, the higher the level of the hut, the faster the Deliveryman will move.

| Building Level | Max Stacks of Materials |
| :------------: | :---------------------: |
| 1              | 1                       |
| 2              | 2                       |
| 3              | 4                       |
| 4              | 5                       |
| 5              | unlimited               |

<br>

# Deliveryman's Hut GUI

When accessing the Deliveryman's Hut block by right-clicking on it, you will see a GUI with different options:

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/deliverymangui1.png" class="img-fluid mx-auto" alt="Deliveryman's GUI">
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
      <li><strong>Deliveries:</strong> List of any deliveries the Deliveryman is making.</li><br>
    </ul>
  </div>
</div>
<br>

