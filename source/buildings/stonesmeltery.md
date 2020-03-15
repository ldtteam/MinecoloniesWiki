---
title: Minecolonies Wiki
layout: default
---
# StoneSmeltery

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/stonesmeltery.png" alt="Stone Smeltery's Hut" />
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

# About the Building

Once the building is built, the Stone Smelter will, upon request, turn cobblestone to stone, stone bricks to cracked stone bricks, clay balls to brick, and clay blocks to terracotta for all your Towns needs.

**Hint:** The higher the level of the Hut the more furnaces the Smelter will be able to use. So:


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
    <img src="../../assets/images/gui/stonesmelterygui1.png" class="img-fluid mx-auto" alt="Stone Smeltery GUI">
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
<br>
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

Page 2 is where you can tell the cook what items to use as fuel.

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/stonesmelterygui2.png" class="img-fluid mx-auto" alt="Restaurant GUI">
  </div>
