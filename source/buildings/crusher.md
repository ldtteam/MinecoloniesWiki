---
title: Minecolonies Wiki
layout: default
---
# Crusher
<div class="infobox box text-center">
    <img src="../../assets/images/buildings/crusher.png" alt="Crusher" />
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Worker:</strong> <a href="../workers/crusher">Crusher</a></p>
        </div>
    </div>
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Recipe:</strong> 
        </div>
    </div>
    <recipe>crusher</recipe>
    
</div>
<hr />

# About the Building

The Crusher Hut is where the Crusher will take items and "crush" them into other blocks according to the configuration but the defaults are: 

| Starting Item | Created Item | Ratio |
| ----- | ----- | ----- |
| Cobblestone   | Gravel       | 2:1   |
| Gravel        | Sand         | 2:1   |
| Sand          | Clay         | 2:1   |

The higher the level of the Hut the more daily output the crusher can handle. So:

| Building Level | Daily Max |
| ----- | ----- |
| 1 | 16  |
| 2 | 64  |
| 3 | 144 |
| 4 | 256 |
| 5 | 999 |

# Crusher Hut GUI

After the building is built, access the Crusher's Hut block (right clicking on it), you will see a GUI with different options:

<br>
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/crushergui1.png" class="img-fluid mx-auto" alt="Crusher GUI">
  </div>
  <div class="col-sm-12 col-md">
    <p>The Worker assigned and it's Level. (The worker levels up in time by doing it's work. The higher the level the faster and more efficient it will be). And the buttons:</p>
    <ul>
      {% for item in site.data.gui.global %}
        <li><strong>{{ item.button }}:</strong> {{ item.content }}</li>
      {% endfor %}
    </ul>
  </div>
</div>
On page two of the GUI, you will see what you want the Crusher to Crush and how many per day. (See the above lists). Be sure to click save at the bottom to save any changes made.
<br>
<img src="../../assets/images/gui/crushergui2.png" alt="Crusher GUI Page 2" />

<br>
