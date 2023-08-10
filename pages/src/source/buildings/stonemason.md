---
type: building
building: stonemason
layout: building
---
{% capture content %}
### Note: The Stonemason's Hut cannot be built until you have a level 1 {% building_link blacksmith %} and have finished the research in the {% building_link university %}.
<br>

The Stonemason's Hut is where the Stonemason will craft 3x3 recipes made entirely out of cobblestone, stone, andesite, diorite, granite, quartz, purpur, nether bricks, prismarine, sandstones, blackstone, basalt, and/or ores (no ingots or redstone items). They can also craft end stone from cobblestone and an ender pearl, but only if you have completed the Know the End [research](../../source/systems/research) in the {% building_link university %}. The Stonemason will only work when they receive a request from another worker and have the needed materials. You will also need to teach the Stonemason's Hut the recipes you want the Stonemason to craft.

**Hint:** Upgrading the Stonemason's Hut lets you teach it more recipes. So:

| Building Level | Number of Recipes |
|----------------|-------------------|
| 1              | 10                |
| 2              | 20                |
| 3              | 40                |
| 4              | 80                |
| 5              | 160               |

{% endcapture %}
{% capture infobox %}
{% include infobox/building.html %}
{% endcapture %}
{% include infobox/wrapper.html content=content infobox=infobox %}

## {% building %} GUI

{% building_gui_content_block_main order=1 %}
{% building_gui_content_block_craftingrecipes order=2 %}
{% building_gui_content_block_dorecipes order=3 %}
{% building_gui_content_block_tasks order=4 %}
{% building_gui_content_block_settings order=5 %}