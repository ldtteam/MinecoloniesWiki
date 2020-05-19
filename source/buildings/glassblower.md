---
title: Minecolonies Wiki
layout: default
---
# Glassblower Hut

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

# About the Glassblower Hut

The Glassblower Hut is where the Glassblower will smelt sand into glass, and make glass panes from glass blocks. 

**Hint:** The number of recipes you can teach the Glassblower doubles per building level. So:


| Glassblower Level | Number of Recipes |
| :-----: | :-----: |
| 1 | 20 | 
| 2 | 40 |
| 3 | 80 |
| 4 | 160 | 
| 5 | 320 | 

<br>

# Glassblower GUI

When accessing the Glassblower block by right-clicking on it, you will see a GUI with different options:

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

On page two of the GUI, you will see a list of fuels that you can select that the glassblower will use to fuel the furnace.

 <img src="../../assets/images/gui/glassblowergui2.png" alt="Glassblower GUI Page 2" />
