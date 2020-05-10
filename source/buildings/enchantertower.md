---
title: Minecolonies Wiki
layout: default
---
# Enchanter

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/enchanter.png" alt="Enchanter's Tower" />
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Worker:</strong></p>
        </div>
        <div class="col">
        <p><a href="../workers/enchanter">Enchanter</a></p>
        </div>
    </div>
    <hr />
    <recipe>enchanter</recipe>
</div>

# About the Building

The enchanter will "collect" xp from other workers in order to use it to create enchanted books. The Enchanter needs an [Ancient Tome](../../source/item/ancient_tome) to create the enchanted book.  

The higher the level of the Hut the more output the Enchanter can handle. So:

| Building Level | Enchantment Level | Odds |
| ----- | ----- | ----- |
| 1 | 1 | 50 |
| 2 | 2 | 25 |
| 3 | 3 | 15 |
| 4 | 4 | 5 |
| 5 | 5 | 1 |

# Enchanter's Hut GUI

After the building is built, access the Enchanter's Hut block (right clicking on it), you will see a GUI with different options:

<br>
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/enchantergui1.png" class="img-fluid mx-auto" alt="Enchanter's GUI Page 1">
  </div>
  <div class="col-sm-12 col-md">
    <ul>
      {% for item in site.data.gui.global %}
        <li><strong>{{ item.button }}:</strong> {{ item.content }}</li>
      {% endfor %}
    </ul>
  </div>
</div>
<br>
On page two of the GUI, you will see a list of workers that you want the Enchanter to collect xp from and how much xp you want him to collect.
<br> 
 <img src="../../assets/images/gui/enchantergui2.png" alt="Enchanter GUI Page 2" />
