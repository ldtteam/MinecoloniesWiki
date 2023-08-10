---
type: building
building: graveyard
layout: building
---
{% capture content %}
### Note: The Graveyard cannot be built until you have finished the [research](../../source/systems/research) in the {% building_link university %}.

The Graveyard is where the Undertaker will bury your deceased citizens.
For more information, see the {% worker_link undertaker %} page.

The recommended maximum grave count per Graveyard level is below. This is **not mandatory**, and the actual amount will vary between styles.

| Graveyard Level | Number of Graves |
|-----------------|------------------|
| 1               | 14               |
| 2               | 18               |
| 3               | 27               |
| 4               | 36               |
| 5               | 50               |
{% endcapture %}
{% capture infobox %}
{% include infobox/building.html %}
{% endcapture %}
{% include infobox/wrapper.html content=content infobox=infobox %}

## {% building %} GUI

{% building_gui_content_block_main order=1 %}
{% building_gui_content_block_custom order=2 header="graves" image_key="graves" image_alt="Graves" %}
The top half is a list of the graves the Undertaker needs to recover. The second half is a list of currently-buried citizens.
{% endbuilding_gui_content_block_custom %}