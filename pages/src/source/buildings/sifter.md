---
title: Sifter's Hut
layout: default
---
# Sifter's Hut

{% capture content %}
### Note: The Sifter's Hut cannot be built until you have a level 3 [Fisher's Hut](../../source/buildings/fisher) (or three level 1 Fisher's Huts, or another equivalent) and have finished the research in the [University](../../source/buildings/university).
<br>

The Sifter's Hut is where the Sifter will sift through dirt, gravel, sand, or soul sand to find loot. Doing this will make the block the Sifter is sifting disappear. 

| Sifted Block| Chance for |
| ----- | ----- |
| Dirt |	Beetroot seeds
| Dirt |	Carrots
| Dirt |	Melon seeds
| Dirt |	Potatoes
| Dirt |	Pumpkin seeds
| Dirt |	Oak saplings
| Dirt |	Spruce saplings
| Dirt |	Birch saplings
| Dirt |	Jungle saplings
| Dirt |	Acacia saplings
| Dirt |	Dark oak saplings
| Dirt |	Wheat seeds
| Gravel |	Coal
| Gravel |	Diamonds
| Gravel |	Lapis lazuli
| Gravel |	Emeralds
| Gravel |	Flint
| Gravel |	Gold ingots
| Gravel |	Iron ingots
| Gravel |	Iron nuggets
| Gravel |	Redstone
| Sand |	Cacti
| Sand |	Cocoa beans
| Sand |	Gold nuggets
| Sand |	Sugarcane
| Soul Sand |	Blaze powder
| Soul Sand |	Glowstone dust
| Soul Sand |	Magma cream
| Soul Sand |	Nether wart
| Soul Sand |	Quartz
| Soul Sand |	Human skulls

You can choose between four meshes. The higher the level of the mesh, the higher the likelihood that the Sifter will find loot.

| Hut Level | Mesh Available | 
| ----- | ----- | 
| 1         | String         | 
| 3         | Flint          | 
| 4         | Iron           | 
| 5         | Diamond        | 

The Sifter's Hut can sift a certain amount of blocks per day:

| Hut Level | Maximum Blocks | 
| ----- | ----- | 
| 1         | 64 blocks      | 
| 2         | 256 blocks     | 
| 3         | 576 blocks     | 
| 4         | 1024 blocks    | 
| 5         | Unlimited      | 
{% endcapture %}
{% capture infobox %}
{% include infobox/building.html key="sifter" %}
{% endcapture %}
{% include page-infobox-wrapper.html content=content infobox=infobox %}

## Sifter Hut GUI

<div class="row">
  <div class="col">
    {% include contentblock/main-gui.html header="When accessing the Sifter's Hut block by right-clicking on it, you will see a GUI with different options. You start on the main tab:" image="../../assets/images/gui/siftergui1.png" %}

    {% include contentblock/basic.html header="Clicking on the blue arrow on the first page will bring you to <strong>Daily Limit</strong>." content="Here you can see how many blocks have been sifted on the current day, and the maximum blocks per day." image="../../assets/images/gui/siftergui2.png" %}

    {% include contentblock/basic.html header="The second tab of the GUI is <strong>Crafting Recipes</strong>." content="Here you can see all the crafting recipes this hut knows.  The arrows allow you to move them up or down in priority.  You are also able to disable specific recipes." image="../../assets/images/gui/siftergui3.png" %}

    {% include contentblock/stock-gui.html buildingname="Sifter's Hut" header="The third tab of the GUI is <strong>Minimum Stock</strong>. Blocks to be sifted and required meshes must be set here in order for the Sifter to work. It has one button:" image="../../assets/images/gui/siftergui4.png" %}
  </div>
</div>
