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
        <p><strong>Worker:</strong></p>
        </div>
        <div class="col">
        <p><a href="../workers/smelter">Smelter</a></p>
        </div>
    </div>
    <hr />
    <recipe>smeltery</recipe>
</div>

# About the Smeltery

The Smeltery is where the Smelter will smelt ores into ingots.

**Hint:** The higher the level of the Smeltery, the more furnaces the Smelter will be able to use. A higher level will also have a higher chance to double and even triple the ingot output per block of ore. The Smelter's worker level will sometimes determine the chance to double or triple the ingot output of ores, according to the Smeltery level. So:


| Building Level | Normal Output | % Chance of Doubling Output | % Chance of Tripling Output | Furnaces |
| :-----: | :-----: | :-----: | :-----: | :-----: |
| 1 | 100% | Worker Level Chance | --- | 1 |
| 2 | 100% | 2 x Worker Level Chance | --- | 2 |
| 3 | --- | 100% | --- | 3 |
| 4 | --- | 100% | Worker Level Chance | 4 |
| 5 | --- | 100% | Worker Level Chance | 5 |


# Smeltery GUI

When accessing the Smeltery's hut block by right-clicking on it, you will see a GUI with different options:  

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/smelterygui1.png" class="img-fluid mx-auto" alt="Smeltery GUI">
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
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/smelterygui2.png" class="img-fluid mx-auto" alt="Smeltery GUI 2">
  </div>
  <div class="col-sm-12 col-md">
    <ul>
      <li><strong>Fuel: </strong>Listed here are items that can be used by the Smelter as fuel in their furnaces. Turn on any that you want your Smelter to use, and a Deliveryman will deliver those items to the Smelter when they need fuel. (The black box at the top is to search for items.)
      </ul>
    </ul>
  </div>
</div>  

<br>
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/smelterygui3.png" class="img-fluid mx-auto" alt="Smeltery GUI 3">
  </div>
  <div class="col-sm-12 col-md">
    <ul>
      <li><strong>Smeltable Ore: </strong>Listed here are ores that can be smelted by the smelter. You can click to turn each one on or off. All coded ores (even if they come from other mods) are automatically added to this list. If you have ores that are not on the list, they can be added to the config file. 
      </ul>
    </ul>
  </div>
</div>

  <br>
  
