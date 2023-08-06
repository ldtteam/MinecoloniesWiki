---
type: worker
worker: quarrier
layout: worker
---
{% capture content %}
The Quarrier is part of the resource production of your colony. The Quarrier will dig a quarry pit to collect larger amounts of stone type blocks.

The Quarrier will only break blocks according to the level of their pickaxe, and will only be able to use a tool according to the level of their [Miner's hut](../../source/buildings/mine) (check the [worker](../systems/worker) system page).

The Quarrier's Strength level affects their block breaking speed. Similarly, their Stamina skill affects their block placing speed, so if they have a higher Stamina skill they'll place supports and other blocks faster. 
{% endcapture %}
{% capture infobox %}
{% include infobox/worker.html %}
{% endcapture %}
{% include infobox/wrapper.html content=content infobox=infobox %}
