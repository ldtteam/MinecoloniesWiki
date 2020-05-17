---
title: Minecolonies Wiki
layout: default
---
# Hospital

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/hospital.png" alt="Hospital" />
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Worker:</strong></p>
        </div>
        <div class="col">
        <p><a href="../workers/healer">Healer</a></p>
        </div>
    </div>
    <hr />
    <recipe>hospital</recipe>
</div>

# About the Hospital

The Hospital is where injured or ill citizens go when they need healing. The Healer heals them with various items.

The higher the level of the Hospital, the more people it can heal at a time. So:

| Building Level | Number of Beds |
| ----- | ----- |
| 1 | 1 |
| 2 | 2 |
| 3 | 3 |
| 4 | 4 |
| 5 | 5 |

# Hospital's Hut GUI

When accessing the Hospital's hut block by right-clicking on it, you will see a GUI with different options:

<br>
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/hospitalgui.png" class="img-fluid mx-auto" alt="Hospital's GUI Page">
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
