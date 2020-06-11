---
title: MineColonies Wiki
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

## About the Building

The Combat Academy building is where your [Knights in Training](../../source/workers/knight) become [Knight Guards](../../source/workers/guard). This also allows them to level up without risk of dying to mobs. The number of students depend on the level of the building. 

| Combat Academy Level | Max # of Students |
| :----: | :----: |
| 1 | 1 |
| 2 | 2 |
| 3 | 3 |
| 4 | 4 |
| 5 | 5 |

The Knights in Training require a sword and shield to practice. They will stand near the practice dummy, a pumpkin ontop of a bail of hay. 

The Knights in Training are not actual guards even though they will be dressed as guards, in the usual Knights clothes. They will go to their own house at night to sleep.  

## Combat Academy's GUI

Now you can access the Combat Academy block (right click on it) and you will see a GUI with different options:

<br>
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/combatacademygui.png" class="img-fluid mx-auto" alt="Combat Academy GUI">
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
  <br>
  
### **To see build options please see the [Builder](../../source/workers/builder) Page**  
