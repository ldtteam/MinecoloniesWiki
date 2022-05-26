---
type: worker
worker: enchanter
layout: worker
---
{% capture content %}
The Enchanter is a specialist part of your colony. The Enchanter will steal XP from other workers to create enchanted books that can be used on tools, weapons, and armor for your workers (or yourself). (The higher their Mana level, the more XP they'll collect per trip.) To do this, the Enchanter will also need an [ancient tome](../../source/items/ancient_tome), obtained from raiders. The ancient tome will be used up during this process.

The higher the level of the Enchanter's Tower, the higher the level of the enchanted books the Enchanter will produce (the Enchanter's Knowledge level also contributes to this). So:

| Building Level | Enchantment Level | Odds |
| -------------- | ----------------- | ---- |
| 1              | 1                 | 50   |
| 2              | 2                 | 25   |
| 3              | 3                 | 15   |
| 4              | 4                 | 5    |
| 5              | 5                 | 1    |

The Enchanter can also craft some magical [scrolls](../../source/items/scrolls) upon request:

- The Ultrasafe Colony Teleport Scroll, crafted with 3 paper, a compass, and the <a href="../items/buildtool">build tool</a>. (Outputs 3 scrolls.)
- The Ultrasafe Colony Group Teleport Scroll, crafted with 3 Ultrasafe Colony Teleport Scrolls. The Enchanter's Tower must be at least level 2 for the Enchanter to craft this scroll.
- The Spatial Guard Reinforcements Scroll, crafted with 1 Ultrasafe Colony Teleport Scroll, 5 lapis lazuli, 1 ender pearl, and 1 paper. (Outputs 2 scrolls.) The More Scrolls <a href="../systems/research">research</a> in the <a href="../buildings/university">University</a> must be completed for the Enchanter to craft this scroll.
- The Worker-Where-Are-You Scroll, crafted with 1 Ultrasafe Colony Teleport Scroll, 6 glowstone dust, and 2 paper. (Outputs 5 scrolls.) The More Scrolls research in the University must be completed for the Enchanter to craft this scroll.
{% endcapture %}
{% capture infobox %}
{% include infobox/worker.html %}
{% endcapture %}
{% include infobox/wrapper.html content=content infobox=infobox %}