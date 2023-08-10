---
type: building
building: restaurant
layout: building
---
{% capture content %}
The Restaurant is where the Cook will cook food, provided they have the necessary ingredients and fuel. When citizens are hungry, they will come to the Restaurant and the Cook will give them food. The Assistant Cook also works at the Restaurant. They craft needed food to help supply the colony.

**Note:** You can only hire an Assistant Cook when the Restaurant is level 3 or higher.
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
{% building_gui_content_block_itemlist order=6 header="food" image_key="food" image_alt="Food list" %}
Listed here are food items that will be handed out by the {% worker_link cook %}. Disable any you don't want to be handed out or produced.
However, if a colonist finds a disabled item, they'll still eat it - the {% worker_link cook %} just won't hand it out.
{% endbuilding_gui_content_block_itemlist %}
{% building_gui_content_block_tasks order=7 %}