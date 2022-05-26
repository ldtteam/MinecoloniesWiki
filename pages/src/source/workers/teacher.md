---
type: worker
worker: teacher
layout: worker
---
{% capture content %}
The Teacher is not a production part of your colony, but rather a way to increase the stats of your children. The Teacher will teach the [Pupils](../workers/pupil) (children) of the colony to increase their skill levels. While they can teach without supplies, providing paper will increase the speed that the Pupils level.

Pupils' stats will increase faster if the Teacher has a high Knowledge level. Teachers' Mana level affects how quickly they can switch between teaching different children.
{% endcapture %}
{% capture infobox %}
{% include infobox/worker.html %}
{% endcapture %}
{% include infobox/wrapper.html content=content infobox=infobox %}