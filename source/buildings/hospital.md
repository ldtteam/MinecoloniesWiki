---
title: Minecolonies Wiki
layout: default
---
# Hospital

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/hospital.png" alt="Hospital" />
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Worker:</strong> <a href="../workers/healer">Healer</a></p>
        </div>
    </div>
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Recipe:</strong> 
        </div>
    </div>
    <recipe>hospital</recipe>
    
</div>
<hr />

# About the Building

The Hospital will be where injured or ill citizens go when the need healing. enchanter will "collect" xp from other workers in order to use it to create enchanted books. The Enchanter needs an [Ancient Tome](../../source/item/ancient_tome) to create the enchanted book.  

The higher the level of the Hut the more people the Hospital can handle. So:

| Building Level | Number of Beds |
| ----- | ----- |
| 1 | 1 |
| 2 | 2 |
| 3 | 3 |
| 4 | 4 |
| 5 | 5 |

# Hospital's Hut GUI

After the building is built, access the Hospital's Hut block (right clicking on it), you will see a GUI with different options:

<br>
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/hospitalgui.png" class="img-fluid mx-auto" alt="Hospital's GUI Page">
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
