---
type: worker
worker: archer
layout: worker
---
{% capture content %}
{% include workers/name.html plural=true %} are ranged guards that protect your colony. As long as you provide an {% include workers/name.html %} with a bow, they will protect your colony day and night.

{% include workers/name.html plural=true %} will use armor when provided with some.

{% include workers/name.html plural=true %} don't require arrows to shoot, but can optionally use them for extra damage if you’ve completed the {% include links/research.html tree="Combat" name="Consume Arrows" %} in the {% include links/building.html key="university" %}.

The higher an {% include workers/name.html %} their Agility level, the more damage they'll do. The higher their Adaptability level, the greater their range will be.

## {% include workers/name.html %} in Training
{% include workers/name.html plural=true %} in Training will train at the {% include links/building.html key="archery" %} to become an {% include workers/name.html %}. They will use a bow to shoot practice dummies and will level up without a risk of dying to mobs.

{% include workers/name.html plural=true %} in Training are not actual Guards even though they are dressed in the usual Guard clothes. They will not help defend your colony, only Guards will do that.
{% endcapture %}
{% capture infobox %}
{% include infobox/worker.html %}
{% endcapture %}
{% include infobox/wrapper.html content=content infobox=infobox %}