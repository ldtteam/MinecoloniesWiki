---
type: worker
worker: florist
layout: worker
---
{% capture content %}
The Florist is a specialist of your colony's production. The Florist will grow flowers in [compost blocks](../../source/items/compost). For them to do this, they require [compost](../../source/items/compost) and an axe.

The higher a Florist's Dexterity level, the greater the chance for them to successfully harvest a flower. The higher their Agility level is, the less time it'll take for new flowers to grow.
{% endcapture %}
{% capture infobox %}
{% include infobox/worker.html %}
{% endcapture %}
{% include infobox/wrapper.html content=content infobox=infobox %}
