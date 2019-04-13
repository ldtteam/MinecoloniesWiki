---
title: Minecolonies Wiki
layout: default
---
# Lumberjack

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/Lumberjack_Block.png" alt="LumberJack" />
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Worker:</strong></p>
        </div>
        <div class="col">
        <p><a href="../workers/lumberjack">Lumberjack</a></p>
        </div>
    </div>
    <hr />
    <recipe>lumberjack</recipe>
</div>

Welcome to the Lumberjack Hut Information Site.

Before you choose a place to build the Lumberjack Hut, take into account the location from Trees, Warehouse and/or other Worker(s). After you have selected a place for the hut you have to craft the Lumberjack Hut block and place it with the [Building Tool](../items/buildingtool). Once the Lumberjack Hut is placed, the lumberjack will be automatically assigned (or you can manually assign one with the best [Traits](../systems/workerinfo) for a Lumberjack if you changed this in the settings tab in the [Town Hall's GUI](../../source/buildings/townhall).

Now you will have to issue the “Build” assignment so it can build the Lumberjack Hut”.

**Note:** Once the Lumberjack block is placed you can go to page 2 of the hut GUI and “define the sapling(s)” you want the Lumberjack to work with. All recognized saplings (even modded items, if coded correctly) will be listed there.  


## Hut GUI


Now you can access the Lumberjack's Hut block (right click on it) and you will see a GUI with different options:

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/lumberjackgui.png" class="img-fluid mx-auto" alt="Sawmill GUI">
  </div>
  <div class="col-sm-12 col-md"><br>
    <p>The Worker assigned and their Level. (The worker levels up in time by doing their work. The higher the level the faster and more efficient they will be). And the buttons:</p>
    <ul>
      {% for item in site.data.gui.global %}
        <li><strong>{{ item.button }}:</strong> {{ item.content }}</li>
      {% endfor %}
    </ul>
  </div>
</div>  

This is “page 2” of the Lumberjack GUI. It shows a list of recognized saplings it can work with. Here you can turn *ON* or *OFF* which type of trees the Lumberjack will chop down and replant. You can then have 1 lumberjack for 2 types of trees (for example). And the buttons:

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/lumberjackgui2.png" class="img-fluid mx-auto" alt="Lumberjack2 GUI">
  </div>
  <div class="col-sm-12 col-md">
    <ul><br><br><br><br>
      <li><strong>Tasklist</strong> Where you can individually select the saplings (tree types) that you want the Lumberjack to work with.</li><br><br><br>
      <li><strong>Toggle all: </strong>A button so you can just turn <i>ALL</i> saplings (tree types) "On" or "Off" for easier management.</li>
    </ul>
  </div>
</div>  
  
  <br>
  
### **To see build options please see the [Builder](../../source/workers/builder) Page**  

