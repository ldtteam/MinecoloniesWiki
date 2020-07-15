---
title: Warehouse
layout: default
---
# Warehouse

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/warehouse.png" alt="Warehouse's Hut" />
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
    <recipe>warehouse</recipe>
</div>

The Warehouse is the central storage from where a [Deliveryman](../../source/workers/deliveryman) will store and retrieve everything your workers harvest, craft, or need. Items will be stored in [racks](../../source/items/rack).

The level of the Warehouse will determine how many Deliverymen will be able to use it at the same time. Level up the Warehouse to increase the amount of Deliverymen that can work in it. Leveling up the Warehouse will also increase its storage capacity.

| Building Level | Max Deliverymen |
| -----  | ------ |
| 1 | 2  |
| 2 | 4  |
| 3 | 6  |
| 4 | 8  |
| 5 | 10 |  


<strong>Note: </strong>You can only have one Warehouse per colony, unless you change this in the config file.

## Warehouse GUI

When accessing the Warehouse's hut block by right-clicking on it, you will see a GUI with different options:  

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/warehousegui1.png" class="img-fluid mx-auto" alt="Warehouse GUI">
  </div>
  <div class="col-sm-12 col-md">
    <br>
    <ul>
      <li><strong>Build Options: </strong>Lets you create a build, upgrade, reposition, or repair build order for the Warehouse. To learn more about the building system, visit the [Builder](../../source/workers/builder) page.</li><br>
      <li><strong>Inventory: </strong>This is an inventory space where you can store anything you like. The Deliverymen don't deposit things here (they use the [racks](../../source/items/rack) in the Warehouse instead).</li>
    </ul>
  </div>
</div>  

By pressing the arrow button in the top right corner of the GUI, you will be taken to page two of the GUI:  

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/warehousegui2.png" class="img-fluid mx-auto" alt="Warehouse GUI 2">
  </div><br>
  <div class="col-sm-12 col-md">
    <ul>
      <li><strong>Block of Emerald: </strong>You can increase the max amount of stacks in each rack by pressing this button. This can only be done when the Warehouse is at level 5 and you have at least one block of emerald in your inventory.</li><br>
      <li><strong>Sort: </strong>The sort option is available when the Warehouse reaches level 3. It sorts and stacks all the items in the racks.
    </ul>
    
