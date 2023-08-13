---
type: building
building: enchantertower
layout: building
---
{% infobox_building %}
The Enchanter's Tower is where the Enchanter will create enchanted books, as long as they have [Ancient Tomes](../../source/items/ancient_tome). The Enchanter will collect XP from other workers to create the enchanted books. The higher their Mana level, the more XP they will collect per trip. They will *not* apply the enchanted books to tools and armor, you must do that yourself.

The higher the level of the Enchanter's Tower, the higher the level of the enchanted books the Enchanter will produce (the Enchanter's Knowledge level also contributes to this). So:

| Building Level | Enchantment Level | Odds |
|----------------|-------------------|------|
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
{% endinfobox_building %}

## {% building %} GUI

{% building_gui_content_block_main order=1 %}
{% building_gui_content_block_craftingrecipes order=2 %}
{% building_gui_content_block_stock order=3 %}
{% building_gui_content_block_custom order=4 header="gather targets" image_key="targets" image_alt="Gather targets" %}
Here you can set which workers the Enchanter will collect XP from, and how far that worker is from the tower.
{% endbuilding_gui_content_block_custom %}