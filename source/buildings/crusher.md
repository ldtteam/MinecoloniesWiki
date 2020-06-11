---
title: MineColonies Wiki
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

# About the Crusher's Hut

The Crusher's Hut is where the Crusher will take items and crush them into other blocks. The defaults are: 

| Starting Item | Created Item | Ratio |
| ----- | ----- | ----- |
| Cobblestone   | Gravel       | 2:1   |
| Gravel        | Sand         | 2:1   |
| Sand          | Clay         | 2:1   |

The higher the level of the Crusher's Hut, the more daily output the Crusher can handle. So:

| Building Level | Daily Max |
| ----- | ----- |
| 1 | 16  |
| 2 | 64  |
| 3 | 144 |
| 4 | 256 |
| 5 | 999 |

# Crusher's Hut GUI

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

On page two of the GUI, you can set what you want the Crusher to crush and how many blocks per day. (See the above lists). Be sure to click save at the bottom after you make changes.

<br>
<img src="../../assets/images/gui/crushergui2.png" alt="Crusher GUI Page 2" />

<br>
