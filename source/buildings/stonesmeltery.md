---
title: Minecolonies Wiki
layout: default
---
# StoneSmeltery

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/StoneSmeltery_Block.png" alt="Stone Smeltery" />
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Worker:</strong></p>
        </div>
        <div class="col">
        <p><a href="../workers/stonesmelter">Stone Smelter</a></p>
        </div>
    </div>
    <hr />
    <recipe>stonesmeltery</recipe>
</div>

Welcome to the Stone Smeltery Information Site.

Before you choose a place to build the Stone Smeltery, take into account the location from Mine, Warehouse and/or other Worker(s). After you have selected a place for the Hut, you have to craft the Stone Smeltery's Hut block and place it with your [Building Tool](../items/buildingtool). Once the hut block is placed, the Stone Smelter will be automatically assigned (or you can manually assign one with the best  [Traits](../systems/workerinfo) for Stone Smelter if you changed this in the settings tab in the [Town Hall's GUI](../../source/buildings/townhall).

Now you will have to issue the builder the “Build” assignment so it can build the “Stone Smeltery’s Hut”. Once the builder is done you can now hire the Stone Smelter and they will, upon request, turn cobblestone to stone, stone bricks to cracked stone bricks, clay balls to brick, and clay blocks to terracotta for all your Towns needs.

**Hint:** Once the builder is done you will want to upgrade the Stone Smeltery to get all the awesome perks it has to offer for higher levels. The higher the level of the Hut the more furnaces the Smelter will be able to use. So:


| Building Level |  Furnace(s) |
| :-----: | :-----: | 
| 1 |  1 |
| 2 |  2 |
| 3 |  3 |
| 4 |  4 |
| 5 |  5 |


## Hut GUI

When accessing the Stone Smeltery's Hut block (right clicking on it), you will see a GUI with different options:

<br>
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/buildings/stonesmelterygui.png" class="img-fluid mx-auto" alt="Stone Smeltery GUI">
  </div>
  <div class="col-sm-12 col-md">
    <p>The Worker assigned and it's Level. (The worker levels up in time by doing it's work. The higher the level the faster and more efficient it will be). And the buttons:</p>
    <ul>
      {% for item in site.data.gui.global %}
        <li><strong>{{ item.button }}:</strong> {{ item.content }}</li>
      {% endfor %}
    </ul>
  </div>
</div>
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/stonesmelterygui2.png" class="img-fluid mx-auto" alt="Smeltery GUI">
  </div>
  <div class="col-sm-12 col-md">
    <ul>
      <ul><strong> Fuel: </strong> Listed are items that can be used by the cook as fuel in the furnaces. Simply turn on any that you want your cook to use, and the deliveryman will deliver those items to the cook when they need fuel.
      </ul>
    </ul>
  </div>
</div>  
  
  <br>
  
### **To see build options please see the [Builder](../../source/workers/builder) Page**  

