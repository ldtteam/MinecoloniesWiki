---
title: Minecolonies Wiki
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

# About the Building

## Note: The Research tree is still being worked on so the images may change.

Once the building is built, the researcher can now begin researching various upgrades. 

# University Hut GUI

When accessing the University's Hut block (right clicking on it), you will see a GUI with different options:

<br>
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/universitygui1.png" class="img-fluid mx-auto" alt="University GUI">
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



<br>

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/universitygui2.png" class="img-fluid mx-auto" alt="University GUI Page 2">
  </div>
    <p> Page 2 of the GUI will show you the options for each research tree: </p>
</div>
    
<br>
    
Once you click on a Research Branch, you will see the options for each research tree:

<br>

<div class="row">
  <div class="col-sm-12 col-md">  
    <img src="../../assets/images/gui/universitygui3.png" class="img-fluid mx-auto" alt="University GUI Page 3">
    </div>
    <p> Each option will tell you the requirements and tell you how long it takes to research that option. (Time is in real world time spent in game.)</p>
 </div>
 
<br>
