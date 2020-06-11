---
title: Minecolonies Wiki
layout: default
---
# Combat Academy

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/combatacademy.png" alt="Combat Academy" />
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Worker:</strong></p>
        </div>
        <div class="col">
        <p><a href="../workers/knight">Knight in Training</a></p>
        </div>
    </div>
    <hr />
    <recipe>combatacademy</recipe>
</div>

# About the Combat Academy

The Combat Academy is where your [Knights in Training](../../source/workers/knight) will train to become [Knight Guards](../../source/workers/guard). This also allows them to level up without a risk of dying to mobs. The number of students that can be trained at a time depends on the level of the Academy. 

| Combat Academy Level | Max # of Students |
| :----: | :----: |
| 1 | 1 |
| 2 | 2 |
| 3 | 3 |
| 4 | 4 |
| 5 | 5 |

The Knights in Training require a sword and shield to practice. They will stand near the practice dummy, a pumpkin on top of a bail of hay. 

The Knights in Training are not actual Guards even though they will be dressed as Knight Guards. They will go to their own house at night to sleep.

# Combat Academy GUI

When accessing the Combat Academy's hut block by right-clicking on it, you will see a GUI with different options:

<br>
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/combatacademygui.png" class="img-fluid mx-auto" alt="Combat Academy GUI">
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
