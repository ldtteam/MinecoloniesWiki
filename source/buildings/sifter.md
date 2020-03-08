---
title: Minecolonies Wiki
layout: default
---
# Sifter

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/sifter.png" alt="Sifter's Hut" />
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Worker:</strong> <a href="../workers/sifter">Sifter</a></p>
        </div>
    </div>
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Recipe:</strong> 
        </div>
    </div>
    <recipe>sifter</recipe>
    
</div>
<hr />

# About the Building

Once the builder is done you can now hire the Sifter and and select what item you want them to sift. Options for this are setup in the configuration file.

| Hut Level | Mesh Available | 
| ----- | ----- | 
| 1         | String         | 
| 2         | Flint          | 
| 3         | Iron           | 
| 4         | Diamond        | 


| Sifted Block| Chance for |
| ----- | ----- |
| Dirt |	beetroot seeds
| Dirt |	carrot
| Dirt |	melon seed
| Dirt |	potato
| Dirt |	pumpkin seeds
| Dirt |	sapling: Oak
| Dirt |	sapling: Spruce
| Dirt |	sapling: Birch
| Dirt |	sapling: Jungle
| Dirt |	sapling: Acacia
| Dirt |	sapling: Dark Oak
| Dirt |	wheat seeds
| Gravel |	coal
| Gravel |	diamond
| Gravel |	dye: Lapis Luzuli
| Gravel |	emerald
| Gravel |	flint
| Gravel |	gold ingot
| Gravel |	iron ingot
| Gravel |	iron nugget
| Gravel |	redstone
| Sand |	cactus
| Sand |	dye: Cocoa Bean
| Sand |	gold nugget
| Sand |	reeds
| Soul Sand |	blaze powder
| Soul Sand |	glowstone dust
| Soul Sand |	magma cream
| Soul Sand |	nether wart
| Soul Sand |	quartz
| Soul Sand |	skull: Human


# Sifter Hut GUI

When accessing the Sifter's Hut block (right clicking on it), you will see a GUI with different options:

<br>
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/siftergui1.png" class="img-fluid mx-auto" alt="Sifter GUI">
  </div>
  <div class="col-sm-12 col-md">
    <p>The Worker assigned and it's Level. (The worker levels up in time by doing it's work. The higher the level the faster and more efficient it will be). And the buttons:</p>
    <ul>
      {% for item in site.data.gui.global %}
        <li><strong>{{ item.button }}:</strong> {{ item.content }}</li>
      {% endfor %}
    </ul>
  </div>
</div>
<br>

Page 2 of the GUI allows you to choose which block to sift, how many daily, and which mesh you want to use.

You must buy a mesh everytime you want to change it.

<div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/siftergui2.png" class="img-fluid mx-auto" alt="Sifter GUI">
  </div>