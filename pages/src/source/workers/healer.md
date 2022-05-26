---
type: worker
worker: healer
layout: worker
---
{% capture content %}
The Healer is a specialist of your colony. The Healer will heal your citizens when they become ill or injured and will use various items. The possible diseases can be changed in the [config file](../../source/misc/configfile), however, these are the defaults:

| Disease             | Items Needed to Cure          |
| ------------------- | ----------------------------- |
| Influenza (the flu) | Carrot and Potato             |
| Measles             | Dandelion, Kelp, and Poppy    |
| Smallpox            | Honey Bottle and Golden Apple |

The higher a Healer's Mana skill, the faster they can walk between beds. If they have a higher Knowledge level, they'll have a greater chance to heal a citizen without requiring materials.
{% endcapture %}
{% capture infobox %}
{% include infobox/worker.html %}
{% endcapture %}
{% include infobox/wrapper.html content=content infobox=infobox %}