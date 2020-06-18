---
title: MineColonies Wiki
layout: default
---
# Composter's Hut

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/composter.png" alt="Composter's Hut" />
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Worker:</strong></p>
        </div>
        <div class="col">
        <p><a href="../workers/composter">Composter</a></p>
        </div>
    </div>
    <hr />
    <recipe>composter</recipe>
</div>

## About the Composter's Hut

### Note: The Composter's Hut cannot be built until you have a level 3 [Farm](../../source/buildings/farm&field) (or three level 1 Farms, or another equivalent) and have finished the research in the [University](../../source/buildings/university).
<br> 

The Composter's Hut is where the Composter will turn organic materials into [compost](../../source/items/compost), which can be used by the [Farmer](../../source/worker/farmer) or [Florist](../../source/worker/florist) to fertilize food or flowers. They can also create dirt if you have the setting enabled, which the [Builder](../../source/worker/builder) can use in buildings. The Composter uses [barrels](../../source/items/barrel) to make compost or dirt.

**Hint:** The higher the level of the Composter's Hut, the more barrels the Composter will be able to use. So:


| Building Level | Barrels |
| :-----: | :-----: |
| 1 | 1 |
| 2 | 2 |
| 3 | 3 |
| 4 | 4 |
| 5 | 5 |


## Composter's Hut GUI

When accessing the Composter's Hut block by right-clicking on it, you will see a GUI with different options:

<br>
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/compostergui1.png" class="img-fluid mx-auto" alt="Composter GUI">
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



By pressing the arrow button in the top right corner of the GUI, you will be taken to page two of the GUI.

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/compostergui2.png" class="img-fluid mx-auto" alt="Composter GUI 2">
  </div>
  <div class="col-sm-12 col-md">
    <ul><br>
      <li><strong>Items to compost:</strong> Here you will see a list of all the items that were recognized for the composter to use, including modded items. All items are off by default. You can then select which items you want the composter to use by clicking on the button. (The black box at the top lets you search for items.)</li><br>
     <li><strong>Compost/Dirt:</strong> You can select which item you want the composter to make, compost or dirt. Just click on the button to change the setting.</li>
    </ul>
  </div>
</div>
<br>  
  <br>
