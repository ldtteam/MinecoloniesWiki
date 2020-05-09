---
title: Minecolonies Wiki
layout: default
---
# Crusher's Hut

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/crusher.png" alt="Crusher" />
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Worker:</strong></p>
        </div>
        <div class="col">
        <p><a href="../workers/crusher">Crusher</a></p>
        </div>
    </div>
    <hr />
    <recipe>crusher</recipe>
</div>

# About the Crusher's Hut

The Crusher's Hut is where the Crusher will take items and crush them into other blocks. The defaults are: 

| Starting Item | Created Item | Ratio |
| ----- | ----- | ----- |
| Cobblestone   | Gravel       | 2:1   |
| Gravel        | Sand         | 2:1   |
| Sand          | Clay         | 2:1   |

The higher the level of the Crusher's Hut, the more daily output the Crusher can handle. So:

| Building Level | Daily Max |
| ----- | ----- |
| 1 | 16  |
| 2 | 64  |
| 3 | 144 |
| 4 | 256 |
| 5 | 999 |

# Crusher's Hut GUI

When accessing the Crusher's Hut block by right-clicking on it, you will see a GUI with different options:

<br>
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/crushergui1.png" class="img-fluid mx-auto" alt="Crusher GUI">
  </div>
  <div class="col-sm-12 col-md">
     <br>
    <ul>
      <li><strong>Crusher 5:</strong> This tells you the building you have selected is a Crusher's Hut with build level 5.</li>
      <li><strong>Worker Assigned:</strong> Tells you the worker assigned to the Crusher's Hut and their worker level. The worker levels up in time by working. The higher the level, the faster and more efficient they will be.</li>
          <li><strong>Manage Workers:</strong> Lets you change which worker is assigned to be the Crusher. There can only be one Crusher at each Crusher's Hut. <b>Note:</b> this only works if you have turned the worker hiring mode in the [Town Hall](../../source/buildings/townhall) block to manual, otherwise your citizens will be hired automatically.</li>
      <li><strong>Recall Worker:</strong> Recalls the Crusher to their hut block. You might use it if they are stuck somewhere, you want to see what they have, or want to give them something directly.</li>
      <li><strong>Build Options:</strong> Lets you create a build, upgrade, reposition, or repair build order for the Crusher's Hut. To learn more about the building system, please visit the [Builder](../../source/workers/builder) page.</li>
      <li><strong>Delivery Priority:</strong> You can set the priority that a [deliveryman](../../source/workers/deliveryman) will visit this hut (ten is the highest, one is the lowest). You can also set whether it is automatic, meaning it changes automatically, or static, meaning it stays to what you set it no matter what.</li>
      <li><strong>List of Recipes and Teach Recipe:</strong> When clicking the list of recipes button, you see all the recipes you have taught this Crusher's Hut and can remove them. When clicking teach recipe, it opens a 3x3 crafting grid which allows you to teach this hut recipes (not the worker). <b>Note:</b> you don't need to teach the Crusher's Hut any recipes for the Crusher to do their job.</li>
      <li><strong>Inventory:</strong> Here you can access the hut block's storage, where the Crusher takes their materials and deposits their finished blocks. They will also use any [racks](../../source/decoblocks/rack) or chests in the hut, so be sure to check those as well!</li>
    </ul>
  </div>
</div>

On page two of the GUI, you can set what you want the Crusher to crush and how many blocks per day. (See the above lists). Be sure to click save at the bottom after you make changes.

<br>
<img src="../../assets/images/gui/crushergui2.png" alt="Crusher GUI Page 2" />

<br>
