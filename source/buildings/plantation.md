---
title: MineColonies Wiki
layout: default
---
# Plantation

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

## About the Plantation

The Plantation is where the Planter will grow either sugar cane, bamboo, or cactus.

The Plantation's level determines how many crops the Planter can plant at a time.

| Plantation Level | Crops Grown |
| ----- | ----- |
| 1 | 4 |
| 2 | 8 |
| 3 | 12 |
| 4 | 16 |
| 5 | 20 |

<br>

## Plantation GUI

When accessing the Plantation's hut block by right-clicking on it, you will see a GUI with different options:

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/plantationgui1.png" class="img-fluid mx-auto" alt="Plantation GUI">
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

On page two of the GUI, you can select the plant you want the Planter to grow. Just click the button to cycle through sugar cane, bamboo, or cactus.

 <img src="../../assets/images/gui/plantationgui2.png" alt="Plantation GUI Page 2" />
