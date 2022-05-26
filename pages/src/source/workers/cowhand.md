---
type: worker
worker: cowhand
layout: worker
---
{% capture content %}
The Cowhand is a crucial part of your colony's food production needs. They will also provide you with all drops and byproducts like leather and milk. The Cowhand will breed and butcher cows for you as long as you provide them with wheat, an axe, and buckets for gathering milk.

**Note:** The Cowhand will not catch and bring in any cows, only breed and butcher the ones in their hut area, so make sure you provide them with at least 2 initial cows.

The Cowhand will work with vanilla Minecraft cows, but might work with some cows from other mods as long as they are *coded* as cows and have normal breeding behavior. They will collect anything that is modified by another mod as well, so if another mod changes the drops (for example) to include bones or another type of meat, the Cowhand will collect these as well.

**Note:** The Cowhand will only keep alive 2 cows per hut level, so when their hut is level 5 they will have 10 cows in their holding pens to breed and butcher. This means they will produce meats and byproducts faster.

| Hut Level | Cows Housed |
| --------- | ----------- |
| 1         | 2           |
| 2         | 4           |
| 3         | 6           |
| 4         | 8           |
| 5         | 10          |


The higher a Cowhand's Athletics level, the greater their axe's damage. The higher their Stamina level, the faster baby cows will grow up.
{% endcapture %}
{% capture infobox %}
{% include infobox/worker.html %}
{% endcapture %}
{% include infobox/wrapper.html content=content infobox=infobox %}