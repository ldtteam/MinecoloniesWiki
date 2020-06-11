---
title: MineColonies Wiki
layout: default
---
# Dyer's Hut

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/dyer.png" alt="Dyer Hut" />
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Worker:</strong></p>
        </div>
        <div class="col">
        <p><a href="../workers/dyer">Dyer</a></p>
        </div>
    </div>
    <hr />
    <recipe>dyer</recipe>
</div>

# About the Dyer's Hut

The Dyer's Hut is where the Dyer will craft dyes and dye other items (except for concrete). The Dyer will only do this if they receive a request from another worker and have the necessary materials. The Dyer's Hut automatically knows the recipe to make green dye from cactus, but you must teach it the recipes for the other dyes and the dyed items.

**Hint:** The number of recipes you can teach the Dyer's Hut doubles per building level. So:

| Dyer's Hut Level | Number of Recipes |
| :-----: | :-----: |
| 1 | 20 | 
| 2 | 40 |
| 3 | 80 |
| 4 | 160 | 
| 5 | 320 | 

<br>

# Dyer's Hut GUI

When accessing the Dyer's Hut block by right-clicking on it, you will see a GUI with different options:

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/dyergui.png" class="img-fluid mx-auto" alt="Dyer GUI">
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
