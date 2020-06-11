---
title: MineColonies Wiki
layout: default
---
# Fisherman's Hut

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/fisherman.png" alt="Fisherman's Hut" />
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Worker:</strong></p>
        </div>
        <div class="col">
        <p><a href="../workers/fisherman">Fisherman</a></p>
        </div>
    </div>
    <hr />
    <recipe>fisherman</recipe>
</div>

# About the Fisherman's Hut

The Fisherman's Hut is where the Fisherman will catch fish. The Fisherman requires a fishing rod and a body of water of a minimum of 7 x 7 x 1 blocks to be able to work, and the water must be near his hut.

<p style="text-align:center;"><img src="../../assets/images/gui/pond.png" alt="Pond"></p>

Upgrading the Fisherman's Hut will expand the range at which the Fisherman can fish, and the higher the level of the Fisherman's Hut, the more loot the Fisherman will be fishing out (instead of fish). You can also give the Fisherman an enchanted fishing rod when their hut is level 5 and reap the benefits of the treasures they will be catching for you.

# Fisherman's Hut GUI

When accessing the Fisherman's Hut block by right-clicking on it, you will see a GUI with different options:

<br>
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/fishermangui.png" class="img-fluid mx-auto" alt="Fisherman GUI">
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
  
