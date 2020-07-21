---
title: Tavern
layout: default
---
# Tavern

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/tavern.png" alt="Tavern" />
    <hr />
    <recipe>tavern</recipe>
</div>

The Tavern is like a [Citizen's Hut](../../source/buildings/citizenhut) in that it houses citizens, however, the Tavern houses four instead of one and can't be upgraded to house more.

Every so often, travelers will come to the Tavern. You can recruit these travelers (with items) to live and work in your colony. This function used to be part of the [Town Hall](../../source/buildings/townhall) but has been moved here. 

<strong>Note:</strong> The Tavern can only be upgraded to level 3, not level 5. You can also only have 1 Tavern per colony.

<br>

## Tavern GUI

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
  
