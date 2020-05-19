---
title: Minecolonies Wiki
layout: default
---
# Dyer Hut

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/dyer.png" alt="Dyer Hut" />
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Worker:</strong></p>
        </div>
        <div class="col">
        <p><a href="../workers/dyer">Dyer</a></p>
        </div>
    </div>
    <hr />
    <recipe>dyer</recipe>
</div>

# About the Dyer

The Dyer Hut is where the Dyer will craft dyes for use by himself or other workers.


<br>

# Dyer GUI

When accessing the Bakery block by right-clicking on it, you will see a GUI with different options:

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/dyergui.png" class="img-fluid mx-auto" alt="Dyer GUI">
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


 
