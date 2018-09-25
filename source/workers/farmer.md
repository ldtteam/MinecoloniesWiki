# Farmer

<div class="infobox box text-center">
<img src="../../assets/images/workers/farmer.png" alt="Farmer" />
<hr />
  <div class="row section-text text-left">
    <div class="col">
      <p><strong>Primary Trait:</strong></p>
      <p><strong>Secondary Trait:</strong></p>
      <p><strong>Building:</strong></p>
    </div>
    <div class="col">
      <p>Endurance</p>
      <p>Charisma</p>
      <p><a href="../buildings/farm">Farm</a></p>
    </div>
  </div>
</div>

Welcome to the Farmer's Information Site.

The Farmer is the backbone of your food production. The farmer will cultivate the crops you assign it through the "Field" block (Scarecrow).

To begin with you have to craft the "Farmer's Hut" block in the crafting table and use your [Buiding Tool](../../source/tutorials/building_tool) to place the building. Once you "commit" to the placement of the farmer's hut, the block will be placed and the farmer will be automatically assigned (or you can manually assign one with the best  "[Traits](../../source/tutorials/worker_info)" for farmer if you changed this in the setting tab in the [Town Hall's GUI](../../source/buildings/townhall).

You now officially have a "Farmer!" **CONGRATULATIONS!**

Now you will have to issue the builder the “Build” assignment so it can build the “Farmer’s Hut”. It will be asking for the materials it needs. Make sure to check the “chat” regularly to see what materials the builder is requesting for any build/upgrade.

**Hint:** If you see the builder has not finished building/upgrading your Farmer’s hut and you don’t see the builder asking for any materials, go to the builder’s hut and “recall” the builder and wait a bit to see what the builder needs. Watch the Minecraft “chat” section. Also you can go to page 2 of the builder’s hut GUI and check the list of materials required, any material in the list that is still missing will be in red colored letters.

Once the builder is done, you will have to determine where your farm plot(s) will be located. Before the farmer can start, you will have to give the farmer a hoe, the crop you want to cultivate so the farmer can plant, and craft the "Field" block (Scarecrow). Place the "Field" block in the plot of farm land you want the farmer to work on and right click on it to acces it's GUI. Here you will place the crop you want for this specific field to be cultivated. The crops he currently cultivates are: Wheat, carrots, potatoes, beets, melons, pumpkins and most "modded" crops (from other mods) as long as they have normal growth behaviour (Minecraft sugarcanes are being worked on at the moment).

<br>
<p style="text-align:center;"><recipe>field</recipe></p>
<p style="text-align:center;"><img src="../../assets/images/workers/field.png" alt="Field">    <img src="../../assets/images/workers/field_gui.png" alt="Field GUI Empty">    <img src="../../assets/images/workers/field_gui1.png" alt="Field GUI Full"></p>
<br>

**Note:** The farmer will only till and cultivate crops that are (up to) 5 blocks from the field block. The farm land can be delimited by placing solid blocks (non tillable; sand, cobblestone, wood, etc) or air blocks in the ground next to the tillable blocks. This will cause the farmer to stop cultivating the land at this point, even if there is still tilled and/or tillable land after that solid/air block. Plan accordingly and create your plot(s) any shape and form you want taking into account that for each farm plot, the farmer will only work up to 5 blocks from the field block.

If you decide later to change the type of crop you want cultivated in that specific farm plot, just go into the "Field's" GUI and switch the crop there. Remember that for the dirt to be tillable and hold crops, it must have a water source to keep it tilled and crops stay planted (Minecraft limits the water source to permeate up to 4 blocks from it's placement).

**IMPORTANT:** The farmer will take care of up to 5 "Fields", depending on the level of the "Farmer's Hut". The level of hut is the number of fields it can take care of.

| Hut Level | Fields |
| :-----: |  :-----: | 
| 1 | 1 |
| 2 | 2 |
| 3 | 3 |
| 4 | 4 |
| 5 | 5 |

These are just some examples of what a farm plot can be like. you can be creative and make them any shape you like following the rule of only up to 5 blocks from the "Field" block (Scarecrow) and delimited by non tillable blocks.

<br>
<p style="text-align:center;"><img src="../../assets/images/workers/plot_max.png" alt="Field Max Size">    <img src="../../assets/images/workers/plot_half.png" alt="Field Size Half">    <img src="../../assets/images/workers/plot_quater.png" alt="Field Size Quarter"></p>
<br>

**Hint:** If you see the builder has not finished building/upgrading your Deliveryman’s hut and you don’t see the builder asking for any materials, go to the builder’s hut and “recall” the builder and wait a bit to see what the builder needs. Watch the Minecraft “chat” section. Also you can go to page 2 of the builder’s hut GUI and check the list of materials required, any material in the list that is still missing will be in red colored letters.

Now you can access the Farmer's Hut block (right click on it) and you will see a GUI with different options:


<br>
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/farmergui.png" class="img-fluid mx-auto" alt="Farmer GUI">
  </div>
  <div class="col-sm-12 col-md">
    <br>
    <br>
    <p>The Worker assigned and it's Level. (The worker levels up in time by doing it's work. The higher the level the faster and more efficient they will be). And the buttons:</p>
    <ul><br>
      {% for item in site.data.gui.global %}
        <li><strong>{{ item.button }}:</strong> {{ item.content }}</li>
      {% endfor %}
    </ul>
  </div>
</div>
<br><br>


<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/farmergui.png" class="img-fluid mx-auto" alt="Farmer GUI">
  </div>
  <div class="col-sm-12 col-md">
    <br>
    <br>
    <p>This is "page 2" of the GUI. It show the "Fields" that are avaialble (recognizable with a "Field" block placed and crop in his GUI) and they can be assigned to this specific farmer.<br>And the buttons:</p>
    <ul>
      <li><b>Automatic:</b> By default. Here you can define if you prefer to "manually" assign the "Fields" for this farmer.</li>
      <li><b>Inventory:</b> This is the most important button. Here you can access the buildings storage from where the “worker” takes and deposits materials, tools and anything he/she finds along the way (citizens will pickup anything in their path that is considered a "drop"; sapling, seeds, rotten flesh, bones, arrows, etc.).</li>
    </ul>
  </div>
</div>
