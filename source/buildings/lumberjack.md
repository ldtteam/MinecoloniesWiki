---
title: Minecolonies Wiki
layout: default
---
# Lumberjack

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/fisherman.png" alt="Fisherman's Hut" />
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Worker:</strong> <a href="../workers/fisherman">Fisherman</a></p>
        </div>
    </div>
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Recipe:</strong> 
        </div>
    </div>
    <recipe>fisherman</recipe>
    
</div>
<hr />

# About the Building

Once the building is built, you can hire a lumberjack to begin cutting down trees. The lumberjack will cut down any tree in an approximate 50 block area that is not in a hut schematic or doesn't have cobblestone placed beneath it.

**Note:** Once the Lumberjack block is placed you can go to page 2 of the hut GUI and “define the sapling(s)” you want the Lumberjack to work with. All recognized saplings (even modded items, if coded correctly) will be listed there.

<br>

## Lumberjack Hut GUI


Now you can access the Lumberjack's Hut block (right click on it) and you will see a GUI with different options:

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/lumberjackgui1.png" class="img-fluid mx-auto" alt="Sawmill GUI">
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
    <ul>
      <li><strong>Tasklist</strong> Where you can individually select the saplings (tree types) that you want the Lumberjack to work with.</li><br>
      <li><strong>Toggle all: </strong>A button so you can just turn <i>ALL</i> saplings (tree types) "On" or "Off" for easier management.</li>
    </ul>
  </div>
</div>
<br>
This is “page 3” of the Lumberjack GUI. 
<br><br>
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/lumberjackgui3.png" class="img-fluid mx-auto" alt="Lumberjack2 GUI">
  </div>
  <div class="col-sm-12 col-md">
    <ul>
      <li><strong>Replant:</strong> Where you can select if you want the lumberjack to replant trees that are chopped down.</li><br>
      <li><strong>Restiction: </strong>...........</li><br>
      <li><strong>give tool: </strong>This will give the player the "define area" tool to select a specific area for the lumberjack to work.</li>
    </ul>
  </div>
</div>
<br>