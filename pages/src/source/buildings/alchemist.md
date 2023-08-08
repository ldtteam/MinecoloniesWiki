---
type: building
building: alchemist
layout: building
---
{% capture content %}
The {% building %} is where the {% worker_link alchemist %} works. The {% worker alchemist %} brews potions and harvests netherwart and mistletoe.

**Hint:** The number of recipes you can teach the {% building %} doubles per building level. So:

| {% building %} Level | Number of Recipes |
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
{% building_gui_content_block_brewingrecipes order=3 %}
{% building_gui_content_block_tasks order=4 %}