---
type: building
building: lumberjack
layout: building
---
{% infobox_building %}
The {% building %} is where the {% worker forester %} will go in between chopping down trees. The {% worker forester %} will cut down any tree in an approximate 150 block area (from themselves) that is not in a hut schematic and doesn't have cobblestone placed beneath it.

**Note:** In addition to axes for chopping down trees, {% worker forester %} require hoes for breaking leaves.
{% endinfobox_building %}

## {% building %} GUI

{% building_gui_content_block_main order=1 %}
{% building_gui_content_block_craftingrecipes order=2 %}
{% building_gui_content_block_itemlist order=3 header="saplings" image_key="saplings" image_alt="Saplings list" %}
It shows a list of recognized saplings the {% worker forester %} can work with, even modded ones (if coded correctly).
Here you can turn on or off which type of trees the {% worker forester %} will chop down.
{% endbuilding_gui_content_block_itemlist %}
{% building_gui_content_block_tasks order=4 %}
{% building_gui_content_block_settings order=5 %}
{% building_gui_content_block_custom order=6 header="zoning tool" image_key="zonetool" image_alt="Zoning tool" %}
This tool will let you define an area for the {% worker forester %} to work. Right click one corner of the area you want, then left click the opposite corner, and this will set a rectangle inside which the {% worker forester %} will search for trees. Vertical coordinates do not affect this too much; keeping them all around the same y-level can avoid unintentional bugs, though.
{% endbuilding_gui_content_block_custom %}
{% building_gui_content_block_stock order=7 %}