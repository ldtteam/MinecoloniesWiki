# Miner

<div class="infobox box text-center">
<img src="../../assets/images/workers/miner.png" alt="Miner" />
<hr />
  <div class="row section-text text-left">
    <div class="col">
      <p><strong>Primary Trait:</strong></p>
      <p><strong>Secondary Trait:</strong></p>
      <p><strong>Building:</strong></p>
    </div>
    <div class="col">
      <p>Strength</p>
      <p>Endurance</p>
      <p><a href="../buildings/mine.md">Mine</a></p>
    </div>
  </div>
</div>

Welcome to the Miner’s Information Site.

The Miner is the strongest part of your Town. The Miner will dig and create mineshafts, collect; cobblestone, granite, diorite, andesite, dirt, sand, sandstone, etc. as well as all the *ORES* the miner comes across. Important for all the Towns' building needs and crafting tools and weapons for your workers. Any additional modded ore should also be picked up by the miner.

Before you choose a place to build his Hut, take into account the distances among the other buildings and obstacles like water, trees, caves, mountains, lava sources, etc. 

After you have selected a place for the Hut, you have to craft the Miner's Hut block in the crafting table and use your [Building Tool](../../source/tutorials/building_tool) to place the building. Once you commit to the placement of the Miner's hut, the block will be placed and the Miner will be automatically assigned (or you can manually assign one with the best [Traits](../../source/tutorials/worker_info) for Miner if you changed this in the setting tab in the [Town Hall's GUI](../../source/buildings/townhall).

You now officially have a Miner! **CONGRATULATIONS!**

Now you will have to issue the builder the “Build” assignment so it can build the “Farmer’s Hut”. It will be asking for the materials it needs. Make sure to check the “chat” regularly to see what materials the builder is requesting for any build/upgrade.

Once the builder is done you will have to give the Miner a pickaxe, a shovel, ladders, oak planks, oak wood slabs, oak fences, torches and cobblestone. So he can start to build the shaft down to the mining level. The level of the Miner's Hut will dictate how deep he will create the mine, so if you want the best resources, be sure to upgrade the Miner's Hut. The miner works by digging a shaft down to the depth of the level of his hut, once there he will build a network of random mineshafts branching out from the main shaft looking for the ores. When he finds any ore, he will try and mine out the whole vein, not just what happens to be on his path 

**Hint:** If you see the Miner is not Working and stands by it's hut's block. Check to make sure it has all the materials it needs, specially: cobblestone, pickaxe, shovel and torches. If it's still making the shaft down then make sure it also has; planks, slabs and fences. it might need lots and lots of cobblestone to fill in caves/water/lava/sand/gravel that it finds along the way while making the shaft and/or mining.

**Note:** The miner will only mine blocks according to the level of it's pickaxe. And will only be able to use a tool according to the level of it's hut (check the [Worker's Tool Level](../../source/tutorials/worker_info) system). Therefore the miner can only mine Diamonds with an Iron or better pickaxe. When the miner finds water or lava, it will try and block it up and work it's way around it. This could take him some time to do. Mining is a very dangerous profession and the miner might die from lava or being suffocated by Gravel or Sand. The miner will try it's best to be safe. The miner can on occasion get confused and lost. It may start new tunnels and shaft to try and find where he needs to be. Use the Recall Citizen button in the Worker hut GUI to instantly recall the miner to the Miner's Hut block if it gets lost or seems to not bring anything to the Hut block's inventory.

**Hint:** If you see the builder has not finished building/upgrading your Farmer’s hut and you don’t see the builder asking for any materials, go to the builder’s hut and “recall” the builder and wait a bit to see what the builder needs. Watch the Minecraft “chat” section. Also you can go to page 2 of the builder’s hut GUI and check the list of materials required, any material in the list that is still missing will be in red colored letters.

## Hut GUI

When accessing the Miner's Hut block (right clicking on it), you will see a GUI with different options:

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/minergui.png" class="img-fluid mx-auto" alt="Miner GUI">
  </div>
  <div class="col-sm-12 col-md"><br><br>
    <p>The Worker assigned and their Level. (The worker levels up in time by doing their work. The higher the level the faster and more efficient they will be). And the buttons:</p>
    <ul>
      {% for item in site.data.gui.global %}
        <li><strong>{{ item.button }}:</strong> {{ item.content }}</li>
      {% endfor %}
    </ul>
  </div>
</div>
<br>

By pressing the arrow button in the top right corner of the GUI, you will be taken to page 2 of the GUI where you will find the following:

<br>
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/minergui2.png" class="img-fluid mx-auto" alt="Miner GUI 2">
  </div>
  <div class="col-sm-12 col-md">
    <ul><br><br><br>
      <li><strong>Mine Level:</strong> The <i>Node</i> refers to the platorms he is placing every 3 blocks down. Here you can assign what "Node" of the mine the miner should be branching out and working in, creating his mineshafts.</li><br><br><br>
      <li><strong>Inventory:</strong> This is the most important button. Here you can access the buildings storage from where the worker takes and deposits materials, tools and anything they find along the way (citizens will pickup anything in their path that is considered a drop; saplings, seeds, rotten flesh, bones, arrows, etc.).</li>
    </ul>
  </div>
</div>
<br>

**Hint:** The shaft the miner creates downwwards will go to a specific depth depending on the level of the Miner's Hut. So if you want it to go deeper and get to the good ores, you will have to upgrade the Hut. Level 5 hut will get to Bedrock (if you placed it at Y=64 or above).
