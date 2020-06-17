---
title: MineColonies Wiki
layout: default
---
# Archery

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/archery.png" alt="Archery" />
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Worker:</strong></p>
        </div>
        <div class="col">
        <p><a href="../workers/ranger">Ranger in Training</a></p>
        </div>
    </div>
    <hr />
    <recipe>archery</recipe>
</div>


## About the Archery

###  Note: The Archery can not be built until you have a Level 3 Barracks and finish the research in the [University](../..source/buildings/university)

The Archery is where your [Rangers in Training](../../source/workers/ranger) will train to become [Ranger Guards](../../source/workers/guard). This also allows them to level up without a risk of dying to mobs. The number of students that can be trained at a time depends on the level of the Archery. 

| Archery Level | Max # of Students |
| :----: | :----: |
| 1 | 1 |
| 2 | 2 |
| 3 | 3 |
| 4 | 4 |
| 5 | 5 |

The Rangers in Training require a bow to practice. They will shoot at targets, a bale of hay on a fence post. 

The Rangers in Training are not actual Guards even though they will be dressed as Ranger Guards. They will go to their own house at night to sleep. 


## Archery GUI

When accessing the Archery's hut block by right-clicking on it, you will see a GUI with different options:

<br>
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/archerygui.png" class="img-fluid mx-auto" alt="Archery GUI">
   </div>
  <div class="col-sm-12 col-md">
    <br>
    <ul>
      {% for item in site.data.gui.global%}
        <li><strong>{{ item.button }}:</strong> {{ item.content }}</li>
      {% endfor %}
    </ul>
  </div>
</div>  
  <br>
  
