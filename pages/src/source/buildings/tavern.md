---
title: Tavern
layout: default
---
# Tavern

{% capture content %}
The Tavern is like a [House](../../source/buildings/house) in that it houses citizens, however, the Tavern houses four instead of one and can't be upgraded to house more.

Every so often, visitors will come to the Tavern. You can recruit these visitors (with items) to live and work in your colony. Don't attack them, they'll fight back!
Upgrading the Tavern will garner more and better visitors.

Recruiting used to be part of the [Town Hall](../../source/buildings/townhall) but has been moved here.

<strong>Note:</strong> The Tavern can only be upgraded to level 3, not level 5. You can also only have 1 Tavern per colony.
{% endcapture %}
{% capture infobox %}
{% include infobox/building.html key="tavern" %}
{% endcapture %}
{% include page-infobox-wrapper.html content=content infobox=infobox %}

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
  
