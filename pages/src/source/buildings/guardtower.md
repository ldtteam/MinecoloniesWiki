---
type: building
building: guardtower
layout: building
---
{% capture content %}
The Guard Tower will employ and house one Guard to protect your colony. The new Guard will need a bed in a house in order to spawn. However, once they are hired at the Guard Tower, that becomes their new residence and the bed in the house will open up for another new citizen (child or recruit). Colonists like feeling safe, so building Guard Towers close to colonists' work and homes can improve their [happiness](../../source/systems/happinessandsaturation). Additionally, if you place Guard Towers near your colony border and level them up, your border will [expand](../../source/systems/border).

The Guard will patrol a set distance around their tower, which is based on their tower's level.

| Tower Level | Max Patrol Distance |
|-------------|---------------------|
| 1           | 80 blocks           |
| 2           | 110 blocks          |
| 3           | 140 blocks          |
| 4           | 170 blocks          |
| 5           | 200 blocks          |

{% endcapture %}
{% capture infobox %}
{% include infobox/building.html %}
{% endcapture %}
{% include infobox/wrapper.html content=content infobox=infobox %}

## {% building %} GUI

{% building_gui_content_block_main order=1 %}
{% building_gui_content_block_stock order=2 %}
{% building_gui_content_block_custom order=3 header="selection tools" image_key="guardtool" image_alt="Guard tool" %}
Click the <strong>Obtain Tools</strong> button to get the Guard Scepter. Right-clicking on a block with the Guard Scepter will set it as a guard spot or a patrol point.
{% endbuilding_gui_content_block_custom %}
{% building_gui_content_block_hostiles order=4 %}
{% building_gui_content_block_settings order=5 %}