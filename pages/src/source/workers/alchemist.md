---
type: worker
worker: alchemist
layout: worker
---
{% capture content %}
The Alchemist brews potions at brewing stands for you. They can also collect mistletoe (1/30 chance) and netherwart (1/60 chance) using shears. They can make potions used by {% include links/worker.html key="druid" %}.

**Note:** The Alchemist can only learn a set number of recipes based on their hut level. So:

| Hut Level | Recipes |
| --------- | ------- |
| 1         | 10      |
| 2         | 20      |
| 3         | 40      |
| 4         | 80      |
| 5         | 160     |

The higher a Alchemist's Dexterity level, the faster they will brew each potion. The higher their Mana level, the more brewing stands they can use at once.
{% endcapture %}
{% capture infobox %}
{% include infobox/worker.html %}
{% endcapture %}
{% include infobox/wrapper.html content=content infobox=infobox %}
