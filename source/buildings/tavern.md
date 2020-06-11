---
title: MineColonies Wiki
layout: default
---
# Tavern

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/tavern.png" alt="Tavern" />
    <hr />
    <recipe>tavern</recipe>
</div>

# About the Tavern

The Tavern is like a [Citizen's Hut](../../source/buildings/citizenhut) in that it houses citizens, however, the Tavern houses four instead of two and can't be upgraded to house more. Additional functionality will be added at a later date.

<strong>Note:</strong> The Tavern can only be upgraded to level 3, not level 5.

<br>

# Tavern GUI

When accessing the Tavern's hut block by right-clicking on it, you will see a GUI with different options:

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
  
