---
title: Minecolonies Wiki
layout: default
---
# Smeltery

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/smeltery.png" alt="Smeltery's Hut" />
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Worker:</strong> <a href="../workers/smelter">Smelter</a></p>
        </div>
    </div>
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Recipe:</strong> 
        </div>
    </div>
    <recipe>smeltery</recipe>
</div>
<hr />

# About the Building

Once the building is built, the Smelter will start to process all the block ores that your Miner(s) are mining and turn them into ingots or blocks for all your Towns needs.

**Hint:** The higher the level of the Hut the more furnaces the Smelter will be able to use and it will have a higher chance to double and even triple the ingot output per block of ore. The way it works is that the *Worker level* determines the "Chance" is has to either Double or Triple the ingot output of the ores, according to the Hut level. So:


| Building Level | Normal Output | % of Doubling Output | % of Tripling Output | Furnace(s) |
| :-----: | :-----: | :-----: | :-----: | :-----: |
| 1 | 100% | Worker Level Chance | --- | 1 |
| 2 | 100% | 2 x Worker Level Chance | --- | 2 |
| 3 | --- | 100% | --- | 3 |
| 4 | --- | 100% | Worker Level Chance | 4 |
| 5 | --- | 100% | Worker Level Chance | 5 |


# Smeltery Hut GUI

When accessing the Smeltery's Hut block (right clicking on it), you will see a GUI with different options:  

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/smelterygui1.png" class="img-fluid mx-auto" alt="Smeltery GUI">
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
    <img src="../../assets/images/gui/smelterygui2.png" class="img-fluid mx-auto" alt="Smeltery GUI">
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
    <img src="../../assets/images/gui/smelterygui2.png" class="img-fluid mx-auto" alt="Restaurant GUI">
  </div>
