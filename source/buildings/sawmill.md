---
title: MineColonies Wiki
layout: default
---
# Sawmill

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/sawmill.png" alt="Sawmill's Hut" />
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Worker:</strong></p>
        </div>
        <div class="col">
        <p><a href="../workers/miller">Miller</a></p>
        </div>
    </div>
    <hr />
    <recipe>sawmill</recipe>
</div>

# About the Sawmill

The Sawmill is where the Miller will craft any items made of at least 75% wood (no bows or redstone items). For them to do this, you must teach the Sawmill the recipes and the Miller must receive a request for an item from another worker.

**Hint:** The number of recipes you can teach the Sawmill doubles per building level. So:


| Sawmill Level | Number of Recipes |
| :-----: | :-----: |
| 1 | 20 | 
| 2 | 40 |
| 3 | 80 |
| 4 | 160 | 
| 5 | 320 | 


# Sawmill GUI

When accessing the Sawmill's hut block by right-clicking on it, you will see a GUI with different options:  

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/sawmillgui.png" class="img-fluid mx-auto" alt="Sawmill GUI">
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
  
