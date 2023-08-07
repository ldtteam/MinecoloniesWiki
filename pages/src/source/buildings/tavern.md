---
type: building
building: tavern
layout: building
---
{% capture content %}
The Tavern is like a {% building_link house %} in that it houses citizens, however, the Tavern houses four instead of one and can't be upgraded to house more.

Every so often, visitors will come to the Tavern. You can recruit these visitors (with items) to live and work in your colony. Don't attack them, they'll fight back!
Upgrading the Tavern will garner more and better visitors.

**Note:** The Tavern can only be upgraded to level 3, not level 5. You can also only have 1 Tavern per colony.
{% endcapture %}
{% capture infobox %}
{% include infobox/building.html %}
{% endcapture %}
{% include infobox/wrapper.html content=content infobox=infobox %}

## Tavern GUI

{% include contentblock/building/main-gui.html data=site.data.gui.citizen header="When accessing the Tavern hut block by right-clicking on it, you will see a GUI with different options. You start on the main tab:" image="../../assets/images/gui/taverngui.png" %}

{% include contentblock/building/other-gui.html header="You reach this screen by clicking <strong>Manage Housing</strong> on the main tab." content="If the Tavern is filled, you will need to <strong>Unassign</strong> a citizen before being able to add new citizens. Each citizen will be listed, starting with the residents of the Tavern. Citizens will show their occupation, the distance from their work hut to the Tavern, and the distance from their work hut to their current house. If the second line is green, the Tavern is closer to their work hut. If it's yellow, it's farther. <br><br><strong>Building Assignment Mode</strong> allows you to override the Townhall's housing setting, for the Tavern only." image="../../assets/images/gui/housegui2.png" %}
