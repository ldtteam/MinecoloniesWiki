---
type: worker
worker: assistantcook
layout: worker
---
{% capture content %}
The Assistant Cook is an important part of your colony's food production. The Assistant Cook will craft any food-related recipes you have taught the Restaurant if the {% worker_link cook %} requests food. They will also craft any craftable foods you requested from the [postbox](../../source/items/postbox). 

The higher an Assistant Cook's Creativity skill, the faster they'll craft.

All crafters have a chance to decrease the amount of materials needed for a taught recipe. (If this happens, the new recipe is kept until deleted or improved again.) The higher an Assistant Cook's Knowledge level, the greater their chance to decrease the amount of materials needed.

**Note:** You can only hire an Assistant Cook when the Restaurant is at least level 3.
{% endcapture %}
{% capture infobox %}
{% include infobox/worker.html %}
{% endcapture %}
{% include infobox/wrapper.html content=content infobox=infobox %}