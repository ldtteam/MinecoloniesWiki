---
title: Flower Shop
layout: default
---
# Flower Shop

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/flowershop.png" alt="Flowershop's Hut" />
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Worker:</strong></p>
        </div>
        <div class="col">
        <p><a href="../workers/florist">Florist</a></p>
        </div>
    </div>
    <hr />
    <recipe>flowershop</recipe>
</div>

### Note: The Flower Shop cannot be built until you have a level 3 [Composter's Hut](../../source/buildings/composter) (or three level 1 Composter's Huts, or another equivalent) and have finished the research in the [University](../../source/buildings/university).
<br>

The Flower Shop is where your Florist will grow flowers for your colony, if given [compost](../../source/items/compost) and an axe.

**Hint:** The higher the level of the Flower Shop, the more daily output the Florist can handle. So:

| Building Level | Number of Plants |
| -------------- | ---------------- |
| 1              | 4                |
| 2              | 8                |
| 3              | 12               |
| 4              | 16               |
| 5              | 20               |

## Flower Shop GUI

When accessing the Flower Shop's hut block by right-clicking on it, you will see a GUI with different options:

<br>
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/flowershopgui1.png" class="img-fluid mx-auto" alt="Crusher GUI">
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
The second page shows a list of items the Florist can plant. You can turn the plantables on or off. (The black box at the top lets you search for plants.) <b>Note: </b>you can only toggle plantables if the Flower Shop is level four or higher.
<br><br>

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/flowershopgui2.png" class="img-fluid mx-auto" alt="Florist GUI">
  </div>
</div>

The third page has a minimum stock list.

<div class="row">
    <div class="col-sm-12 col-md">
        <img src="../../assets/images/gui/minstockgui.png" class="img-fluid mx-auto" alt="Flower Shop GUI 3">
    </div>
    <div class="col-sm-12 col-md">
        <ul>
        <li><strong> Minimum Stock: </strong> Use this button to tell the Flower Shop to keep a minimum stock on hand. Set items will be displayed above the button.</li>
        </ul>
    </div>
</div>
