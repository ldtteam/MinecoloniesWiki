---
title: Minecolonies Wiki
layout: default
---
# Flower Shop

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/flowershop.png" alt="Flowershop's Hut" />
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Worker:</strong> <a href="../workers/florist">Florist</a></p>
        </div>
    </div>
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Recipe:</strong> 
        </div>
    </div>
    <recipe>flowershop</recipe>
</div>
<hr />

# About the Building

Once the building is built, you can now hire the florist and and select what item you want them to plant. 

**Hint:** Once the builder is done you will want to upgrade the Flower Shop to get all the awesome perks it has to offer for higher levels. The higher the level of the Hut the more daily output the crusher can handle. So:

| Building Level | Number of Plants |
| ----- | ----- |
| 1 | 4  |
| 2 | 8  |
| 3 | 12 |
| 4 | 16 |
| 5 | 20 |

# Flowershop GUI

When accessing the Flower Shop's Hut block (right clicking on it), you will see a GUI with different options:

<br>
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/flowershopgui1.png" class="img-fluid mx-auto" alt="Crusher GUI">
  </div>
  <div class="col-sm-12 col-md">
    <p>The Worker assigned and it's Level. (The worker levels up in time by doing it's work. The higher the level the faster and more efficient it will be). And the buttons:</p>
    <ul>
      {% for item in site.data.gui.global %}
        <li><strong>{{ item.button }}:</strong> {{ item.content }}</li>
      {% endfor %}
    </ul>
  </div>
</div>
<br>
The second page shows a list of items the florist can plant and you can turn the plantables on or off depending on which ones you want.
<br><br>

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/flowershopgui2.png" class="img-fluid mx-auto" alt="Crusher GUI">
  </div>
</div>
