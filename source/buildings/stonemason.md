---
title: MineColonies Wiki
layout: default
---
# Stonemason's Hut

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/stonemason.png" alt="Stonemason's Hut" />
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Worker:</strong></p>
        </div>
        <div class="col">
        <p><a href="../workers/stonemason">Stonemason</a></p>
        </div>
    </div>
    <hr />
    <recipe>stonemason</recipe>
</div>

## About the Stonemason's Hut

The Stonemason's Hut is where the Stonemason will craft 3x3 recipes made entirely out of cobblestone, stone, andesite, diorite, granite, sandstones, or materials ore (no quartz, purpur, or endstone). You will need to teach the Stonemason's Hut the recipes you want the Stonemason to craft. The Stonemason will only work when they receive a request and they have the needed materials.

**Hint:** Upgrading the Stonemason's Hut lets you teach it more recipes. So:


| Building Level | Number of Recipes |
| :-----: | :-----: |
| 1 | 10 | 
| 2 | 20 |
| 3 | 40 |
| 4 | 80 | 
| 5 | 160 | 


## Stonemason's Hut GUI

When accessing the Stonemason's Hut block by right-clicking on it, you will see a GUI with different options:  

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/stonemasongui.png" class="img-fluid mx-auto" alt="Stonemason GUI">
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
  
