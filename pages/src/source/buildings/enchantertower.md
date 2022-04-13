---
title: Enchanter's Tower
layout: default
---
# Enchanter's Tower

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/enchanter.png" alt="Enchanter's Tower" />
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Worker:</strong></p>
        </div>
        <div class="col">
        <p><a href="../workers/enchanter">Enchanter</a></p>
        </div>
    </div>
    <hr />
    <recipe>enchanter</recipe>
</div>

The Enchanter's Tower is where the Enchanter will create enchanted books, as long as they have [Ancient Tomes](../../source/items/ancient_tome). The Enchanter will collect XP from other workers to create the enchanted books. The higher their Mana level, the more XP they will collect per trip. They will *not* apply the enchanted books to tools and armor, you must do that yourself.

The higher the level of the Enchanter's Tower, the higher the level of the enchanted books the Enchanter will produce (the Enchanter's Knowledge level also contributes to this). So:

| Building Level | Enchantment Level | Odds |
| ----- | ----- | ----- |
| 1 | 1 | 50 |
| 2 | 2 | 25 |
| 3 | 3 | 15 |
| 4 | 4 | 5 |
| 5 | 5 | 1 |

The Enchanter can also craft some magical [scrolls](../../source/items/scrolls) upon request:

- The Ultrasafe Colony Teleport Scroll, crafted with 3 paper, a compass, and the <a href="../items/buildtool">build tool</a>. (Outputs 3 scrolls.)
- The Ultrasafe Colony Group Teleport Scroll, crafted with 3 Ultrasafe Colony Teleport Scrolls. The Enchanter's Tower must be at least level 2 for the Enchanter to craft this scroll.
- The Spatial Guard Reinforcements Scroll, crafted with 1 Ultrasafe Colony Teleport Scroll, 5 lapis lazuli, 1 ender pearl, and 1 paper. (Outputs 2 scrolls.) The More Scrolls <a href="../systems/research">research</a> in the <a href="../buildings/university">University</a> must be completed for the Enchanter to craft this scroll.
- The Worker-Where-Are-You Scroll, crafted with 1 Ultrasafe Colony Teleport Scroll, 6 glowstone dust, and 2 paper. (Outputs 5 scrolls.) The More Scrolls research in the University must be completed for the Enchanter to craft this scroll.

## Enchanter's Hut GUI

When accessing the Enchanter's Hut block by right-clicking on it, you will see a GUI with different options.   You start on the main tab:

<br>
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/enchantergui1.png" class="img-fluid mx-auto" alt="Enchanter's GUI 1">
  </div>
  <div class="col-sm-12 col-md">
    <br>
    <ul>
      {% for item in site.data.gui.global %}
        <li><strong>{{ item.button }}:</strong> {{ item.content }}</li>
      {% endfor %}
    </ul>
  </div>
</div>

<br>
<div class="row">
    <div class="col-sm-12 col-md">
      <img src="../../assets/images/gui/enchantergui2.png" class="img-fluid mx-auto" alt="Enchanter's GUI 2">
    </div>
    <div class="col-sm-12 col-md">
    <p>The second tab of the GUI is <strong>List of Recipes</strong>. Here you can see all the crafting recipes this hut knows.  The arrows allow you to move them up or down in priority.  You are also able to disable specific recipes.</p>
    </div>
</div>
  
<br>
<div class="row">
    <div class="col-sm-12 col-md">
      <img src="../../assets/images/gui/enchantergui3.png" class="img-fluid mx-auto" alt="Enchanter's GUI 3">
    </div>
    <div class="col-sm-12 col-md">
    <p>The third tab of the GUI is <strong>Minimum Stock</strong>.  It has one button:</p>
    <ul>
         <li><strong> Add: </strong> Use this button to tell the Enchanter Tower to keep a minimum stock on hand. Set items will be displayed above the button.</li>
    </ul>
    </div>
</div>
  
<br>
<div class="row">
    <div class="col-sm-12 col-md">
      <img src="../../assets/images/gui/enchantergui4.png" class="img-fluid mx-auto" alt="Enchanter's GUI 4">
    </div>
    <div class="col-sm-12 col-md">
    <p>The fourth tab of the GUI is <strong>Gather Targets</strong>.  Here you can set which workers the Enchanter will collect XP from, and how far that worker is from the tower.</p>
    </div>
</div>