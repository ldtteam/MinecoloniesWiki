---
title: Minecolonies Wiki
layout: default
---
# Barracks Tower

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/barrackstower.png" alt="Barracks Tower" />
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Worker:</strong></p>
        </div>
        <div class="col">
        <p><a href="../workers/guard">Guard</a></p>
        </div>
    </div>
</div>

# About the Barracks Tower

The Barracks Towers will employ and house 1 [Guard](../../source/workers/guard) for every level built (unlike the normal [Guard Towers](../../source/buildings/guardtower), which can only have 1 Guard at a time). Each Barracks Tower will house and employ 5 Guards at the highest level. Each new Guard will need a bed in a house in order to spawn, however, once they are hired at the Barracks Tower that becomes their new residence and the bed in the house will open up for another new citizen (child or recruit).

The Barracks Tower locations are predetermined by the [Barracks](../../source/buildings/barracks) that you choose. They are placed in specific locations to fit within the Barracks. 


| Barracks Level | Max # of Barracks Towers | Max Level of Barracks Towers |
| :----: | :----: | :----: |
| 1 | 1 | 1 |
| 2 | 2 | 2 |
| 3 | 3 | 3 |
| 4 | 4 | 4 |
| 5 | 4 | 5 |

<br>

# Barracks Tower GUI

When accessing the Barracks Tower's hut block by right-clicking on it, you will see a GUI with different options:

<br>
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/barrackstowergui1.png" class="img-fluid mx-auto" alt="Barracks Tower GUI">
  </div>
  <div class="col-sm-12 col-md"><br><br>
    <br>
    <ul>
      {% for item in site.data.gui.global%}
        <li><strong>{{ item.button }}:</strong> {{ item.content }}</li>
      {% endfor %}
    </ul>  
  </div>
</div>
<br>

This is page two of the GUI.

<br>

<div class="row">
  <div class="col-sm-12 col-md">
    <br>
    <img src="../../assets/images/gui/barrackstowergui2.png" class="img-fluid mx-auto" alt="Guard GUI">
  </div>
  <div class="col-sm-12 col-md">
    <ul>
      <li><strong></strong> When you select this mode you have two options: </li>
    </ul>
  </div>
</div>
<br>

On the third page of the GUI you can tell the Guard who to attack and who to ignore. You can also choose the priority of each mob by moving them up or down in the list.

<div class="row">
  <div class="col-sm-12 col-md">
    <br>
    <img src="../../assets/images/gui/barrackstowergui3.png" class="img-fluid mx-auto" alt="Guard GUI">
  </div>
  <div class="col-sm-12 col-md">
</div>
