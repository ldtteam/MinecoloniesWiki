---
title: Apiary
layout: default
---
# Apiary

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/apiary.png" alt="Apiary" />
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Worker:</strong></p>
        </div>
        <div class="col">
        <p><a href="../workers/beekeeper">Beekeeper</a></p>
        </div>
    </div>
    <hr />
    <recipe>apiary</recipe>
</div>

The Apiary is where the Beekeeper works. The Beekeeper breeds bees and harvests honeycombs or honey bottles (you can choose which on the second page of the Apiary's GUI).

The level of the Apiary determines the max number of hives the Beekeeper can take care of:

| Apiary Level | Max Number of Hives |
| ------------ | ------------------- |
| 1 | 1 |
| 2 | 2 |
| 3 | 4 |
| 4 | 8 |
| 5 | 16 |

**Note:** If the Beekeeper is asking for hives but there are some nearby, make sure you've set the hives for them to take care of with the hive tool. This tool is accessed from the second page of the Apiary GUI (see below).

## Apiary GUI

<div class="row">
 
<div class="col">

When accessing the Apiary Hut block by right-clicking on it, you will see a GUI with different options. You start on the main tab:

<br>
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/apiarygui1.png" class="img-fluid mx-auto" alt="Apiary GUI">
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

<br>
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/minstockgui.png" class="img-fluid mx-auto" alt="Apiary GUI 2">
  </div>
  <div class="col-sm-12 col-md">
    <br>
    <p>The second tab of the GUI is <strong>Minimum Stock</strong>.    It has one button:</p>
    <ul>
        <li><strong> Minimum Stock: </strong> Use this button to tell the Apiary to keep a minimum stock on hand. Set items will be displayed above the button.</li>
    </ul>
  </div>
</div>

<br>
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/apiarygui3.png" class="img-fluid mx-auto" alt="Apiary GUI 3">
  </div>
  <div class="col-sm-12 col-md">
    <br>
    <p>The third tab of the GUI is <strong>Settings</strong>.  It has two buttons:</p>
    <ul>
      <li><b>Breeding:</b> On by default. Here you can choose if the Beekeeper will breed bees.</li>
      <li><b>Honeycombs or Honey:</b> Here you choose if the Beekeeper will collect honeycombs, honey bottles, or both. They will collect whatever shows on the GUI.</li>
    </ul>
  </div>
</div>

<br>
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/apiarygui4.png" class="img-fluid mx-auto" alt="Apiary GUI 4">
  </div>
  <div class="col-sm-12 col-md">
    <br>
    <p>The fourth tab of the GUI is <strong>Flowers</strong>.  Here you designate what flowers you want the Beekeeper to request and use during breeding.  By default, all flowers are turned off.</p>
  </div>
</div>

<br>
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/apiarygui5.png" class="img-fluid mx-auto" alt="Apiary GUI 5">
  </div>
  <div class="col-sm-12 col-md">
    <br>
    <p>The fifth tab of the GUI is the <strong>Hive Tool</strong>.</p>
    <ul>
      <li><b>Obtain Tool:</b> Click this button to get the hive tool, which is how you select which hives the Beekeeper will take care of. To select a hive, right-click on it with the hive tool. Right-click on a hive again to remove it.</li>
    </ul>
  </div>
</div>
  </div>
</div>
