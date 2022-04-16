---
title: Smeltery
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

### Note: The Smeltery cannot be built until you have a level 2 [Mine](../../source/buildings/mine) (or two level 1 Mines) and have finished the research in the [University](../../source/buildings/university).
<br>

The Smeltery is where the Smelter will smelt ores into ingots.

**Hint:** The higher the level of the Smeltery, the more furnaces the Smelter will be able to use. A higher level will also have a higher chance to double and even triple the ingot output per block of ore. In 1.16, the Smelter's Strength level will sometimes determine the chance to double or triple the ingot output of ores, according to the Smeltery level. In 1.18+, the smelter applies Fortune to the ores they smelt instead. See the Smelter's page for how their strength affects the output.

## Smeltery GUI

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
      <li><strong>Fuel: </strong>Listed here are items that can be used by the Smelter as fuel in their furnaces. Turn on any that you want your Smelter to use, and a Courier will deliver those items to the Smelter when they need fuel. (The black box at the top is to search for items.)
      </li>
    </ul>
  </div>
</div>  
<br>
<br>

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/smelterygui3.png" class="img-fluid mx-auto" alt="Smeltery GUI 3">
  </div>
  <div class="col-sm-12 col-md">
    <ul>
      <li><strong>Smeltable Ore: </strong>Listed here are ores that can be smelted by the Smelter. You can click to turn each one on or off. All coded ores (even if they come from other mods) are automatically added to this list. If you have ores that are not on the list, they can be added to the <a href="../../source/misc/configfile">config file</a>. 
      </li>
    </ul>
  </div>
</div>
<br>

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/minstockgui.png" class="img-fluid mx-auto" alt="Smeltery GUI 4">
  </div>
  <div class="col-sm-12 col-md">
    <ul>
        <li><strong> Minimum Stock: </strong> Use this button to tell the Smeltery to keep a minimum stock on hand. Set items will be displayed above the button.</li>
    </ul>
  </div>
</div>
<br>
