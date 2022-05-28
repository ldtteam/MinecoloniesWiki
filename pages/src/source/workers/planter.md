---
type: worker
worker: planter
layout: worker
---
{% capture content %}
The Planter is part of the supply production of your colony. The Planter will plant and harvest sugar cane, bamboo, or cactus.

The Planter can also craft paper, books, sugar, and anything made with bamboo. The Planter will only make these items when they have been taught the recipes, receive a request for an item, and have the needed materials.

**Note:** The Planter can only learn a set number of recipes based on their hut level. So:

| Hut Level | Recipes |
| --------- | ------- |
| 1         | 10      |
| 2         | 20      |
| 3         | 40      |
| 4         | 80      |
| 5         | 160     |

All crafters have a chance to decrease the amount of materials needed for a taught recipe. (If this happens, the new recipe is kept until deleted or improved again.) The higher a Planter's Agility level, the greater their chance to decrease the amount of materials needed.

If a Planter's Dexterity level is higher, they'll craft faster.
{% endcapture %}
{% capture infobox %}
{% include infobox/worker.html %}
{% endcapture %}
{% include infobox/wrapper.html content=content infobox=infobox %}
