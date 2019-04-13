---
title: Minecolonies Wiki
layout: default
---
# Chicken Herder's Hut

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/chicken_herder_block.png" alt="Chicken Herder's Hut" />
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Worker:</strong></p>
        </div>
        <div class="col">
        <p><a href="../workers/chickenherder">Chicken Herder</a></p>
        </div>
    </div>
    <hr />
    <recipe>chickenherder</recipe>
</div>

Welcome to the Chicken Herder's Information Site.

Before you choose a place to build the Chicken herder's Hut, take into account the location from the Restaurant, Warehouse and/or other Herder(s). After you have selected a place for the hut you have to craft the Chicken Hut block and place it with the [Building Tool](../items/buildingtool). Once the Chicken Hut is placed, the Herder will be automatically assigned (or you can manually assign one with the best [Traits](../systems/workerinfo) for a Herder if you changed this in the settings tab in the [Town Hall's GUI](../../source/buildings/townhall).

Now you will have to issue the builder the “Build” assignment so it can build the “Chicken Herder’s Hut”. Once the builder is done, you will have to capture and bring in 2 Chickens to the herder's hut. The herder will not catch and bring in any Chickens, only breed and butcher the ones in his hut area, so make sure you provide it with 2 initial Chickens.

**Note:** The Herder will only keep alive 2 Chickens per hut level, so at level 5 they will have 10 Chickens in their holding pens alive to breed and butcher. This means they will keep *MORE* and have faster production and collection of meats, drops and by products. So:


| Building Level | Chickens "Housed" |
| ----- | ----- |
| 1 | 2 |
| 2 | 4 |
| 3 | 6 |
| 4 | 8 |
| 5 | 10 |  


Now you can access the Chicken's Hut block (right click on it) and you will see a GUI with different options:

<br>
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/chickenherder_gui.png" class="img-fluid mx-auto" alt="Herder GUI">
  </div>
  <div class="col-sm-12 col-md">
    <p>The Worker assigned and it's Level. (The worker levels up in time by doing it's work. The higher the level the faster and more efficient they will be). And the buttons:</p>
    <ul><br>
      {% for item in site.data.gui.global %}
        <li><strong>{{ item.button }}:</strong> {{ item.content }}</li>
      {% endfor %}
    </ul>
  </div>
</div>  
  <br>
  
### **To see build options please see the [Builder](../../source/workers/builder) Page**  
