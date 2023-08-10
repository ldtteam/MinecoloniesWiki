---
type: building
building: bakery
layout: building
---
{% capture content %}
The {% worker baker %} will craft bread dough, cookie dough, cake dough, and raw pumpkin pie, then bake these in a furnace to create bread, cookies, cakes, and pumpkin pies. They will only do this upon request, whether from the {% worker_link cook %}, the [postbox](../../source/items/postbox), or as a minimum stock in the {% building_link warehouse %}.

The Baker can also craft some non-vanilla breads:

- Sweet bread, made from wheat and a honey bottle. Available at Bakery level 3. Has slightly higher saturation than normal bread, also gives you a speed boost and removes poison.
- Milk-infused bread, made from wheat and a milk bucket. Available at Bakery level 4. Removes all potion effects (like milk buckets do).
- Golden bread, made from wheat and a gold ingot. Available at Bakery level 5. Instantly heals 2 hearts.
- Chorus bread, made from wheat and a chorus fruit. Available after completing the Know the End research in the {% building_link university %}. Has higher saturation than normal bread and teleports you to the surface after eating it.
{% endcapture %}
{% capture infobox %}
{% include infobox/building.html %}
{% endcapture %}
{% include infobox/wrapper.html content=content infobox=infobox %}

## {% building %} GUI

{% building_gui_content_block_main order=1 %}
{% building_gui_content_block_craftingrecipes order=2 %}
{% building_gui_content_block_smeltingrecipes order=3 %}
{% building_gui_content_block_stock order=4 %}
{% building_gui_content_block_fuel order=5 %}
{% building_gui_content_block_tasks order=6 %}
{% building_gui_content_block_settings order=7 %}