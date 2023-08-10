---
type: building
building: tavern
layout: building
---
{% capture content %}
The {% building %} is like a {% building_link house %} in that it houses citizens, however, the {% building %} houses four instead of one and can't be upgraded to house more.

Every so often, visitors will come to the {% building %}. You can recruit these visitors (with items) to live and work in your colony. Don't attack them, they'll fight back!
Upgrading the {% building %} will garner more and better visitors.

**Note:** The {% building %} can only be upgraded to level 3, not level 5. You can also only have 1 {% building %} per colony.
{% endcapture %}
{% capture infobox %}
{% include infobox/building.html %}
{% endcapture %}
{% include infobox/wrapper.html content=content infobox=infobox %}

## {% building %} GUI

{% building_gui_content_block_mainresidential order=1 %}