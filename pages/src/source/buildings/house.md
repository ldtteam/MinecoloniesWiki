---
title: House
layout: default
---
# House

{% capture content %}
Citizens will go to the House they are assigned to at night to sleep. The House is also a way to get more citizens for your colony.

Each level of the House will house one citizen. So: 

| Building Level | Citizens Housed |
| -------------- | --------------- |
| 1              | 1               |
| 2              | 2               |
| 3              | 3               |
| 4              | 4               |
| 5              | 5               |

For additional citizens to spawn, you first have to have enough space in your House(s) to house your first four citizens. After you have created enough space for your initial four citizens, you have two options for your colony to grow. The first way is to have at least one House at least level 2 that houses two unrelated citizens, which will allow a child to be born in the colony when there is room. You can also make space for a new citizen, go to the [Tavern](../../source/buildings/tavern), wait for a traveler to show up, and then give them the items they request to recruit them.

### Note: To have over 25 citizens, you must first complete the research in the [University](../../source/buildings/university).
{% endcapture %}
{% capture infobox %}
{% include infobox/building.html key="house" %}
{% endcapture %}
{% include page-infobox-wrapper.html content=content infobox=infobox %}

## House GUI

<div class="row">
  <div class="col">
    {% include contentblock/main-gui.html data=site.data.gui.citizen header="When accessing the House's hut block by right-clicking on it, you will see a GUI with different options. You start on
    the main tab:" image="../../assets/images/gui/housegui.png" %}

    {% include contentblock/basic.html header="You reach this screen by clicking <strong>Manage Housing</strong> on the main tab." content="If the house is filled, you will need to <strong>Unassign</strong> a citizen before being able to add new citizens.  Each citizen will be listed, starting with the residents of this house.  Citizens will show their occupation, the distance from their work hut to <strong>this</strong> house, and the distance from their work hut to their current house.  If the second line is green, this house is closer to their work hut.  If it's yellow, it's farther.  <br><br><strong>Building Assignment Mode</strong> allows you to override the Townhall's housing setting, for this house only." image="../../assets/images/gui/housegui2.png" %}
  </div>
</div>
