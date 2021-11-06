---
title: Sawmill
layout: default
---
# Sawmill

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/sawmill.png" alt="Sawmill" />
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Worker:</strong></p>
        </div>
        <div class="col">
        <p><a href="../workers/carpenter">Carpenter</a></p>
        </div>
    </div>
    <hr />
    <recipe>sawmill</recipe>
</div>

### Note: The Sawmill cannot be built until you have a level 3 [Forester's Hut](../../source/buildings/forester) (or three level 1 Forester's Huts, or another equivalent) and have finished the research in the [University](../../source/buildings/university).
<br>

The Sawmill is where the Carpenter will craft any items made of at least 75% wood that do not include ingots, stone, redstone (or produce a redstone signal), or string. The Carpenter will also craft a few other items, including [cactus planks](../../source/items/cactusplanks), [shingles](../../source/items/shingles), [timber frames](../../source/items/timberframes), [compost barrels](../../source/items/compostbarrel), and [racks](../../source/items/rack). For them to do this, you must teach the Sawmill the recipes and the Carpenter must receive a request for an item from another worker.

**Hint:** The number of recipes you can teach the Sawmill doubles per building level. So:


| Sawmill Level | Number of Recipes |
| :-----: | :-----: |
| 1 | 10 | 
| 2 | 20 |
| 3 | 40 |
| 4 | 80 | 
| 5 | 160 | 


## Sawmill GUI

When accessing the Sawmill's hut block by right-clicking on it, you will see a GUI with different options:  

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/sawmillgui.png" class="img-fluid mx-auto" alt="Sawmill GUI 1">
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
  
The 2nd page of the GUI shows what crafting task(s) the Carpenter currently has.
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/craftertasklist.png" class="img-fluid mx-auto" alt="Sawmill GUI 2">
  </div>
  <div class="col-sm-12 col-md">
    <br>
  </div>
</div>
<br> <br>
