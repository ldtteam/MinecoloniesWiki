---
title: Minecolonies Wiki
layout: default
---
# Plantation Hut

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/plantation.png" alt="Plantation" />
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Worker:</strong></p>
        </div>
        <div class="col">
        <p><a href="../workers/planter">Planter</a></p>
        </div>
    </div>
    <hr />
    <recipe>plantation</recipe>
</div>

# About the Plantation Hut

The Plantation is where the Planter will grow either sugar cane, bamboo, or cactus.

The building level determines how many plots they can plant

| Building Level | Crops Grown |
| ----- | ----- |
| 1 | 4 |
| 2 | 8 |
| 3 | 12 |
| 4 | 16 |
| 5 | 20 |

<br>

# Plantation GUI

When accessing the Plantation block by right-clicking on it, you will see a GUI with different options:

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/plantationgui1.png" class="img-fluid mx-auto" alt="Baker GUI">
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

On page two of the GUI, you will see a button to select the item you want the planter to grow.

 <img src="../../assets/images/gui/plantationgui2.png" alt="Plantation GUI Page 2" />
