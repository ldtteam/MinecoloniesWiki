# Smeltery

Welcome to the Smeltery’s Information Site.

The Smeltery is a very important addition to help automate your Town. The Smeltery will have a worker called the Smelter, which will essentially turn the ores that the Miner gets and smelt them into ingots for your Towns needs. The Smelter will require fuel to use in the furnace(s).

To begin with you have to craft the Smeltery's Hut block in the crafting table and use your [Building Tool](../../source/tutorials/building_tool) to place the building. Once you commit to the placement of the Smeltery's hut, the block will be placed and the Smelter will be automatically assigned (or you can manually assign one with the best  [Traits](../../source/tutorials/worker_info) for Smelter if you changed this in the setting tab in the [Town Hall's GUI](../../source/buildings/townhall).

Best Traits are: **Strength** and **Intelligence**.

<br>
<p style="text-align:center;"></recipe>smeltery</recipe>    <img src="../../assets/images/Workers/composter_hut.png" alt="Smeltery Hut Block">    <img src="../../assets/images/Workers/composter.png" alt="Smelter"></p>
<br>

You now officially have a Smeltery! **CONGRATULATIONS!**

Now you will have to issue the builder the “Build” assignment so it can build the “Smeltery’s Hut”. It will be asking for the materials it needs. Make sure to check the “chat” regularly to see what materials the builder is requesting for any build/upgrade.

**Hint:** Once the builder is done you will want to upgrade the Smeltery to get all the awesome perks it has to offer for higher levels. The higher the level of the Hut the higher chance it has to double and even triple the ingot output per block of ore.

**Hint:** If you see the builder has not finished building/upgrading your Smeltery’s hut and you don’t see the builder asking for any materials, go to the builder’s hut and “recall” the builder and wait a bit to see what the builder needs. Watch the Minecraft “chat” section. Also you can go to page 2 of the builder’s hut GUI and check the list of materials required, any material in the list that is still missing will be in red colored letters.

## Hut GUI

When accessing the Smeltery's Hut block (right clicking on it), you will see a GUI with different options:

<br>
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/Smeltery_gui.png" class="img-fluid mx-auto" alt="Smeltery GUI">
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
<br>
