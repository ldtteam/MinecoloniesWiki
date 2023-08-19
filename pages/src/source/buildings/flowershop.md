---
type: building
building: flowershop
layout: building
---
{% infobox_building %}
The Flower Shop is where your Florist will grow flowers for your colony, if given [compost](../../source/items/compost) and an axe.

**Hint:** The higher the level of the Flower Shop, the more daily output the Florist can handle. So:

| Building Level | Number of Plants |
|----------------|------------------|
| 1              | 4                |
| 2              | 8                |
| 3              | 12               |
| 4              | 16               |
| 5              | 20               |
{% endinfobox_building %}

## {% building %} GUI

{% building_gui_content_block_main order=1 %}
{% building_gui_content_block_itemlist order=2 header="plantables" image_key="plantables" image_alt="Plantables list" %}
This shows a list of items the {% worker florist %} can plant. As the {% building %} is leveled up, your {% building %} will be able to grow more types of flowers. At level 3 or higher, you will be able to select which flowers you want to use, before that it can only grow poppies and dandelions.
{% endbuilding_gui_content_block_itemlist %}
{% building_gui_content_block_stock order=3 %}