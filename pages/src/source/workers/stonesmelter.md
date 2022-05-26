---
type: worker
worker: stonesmelter
layout: worker
---
{% capture content %}
The Stone Smelter is a very important addition to help automate your colony. The Stone Smelter will use their furnace(s) to smelt cobblestone into stone, stone bricks into cracked stone bricks, clay balls into bricks, clay blocks into terracotta, terracotta into glazed terracotta, all types of stone into all types of smooth stone, and logs into charcoal. They can also pop chorus fruits! The Stone Smelter will do this when they receive a request from another worker and have the needed materials.

The higher the level of the Stone Smeltery, the more furnaces the Stone Smelter will have available (one furnace per level). The number of furnaces they *use* depends on their Athletics level. 

The higher the Stone Smelter's Dexterity level, the faster things will smelt. At high levels, the Stone Smelter can go *much* faster than the player!
{% endcapture %}
{% capture infobox %}
{% include infobox/worker.html %}
{% endcapture %}
{% include infobox/wrapper.html content=content infobox=infobox %}