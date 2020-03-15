---
title: Minecolonies Wiki
layout: default
---
# Restaurant

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/restaurant.png" alt="Restaurant's Hut" />
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Worker:</strong></p>
        </div>
        <div class="col">
        <p><a href="../workers/cook">Cook</a></p>
        </div>
    </div>
    <hr />
    <recipe>restaurant</recipe>
</div>

# About the Building

Once the building is built, Cook will start making steak, pork chops, baked potatoes, cooked fish and more right away.

**Hint:** Once the build is done, you should think about upgrading the Restaurant so that the worker can make more steak, pork chops, baked potatoes, cooked fish, etc at a faster pace.


# Restaurant Hut GUI

When accessing the Restaurant's Hut block (right clicking on it) you will see a GUI with different options:

<br>
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/restaurantgui1.png" class="img-fluid mx-auto" alt="Restaurant GUI">
  </div>
  <div class="col-sm-12 col-md">
    <p>The Worker assigned and it's Level. (The worker levels up in time by working. The higher the level the faster and more efficient it will be). And the buttons:</p>
    <ul>
      {% for item in site.data.gui.global %}
        <li><strong>{{ item.button }}:</strong> {{ item.content }}</li>
      {% endfor %}
    </ul>
  </div>
</div>
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/restaurantgui2.png" class="img-fluid mx-auto" alt="Restaurant GUI">
  </div>
  <div class="col-sm-12 col-md">
      Page 2
      <ul><strong> Fuel: </strong> Listed are items that can be used by the cook as fuel in the furnaces. Simply turn on any that you want your cook to use, and the deliveryman will deliver those items to the cook when they need fuel.
      </ul>
    </div>  
  
  <br>
  
### **To see build options please see the [Builder](../../source/workers/builder) Page**  

