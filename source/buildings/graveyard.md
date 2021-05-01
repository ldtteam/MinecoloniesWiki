---
title: Graveyard
layout: default
---
# Graveyard

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/graveyard.png" alt="Graveyard" />
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Worker:</strong></p>
        </div>
        <div class="col">
        <p><a href="../workers/undertaker">Undertaker</a></p>
        </div>
    </div>
    <hr />
    <recipe>graveyard</recipe>
</div>

### Note: The Graveyard cannot be built until you have finished the [research](../../source/systems/research) in the [University](../../source/buildings/university).
<br>

The Graveyard is where the Undertaker will bury your deceased citizens.
For more information, see the [Undertaker](../../source/workers/undertaker) page.

The recommended maximum grave count per Graveyard level is below. This is **not mandatory**, and the actual amount will vary between styles.

| Graveyard Level | Number of Graves |
| --------------- | ---------------- |
| 1 | 14 | 
| 2 | 18 |
| 3 | 27 |
| 4 | 36 |
| 5 | 50 |

## Graveyard GUI

When accessing the Graveyard's hut block by right-clicking on it, you will see a GUI with different options:

<br>
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/graveyardgui1.png" class="img-fluid mx-auto" alt="Graveyard GUI 1">
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
<br><br>
This is page two of the Graveyard GUI. It has a list of the graves the Undertaker needs to recover.

<br>
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/graveyardgui2.png" class="img-fluid mx-auto" alt="Graveyard GUI 2">
  </div>
</div>
  <br><br>
  This is page three of the Graveyard GUI. It has a list of currently-buried citizens.

<br>
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/graveyardgui3.png" class="img-fluid mx-auto" alt="Graveyard GUI 3">
  </div>
</div>
