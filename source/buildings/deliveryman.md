---
title: Minecolonies Wiki
layout: default
---
# Deliveryman's Hut

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/deliveryman.png" alt="Deliveryman's Hut" />
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Worker:</strong></p>
        </div>
        <div class="col">
        <p><a href="../workers/deliveryman">Deliveryman</a></p>
        </div>
    </div>
    <hr />
    <recipe>deliveryman</recipe>
</div>

# About the Deliveryman's Hut

The Deliveryman runs back and forth from the [Warehouse](../../source/buildings/warehouse) to all the worker huts in your colony, delivering materials to workers and putting finished products in the Warehouse. The Deliveryman will visit one worker's hut per trip, then go back to the Warehouse.

**Note:** You must build the Warehouse to at least level 1, otherwise, the Deliveryman won't be able to do their job.

The level of the Deliveryman's Hut will dictate how much materials/tools it will carry to/from Huts - Warehouse - Huts, so if you want it to carry more materials/tools, be sure to upgrade the Deliveryman's Hut. Also, the higher the level of the hut, the faster the Deliveryman will move.

| Building Level | Max Stacks of Materials |
| :------------: | :---------------------: |
| 1              | 1                       |
| 2              | 2                       |
| 3              | 4                       |
| 4              | 5                       |
| 5              | unlimited               |

<br>

# Deliveryman's Hut GUI

When accessing the Deliveryman's Hut block by right-clicking on it, you will see a GUI with different options:

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/deliverymangui.png" class="img-fluid mx-auto" alt="Deliveryman's GUI">
  </div>
  <div class="col-sm-12 col-md">
    <br>
    <ul>
      <li><strong>Deliveryman 5:</strong> This tells you the building you have selected is a Deliveryman's Hut with build level 5.</li>
      <li><strong>Worker Assigned:</strong> Tells you the worker assigned to the Deliveryman's Hut and their worker level. The worker levels up in time by working. The higher the level, the faster and more efficient they will be.</li>
          <li><strong>Manage Workers:</strong> Lets you change which worker is assigned to be the Deliveryman. There can only be one Deliveryman at each Deliveryman's Hut. <b>Note:</b> this only works if you have turned the worker hiring mode in the [Town Hall](../../source/buildings/townhall) block to manual, otherwise your citizens will be hired automatically.</li>
      <li><strong>Recall Worker:</strong> Recalls the Deliveryman to their hut block. You might use it if they are stuck somewhere, you want to see what they have, or want to give them something directly.</li>
      <li><strong>Build Options:</strong> Lets you create a build, upgrade, reposition, or repair build order for the Deliveryman's Hut. To learn more about the building system, please visit the [Builder](../../source/workers/builder) page.</li>
      <li><strong>Delivery Priority:</strong> You can set the priority that a [deliveryman](../../source/workers/deliveryman) will visit this hut (ten is the highest, one is the lowest). You can also set whether it is automatic, meaning it changes automatically, or static, meaning it stays to what you set it no matter what.</li>
      <li><strong>List of Recipes and Teach Recipe:</strong> When clicking the list of recipes button, you see all the recipes you have taught this Deliveryman's Hut and can remove them. When clicking teach recipe, it opens a 3x3 crafting grid which allows you to teach this hut recipes (not the worker). <b>Note:</b> you don't need to teach the Deliveryman's Hut any recipes for the Deliveryman to do their job.</li>
      <li><strong>Inventory:</strong> This is an inventory space where you can store anything you like, as the Deliveryman doesn't use it. Please note that they <b>will</b> take things from it and carry them to the Warehouse, though!</li>
    </ul>
  </div>
</div>
