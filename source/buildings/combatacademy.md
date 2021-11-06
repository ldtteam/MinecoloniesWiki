---
title: Combat Academy
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
        <p><a href="../workers/knightintraining">Knight in Training</a></p>
        </div>
    </div>
    <hr />
    <recipe>combatacademy</recipe>
</div>

### Note: The Combat Academy cannot be built until you have a level 3 [Barracks](../../source/buildings/barracks) (or three level 1 Barracks, or another equivalent) and have finished the research in the [University](../../source/buildings/university) .
<br> 

The Combat Academy is where your Knights in Training will train to become [Knight Guards](../../source/workers/guard). This also allows them to level up without a risk of dying to mobs. A new Knight in Training will need a bed in a house in order to spawn. However, once they are hired at the Combat Academy, that becomes their new residence and the bed in the house will open up for another new citizen (child or recruit).

The number of students that can be trained at a time depends on the level of the Academy. 

| Combat Academy Level | Max # of Students |
| :----: | :----: |
| 1 | 1 |
| 2 | 2 |
| 3 | 3 |
| 4 | 4 |
| 5 | 5 |

The Knights in Training require a sword and shield to practice. They will attack the practice dummies, a pumpkin on top of a bale of hay. 

The Knights in Training are not actual Guards even though they will be dressed as Knight Guards. They will not help defend the colony.

## Combat Academy GUI

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

This is page two of the Combat Academy GUI.

<div class="row">
    <div class="col-sm-12 col-md">
        <img src="../../assets/images/gui/minstockgui.png" class="img-fluid mx-auto" alt="Combat Academy GUI 2">
    </div>
    <div class="col-sm-12 col-md">
        <ul>
        <li><strong> Minimum Stock: </strong> Use this button to tell the Combat Academy to keep a minimum stock on hand. Set items will be displayed above the button.</li>
        </ul>
    </div>
</div>
