---
title: Minecolonies Wiki
layout: default
---
# School Hut

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/school.png" alt="School" />
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Worker:</strong></p>
        </div>
        <div class="col">
        <p><a href="../workers/teacher">Teacher</a></p>
        </div>
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Worker:</strong></p>
        </div>
        <div class="col">
        <p><a href="../workers/pupil">Pupil</a></p>
        </div>
    </div>
    <hr />
    <recipe>school</recipe>
</div>

# About the School Hut

The School is where the Teacher will level up the Pupils (children) of the colony. Paper will increase the leveling speed. 

The level of the hut determines how many pupils can be taught.

| Building Level | Pupils Taught |
| ----- | ----- |
| 1 | 2 |
| 2 | 4 |
| 3 | 6 |
| 4 | 8 |
| 5 | 10 |  

<br>

# School GUI

When accessing the School block by right-clicking on it, you will see a GUI with different options:

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/schoolgui.png" class="img-fluid mx-auto" alt="School GUI">
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

