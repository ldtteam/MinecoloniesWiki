---
type: worker
worker: miner
layout: worker
---
{% capture content %}
The Miner is part of the resource production of your colony. The Miner will create mineshafts to collect cobblestone, granite, diorite, andesite, dirt, sand, sandstone, etc. as well as all the ores they come across. Any additional modded blocks/ores should also be picked up by the Miner if they are properly coded.

The Miner works by digging a shaft down. Once there, they will build a network of random mineshafts branching out from the main shaft. If they find any ore, they will try to mine out the whole vein, not just what happens to be on their path.

If the Miner is not working and just stands by their hut block, check to make sure they have all the materials they need, especially cobblestone, a pickaxe, a shovel, planks, fences/walls, and torches. If they're still making the shaft down, also make sure they have slabs, ladders, and signs. They might need lots and lots of cobblestone to fill in caves/water/lava/sand/gravel that they find along the way.

The level of the Mine will dictate how deep the Miner will mine:

| Mine Level | Shaft Y Level | Shaft Y Level |
| ---------- | ------------- | ------------- |
|            | 1.16          | 1.18          |
| 1          | 50            | 40            |
| 2          | 30            | 20            |
| 3          | Bedrock       | 0             |
| 4          |               | Bedrock       |

The Miner will only mine blocks according to the level of their pickaxe and will only be able to use a tool according to the level of their hut (check the [worker](../systems/worker) system page).

Mining is a very dangerous profession and the Miner might die from lava, being suffocated by gravel or sand, or from a mob. However, the Miner will try their best to be safe. When the Miner finds water or lava, they will try to block it up and work around it. This could take them some time to do. 

The Miner can on occasion get confused and lost. They may start new tunnels and shafts to try to find where they need to be. Use the Recall Citizen button in the Mine GUI to instantly recall the Miner to the Mine's hut block if they get lost.

The Miner has a chance to get lucky in finding ores when digging out cobblestone or stone! This is the default setting in the [configuration file](../../source/misc/configfile), but you can change this.

The Miner's Strength level affects their block breaking speed. Similarly, their Stamina skill affects their block placing speed, so if they have a higher Stamina skill they'll place supports and other blocks faster. 
{% endcapture %}
{% capture infobox %}
{% include infobox/worker.html %}
{% endcapture %}
{% include infobox/wrapper.html content=content infobox=infobox %}
