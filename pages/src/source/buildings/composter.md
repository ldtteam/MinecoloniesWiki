---
type: building
building: composter
layout: building
---
{% capture content %}
### Note: The Composter's Hut cannot be built until you have a level 3 {% building_link farm %} (or three level 1 Farms, or another equivalent) and have finished the research in the {% building_link university %}.
<br> 

The Composter's Hut is where the Composter will turn organic materials into [compost](../../source/items/compost), which can be used by the {% worker_link farmer %} or {% worker_link florist %} to fertilize crops or flowers. They can also create dirt if you have the setting enabled, which the {% worker_link builder %} can use in buildings. The Composter uses [compost barrels](../../source/items/compostbarrel) to make compost or dirt.

**Hint:** The higher the level of the Composter's Hut, the more compost barrels the Composter will be able to use. So:


| Building Level | Compost Barrels |
|----------------|-----------------|
| 1              | 1               |
| 2              | 2               |
| 3              | 3               |
| 4              | 4               |
| 5              | 5               |
{% endcapture %}
{% capture infobox %}
{% include infobox/building.html %}
{% endcapture %}
{% include infobox/wrapper.html content=content infobox=infobox %}

## {% building %} GUI

{% building_gui_content_block_main order=1 %}
{% building_gui_content_block_itemlist order=2 header="items to compost" image_key="compost" image_alt="Items to compost" %}
Here you will see a list of all the items that were recognized for the {% building %} to use, including modded items.
{% endbuilding_gui_content_block_itemlist %}
{% building_gui_content_block_settings order=3 %}