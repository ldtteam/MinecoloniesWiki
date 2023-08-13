---
type: building
building: crusher
layout: building
---
{% infobox_building %}
### Note: The Crusher's Hut cannot be built until you have a level 1 {% building_link stonemason %} and have finished the research in the {% building_link university %}.
<br>

The Crusher's Hut is where the Crusher will take items and crush them into other blocks. The defaults are: 

| Starting Item | Created Item                 |
|---------------|------------------------------|
| Bone          | Bonemeal                     |
| Bone Block    | Bonemeal                     |
| Cobblestone   | Gravel (chance to get flint) |
| Clay          | Clay Ball                    |
| Gravel        | Sand                         |
| Sand          | Clay                         |

Note: By default the Crusher's ratio is 2:1, but there is a [research](../../source/systems/research) in the {% building_link university %} to make them work on a 1:1 ratio.

The higher the level of the Crusher's Hut, the more daily output the Crusher can handle. So:

| Building Level | Daily Max |
|----------------|-----------|
| 1              | 16        |
| 2              | 64        |
| 3              | 144       |
| 4              | 256       |
| 5              | 999       |
{% endinfobox_building %}

## {% building %} GUI

{% building_gui_content_block_main order=1 %}
{% building_gui_content_block_craftingrecipes order=2 %}
{% building_gui_content_block_tasks order=3 %}
{% building_gui_content_block_settings order=4 %}