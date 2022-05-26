---
type: worker
worker: researcher
layout: worker
---
{% capture content %}
The Researcher works at the University and researches various upgrades for your colony. There are 3 main focuses: Combat, Civilian and Technology. Each focus has its own subcategories.

Each new research has its own requirements. Certain buildings need to be at a specific level or higher, certain items are needed, and researches take time. Each research will state what is needed and how long it takes to research. The time is real-world time spent in-game. However, Researchers will sometimes use offline time to work on researches. Researchers' Knowledge skill affects the amount of research time they get from the offline time (it's not a 1:1 ratio), and their Mana skill affects the max amount of research time they can get.

Researchers will not learn new things on their own, you must tell them what to research.
{% endcapture %}
{% capture infobox %}
{% include infobox/worker.html %}
{% endcapture %}
{% include infobox/wrapper.html content=content infobox=infobox %}