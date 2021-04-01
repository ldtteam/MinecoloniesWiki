---
title: Library
layout: default
---
# Library

<div class="infobox box text-center">
    <img src="../../assets/images/workers/composter.png" alt="Library" />
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Worker:</strong></p>
        </div>
        <div class="col">
        <p><a href="../workers/librarystudent">Library Student</a></p>
        </div>
    </div>
    <hr />
    <recipe>library</recipe>
</div>

### Note: The Library cannot be built until you finish the research in the [University](../../source/buildings/university).
<br>

The Library is a way for you to raise your adult citizens' Intelligence skill, which influences all other skill increases (at other jobs). A citizen will randomly level up their Intelligence as long as they're assigned to the Library. Being a Library Student is their full-time job, so you can't have one citizen work at the Library and another worker hut at the same time.

Two citizens can study per Library level. So: 

| Building Level | Citizens Educated at a Time |
| -------------- | --------------------------- |
| 1              | 2                           |
| 2              | 4                           |
| 3              | 6                           |
| 4              | 8                           |
| 5              | 10                          |

**Hint:** Paper and books help Library Students increase their skills faster.

<br>

## Library GUI

When accessing the Library's hut block by right-clicking on it, you will see a GUI with different options:

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/librarygui.png" class="img-fluid mx-auto" alt="Library GUI">
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
