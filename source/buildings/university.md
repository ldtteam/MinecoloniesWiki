---
title: University
layout: default
---
# University

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/university.png" alt="University's Hut Block" />
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Worker:</strong></p>
        </div>
        <div class="col">
        <p><a href="../workers/researcher">Researcher</a></p>
        </div>
    </div>
    <hr />
    <recipe>university</recipe>
</div>

The University is where a Researcher will research various upgrades to your colony. 

## University GUI

When accessing the University's hut block by right-clicking on it, you will see a GUI with different options:

<br>
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/universitygui1.png" class="img-fluid mx-auto" alt="University GUI">
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

<br>

Page 2 of the GUI will show you the options for each research tree.

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/universitygui2.png" class="img-fluid mx-auto" alt="University GUI Page 2">
  </div>
</div>
    
<br>
    
Once you click on a research tree, you will see the options for each research branch. Each option will tell you the requirements and how long it takes to research that option. (Time is real-world time spent in-game.)

To see a description of each of the researches, please visit the [Research System](../../source/systems/research) page.
