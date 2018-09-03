# Baker

Welcome to the Baker’s Information Site.

The Baker is another part of the your town's bloodline. The baker will craft bread, cake and make cookies to provide for all your workers' needs. The baker will be making bread in the furnace, provided that the [Deliveryman](../workers/deliveryman) (or yourself) give it all the wheat to do it. The Baker will also craft a cake or cookies if you provide it with the appropriate ingredients (currently the Deliveryman will not deliver the items required for crafting cakes or cookies, these have to be provided by the player). 

Before you choose a place to build the Baker's hut, take into account the location from the Warehouse and/or Farmer(s). After you have selected a place for the hut you have to craft the Baker's Hut and place it with the [Building Tool](../../source/tutorials/building_tool).  Once you "commit" to the placement of the Baker's Hut, the block will be placed and the Baker will be automatically assigned (or you can manually assign one with the best [Traits](../../source/tutorials/worker_info) for a Baker if you changed this in the setting tab in the [Town Hall's GUI](../../source/buildings/townhall).

Best Traits are: **Intelligence** and **Dexterity**.

<br>
<p style="text-align:center;"><recipe>baker</recipe>    <img src="../../assets/images/Workers/baker_hut.png" alt="Baker Hut Block">    <img src="../../assets/images/Workers/baker.png" alt="Baker"></p>
<br>

You now officially have a Baker, **CONGRATULATIONS!**

Now you will have to issue the builder the “Build” assignment so he can build the “Baker’s Hut”. He will be asking for the materials he/she needs. Make sure to check the “chat” regularly to see what materials the builder is requesting for any build/upgrade.

Hint: If you see the builder has not finished building/upgrading your Baker’s hut and you don’t see the builder asking for any materials, go to the builder’s hut and “recall” the builder and wait a bit to see what the builder needs. Watch the Minecraft “chat” section. Also you can go to page 2 of the builder’s hut GUI and check the list of materials required, any material in the list that is still missing will be in red colored letters.

Once the builder is done you can now hire the Baker and the Baker can start crafting bread, cakes and cookies right away. Once the build is done, you should think about upgrading the baker’s hut so that the worker can craft more bread, cakes and cookies at a faster pace. 

## Hut GUI

When accessing the Baker's Hut block (right clicking on it) you will see a GUI with different options:

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/bakergui.png" class="img-fluid mx-auto" alt="Baker GUI">
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
