---
title: Builder
layout: default
---
# Builder

<div class="infobox box text-center">
<img src="../../assets/images/workers/builder_m.png" alt="Builder Male" />&nbsp;&nbsp;&nbsp;<img src="../../assets/images/workers/builder_f.png" alt="Builder Female" />
<hr />
  <div class="row section-text text-left">
    <div class="col">
      <p><strong>Primary Trait:</strong></p>
      <p><strong>Secondary Trait:</strong></p>
      <p><strong>Building:</strong></p>
    </div>
    <div class="col">
      <p class="traitp">Adaptability</p>
      <p class="traits">Athletics</p>
      <p><a href="../buildings/builder">Builder's Hut</a></p>
    </div>
  </div>
</div>

The Builder is the **MOST** important worker in your colony. As long as you provide the Builder with all the resources they ask for, they will build and upgrade all of your town buildings, workers' huts, decorations, and your personal schematics.

**Before you build *any* building, you need to build the Builder's Hut. If the Builder’s Hut isn't built, the Builder cannot build any other building.**

- **Note:** The Builder can *ONLY* build or upgrade any other hut up to the level of their own hut. So, for the Builder to upgrade any building, the Builder's Hut *MUST* be upgraded first. Then they will be able to upgrade any other building(s).  

## A few things to consider

The Builder will not start another build assignment until they have finished the current one.

You can go to the [Town Hall's](../../source/buildings/townhall) GUI and click on the Work Orders tab to cancel the current build as well as arrange the priorities of the other build orders you have there. If you cancel a work order that was being built, if you assign the build order again, the Builder will continue where they left off.

Any block the Builder removes while building and/or upgrading will be kept in their inventory, then dumped into the Builder's Hut inventory.

**Hint:** If you see the Builder has not finished building/upgrading any build order and they aren't asking for any materials, go to the Builder’s Hut and recall the Builder and wait a bit to see what they need. You can also go to page 2 of the Builder’s Hut GUI and check the list of materials required. Any material in the list that is missing will be in red.  

<p>After pressing the <b>Build Options</b> button you have a few options:</p>  

## Hut's Build Options Before Hut is Built  

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/newbuild.png" class="img-fluid mx-auto" alt="New Build GUI">
  </div>
  <div class="col-sm-12 col-md">
    <ul>
      <ul><strong>Schematic Style: </strong> Here you can verify the style of schematics you have currently. You can change the style to see the list of items required for other styles, but it's not recommended that you change a different style from here since it will most likely be in a different position (since each schematic is different).</ul>
      <ul><strong>Builder: </strong> Here is where you can choose what Builder you want on the project. If it is out of your Builders' range, this is where you can manually assign one.</ul>
      <ul><strong>List: </strong>This is the list of resources that the Builder will need for the schematic style selected.
       <ul><strong>Repair: </strong>This is to repair a building (at its current level). This will remove any changes that a player has made to the building. This is not needed when the building hasn't been built yet.</ul>
      <ul><strong>Build Building: </strong>This is where you tell the Builder to build the building with the style selected.</ul>
    </ul>
  </div>
</div>  

## Hut's Build Options After Hut is Built  

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/upgradebuild.png" class="img-fluid mx-auto" alt="Upgrade Building GUI">
  </div>
  <div class="col-sm-12 col-md">
    <ul>
       <ul>
      {% for item in site.data.gui.build %}
        <li><strong>{{ item.button }}:</strong> {{ item.content }}</li>
      {% endfor %}
    </ul>
    </ul>
  </div>
</div>
