---
type: worker
worker: blacksmith
layout: worker
---
{% capture content %}
The Blacksmith is a part of your colony's production line. The Blacksmith will craft tools, swords, and armor to supply workers with items. (However, they do not craft bows or fishing poles.)

The Blacksmith will only make items when they have been taught the recipes, receive a request for an item, and have the needed materials.

**Note:** The Blacksmith can only learn a set number of recipes based on their hut level:

| Hut Level | Recipes |
| --------- | ------- |
| 1         | 10      |
| 2         | 20      |
| 3         | 40      |
| 4         | 80      |
| 5         | 160     |

The higher a Blacksmith's Strength level, the faster they'll craft. 

All crafters have a chance to decrease the amount of materials needed for a taught recipe. (If this happens, the new recipe is kept until deleted or improved again.) The higher a Blacksmith's Focus level, the greater their chance to decrease the amount of materials needed.

When a colonist is requesting a tool from the Blacksmith with multiple accepted levels, the Blacksmith will craft whichever tool type is highest in their list of recipes that they have the materials for (when you teach them a new recipe, it'll go on the bottom).
{% endcapture %}
{% capture infobox %}
{% include infobox/worker.html %}
{% endcapture %}
{% include infobox/wrapper.html content=content infobox=infobox %}