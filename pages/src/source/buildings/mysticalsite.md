---
type: building
building: mysticalsite
layout: building
---
{% capture content %}
### Note: The Mystical Site cannot be built until you have finished the corresponding [research](../../source/systems/research) in the [University](../../source/buildings/university).
<br>

The Mystical Site is a simple building that increase a colony's overall [happiness](../../source/systems/happinessandsaturation) level. It has no worker and increases colonists' happiness just by existing.

The [Undertaker](../../source/workers/undertaker) will visit the Mystical Site when there are no colonists to bury. Doing so will increase their Mana skill and, as such, their chance of resurrecting a killed citizen.
{% endcapture %}
{% capture infobox %}
{% include infobox/building.html %}
{% endcapture %}
{% include infobox/wrapper.html content=content infobox=infobox %}

## Mystical Site GUI

{% include contentblock/building/main-gui.html data=site.data.gui.mystical header="When accessing the Mystical Site's hut block by right-clicking on it, you will see a GUI with different options." image="../../assets/images/gui/mysticalsitegui.png" %}