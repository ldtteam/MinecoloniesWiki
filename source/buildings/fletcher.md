---
title: Fletcher's Hut
layout: default
---
# Fletcher's Hut

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/fletcher.png" alt="Fletcher" />
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Worker:</strong></p>
        </div>
        <div class="col">
        <p><a href="../workers/fletcher">Fletcher</a></p>
        </div>
    </div>
    <hr />
    <recipe>fletcher</recipe>
</div>

### Note: The Fletcher's Hut cannot be built until you have a level 1 [Sawmill](../../source/buildings/sawmill) and have finished the research in the [University](../../source/buildings/university).
<br>

The Fletcher's Hut is where the Fletcher will craft items that use string or wool, such as bows, fishing poles and paintings. For the Fletcher to work, they must receive a request from another worker and have the necessary materials. The Fletcher's Hut must also have been taught the crafting recipes for all the items you want the Fletcher to be able to craft.

**Hint:** The number of recipes you can teach the Fletcher's Hut doubles per building level. So:


| Fletcher's Hut Level | Number of Recipes |
| :-----: | :-----: |
| 1 | 10 | 
| 2 | 20 |
| 3 | 40 |
| 4 | 80 | 
| 5 | 160 | 

<br>

## Fletcher's Hut GUI

When accessing the Fletcher's Hut block by right-clicking on it, you will see a GUI with different options:

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/fletchergui.png" class="img-fluid mx-auto" alt="Fletcher's Hut GUI 1">
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
<br> <br>

The 2nd page of the GUI shows what crafting task(s) the Fletcher currently has.
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/craftertasklist.png" class="img-fluid mx-auto" alt="Fletcher's Hut GUI 2">
  </div>
  <div class="col-sm-12 col-md">
    <br>
  </div>
</div>
<br> <br>
