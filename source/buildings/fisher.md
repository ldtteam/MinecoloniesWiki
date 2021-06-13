---
title: Fisher's Hut
layout: default
---
# Fisher's Hut

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/fisher.png" alt="Fisher's Hut" />
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
    <recipe>fisher</recipe>
</div>

The Fisher's Hut is where the Fisher will catch fish. The Fisher requires a fishing rod and a body of water of a minimum of 7 blocks wide x 7 blocks long x 1 block tall to be able to work, and the water must be near his hut.

<p style="text-align:center;"><img src="../../assets/images/misc/pond.png" alt="Pond"></p>

Upgrading the Fisher's Hut will expand the range at which the Fisher can fish, and the higher the level of the Fisher's Hut, the more loot the Fisher will be fishing out (instead of fish). This includes prismarine and sponges!

## Fisher's Hut GUI

When accessing the Fisher's Hut block by right-clicking on it, you will see a GUI with different options:

<br>
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/fishergui.png" class="img-fluid mx-auto" alt="Fisher's Hut GUI">
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

This is page two of the Fisher's Hut GUI.

<div class="row">
    <div class="col-sm-12 col-md">
        <img src="../../assets/images/gui/minstockgui.png" class="img-fluid mx-auto" alt="Fisher's Hut GUI 2">
    </div>
    <div class="col-sm-12 col-md">
        <ul>
        <li><strong> Minimum Stock: </strong> Use this button to tell the Fisher's Hut to keep a minimum stock on hand. Set items will be displayed above the button.</li>
        </ul>
    </div>
</div>

