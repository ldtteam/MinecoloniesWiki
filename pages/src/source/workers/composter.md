---
type: worker
worker: composter
layout: worker
---
{% capture content %}
The Composter will help your [Farmer](../../source/workers/farmer) get crops faster. The Composter will turn items into [compost](../../source/items/compost) using the [compost barrel](../../source/items/compostbarrel). The Farmer will use the compost as fertilizer (like vanilla bonemeal).

Compost is also used to create compost blocks, which are used in the [Flower Shop](../../source/buildings/flowershop) schematics.

The Composter can also make dirt in their compost barrels as well, which is especially useful if you are in a biome without dirt. When producing dirt, the Composter has a small chance to produce podzol instead. [Researches](../../source/systems/research#technology) at the [University](../../source/buildings/university) can increase this chance.

The higher a Composter's Stamina level, the faster they will compost. Similarly, the higher their Athletics level, the less time it takes for them to fill a compost barrel.
{% endcapture %}
{% capture infobox %}
{% include infobox/worker.html %}
{% endcapture %}
{% include page-infobox-wrapper.html content=content infobox=infobox %}