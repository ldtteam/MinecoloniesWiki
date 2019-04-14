---
title: Minecolonies Wiki
layout: default
---
# Shepherd's Hut

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/Shepherd_Block.png" alt="Shepherd's Hut" />
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Worker:</strong></p>
        </div>
        <div class="col">
        <p><a href="../workers/shepherd">Shepherd</a></p>
        </div>
    </div>
    <hr />
    <recipe>shepherd</recipe>
</div>

Welcome to the Shepherd's Information Site.

Before you choose a place to build the Shepherd's Hut, take into account the location from the Restaurant, Warehouse and/or other Herder(s). After you have selected a place for the hut you have to craft the Shepherd Hut block and place it with the [Building Tool](../items/buildingtool). Once the Shepherd Hut is placed, the Herder will be automatically assigned (or you can manually assign one with the best [Traits](../systems/workerinfo) for a Herder if you changed this in the settings tab in the [Town Hall's GUI](../../source/buildings/townhall).

Now you will have to issue the builder the “Build” assignment so it can build the “Shepherd’s Hut”. Once the builder is done, you will have to capture and bring in 2 Sheep to the herder's hut. The herder will not catch and bring in any Sheep, only breed and butcher the ones in his hut area, so make sure you provide it with 2 initial Sheep.

**Note:** The Herder will only keep alive 2 Sheep per hut level, so at level 5 they will have 10 Sheep in their holding pens alive to breed and butcher. This means they will keep *MORE* and have faster production and collection of meats, drops and by products. So:


| Building Level | Sheep "Housed" |
| ----- | ----- |
| 1 | 2 |
| 2 | 4 |
| 3 | 6 |
| 4 | 8 |
| 5 | 10 |  

Now you can access the Sheep's Hut block (right click on it) and you will see a GUI with different options:  

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/shepherd_gui.png" class="img-fluid mx-auto" alt="Herder GUI">
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
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/shepherd_gui2.png" class="img-fluid mx-auto" alt="Herder GUI">
  </div>
  <div class="col-sm-12 col-md">
    <p>The Worker assigned and it's Level. (The worker levels up in time by doing it's work. The higher the level the faster and more efficient they will be). And the buttons:</p>
    <ul>
        <li><strong>Random Sheep Dying</strong> Press <strong>On</strong> if you want the shepherd to randomly dye sheep or <strong>Off</strong> to keep their original colors.</li>
      {% endfor %}
    </ul>
  </div>
</div>  
  
  <br>
  
### **To see build options please see the [Builder](../../source/workers/builder) Page**  

