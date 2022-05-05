---
type: building
building: graveyard
layout: building
---
{% capture content %}
### Note: The Graveyard cannot be built until you have finished the [research](../../source/systems/research) in the [University](../../source/buildings/university).

The Graveyard is where the Undertaker will bury your deceased citizens.
For more information, see the [Undertaker](../../source/workers/undertaker) page.

The recommended maximum grave count per Graveyard level is below. This is **not mandatory**, and the actual amount will vary between styles.

| Graveyard Level | Number of Graves |
| --------------- | ---------------- |
| 1               | 14               |
| 2               | 18               |
| 3               | 27               |
| 4               | 36               |
| 5               | 50               |
{% endcapture %}
{% capture infobox %}
{% include infobox/building.html %}
{% endcapture %}
{% include page-infobox-wrapper.html content=content infobox=infobox %}

## Graveyard GUI

{% include contentblock/building/main-gui.html header="When accessing the Graveyard's hut block by right-clicking on it, you will see a GUI with different options. You start on the main tab:" image="../../assets/images/gui/graveyardgui1.png" %}

{% include contentblock/building/other-gui.html header="The second tab of the GUI is <strong>Gather Targets</strong>." content="The top half is a list of the graves the Undertaker needs to recover. The second half is a list of currently-buried citizens." image="../../assets/images/gui/graveyardgui2.png" %}