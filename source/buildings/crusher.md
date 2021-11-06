---
title: Crusher's Hut
layout: default
---
# Crusher's Hut

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/crusher.png" alt="Crusher" />
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Worker:</strong></p>
        </div>
        <div class="col">
        <p><a href="../workers/crusher">Crusher</a></p>
        </div>
    </div>
    <hr />
    <recipe>crusher</recipe>
</div>

### Note: The Crusher's Hut cannot be built until you have a level 1 [Stonemason's Hut](../../source/buildings/stonemason) and have finished the research in the [University](../../source/buildings/university).
<br>

The Crusher's Hut is where the Crusher will take items and crush them into other blocks. The defaults are: 

| Starting Item | Created Item |
| ----- | ----- |
| Cobblestone   | Gravel (chance to get flint) |
| Gravel        | Sand         |
| Sand          | Clay         |

Note: By default the Crusher's ratio is 2:1, but there is a [research](../../source/systems/research) in the [University](../../source/buildings/university) to make them work on a 1:1 ratio.

The higher the level of the Crusher's Hut, the more daily output the Crusher can handle. So:

| Building Level | Daily Max |
| ----- | ----- |
| 1 | 16  |
| 2 | 64  |
| 3 | 144 |
| 4 | 256 |
| 5 | 999 |

## Crusher's Hut GUI

When accessing the Crusher's Hut block by right-clicking on it, you will see a GUI with different options:

<br>
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/crushergui1.png" class="img-fluid mx-auto" alt="Crusher GUI">
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

On page two of the GUI, you can set what you want the Crusher to crush and how many blocks per day. (See the above lists.) Be sure to click save at the bottom after you make changes.

<br>
<img src="../../assets/images/gui/crushergui2.png" alt="Crusher GUI Page 2" />

<br>
