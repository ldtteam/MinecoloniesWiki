---
title: Swineherd's Hut
layout: default
---
# Swineherd's Hut

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/swineherder.png" alt="Swineherd's Hut" />
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Worker:</strong></p>
        </div>
        <div class="col">
        <p><a href="../workers/swineherd">Swineherd</a></p>
        </div>
    </div>
    <hr />
    <recipe>swineherder</recipe>
</div>

The Swineherd's Hut is where the Swineherd will breed and butcher pigs for food. You will have to capture and bring in two pigs to the Swineherd's Hut, as the Swineherd will not catch and bring in any pigs.

**Note:** The Swineherd will only keep two pigs alive per hut level, so at level 5 they will have ten pigs in their holding pens to breed and butcher. This means they will be faster at producing and collecting meat. So:


| Building Level | Pigs Housed |
| ----- | ----- |
| 1 | 2 |
| 2 | 4 |
| 3 | 6 |
| 4 | 8 |
| 5 | 10 |

  

## Swineherd's Hut GUI

When accessing the Swineherd's Hut block by right-clicking on it,  you will see a GUI with different options:

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/swineherdergui.png" class="img-fluid mx-auto" alt="Swineherd's Hut GUI">
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
