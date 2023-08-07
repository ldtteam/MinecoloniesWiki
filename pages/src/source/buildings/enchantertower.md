---
type: building
building: enchantertower
layout: building
---
{% capture content %}
The Enchanter's Tower is where the Enchanter will create enchanted books, as long as they have [Ancient Tomes](../../source/items/ancient_tome). The Enchanter will collect XP from other workers to create the enchanted books. The higher their Mana level, the more XP they will collect per trip. They will *not* apply the enchanted books to tools and armor, you must do that yourself.

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
{% include infobox/building.html %}
{% endcapture %}
{% include infobox/wrapper.html content=content infobox=infobox %}

## Enchanter's Tower GUI

{% include contentblock/building/main-gui.html header="When accessing the Enchanter's Tower hut block by right-clicking on it, you will see a GUI with different options. You start on the main tab:" image="../../assets/images/gui/enchantergui1.png" %}

{% include contentblock/building/other-gui.html header="The second tab of the GUI is <strong>Crafting Recipes</strong>." content="Here you can see all the crafting recipes this hut knows.  The arrows allow you to move them up or down in priority.  You are also able to disable specific recipes." image="../../assets/images/gui/enchantergui2.png" %}

{% include contentblock/building/stock-gui.html buildingname="Enchanter Tower" header="The second tab of the GUI is <strong>Minimum Stock</strong>. It has one button:" image="../../assets/images/gui/enchantergui3.png" %}

{% include contentblock/building/other-gui.html header="The fourth tab of the GUI is <strong>Gather Targets</strong>." content="Here you can set which workers the Enchanter will collect XP from, and how far that worker is from the tower." image="../../assets/images/gui/enchantergui4.png" %}