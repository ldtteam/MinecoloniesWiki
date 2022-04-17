---
title: School
layout: default
---
# School

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
        <div class="col">
        <p><a href="../workers/pupil">Pupil</a></p>
        </div>
    </div>
    <hr />
    <recipe>school</recipe>
</div>

### Note: The School cannot be built until you finish the research in the [University](../../source/buildings/university).
<br>

The School is where the Teacher will level up the Pupils' (children) skills. Paper will increase the leveling speed of the Pupils. 

The level of the School determines how many Pupils can be taught at a time.

| School Level | Pupils Taught |
| ----- | ----- |
| 1 | 2 |
| 2 | 4 |
| 3 | 6 |
| 4 | 8 |
| 5 | 10 |  

<br>

## School GUI

When accessing the School's hut block by right-clicking on it, you will see a GUI with different options:

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

This is page two of the School GUI.

<div class="row">
    <div class="col-sm-12 col-md">
        <img src="../../assets/images/gui/minstockgui.png" class="img-fluid mx-auto" alt="School GUI 2">
    </div>
    <div class="col-sm-12 col-md">
        <ul>
        <li><strong> Minimum Stock: </strong> Use this button to tell the School to keep a minimum stock on hand. Set items will be displayed above the button.</li>
        </ul>
    </div>
</div>
