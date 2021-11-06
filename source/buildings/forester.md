---
title: Forester's Hut
layout: default
---
# Forester's Hut

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/forester.png" alt="Forester's Hut" />
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Worker:</strong></p>
        </div>
        <div class="col">
        <p><a href="../workers/forester">Forester</a></p>
        </div>
    </div>
    <hr />
    <recipe>forester</recipe>
</div>

The Forester's Hut is where the Forester will go in between chopping down trees. The Forester will cut down any tree in an approximate 150 block area (from themselves) that is not in a hut schematic and doesn't have cobblestone placed beneath it.

**Note:** In Minecraft 1.16+ Foresters require hoes (for breaking leaves).

<br>

## Forester's Hut GUI

When accessing the Forester's Hut block by right-clicking on it, you will see a GUI with different options:

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/forestergui1.png" class="img-fluid mx-auto" alt="Forester's Hut GUI">
  </div>
  <div class="col-sm-12 col-md"><br>
    <br>
    <ul>
      {% for item in site.data.gui.global %}
        <li><strong>{{ item.button }}:</strong> {{ item.content }}</li>
      {% endfor %}
    </ul>
  </div>
</div>  
<br> <br>

This is page two of the Forester's Hut GUI. It shows a list of recognized saplings the Forester can work with, even modded ones (if coded correctly). Here you can turn on or off which type of trees the Forester will chop down. (The black box at the top is to search for saplings.)

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/forestergui2.png" class="img-fluid mx-auto" alt="Forester's Hut GUI 2">
  </div>
  <div class="col-sm-12 col-md">
    <ul>
      <li><strong>Tasklist:</strong> Where you can select the saplings that you want the Forester to work with. Click on a sapling to turn it on or off.</li><br>
    </ul>
  </div>
</div>
<br>
This is page three of the Forester's Hut GUI. 
<br><br>
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/forestergui3.png" class="img-fluid mx-auto" alt="Forester's Hut GUI 3">
  </div>
  <div class="col-sm-12 col-md">
    <ul>
      <li><strong>Replant:</strong> Where you can select if you want the Forester to replant trees that are chopped down. They will only do this if they have enough saplings.</li><br>
      <li><strong>Restriction:</strong> This lets you turn on or off if you want the Forester to be restricted to a certain area when chopping trees. To choose the area, use the Give Tool button.</li><br>
      <li><strong>Give Tool:</strong>This will give you a define area tool so you can select a specific area for the Forester to work. Right click one corner of the area you want, then left click the opposite corner, and this will set a rectangle inside which the Forester will search for trees. Vertical coordinates do not affect this too much; keeping them all around the same y-level can avoid unintentional bugs, though.</li>
    </ul>
  </div>
</div>
<br>
