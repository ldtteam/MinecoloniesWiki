---
type: building
building: concretemixer
layout: building
---
{% capture content %}
### Note: The Concrete Mixer's Hut cannot be built until you have a level 1 {% building_link crusher %} and have finished the [research](../../source/systems/research) in the {% building_link university %}.
<br>

The Concrete Mixer will craft all types of concrete powder and place them in flowing water (built in to their hut), then mine the resulting concrete. The Concrete Mixer will only make concrete and concrete powder when they receive a request for a block and have the needed materials. (All their recipes are pretaught.)
{% endcapture %}
{% capture infobox %}
{% include infobox/building.html %}
{% endcapture %}
{% include infobox/wrapper.html content=content infobox=infobox %}

## {% building %} GUI

{% building_gui_content_block_main order=1 %}
{% building_gui_content_block_craftingrecipes order=2 %}
{% building_gui_content_block_tasks order=3 %}
{% building_gui_content_block_settings order=4 %}