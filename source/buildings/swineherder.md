---
title: Minecolonies Wiki
layout: default
---
# Swine Herder's Hut

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/swineHerder.png" alt="Swine Herder's Hut" />
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Worker:</strong> <a href="../workers/swineherder">Swine Herder</a></p>
        </div>
    </div>
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Recipe:</strong> 
        </div>
    </div>
    <recipe>swineherder</recipe>
    
</div>
<hr />

# About the Building

Once the building is built, you will have to capture and bring in 2 Pigs to the herder's hut. The herder will not catch and bring in any Pigs, only breed and butcher the ones in his hut area, so make sure you provide it with 2 initial Pigs.

**Note:** The Herder will only keep alive 2 Pigs per hut level, so at level 5 they will have 10 Pigs in their holding pens alive to breed and butcher. This means they will keep *MORE* and have faster production and collection of meats, drops and by products. So:


| Building Level | Pigs "Housed" |
| ----- | ----- |
| 1 | 2 |
| 2 | 4 |
| 3 | 6 |
| 4 | 8 |
| 5 | 10 |

<br>

# Swine Herder Hut GUI

Now you can access the Swine Herder's Hut block (right click on it) and you will see a GUI with different options:

<br>
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/swineherdergui.png" class="img-fluid mx-auto" alt="Herder GUI">
  </div>
  <div class="col-sm-12 col-md">
    <p>The Worker assigned and it's Level. (The worker levels up in time by doing it's work. The higher the level the faster and more efficient they will be). And the buttons:</p>
    <ul><br>
      {% for item in site.data.gui.global %}
        <li><strong>{{ item.button }}:</strong> {{ item.content }}</li>
      {% endfor %}
    </ul>
  </div>
</div>
<br><br>
