---
type: worker
worker: enchanter
layout: worker
---
{% infobox_worker %}

The enchanter specializes in crafting enchanted books and magical scrolls with special abilities useful to the administration of colonies. 

## Crafting Enchanted Books

In order to create enchanted books, the enchanter can be configured to observe another worker to generate XP. The enchanter will consume the generated XP and an [ancient tome](../../source/items/ancient_tome) to create an enchanted book.  The ancient tome is dropped by raiders.

### Stats

| Stat      | Effect                                                 |
|-----------|--------------------------------------------------------|
| Mana      | Increases the rate of XP generated during observation. |
| Knowledge | Increases the possible level of the enchantment.       |

### Hut Level

The higher the level of the Enchanter's Tower the higher the level of the enchanted books the enchanter will produce. So:

| Building Level | Enchantment Level | Odds |
|----------------|-------------------|------|
| 1              | 1                 | 50   |
| 2              | 2                 | 25   |
| 3              | 3                 | 15   |
| 4              | 4                 | 5    |
| 5              | 5                 | 1    |

## Crafting Scrolls

The Enchanter can also craft magical [scrolls](../../source/items/scrolls) upon request:

- The Ultrasafe Colony Teleport Scroll, crafted with 3 paper, a compass, and the <a href="../items/buildtool">build tool</a>. (Outputs 3 scrolls.)
- The Ultrasafe Colony Group Teleport Scroll, crafted with 3 Ultrasafe Colony Teleport Scrolls. The Enchanter's Tower must be at least level 2 for the Enchanter to craft this scroll.
- The Spatial Guard Reinforcements Scroll, crafted with 1 Ultrasafe Colony Teleport Scroll, 5 lapis lazuli, 1 ender pearl, and 1 paper. (Outputs 2 scrolls.) The More Scrolls <a href="../systems/research">research</a> in the <a href="../buildings/university">University</a> must be completed for the Enchanter to craft this scroll.
- The Worker-Where-Are-You Scroll, crafted with 1 Ultrasafe Colony Teleport Scroll, 6 glowstone dust, and 2 paper. (Outputs 5 scrolls.) The More Scrolls research in the University must be completed for the Enchanter to craft this scroll.
{% endinfobox_worker %}
