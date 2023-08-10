---
type: building
building: nethermine
layout: building
---
{% capture content %}
### Note: The Nether Mine cannot be built until you have finished the [research](../../source/systems/research) in the {% building_link university %}.

The Nether Mine is where the {% worker_link netherminer %} works. The Nether Miner travels into the Nether and mines resources found there.  The level of the hut determines what items Nether Miner brings back.

- <strong>Level 1:</strong>  blaze rod, ender pearl, ghast tear, gold ingot, gold nugget, gravel, gunpowder, leather, magma cream, nether quartz ore, netherrack, porkchop, rotten flesh, soul sand, soul_soil.
- <strong>Level 2:</strong>  All items from previous levels, plus brown mushroom, crimson fungus, crimson nylium, crimson stem, glowstone, nether wart, red mushroom.
- <strong>Level 3:</strong>  All items from previous levels, plus basalt, warped fungus, warped nylium, warped_stem.
- <strong>Level 4:</strong>  All items from previous levels, plus blackstone, nether gold ore.
- <strong>Level 5:</strong>  All items from previous levels, plus ancient debris.

The Nether Miner can also craft lava buckets.

**Note:** The portal in the Nether Mine will transport players to the Nether.  However, the Nether Miner does not actually travel into the Nether, nor do they actually mine any blocks in the Nether.
{% endcapture %}
{% capture infobox %}
{% include infobox/building.html %}
{% endcapture %}
{% include infobox/wrapper.html content=content infobox=infobox %}

## {% building %} GUI

{% building_gui_content_block_main order=1 %}
{% building_gui_content_block_craftingrecipes order=2 %}
{% building_gui_content_block_stock order=3 %}
{% building_gui_content_block_settings order=4 %}
{% building_gui_content_block_itemlist order=5 header="food" image_key="food" image_alt="Food list" %}
Listed here are items that can be used by the {% worker netherminer %} as food while they are traveling in the Nether.
Simply turn on any that you want your {% worker netherminer %} to eat, and a {% worker_link courier %} will deliver those items when they need food.
{% endbuilding_gui_content_block_itemlist %}
{% building_gui_content_block_tasks order=6 %}