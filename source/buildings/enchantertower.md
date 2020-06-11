---
title: MineColonies Wiki
layout: default
---
# Enchanter's Tower

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

# About the Enchanter's Tower

The Enchanter's Tower is where the Enchanter will create enchanted books, as long as they have [Ancient Tomes](../../source/items/ancient_tome). The Enchanter will collect XP from other workers to create the enchanted books. They will *not* apply the enchanted books to tools and armor, you must do that yourself.

The higher the level of the Enchanter's Tower, the higher the level of the enchanted books the Enchanter will produce. So:

| Building Level | Enchantment Level | Odds |
| ----- | ----- | ----- |
| 1 | 1 | 50 |
| 2 | 2 | 25 |
| 3 | 3 | 15 |
| 4 | 4 | 5 |
| 5 | 5 | 1 |

# Enchanter's Hut GUI

When accessing the Enchanter's Hut block by right-clicking on it, you will see a GUI with different options:

<br>
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/enchantergui1.png" class="img-fluid mx-auto" alt="Enchanter's GUI Page 1">
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
On page two of the GUI, you will see a list of workers that you want the Enchanter to collect XP from and how much XP you want them to collect. You can change these.
<br> 
 <img src="../../assets/images/gui/enchantergui2.png" alt="Enchanter GUI Page 2" />
