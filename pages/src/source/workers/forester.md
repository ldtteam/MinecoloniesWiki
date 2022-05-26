---
type: worker
worker: forester
layout: worker
---
{% capture content %}
The Forester is one of the most essential workers in your colony. They will chop trees to provide the wood for all your colony's needs. The Forester will also plant a sapling in the tree's place of the same variety they just chopped down (provided that the tree dropped saplings and the setting is on in the Forester's Hut block GUI). The Forester will only plant a sapling AFTER chopping down a tree. If there are no trees nearby, they will NOT plant any saplings to create a tree.

Foresters can sometimes collect [Mistletoe](../../source/items/mistletoe) while chopping down trees.

Foresters will search in a range around their hut for trees. This may take some time depending on the level of the hut as higher level huts can search farther. However, Foresters will not chop down trees that have leaves, branches, trunks, etc. that intersect any building's bounding box to avoid chopping down tree-like buildings (e.g., Dark Oak-style buildings). If you have trees you do not want the Forester to chop down (e.g., for decorative reasons), you can replace the dirt beneath the trunk with a cobblestone block(s) to keep the Forester from chopping down that tree.

The higher a Forester's Strength level is, the faster they can break logs. The higher their Focus level, the faster they can walk.

**Hint:** You can remove any trees/saplings and replant any type of sapling in any pattern or shape you need to create a perfect grove for easier access and less walking around, which means more efficient chopping.

**Note:** In Minecraft 1.16+ Foresters require hoes (for breaking leaves).
{% endcapture %}
{% capture infobox %}
{% include infobox/worker.html %}
{% endcapture %}
{% include infobox/wrapper.html content=content infobox=infobox %}