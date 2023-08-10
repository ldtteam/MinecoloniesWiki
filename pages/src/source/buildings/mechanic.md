---
type: building
building: mechanic
layout: building
---
{% capture content %}
### Note: The Mechanic's Hut cannot be built until you have a level 3 {% building_link blacksmith %} (or three level 1 Blacksmith's Huts, or another equivalent) and have finished the research in the {% building_link university %}.

The Mechanic's Hut is where the Mechanic will craft redstone items, rails, minecarts, clocks, compasses, sea lanterns, torches, lanterns, jack-o-lanterns, storage blocks (like blocks of iron, coal, quartz, etc), dried kelp blocks, blue ice, packed ice, enchantment tables, ender chests, tripwire hooks, sticky pistons, [gates](../../source/items/gates), [multi-pistons](../../source/items/multipiston), glowstone blocks, anything made with blaze rods, and many other items that no other crafter can make. For the Mechanic to work, they must receive a request from another worker and have the necessary materials. The Mechanic's Hut must also have been taught the crafting recipes for all the items you want the Mechanic to be able to craft.

**Hint:** The number of recipes you can teach the Mechanic's Hut doubles per building level. So:

| Mechanic's Hut Level | Number of Recipes |
|----------------------|-------------------|
| 1                    | 10                |
| 2                    | 20                |
| 3                    | 40                |
| 4                    | 80                |
| 5                    | 160               |
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