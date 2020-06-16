---
title: MineColonies Wiki
layout: default
---
# Lumberjack's Hut

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/lumberjack.png" alt="Lumberjack's Hut" />
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

## About the Lumberjack's Hut

The Lumberjack's Hut is where the Lumberjack will go in between chopping down trees. The Lumberjack will cut down any tree in an approximate 50 block area from their hut that is not in a hut schematic and doesn't have cobblestone placed beneath it.

<br>

## Lumberjack's Hut GUI

When accessing the Lumberjack's Hut block by right-clicking on it, you will see a GUI with different options:

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/lumberjackgui1.png" class="img-fluid mx-auto" alt="Lumberjack's Hut GUI">
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

This is page two of the Lumberjack's Hut GUI. It shows a list of recognized saplings the Lumberjack can work with, even modded ones (if coded correctly). Here you can turn on or off which type of trees the Lumberjack will chop down. (The black box at the top is to search for saplings.)

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/lumberjackgui2.png" class="img-fluid mx-auto" alt="Lumberjack2 GUI">
  </div>
  <div class="col-sm-12 col-md">
    <ul>
      <li><strong>Tasklist:</strong> Where you can select the saplings that you want the Lumberjack to work with. Click on a sapling to turn it on or off.</li><br>
    </ul>
  </div>
</div>
<br>
This is page three of the Lumberjack's Hut GUI. 
<br><br>
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/lumberjackgui3.png" class="img-fluid mx-auto" alt="Lumberjack2 GUI">
  </div>
  <div class="col-sm-12 col-md">
    <ul>
      <li><strong>Replant:</strong> Where you can select if you want the Lumberjack to replant trees that are chopped down. They will only do this if they have enough saplings.</li><br>
      <li><strong>Restriction:</strong> This lets you turn on or off if you want the Lumberjack to be restricted to a certain area when chopping trees. To choose the area, use the Give Tool button.</li><br>
      <li><strong>Give Tool:</strong>This will give you a define area tool so you can select a specific area for the Lumberjack to work.</li>
    </ul>
  </div>
</div>
<br>
