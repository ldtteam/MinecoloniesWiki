---
title: MineColonies Wiki
layout: default
---
# Glassblower's Hut

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/glassblower.png" alt="Glassblower" />
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Worker:</strong></p>
        </div>
        <div class="col">
        <p><a href="../workers/glassblower">Glassblower</a></p>
        </div>
    </div>
    <hr />
    <recipe>glassblower</recipe>
</div>

## About the Glassblower's Hut

### Note: The Glassblower can not be built until you have a Level 3 Smeltery and finish the research in the [University](../../source/buildings/university)
<br>

The Glassblower's Hut is where the Glassblower will smelt sand into glass and make glass panes from glass blocks. For the Glassblower to work, they must receive a request from another worker and have the necessary materials, including fuel if they're smelting sand into glass. The Glassblower's Hut must also have been taught the crafting recipe for glass panes.

**Hint:** The number of recipes you can teach the Glassblower's Hut doubles per building level. So:


| Glassblower's Hut Level | Number of Recipes |
| :-----: | :-----: |
| 1 | 20 | 
| 2 | 40 |
| 3 | 80 |
| 4 | 160 | 
| 5 | 320 | 

<br>

## Glassblower's Hut GUI

When accessing the Glassblower's Hut block by right-clicking on it, you will see a GUI with different options:

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/glassblowergui1.png" class="img-fluid mx-auto" alt="Glassblower GUI">
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
<br> <br>

Listed on page two of the GUI are items that can be used by the Glassblower as fuel in their furnaces. Turn on any that you want your Glassblower to use, and a Deliveryman will deliver those items to the Glassblower when they need fuel. (The black box at the top is to search for items.)

 <img src="../../assets/images/gui/glassblowergui2.png" alt="Glassblower GUI Page 2" />
