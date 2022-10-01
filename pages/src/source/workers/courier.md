---
type: worker
worker: courier
layout: worker
---
{% capture content %}
The Courier is a crutial part of the bloodline of your colony. They will run from worker's hut to [Warehouse](../../source/buildings/warehouse) to worker's hut, visiting all your workers and delivering the tools and materials they need as well as taking their production to the Warehouse.

The level of the Courier's Hut will dictate how many items the Courier can deliver, so if you want them to carry more materials/tools, upgrade their hut. Upgrading the hut will also increase the amount of requests they can keep track of at a time.

| Courier's Hut Level | Max Stacks Carried |
| :-----------------: | :----------------: |
|          1          |         2          |
|          2          |         3          |
|          3          |         4          |
|          4          |         5          |
|          5          |     unlimited      |


The greater a Courier's Agility skill, the faster they'll run. The greater their Adaptability skill, the more huts they can visit before going back to the Warehouse.

**Note:** You MUST build the Warehouse to at least level 1 so the Courier can do their work.

**Note:** You can have up to 10 Couriers per Warehouse (2 per Warehouse level, up to 10 at a level 5 Warehouse). Couriers will only see the items in the Warehouse they are assigned to.
{% endcapture %}
{% capture infobox %}
{% include infobox/worker.html %}
{% endcapture %}
{% include infobox/wrapper.html content=content infobox=infobox %}
