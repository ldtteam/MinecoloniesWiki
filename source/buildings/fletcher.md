---
title: Minecolonies Wiki
layout: default
---
# Fletcher Hut

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

# About the Bakery

The Fletcher Hut is where the Fletcher will craft items that use string or wool, such as bows, fishing poles and paintings. 

**Hint:** The number of recipes you can teach the Fletcher doubles per building level. So:


| Fletcher Level | Number of Recipes |
| :-----: | :-----: |
| 1 | 20 | 
| 2 | 40 |
| 3 | 80 |
| 4 | 160 | 
| 5 | 320 | 

<br>

# Bakery GUI

When accessing the Fletcher block by right-clicking on it, you will see a GUI with different options:

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/fletchergui.png" class="img-fluid mx-auto" alt="Fletcher GUI">
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

