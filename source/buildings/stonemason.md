---
title: Stonemason's Hut
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

### Note: The Stonemason's Hut cannot be built until you have a level 1 [Blacksmith's Hut](../../source/buildings/blacksmith) and have finished the research in the [University](../../source/buildings/university).
<br>

The Stonemason's Hut is where the Stonemason will craft 3x3 recipes made entirely out of cobblestone, stone, andesite, diorite, granite, quartz, purpur, nether bricks, prismarine, sandstones, and/or ores (no ingots or redstone items). They can also craft end stone, but only if you have researched the Know the End research in the [University](../../source/buildings/university). The Stonemason will only work when they receive a request from another worker and have the needed materials. You will also need to teach the Stonemason's Hut the recipes you want the Stonemason to craft.

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
    <img src="../../assets/images/gui/stonemasongui.png" class="img-fluid mx-auto" alt="Stonemason's Hut GUI 1">
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
<br><br>

The 2nd page of the GUI shows what crafting task(s) the Stonemason currently has.
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/craftertasklist.png" class="img-fluid mx-auto" alt="Stonemason's Hut GUI 2">
  </div>
  <div class="col-sm-12 col-md">
    <br>
  </div>
</div>
<br> <br>
