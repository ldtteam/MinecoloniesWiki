---
type: worker
worker: fletcher
layout: worker
---
{% capture content %}
The Fletcher is part of the supply production of your colony. The Fletcher will craft arrows, bows, fishing poles, wool, paintings, and anything else that uses wool or string. They will only do this if you teach them the recipes, they receive a request from another worker, and they have the needed materials.

**Note:** The Fletcher can only learn a set number of recipes based on their hut level. So:

| Hut Level | Recipes |
| --------- | ------- |
| 1         | 10      |
| 2         | 20      |
| 3         | 40      |
| 4         | 80      |
| 5         | 160     |

The higher a Fletcher's Dexterity level, the faster they'll craft.

All crafters have a chance to decrease the amount of materials needed for a taught recipe. (If this happens, the new recipe is kept until deleted or improved again.) The higher a Fletcher's Creativity level, the greater their chance to decrease the amount of materials needed.
{% endcapture %}
{% capture infobox %}
{% include infobox/worker.html %}
{% endcapture %}
{% include page-infobox-wrapper.html content=content infobox=infobox %}