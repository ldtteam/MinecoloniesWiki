---
title: MineColonies Wiki
layout: default
---
# Chicken Herder's Hut

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/chickenherder.png" alt="Chicken Herder's Hut" />
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Worker:</strong></p>
        </div>
        <div class="col">
        <p><a href="../workers/chickenherder">Chicken Herder</a></p>
        </div>
    </div>
    <hr />
    <recipe>chickenherder</recipe>
</div>

## About the Chicken Herder's Hut

 The Chicken Herder's Hut is where the Chicken Herder will raise chickens, collect eggs, and butcher chickens for food. You will have to capture and bring in two chickens to the Chicken Herder's Hut, as the Chicken Herder will not catch and bring in any chickens.

**Note:** The Chicken Herder will only keep two chickens alive per hut level, so at level 5 they will have ten chickens in their holding pens to breed and butcher. This means they will be faster at producing and collecting meat, drops, and other byproducts, like eggs. So:


| Building Level | Chickens Housed |
| ----- | ----- |
| 1 | 2 |
| 2 | 4 |
| 3 | 6 |
| 4 | 8 |
| 5 | 10 |  


## Chicken Herder's Hut GUI

When accessing the Chicken Herder's Hut block by right-clicking on it, you will see a GUI with different options:

<br>
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/chickenherdergui.png" class="img-fluid mx-auto" alt="Herder GUI">
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
