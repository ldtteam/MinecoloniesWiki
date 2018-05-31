# Baker
<hr>

The Baker is another part of the your town's bloodline. They will craft bread and cake to provide for all your workers' needs. They will be crafting bread in the furnace, provided that the Deliveryman (or yourself) give them all the wheat to do it. The Baker will also craft a cake if you provide them with the appropriate items required (currently the Deliveryman will not deliver the items required for crafting cakes, has to be provided by the player). 

Before you choose a place to build their hut, take into account the location from the Warehouse and/or Farmer(s). After you have selected a place for the hut you have to craft their [[Baker's Hut]] and place it with your [[Buiding Tool]]. Once the hut is built, your Baker will  be automatically assigned (or you can manually assign one with the best [[Traits]] for a Bker if you changed this in the setting tab in the [[Town Hall's GUI]].

Best Traits are: **Intelligence** and **Dexterity**.

[/Workers/Baker/Bakery.png]
[/Workers/Baker/BakerChest_cr.png]
[/Workers/Baker/Baker.png]

You now officially have a Baker, CONGRATULATIONS!

Now that you have a Baker they can start crafting bread and cakes right away.

## Hut GUI
<hr>

When accessing the Baker's Hut block (right clicking on it) you will see a GUI with different options:

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../assets/images/gui/bakergui.png" class="img-fluid mx-auto" alt="Baker GUI">
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
