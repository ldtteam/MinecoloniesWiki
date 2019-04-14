---
title: Minecolonies Wiki
layout: default
---
# Stonemason

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/Stonemason_Block.png" alt="Stonemason" />
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

Welcome to the Stonemason Information Site.

Before you choose a place to build the Stonemason, take into account the location from Mine, Warehouse and/or other Worker(s). After you have selected a place for the Hut, you have to craft the Stonemason's Hut block and place it with your [Building Tool](../items/buildingtool). Once the hut block is placed, the Stonemason will be automatically assigned (or you can manually assign one with the best  [Traits](../systems/workerinfo) for Stonemason if you changed this in the settings tab in the [Town Hall's GUI](../../source/buildings/townhall).

Now you will have to issue the builder the “Build” assignment so it can build the “Stonemason’s Hut”. Once the builder is done you can now hire the Stonemason and begin teaching them the recipes you would like them to create. 

Stonemason can learn 3x3 recipes made entirely out of cobble, stone, andesite, diorite, granite, sandstones, or materials oreDictionaried with stone. No quartz, purpure, or endstone. The Stonemason will work when they receive a request for any of those items for all of your Colony's needs.

**Hint:** Once the builder is done you will want to upgrade the Stonemason to get all the awesome perks it has to offer for higher levels. So:


| Building Level | Number of Recipes |
| :-----: | :-----: |
| 1 | 10 | 
| 2 | 20 |
| 3 | 40 |
| 4 | 80 | 
| 5 | 160 | 


## Hut GUI

When accessing the Stonemason's Hut block (right clicking on it), you will see a GUI with different options:  

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/stonemasongui.png" class="img-fluid mx-auto" alt="Stonemason GUI">
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
  
### **To see build options please see the [Builder](../../source/workers/builder) Page**  

