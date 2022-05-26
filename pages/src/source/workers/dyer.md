---
type: worker
worker: dyer
layout: worker
---
{% capture content %}
The Dyer is part of the production of the your colony. The Dyer will craft dyes and dyed items, as well as red nether bricks and dark prismarine. They won't dye concrete or concrete powder, though. The Dyer will only make these items when they have been taught the recipes, receive a request for an item, and have the needed materials. (The Dyer automatically knows how to make green dye and red sand, however.)

**Note:** The Dyer can only learn a set number of recipes based on their hut level. So:

| Hut Level | Recipes |
| --------- | ------- |
| 1         | 10      |
| 2         | 20      |
| 3         | 40      |
| 4         | 80      |
| 5         | 160     |


All crafters have a chance to decrease the amount of materials needed for a taught recipe. (If this happens, the new recipe is kept until deleted or improved again.) The higher a Dyer's Creativity level, the greater their chance to decrease the amount of materials needed.

The higher a Dyer's Dexterity level, the faster they'll craft/smelt.
{% endcapture %}
{% capture infobox %}
{% include infobox/worker.html %}
{% endcapture %}
{% include infobox/wrapper.html content=content infobox=infobox %}
