# Miner

The Miner is the strongest part of your Town. The Miner will dig and create mineshafts, collect; cobblestone, granite, diorite, andesite, dirt, sand, sandstone, etc. as well as all the ORES the miner comes across. Important for all the Towns' building needs and crafting tools and weapons for your workers. Any additional modded ore will also be picked up by the miner.

To begin with you have to craft the Miner's Hut block in the crafting table and use your [Building Tool](https://www.youtube.com/watch?v=Hwpv_c6Pbvg) to place the building. Once you commit to the placement of the Miner's hut, the block will be placed and the Miner will be automatically assigned (or you can manually assign one with the best [[Workers| Traits]] for Miner if you changed this in the setting tab in the [[Town Hall| Town Hall's GUI]].

Best Traits are: Strength and Endurance.

[[File:Miner_New.png]]

[[File:Miner_Block.png]]

[[File:Miner.png]]

You now officially have a miner! CONGRATULATIONS!

Now you will have to issue the builder the build assignment so he can build the Miner's Hut. He will be asking for the materials he/she needs. Make sure to check the chat regularly to see what materials the builder is requesting for any build/upgrade.

Once the builder is done you will have to give the Miner a pickaxe, a shovel, ladders, oak wood slabs, oak fences, torches and cobblestone. So he can start to build the shaft down to the mining level. The level of the Miner's Hut will dictate how deep he will create the mine, so if you want the best resources, be sure to upgrade the Miner's Hut. The miner works by digging a shaft down to the depth of the level of his hut, once there he will build a network of random mineshafts branching out from the main shaft looking for the ores. When he finds any ore, he will try and mine out the whole vein, not just what happens to be on his path.

*Hint:* If you see the Miner is not Working and stands by his hut's block. Check to make sure he has all the materials he needs -- especially cobblestone. He might need lots and lots of cobblestone to fill in caves/water/lava/sand/gravel that he finds along the way while making the shaft and/or mining.

*Note:* The miner will only mine blocks according to the level of his/her pickaxe. And will only be able to use a tool according to the level of his/her hut (check the [[Workers|Tool Level]] system). Therefore the miner can only mine Diamonds with an Iron or better pickaxe. When the miner finds water or lava, he/she will try and block it up and work his way around it. This could take him some time to do. Mining is a very dangerous profession and the miner might die from lava or being suffocated by Gravel or Sand. The miner will try his/her best to be safe. The miner can on occasion get confused and lost. He/she may start new tunnels and shaft to try and find where he needs to be. Use the Recall Citizen button in the chest GUI to instantly recall the miner to the Miner's Hut block if he/she gets lost or seems to not bring anything to his chest.

*Hint:* If you see the builder has not finished building/upgrading your Miner's hut and you don't see the builder asking for any materials, go to the builder's hut and recall the builder and wait a bit to see what the builder needs. Watch the Minecraft chat section. Also you can go to page 2 of the builder's hut GUI and check the list of materials required, any material in the list that is still missing will be in red colored letters.

## Hut GUI

When accessing the Miner's Hut block (right clicking on it), you will see a GUI with different options:

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../assets/images/gui/minergui.png" class="img-fluid mx-auto" alt="Miner GUI">
  </div>
  <div class="col-sm-12 col-md">
    <p>The Worker assigned and their Level. (The worker levels up in time by doing their work. The higher the level the faster and more efficient they will be). And the buttons:</p>
    <ul>
      {% for item in site.data.gui.global %}
        <li><strong>{{ item.button }}:</strong> {{ item.content }}</li>
      {% endfor %}
    </ul>
  </div>
</div>

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../assets/images/gui/minergui2.png" class="img-fluid mx-auto" alt="Miner GUI 2">
  </div>
  <div class="col-sm-12 col-md">
    <p>By pressing the arrow button in the top right corner of the GUI, you will be taken to page 2 of the GUI where you will find the following:</p>
    <ul>
      <li><strong>Mine Level:</strong> Here you can assign what "level" of the mine the miner should be working in, creating his mineshafts.</li>
      <li><strong>Inventory:</strong> Same as above, allows you to view the huts storage.</li>
    </ul>
  </div>
</div>
