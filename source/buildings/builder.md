---
title: Builder's Hut
layout: default
---
# Builder's Hut

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/builder.png" alt="Builder's Hut" />
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Worker:</strong></p>
        </div>
        <div class="col">
        <p><a href="../workers/builder">Builder</a></p>
        </div>
    </div>
    <hr />
    <recipe>builder</recipe>
</div>

### Before you build *any* other building, you must build the Builder's Hut. If the Builder’s Hut is not built, the Builder cannot build other buildings.

Before you choose a place to build the Builder's Hut, take into account the distances among the other possible building sites and obstacles like water, trees, caves, mountains, lava sources, etc. After you have selected a place for the hut, you have to craft the Builder’s Hut block and place it with your [build tool](../items/buildtool). Once the hut is placed, the Builder will be automatically assigned (or you can manually assign one with the best [Traits](../systems/worker) for a Builder if you changed this in the settings tab in the [Town Hall's GUI](../../source/buildings/townhall).

Now you will have to issue the build assignment so the Builder can build their own hut first. The Builder will ask for the materials they need. Make sure to check the [Resource Scroll](../../source/items/resourcescroll) or the Required Resources tab of the Builder's Hut GUI to see what materials the Builder is requesting for any build/upgrade. Any material in the list that is still missing will be in red letters.

Once the Builder's Hut is built you can now build anything you want, like worker huts, buildings, decorations, or your own schematics.

- **Note:** The Builder can only build or upgrade any other hut up to the level of their own hut. So, in order for the Builder to upgrade any building, the Builder's Hut must be upgraded first. Then the Builder will be able to upgrade any other building(s).

## Builder's Hut GUI

<div class="row">
  <div class="col">
    
  When accessing the Builder’s Hut block by right-clicking on it, you will see a GUI with different options.  You start on the main tab <img src="../../assets/images/gui/guildtab1.png" class="img-fluid mx-auto" alt="Main Tab">:

  <br>
  <div class="row">
    <div class="col-sm-12 col-md">
      <img src="../../assets/images/gui/buildergui1.png" class="img-fluid mx-auto" alt="Builder GUI">
    </div>
    <div class="col-sm-12 col-md">
      <br>
      <ul>
        {% for item in site.data.gui.global %}
          <li><strong>{{ item.button }}:</strong> {{ item.content }}</li>
        {% endfor %}
      </ul>
    </div>
  </div>
  <br>
      <p>The second tab of the GUI is Minimum Stock <img src="../../assets/images/gui/guildtab2.png" class="img-fluid mx-auto" alt="Minimum Stock">: </p>
  <br>
  <div class="row">
    <div class="col-sm-12 col-md">
      <img src="../../assets/images/gui/buildergui2.png" class="img-fluid mx-auto" alt="Builder GUI 2">
    </div>
    <div class="col-sm-12 col-md">
    <ul>
        <li><strong> Add: </strong> Use this button to tell the Builder's Hut to keep a minimum stock on hand. Set items will be displayed above the button.</li>
    </ul>
    </div>
  </div>
  <br>
   <div class="col-sm-12 col-md"><br>
      <p>The third tab of the GUI is Settings <img src="../../assets/images/gui/guildtab3.png" class="img-fluid mx-auto" alt="Settings">: </p>
    </div>
  <br>
  <div class="row">
    <div class="col-sm-12 col-md">
      <img src="../../assets/images/gui/buildergui3.png" class="img-fluid mx-auto" alt="Builder GUI 3">
    </div>
  <br>
  <div class="col-sm-12 col-md">
    <ul>
      <li><strong>Builder Mode:</strong> Here you can set your Builder to Manual or Automatic mode (Automatic by default). In Automatic, the builder chooses which build order they'll complete next themselves (based on the order of the build requests in the <a href="../../source/buildings/townhall">Town Hall</a> GUI's <a href="#workorders">work orders</a> tab). In Manual, you choose their next build order yourself by clicking Select next to the build order's name.</li>
      <li><strong>Fill Block:</strong> Here you can select what block the builder uses to fill in holes/gaps in the schematic.  The default is the dirt block.
    </ul>
  </div>
  </div>

  <br>
   <div class="col-sm-12 col-md"><br>
      <p>The fourth tab of the GUI is Crafting Recipes <img src="../../assets/images/gui/guildtab4.png" class="img-fluid mx-auto" alt="Crafting Recipes">.  
      <br>Here you can see all the recipes you have taught this hut and can remove them: </p>
    </div>
  <br>
  <div class="row">
    <div class="col-sm-12 col-md">
      <img src="../../assets/images/gui/buildergui4.png" class="img-fluid mx-auto" alt="Builder GUI 4">
    </div>
  <br>
  <div class="col-sm-12 col-md">
    <ul>
      <li><strong>Teach Recipe:</strong> When clicking teach recipe, it opens a crafting grid which allows you to teach this hut recipes (not the worker).</li>
    </ul>
  </div>
  <br>
   <div class="col-sm-12 col-md"><br>
      <p>The fifth tab of the GUI is Work Orders <img src="../../assets/images/gui/guildtab5.png" class="img-fluid mx-auto" alt="Work Orders">.  
      <br>This page shows you what buildings have been assigned to this builder, along with the distance away from the builder's hut.  You can cancel the work order here.
      </p>
      </div>
  <br>
  <div class="row">
    <div class="col-sm-12 col-md">
      <img src="../../assets/images/gui/buildergui5.png" class="img-fluid mx-auto" alt="Builder GUI 5">
    </div>
  <br>
  <div class="col-sm-12 col-md">
  </div>
  </div>
  <br>
   <div class="col-sm-12 col-md"><br>
      <p>The sixth tab of the GUI is Required Resources <img src="../../assets/images/gui/guildtab6.png" class="img-fluid mx-auto" alt="Required Resources">. 
      <br>These are the resources that the Builder will need for the build order they are currently working on. </p>
    </div>
  <br>
  <div class="row">
    <div class="col-sm-12 col-md">
      <img src="../../assets/images/gui/buildergui6.png" class="img-fluid mx-auto" alt="Builder GUI 6">
    </div>
  <br>
  <div class="col-sm-12 col-md">
    <ul>
      <li><strong>Current project</strong> The top line tells you what building is being worked on, and it's level.</li>
      <li><strong>Step</strong> What step of the project the builder is on.</li>
      <li><strong>Supplied %/ Used %</strong> How much of the needed resources are in the builder hut inventory, and how many of the resources have been placed.</li>
      <li><strong>Item</strong> Each needed item is displayed, along with how many of that item is in inventory, and how many are needed.  These amounts will change as they place blocks and will show only what blocks the Builder still needs to place. The block in black are in their inventory.  The blocks in red are the ones neither you nor the Builder has in their inventory.  The blocks in green are ones you have in inventory but the builder needs.  Clicking the up arrow next to the item will automatically remove that item from your inventory and place it into the builder's.</li>
    </ul>
  </div>
   
  <br>
  </div>
</div>

### A few things to consider

For the placement of the Builder's Hut, you should consider having the hut in the middle of where you plan to have the rest of your buildings so that the Builder has less of a distance to walk between their hut and the build sites.

The Builder will not start another build assignment until they have finished the current one.

<a id="workorders">You</a> can go into the Town Hall's GUI and click on the work orders tab to cancel builds as well as arrange the priorities of the other build orders you have there. If you cancel a work order and it was being built already, if you assign the build order again, the Builder will continue where they left off.

If the Builder removes a block while building and/or upgrading, they will keep it in their inventory and dump any items in their inventory at the end of a build into the Builder's Hut inventory.
<br><br>

