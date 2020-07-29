---
title: Fisher's Hut
layout: default
---
# Fisher's Hut

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/fisherman.png" alt="Fisher's Hut" />
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Worker:</strong></p>
        </div>
        <div class="col">
        <p><a href="../workers/fisher">Fisher</a></p>
        </div>
    </div>
    <hr />
    <recipe>fisherman</recipe>
</div>

The Fisher's Hut is where the Fisher will catch fish. The Fisher requires a fishing rod and a body of water of a minimum of 7 blocks wide x 7 blocks long x 1 block tall to be able to work, and the water must be near his hut.

<p style="text-align:center;"><img src="../../assets/images/misc/pond.png" alt="Pond"></p>

Upgrading the Fisher's Hut will expand the range at which the Fisher can fish, and the higher the level of the Fisher's Hut, the more loot the Fisher will be fishing out (instead of fish). You can also give the Fisher an enchanted fishing rod when their hut is level 5 and reap the benefits of the treasures they will be catching for you.

## Fisher's Hut GUI

When accessing the Fisher's Hut block by right-clicking on it, you will see a GUI with different options:

<br>
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/fishermangui.png" class="img-fluid mx-auto" alt="Fisher's Hut GUI">
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
  
