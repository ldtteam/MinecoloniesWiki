---
type: building
building: mysticalsite
layout: building
---
{% capture content %}
### Note: The Mystical Site cannot be built until you have finished the corresponding [research](../../source/systems/research) in the {% building_link university %}.
<br>

The Mystical Site is a simple building that increase a colony's overall [happiness](../../source/systems/happinessandsaturation) level. It has no worker and increases colonists' happiness just by existing.

The {% worker_link undertaker %} will visit the Mystical Site when there are no colonists to bury. Doing so will increase their Mana skill and, as such, their chance of resurrecting a killed citizen.
{% endcapture %}
{% capture infobox %}
{% include infobox/building.html %}
{% endcapture %}
{% include infobox/wrapper.html content=content infobox=infobox %}

## {% building %} GUI

{% building_gui_content_block_main order=1 %}