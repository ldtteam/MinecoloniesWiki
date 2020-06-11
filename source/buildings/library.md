---
title: MineColonies Wiki
layout: default
---
# Library

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/library.png" alt="Library" />
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

## About the Library

The Library is the only way for you to raise your citizens' skills. If your citizens have low-level stats, then it's time to get your citizens educated! For that purpose we have the Library. A citizen will randomly level up their skills as long as they're assigned to the Library. Being a Library Student is their full-time job, so you can't have one citizen work at the Library and another worker hut at the same time.

Two citizens can study at a time per Library level. So: 

| Building Level | Citizens Educated   |
| -------------- | ------------------- |
| 1              | 2                   |
| 2              | 4                   |
| 3              | 6                   |
| 4              | 8                   |
| 5              | 10                  |

**Hint:** Paper helps Library Students increase their skills faster.

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
