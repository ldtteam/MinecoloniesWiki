# Lumberjack

The Lumberjack is a very essential worker. Will harvest trees to provide the wood for all your Town needs. Will look for nearby trees and chop them down. Will also plant a sapling in it's place again of the same variety he just chopped down (provided that the tree dropped saplings and/or you provide the Lumberjack with the appropriate saplings). The lumberjack will only plant a sapling AFTER chopping down a tree, if there are no trees nearby, he will NOT plant any saplings to create a tree.
 
Before you choose a place to build the hut, take into account that it has to be near trees or that you personally will have to plant trees close to the hut so the lumberjack can work. After you have selected a place for the hut you have to craft the Lumberjack's Hut block in the crafting table and use your [Buiding Tool](../../source/tutorials/building_tool) to place the building. Once you "commit" to the placement of the Lumberjack's Hut, the block will be placed and the Lumberjack will be automatically assigned (or you can manually assign one with the best "[Traits](../../source/tutorials/worker_info)" for Lumberjack if you changed this in the setting tab in the [Town Hall's GUI](../../source/buildings/townhall). 

Best Traits are: **Strength** and **Charisma**.

<br>
<p style="text-align:center;"><img src="../../assets/images/Workers/lumberjack_recipe.png" alt="Lumberjack Recipe">    <img src="../../assets/images/Workers/lumberjack_hut.png" alt="Lumberjack Hut Block">    <img src="../../assets/images/Workers/lumberjack.png" alt="Lumberjack"></p>
<br>

You now officially have a "Lumberjack!" **CONGRATULATIONS!**

Now you can give the Lumberjack an axe and it will start to look for trees to chop down right away. You will have to issue the builder the "Build" assignment so the "Lumberjack's Hut" can be built. The lumberjack will be asking for the materials it needs. Make sure to check the "chat" section of Minecraft regularly to see what materials the builder is requesting for any build/upgrade. 

**Note:** Once the builder is done, you can think about upgrading the Lumberjack’s hut to expand the range at which it looks for trees. 

**Hint:** If you see the builder has not finished building/upgrading your Lumberjack's hut and you don't see the builder asking for any materials, go to the builder's hut and "recall' the builder and wait a bit to see what the builder needs. Watch the Minecraft "chat" section. Also you can go to page 2 of the builder's hut GUI and check the list of materials required, any material in the list that is still missing will be in red colored letters. 

## Hut GUI

Now you can access the Lumberjack's Hut block (right click on it) and you will see a GUI with different options:

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/lumberjackgui.png" class="img-fluid mx-auto" alt="Lumberjack GUI">
  </div>
  <div 
class="col-sm-12 col-md">
    <br>
    <br>
    <p>The Worker assigned and their Level. (The worker levels up in time by doing their work. The higher the level the faster and more efficient they will be). And the buttons:</p>
    <ul>
      {% for item in site.data.gui.global %}
        <li><strong>{{ item.button }}:</strong> {{ item.content }}</li>
      {% endfor %}
    </ul>
  </div>
</div>
<br>

<div class="row">
  <div class="col-sm-12 col-md">
    <br><br><br>
    <img src="../../assets/images/gui/lumberjackgui2.png" class="img-fluid mx-auto" alt="Lumberjack2 GUI">
  </div>
  <div class="col-sm-12 col-md">
    <ul>
      <li><strong>Patrol</strong> When you select this mode you have two options: </li>
      <ul>
        <li>If you set "Find patrol target: Automatically", the Guard will patrol from hut to hut and back to his Tower.</li>
        <li>If you set "Find patrol target: Manually", you can set the patrol route when you click on "Set patrol positions". Doing so will spawn a "Guard-scepter" in your inventory. </li>
      </ul>
    </ul>
You can right click using the Guard-scepter to set a single or multiple patrol positions for the Guard to patrol back and forth.
    <ul>
      <li><strong>Follow:</strong> When you select this mode the guard will follow you around wherever you go, as your personal Guard fighting along side you or defending you. If you leave the guard tower more than 40* GuardTower level blocks the guard will automatically return to his tower.</li>
      <li><strong>Guard:</strong> When you select this mode you will receive a "Guard-scepter". You can right click on a block to set it as a guard spot, the guard will stay in that area until his health is low or he has to restock, then he will go the Tower and resupply/regen health and will go back to your designated the guard spot again.</li>
      <li><strong>Knight:</strong> (By default) Here you can define if you want the guard to be a Knight or Ranger.</li>
      <ul>
        <li>Automatically By default. Here you can define if you want the guard to be assigned to Knight or Ranger automatically or Manually.</li>
      </ul>
      <li><strong>Automatically:</strong> (By default) Here you can define if you want the guard to be assigned the patrol target automatically or manually if you want to designate the target(s) for him to patrol.</li>
      <li><strong>Off: </strong> (By default) Here you can define if you want the guard to come back to the Tower on low health to recover his health.</li>
      <li><strong>Patrol / Follow / Guard.-</strong>here you can define how the guard will work.</li>
      <li><strong>Inventory:</strong>This is the most important button. Here you can access the buildings storage from where the “worker” takes and deposits materials, tools and anything he/she finds along the way (citizens will pickup anything in their path that is considered a "drop"; sapling, seeds, rotten flesh, bones, arrows, etc.).</li>
    </ul>
  </div>
</div>
<br>

**Hint:** You can give the Lumberjack an enchanted axe and reap the benefits of the speed he will be chopping down trees for your Town's needs. Also you can remove any trees/saplings and replant any type of sapling in any pattern or shape you need to create your perfect grove, for easier access and less walking around, which means more chop chop... ;p
