---
title: MineColonies Wiki
layout: default
---
# University

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/university.png" alt="University's Hut" />
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

# About the University

The University is where a researcher will research various upgrades to your colony. 

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

Page 2 of the GUI will show you the options for each research branch.

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/universitygui2.png" class="img-fluid mx-auto" alt="University GUI Page 2">
  </div>
</div>
    
<br>
    
Once you click on a research branch, you will see the options for each research tree. Each option will tell you the requirements and how long it takes to research that option. (Time is real-world time spent in-game.)

<br>

<img src="../../assets/images/gui/universitycombat.png" class="img-fluid mx-auto" alt="University Combat GUI Page">

<br>

<img src="../../assets/images/gui/universitycivilian.png" class="img-fluid mx-auto" alt="University Civilian GUI Page">

 <br>
 
 <img src="../../assets/images/gui/universitytechnology.png" class="img-fluid mx-auto" alt="University Technology GUI Page">
 
 <br>
 
