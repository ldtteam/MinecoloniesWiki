---
title: Mechanic's Hut
layout: default
---
# Mechanic's Hut

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/mechanic.png" alt="Mechanic" />
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Worker:</strong></p>
        </div>
        <div class="col">
        <p><a href="../workers/mechanic">Mechanic</a></p>
        </div>
    </div>
    <hr />
    <recipe>mechanic</recipe>
</div>

### Note: The Mechanic's Hut cannot be built until you have a level 3 [Blacksmith's Hut](../../source/buildings/blacksmith) (or three level 1 Blacksmith's Huts, or another equivalent) and have finished the research in the [University](../../source/buildings/university).
<br>

The Mechanic's Hut is where the Mechanic will craft redstone items, rails, minecarts, clocks, compasses, sea lanterns, torches, lanterns, jack-o-lanterns, storage blocks (like blocks of iron, coal, quartz, etc), blue ice, packed ice, enchantment tables, ender chests, tripwire hooks, sticky pistons, anything made with blaze rods, and many other items that no other crafter can make. For the Mechanic to work, they must receive a request from another worker and have the necessary materials. The Mechanic's Hut must also have been taught the crafting recipes for all the items you want the Mechanic to be able to craft.

**Hint:** The number of recipes you can teach the Mechanic's Hut doubles per building level. So:


| Mechanic's Hut Level | Number of Recipes |
| :-----: | :-----: |
| 1 | 20 | 
| 2 | 40 |
| 3 | 80 |
| 4 | 160 | 
| 5 | 320 | 

<br>

## Mechanic's Hut GUI

When accessing the Mechanic's Hut block by right-clicking on it, you will see a GUI with different options:

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/mechanicgui.png" class="img-fluid mx-auto" alt="Mechanic GUI">
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
