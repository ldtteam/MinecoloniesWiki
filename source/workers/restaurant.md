# Restaurant / Cook

The Restaurant is another important part of the your town's bloodline. The Cook will make steak, pork chops, baked potatoes, cooked fish, etc. to provide for all your workers' needs. The Cook will be making all of it in the furnace, provided that the [Deliveryman](../workers/deliveryman) (or yourself) give it all the raw ingredients to do it. You can "teach" the cook simple 2 x 2 recipes as well. The Cook will also require ``fuel`` for the furnace, so the deliveryman will provide with anything that is finds in the warehouse that is considered a fule item by minecraft, such as; coal, charcoal, wood, planks, slabs, doors, etc. 

Before you choose a place to build the Restaurant, take into account the location from the Warehouse and/or Herder(s). After you have selected a place for the Restaurant you have to craft the Restaurant block and place it with the [Building Tool](../../source/tutorials/building_tool).  Once you "commit" to the placement of the Restaurant, the block will be placed and the Cook will be automatically assigned (or you can manually assign one with the best [Traits](../../source/tutorials/worker_info) for a Baker if you changed this in the setting tab in the [Town Hall's GUI](../../source/buildings/townhall).

Best Traits are: **Charisma** and **Intelligence**.

<br>
<p style="text-align:center;"><recipe>cook</recipe>    <img src="../../assets/images/Workers/baker_hut.png" alt="Restaurant Block">    <img src="../../assets/images/Workers/baker.png" alt="Cook"></p>
<br>

You now officially have a Restaurant, **CONGRATULATIONS!**

Now that you have a Restaurant the Cook can start making steak, pork chops, baked potatoes, cooked fish and more right away. Once the build is done, you should think about upgrading the Restaurant so that the worker can more cooked food at a faster pace. 

## Hut GUI

When accessing the Baker's Hut block (right clicking on it) you will see a GUI with different options:

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/restaurantgui.png" class="img-fluid mx-auto" alt="Restaurant GUI">
  </div>
  <div class="col-sm-12 col-md">
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
