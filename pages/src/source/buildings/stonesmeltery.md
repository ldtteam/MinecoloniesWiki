---
type: building
building: stonesmeltery
layout: building
---
{% capture content %}
### Note: The Stone Smeltery cannot be built until you have a level 3 {% building_link smeltery %} (or three level 1 Smelteries, or another equivalent) and have finished the research in the {% building_link university %}.
<br>

The Stone Smeltery is where the Stone Smelter will smelt cobblestone into stone, stone bricks into cracked stone bricks, clay balls into bricks, clay blocks into terracotta, terracotta into glazed terracotta, all types of stone into all types of smooth stone, and logs into charcoal. They can also pop chorus fruits! The Stone Smelter will only work when they have been taught the recipe, receive a request from another worker, and have the needed materials. 

**Special Note: Charcoal cannot be used as a fuel for making charcoal in the stone smeltery.**

**Hint:** The higher the level of the Stone Smeltery, the more furnaces the Stone Smelter will have available. The number of furnaces they *use* depends on their Athletics level. So:

| Building Level | Furnaces |
|----------------|----------|
| 1              | 1        |
| 2              | 2        |
| 3              | 3        |
| 4              | 4        |
| 5              | 5        |

**Hint:** The higher the Stone Smelter's Dexterity level, the faster things will smelt. At high levels, they can go *much* faster than the player!
{% endcapture %}
{% capture infobox %}
{% include infobox/building.html %}
{% endcapture %}
{% include infobox/wrapper.html content=content infobox=infobox %}

## {% building %} GUI

{% building_gui_content_block_main order=1 %}
{% building_gui_content_block_craftingrecipes order=2 %}
{% building_gui_content_block_fuel order=3 %}
{% building_gui_content_block_tasks order=4 %}
{% building_gui_content_block_settings order=5 %}