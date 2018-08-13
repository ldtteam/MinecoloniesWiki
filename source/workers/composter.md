# Composter

The Composter is an addition to help your Farmer(s) get more crops faster. The Composter will turn a lot of items into *compost* using the mod's barrel. So the Deliveryman will give the composter items like: Seeds (all types), saplings (all types), flowers, wheat, carrots, potatoes, beets, etc. Page 2 of the Composter's Hut GUI will show you all the items recognized by the mod that can be used to create compost (including modded materials). Then the composter will use the barrel(s) in it's hut and over some time, turn it into compost that the Deliveryman will then take to the Farmer. The farmer will use the compost just like bonemeal.

To begin with you have to craft the Composter's Hut block in the crafting table and use your [Building Tool](../../source/tutorials/building_tool) to place the building. Once you commit to the placement of the Composter's hut, the block will be placed and the Composter will be automatically assigned (or you can manually assign one with the best  [Traits](../../source/tutorials/worker_info) for Composter if you changed this in the setting tab in the [Town Hall's GUI](../../source/buildings/townhall).

Best Traits are: **Dexterity** and **Strength**.

<br>
<p style="text-align:center;"><img src="../../assets/images/Workers/composter_recipe.png" alt="Composter Recipe">    <img src="../../assets/images/Workers/composter_hut.png" alt="Composter Hut Block">    <img src="../../assets/images/Workers/composter.png" alt="Composter"></p>
<br>

You now officially have a Composter! **CONGRATULATIONS!**

Now you will have to issue the builder the “Build” assignment so it can build the “Composter’s Hut”. It will be asking for the materials it needs. Make sure to check the “chat” regularly to see what materials the builder is requesting for any build/upgrade.

**Hint:** Once the builder is done you will have to go to page 2 of the hut GUI and "define a list of items to be composted". All recognized items (even modded items) will be listed there. You will have to select from that list waht you want the composter to use to make compost.


**Hint:** If you see the builder has not finished building/upgrading your Composter’s hut and you don’t see the builder asking for any materials, go to the builder’s hut and “recall” the builder and wait a bit to see what the builder needs. Watch the Minecraft “chat” section. Also you can go to page 2 of the builder’s hut GUI and check the list of materials required, any material in the list that is still missing will be in red colored letters.

## Hut GUI

When accessing the Composter's Hut block (right clicking on it), you will see a GUI with different options:

<br>
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/composter_gui.png" class="img-fluid mx-auto" alt="Composter GUI">
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

By pressing the arrow button in the top right corner of the GUI, you will be taken to page 2 of the GUI where you will find the following:

<br>
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/composter_gui2.png" class="img-fluid mx-auto" alt="Composter GUI 2">
  </div>
  <div class="col-sm-12 col-md">
    <ul><br><br>
      <li><strong>Items:</strong> Here you will see a list of all the items that were recognized by the mod for the composter to use. Including modded items. All items are "deselected" (off) by default. You can then select which items you want the composter to use. </li>
    </ul>
  </div>
</div>
<br>

