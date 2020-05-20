---
title: Minecolonies Wiki
layout: default
---
# Tavern

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/tavern.png" alt="Tavern" />
    <hr />
    <recipe>tavern</recipe>
</div>

# About the Tavern Hut

The Tavern currently only temporarily houses four citizens, but additional functionality will be added at a later date

<br>

# Tavern GUI

When accessing the Tavern block by right-clicking on it, you will see a GUI with different options:

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/taverngui.png" class="img-fluid mx-auto" alt="Tavern Hut GUI">
  </div>
  <div class="col-sm-12 col-md">
    <br>
    <ul>
      {% for item in site.data.gui.citizen %}
        <li><strong>{{ item.button }}:</strong> {{ item.content }}</li>
      {% endfor %}
    </ul>
  </div>
</div>  
  
