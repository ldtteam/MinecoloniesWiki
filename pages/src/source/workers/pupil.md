---
type: worker
worker: pupil
layout: worker
---
{% capture content %}
The Pupil is a child of the colony. The [Teacher](../workers/teacher) will teach the Pupils at the School to increase the Pupils' skill levels. While the Teacher can teach with no supplies, providing paper will increase the speed that the Pupils level. 

While they are not technically the worker of the School (the Teacher is), the School is where Pupils are hired so that they can learn.
{% endcapture %}
{% capture infobox %}
{% include infobox/worker.html %}
{% endcapture %}
{% include infobox/wrapper.html content=content infobox=infobox %}
