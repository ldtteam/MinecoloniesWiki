---
title: Minecolonies Wiki
layout: default
---
# Shepherd's Hut

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/shepherd.png" alt="Shepherd's Hut" />
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Worker:</strong></p>
        </div>
        <div class="col">
        <p><a href="../workers/shepherd">Shepherd</a></p>
        </div>
    </div>
    <hr />
    <recipe>shepherd</recipe>
</div>

# About the Shepherd's Hut

The Shepherd's Hut is where the Shepherd will breed and butcher cows for food and wool. You will have to capture and bring in two sheep to the Shepherd's Hut, as the Shepherd will not catch and bring in any sheep.

**Note:** The Shepherd will only keep alive two sheep per hut level, so at level 5 they will have ten sheep in their holding pens to breed and butcher. This means they will be faster at producing and collecting meat and wool. So:


| Building Level | Sheep Housed |
| ----- | ----- |
| 1 | 2 |
| 2 | 4 |
| 3 | 6 |
| 4 | 8 |
| 5 | 10 |  

# Shepherd's Hut GUI

When accessing the Shepherd's Hut block by right-clicking on it, you will see a GUI with different options:

<br>
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/shepherdgui1.png" class="img-fluid mx-auto" alt="Herder GUI">
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

Page 2 of the GUI is where you can tell the shepherd whether or not to dye their sheep. If this is turned on, the shepherd will randomly choose a color to dye their sheep.

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/shepherdgui2.png" class="img-fluid mx-auto" alt="Shepherd GUI 2">
  </div>
