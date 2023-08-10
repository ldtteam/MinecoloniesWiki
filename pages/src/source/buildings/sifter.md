---
type: building
building: sifter
layout: building
---
{% capture content %}
### Note: The Sifter's Hut cannot be built until you have a level 3 {% building_link fisher %} (or three level 1 Fisher's Huts, or another equivalent) and have finished the research in the {% building_link university %}.
<br>

The Sifter's Hut is where the Sifter will sift through dirt, gravel, sand, or soul sand to find loot. Doing this will make the block the Sifter is sifting disappear. 

| Sifted Block | Chance for        |
|--------------|-------------------|
| Dirt         | Beetroot seeds    |
| Dirt         | Carrots           |
| Dirt         | Melon seeds       |
| Dirt         | Potatoes          |
| Dirt         | Pumpkin seeds     |
| Dirt         | Oak saplings      |
| Dirt         | Spruce saplings   |
| Dirt         | Birch saplings    |
| Dirt         | Jungle saplings   |
| Dirt         | Acacia saplings   |
| Dirt         | Dark oak saplings |
| Dirt         | Wheat seeds       |
| Gravel       | Coal              |
| Gravel       | Diamonds          |
| Gravel       | Lapis lazuli      |
| Gravel       | Emeralds          |
| Gravel       | Flint             |
| Gravel       | Gold ingots       |
| Gravel       | Iron ingots       |
| Gravel       | Iron nuggets      |
| Gravel       | Redstone          |
| Sand         | Cacti             |
| Sand         | Cocoa beans       |
| Sand         | Gold nuggets      |
| Sand         | Sugarcane         |
| Soul Sand    | Blaze powder      |
| Soul Sand    | Glowstone dust    |
| Soul Sand    | Magma cream       |
| Soul Sand    | Nether wart       |
| Soul Sand    | Quartz            |
| Soul Sand    | Human skulls      |

You can choose between four meshes. The higher the level of the mesh, the higher the likelihood that the Sifter will find loot.

| Hut Level | Mesh Available |
|-----------|----------------|
| 1         | String         |
| 3         | Flint          |
| 4         | Iron           |
| 5         | Diamond        |

The Sifter's Hut can sift a certain amount of blocks per day:

| Hut Level | Maximum Blocks |
|-----------|----------------|
| 1         | 64 blocks      |
| 2         | 256 blocks     |
| 3         | 576 blocks     |
| 4         | 1024 blocks    |
| 5         | Unlimited      |
{% endcapture %}
{% capture infobox %}
{% include infobox/building.html %}
{% endcapture %}
{% include infobox/wrapper.html content=content infobox=infobox %}

## {% building %} GUI

{% building_gui_content_block_main order=1 %}
{% building_gui_content_block_craftingrecipes order=2 %}
{% building_gui_content_block_stock order=3 %}