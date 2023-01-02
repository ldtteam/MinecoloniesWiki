---
type: building
building: nethermine
layout: building
---
{% capture content %}
### Note: The Nether Mine cannot be built until you have finished the [research](../../source/systems/research) in the [University](../../source/buildings/university).

### Note: Not all colony styles have this building as of version 1.19.2

The Nether Mine is where the [Nether Miner](../workers/netherminer) works. The Nether Miner travels into the Nether and mines resources found there.  The level of the hut determines what items Nether Miner brings back.

- <strong>Level 1:</strong>  blaze rod, ender pearl, ghast tear, gold ingot, gold nugget, gravel, gunpowder, leather, magma cream, nether quartz ore, netherrack, porkchop, rotten flesh, soul sand, soul_soil.
- <strong>Level 2:</strong>  All items from previous levels, plus brown mushroom, crimson fungus, crimson nylium, crimson stem, glowstone, nether wart, red mushroom.
- <strong>Level 3:</strong>  All items from previous levels, plus basalt, warped fungus, warped nylium, warped_stem.
- <strong>Level 4:</strong>  All items from previous levels, plus blackstone, nether gold ore.
- <strong>Level 5:</strong>  All items from previous levels, plus ancient debris.

The Nether Miner can also craft lava buckets.

**Note:** The portal in the Nether Mine will transport players to the Nether.  However, the Nether Miner does not actually travel into the Nether, nor do they actually mine any blocks in the Nether.
{% endcapture %}
{% capture infobox %}
{% include infobox/building.html %}
{% endcapture %}
{% include infobox/wrapper.html content=content infobox=infobox %}

## Nether Mine GUI

{% include contentblock/building/main-gui.html header="When accessing the Nether Mine hut block by right-clicking on it, you will see a GUI with different options. You start on the main tab:" image="../../assets/images/gui/netherminegui1.png" %}

{% include contentblock/building/other-gui.html header="The second tab of the GUI is <strong>Crafting Recipes</strong>." content="Here you can see all the crafting recipes this hut knows.  The arrows allow you to move them up or down in priority.  You are also able to disable specific recipes." image="../../assets/images/gui/netherminegui2.png" %}

{% include contentblock/building/stock-gui.html buildingname="Nether Mine" header="The third tab of the GUI is <strong>Minimum Stock</strong>. It has one button:" image="../../assets/images/gui/netherminegui3.png" %}

{% include contentblock/building/settings-gui.html key="nethermine" header="The fourth tab of the GUI is <strong>Settings</strong>." image="../../assets/images/gui/netherminegui4.png" %}

{% include contentblock/building/other-gui.html header="The fifth tab of the GUI is <strong>Food</strong>." content="Listed here are items that can be used by the Nether Miner as food while they are traveling in the Nether. Simply turn on any that you want your Nether Miner to eat, and a Courier will deliver those items when they need food.  All items are on by default.  The black box at the top is to search for items." image="../../assets/images/gui/netherminegui5.png" %}

{% include contentblock/building/other-gui.html header="The sixth tab of the GUI is <strong>Tasks</strong>." content="This tab shows you any requests the hut is working on, and where it is going." image="../../assets/images/gui/netherminegui6.png" %}
