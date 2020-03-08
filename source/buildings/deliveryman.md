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
        <p><strong>Worker:</strong> <a href="../workers/deliveryman">Deliveryman</a></p>
        </div>
    </div>
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Recipe:</strong> 
        </div>
    </div>
    <recipe>deliveryman</recipe>
    
</div>
<hr />

# About the Building

The Deliveryman does exactly what you think they do, it will start to run back and forth from the Warehouse to all the workers huts in your Town. The level of the Deliveryman's Hut will dictate how much materials/tools it will carry to/from Huts - Warehouse - Huts, so if you want it to carry more materials/tools, be sure to upgrade the Deliveryman's Hut.

Also, the higher the level of the hut, the Deliveryman will move faster and faster back and forth (nice leveling perk, right?).

| Building Level | Max Stacks of Materials |
| :------------: | :---------------------: |
| 1              | 1                       |
| 2              | 2                       |
| 3              | 4                       |
| 4              | 5                       |
| 5              | unlimited               |

<br>

# Deliveryman's Hut GUI

After the building is built, you can access the Deliveryman's Hut block (right click on it) and you will see a GUI with different options:

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/deliverymangui.png" class="img-fluid mx-auto" alt="Deliveryman's GUI">
  </div>
  <div class="col-sm-12 col-md">
    <br>
    <p>The Worker assigned and it's Level. (The worker levels up in time by working. The higher the level, the faster and more efficient it will be). And the buttons:</p>
    <ul>
      {% for item in site.data.gui.global %}
        <li><strong>{{ item.button }}:</strong> {{ item.content }}</li>
      {% endfor %}
    </ul>
  </div>
</div>


**Hint**: You MUST build the [Warehouse](../../source/buildings/warehouse) to at least level 1 so the Deliveryman can do it's work. The deliveryman will visit 1 worker's hut per trip then back to Warehouse. So, level up the Warehouse and build more Deliverymen huts to take care of more worker's huts at the same time and grow grow grow... faster faster faster!
