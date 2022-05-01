---
title: Stonemason's Hut
layout: default
---
# Stonemason's Hut

{% capture content %}
### Note: The Stonemason's Hut cannot be built until you have a level 1 [Blacksmith's Hut](../../source/buildings/blacksmith) and have finished the research in the [University](../../source/buildings/university).
<br>

The Stonemason's Hut is where the Stonemason will craft 3x3 recipes made entirely out of cobblestone, stone, andesite, diorite, granite, quartz, purpur, nether bricks, prismarine, sandstones, blackstone, basalt, and/or ores (no ingots or redstone items). They can also craft end stone from cobblestone and an ender pearl, but only if you have completed the Know the End [research](../../source/systems/research) in the [University](../../source/buildings/university). The Stonemason will only work when they receive a request from another worker and have the needed materials. You will also need to teach the Stonemason's Hut the recipes you want the Stonemason to craft.

**Hint:** Upgrading the Stonemason's Hut lets you teach it more recipes. So:

| Building Level | Number of Recipes |
| :-----: | :-----: |
| 1 | 10 | 
| 2 | 20 |
| 3 | 40 |
| 4 | 80 | 
| 5 | 160 | 
{% endcapture %}
{% capture infobox %}
{% include infobox/building.html key="stonemason" %}
{% endcapture %}
{% include page-infobox-wrapper.html content=content infobox=infobox %}

## Stonemason's Hut GUI

<div class="row">
  <div class="col">
    {% include contentblock/main-gui.html header="When accessing the Stonemason's Hut block by right-clicking on it, you will see a GUI with different options. You start on the main tab:" image="../../assets/images/gui/stonemasongui1.png" %}

    {% include contentblock/basic.html header="The second tab of the GUI is <strong>Crafting Recipes</strong>." content="Here you can see all the crafting recipes this hut knows.  The arrows allow you to move them up or down in priority.  You are also able to disable specific recipes.<p><strong> Teach Recipe:</strong> When clicking teach recipe, it opens a crafting grid which allows you to teach this hut recipes (not the worker).</p>" image="../../assets/images/gui/stonemasongui2.png" %}

    {% include contentblock/basic.html header="The third tab of the GUI is <strong>Custom Recipes</strong>." content="Here you can see all the <a href='../items/shingles'>Architect Cutter</a> recipes this hut knows.  The arrows allow you to move them up or down in priority.  You are also able to disable specific recipes.<p><strong> Teach Recipe:</strong> When clicking teach recipe, it opens a crafting grid for the Architect Cutter.  Input 1 is the top left slot of the cutter, input 2 is the top right, and input 3 the bottom left slot in the cutter. When you have put the items in the slots, you will see various items below the input slots, the Stonemason can create ALL of those items from the recipe you have input.</p>" image="../../assets/images/gui/stonemasongui3.png" %}

    {% include contentblock/basic.html header="The fourth tab of the GUI is <strong>Tasks</strong>." content="This tab shows you any requests the hut is working on, and where it is going." image="../../assets/images/gui/stonemasongui4.png" %}

    {% include contentblock/settings-gui.html key="stonemason" header="The fifth tab of the GUI is <strong>Settings</strong>." image="../../assets/images/gui/stonemasongui5.png" %}
  </div>
</div>
