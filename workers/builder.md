# Builder

The builder is one of the most important workers for your colony. As long as you provide the builder with all the resources they ask for, the builder will build and upgrade all of your town buildings.

Before any building can be built, you have to craft their [[Builder’s Hut]] block and place it with your [[Building Tool]]. Once the hut is placed, the builder will be automatically assigned (or you can manually assign one with the best [[Traits]] for a builder if you changed this in the settings tab in the [[Town Hall's GUI]]).

Best Traits are: Intelligence and Strength.

[[File:Builder_New.png]]

[[File:Builder_HutCrop.png]]

[[File:Builder_Crop2.png]]

You now officially have a builder, CONGRATULATIONS!

Now you will have to issue the builder the build assignment so they can build their own hut first. Without the builder’s hut being built, the builder cannot build any other buildings.

## Hut GUI

When accessing the Builder’s Hut block (right clicking on it) you will see a GUI with different options:

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../assets/images/gui/buildergui.png" class="img-fluid mx-auto" alt="Builder GUI">
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
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../assets/images/gui/buildergui2.png" class="img-fluid mx-auto" alt="Builder GUI 2">
  </div>
  <div class="col-sm-12 col-md">
    <p>By pressing the arrow button in the top right corner of the GUI, you will be taken to page 2 of the GUI where you will find the following:</p>
    <ul>
      <li><strong>Required Resources:</strong> These are the resource that the Builder will need for the Build/Upgrade they are currently working on. This amount will change as they place the materials and will show <strong>only</strong> what materials they still need to place.</li>
      <li><strong>Inventory:</strong> Same as above, allows you to view the huts storage.</li>
    </ul>
  </div>
</div>

## A few things to consider

The placement of the Builders Hut. You could consider having the hut in the middle of where you plan to have the rest of your buildings so that the builder has less of a distance to walk between the hut and the build site.

The builder will not start another build assignment until they have finished the current one.

You can go to the Town Hall and click on the Work Orders tab and cancel the current build as well as arrange the priorities of the following build orders. If you cancel a work order, when you assign the build again, the builder will continue where they left off.

Any block the builder removes (dirt, wood, planks, glass, etc.) while building and/or upgrading they will keep in their inventory until their inventory becomes full, or they may dump unnecessary items at the end of a build/upgrade.

In order for the builder to upgrade any building, the Builder's Hut MUST be upgraded first. Then they will be able to upgrade any other building(s).
