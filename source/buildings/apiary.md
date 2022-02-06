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

<div class="row">
  
<div class="col">
## Apiary GUI

When accessing the Apiary block by right-clicking on it, you will see a GUI with different options:

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
    <img src="../../assets/images/gui/apiarygui2.png" class="img-fluid mx-auto" alt="Apiary GUI 2">
  </div>
  <div class="col-sm-12 col-md">
    <br>
    <p>This is page two of the GUI. It has two buttons:</p>
    <ul>
        <li><b>Honeycombs or Honey:</b> Here you choose if the Beekeeper will collect honeycombs or honey bottles. They will collect whatever shows on the GUI.</li>
      <li><b>Get hive tool:</b> Click this button to get the hive tool, which is how you select which hives the Beekeeper will take care of. To select a hive, right-click on it with the hive tool. Right-click on a hive again to remove it.</li>
    </ul>
  </div>
</div>

<br>
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/minstockgui.png" class="img-fluid mx-auto" alt="Apiary GUI 3">
  </div>
  <div class="col-sm-12 col-md">
    <br>
    <p>This is page three of the GUI. It has one button:</p>
    <ul>
        <li><strong> Minimum Stock: </strong> Use this button to tell the Apiary to keep a minimum stock on hand. Set items will be displayed above the button.</li>
    </ul>
  </div>
</div>
  </div>
</div>
