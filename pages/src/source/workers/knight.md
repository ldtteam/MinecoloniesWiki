---
type: worker
worker: knight
layout: worker
---
{% capture content %}
Knights are melee guards that protect your colony. As long as you provide a Knight with a sword, they will protect your colony day and night.

Knights will use armor when provided with some, and will use a shield as well if you've completed the Avoidance [research](../../source/systems/research) in the {% building_link university %}).

The higher a Knight’s Adaptability level, the faster their attack speed is. The higher their Stamina level, the more health they’ll have.

## Knight in Training
Knights in Training will train at the {% building_link combatacademy %} to become a Knight. They will hit a practice dummy with a sword to increase their level without a risk of dying to mobs.

Knights in Training are not actual Guards even though they are dressed in the usual Guard clothes. They will not help defend your colony, only Guards will do that. 
{% endcapture %}
{% capture infobox %}
{% include infobox/worker.html %}
{% endcapture %}
{% include infobox/wrapper.html content=content infobox=infobox %}
