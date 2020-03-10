---
title: Minecolonies Wiki
layout: default
---
# Mine

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/mine.png" alt="Mine's Hut" />
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Worker:</strong> <a href="../workers/miner">Miner</a></p>
        </div>
    </div>
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Recipe:</strong> 
        </div>
    </div>
    <recipe>mine</recipe>
</div>
<hr />

# About the Building

Once the Mine is built, you can hire a miner. 

**Hint:** The shaft the miner creates downwards will go to a specific depth depending on the level of the Mine's Hut. So if you want it to go deeper and get to the good ores, you will have to upgrade the Hut. Level 5 hut will get to Bedrock (if you placed it at Y=64 or above).

## Mine GUI

When accessing the Mine's Hut block (right clicking on it), you will see a GUI with different options:  

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/minegui1.png" class="img-fluid mx-auto" alt="Miner GUI">
  </div>
  <div class="col-sm-12 col-md">
    <p>The Worker assigned and it's Level. (The worker levels up in time by doing it's work. The higher the level the faster and more efficient it will be). And the buttons:</p>
    <ul>
      {% for item in site.data.gui.global %}
        <li><strong>{{ item.button }}:</strong> {{ item.content }}</li>
      {% endfor %}
    </ul>
  </div>
</div>  

By pressing the arrow button in the top right corner of the GUI, you will be taken to page 2 of the GUI where you will find the following:  

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/minegui2.png" class="img-fluid mx-auto" alt="Miner GUI 2">
  </div>
  <div class="col-sm-12 col-md">
    <ul>
      <li><strong>Mine Level:</strong> The <i>Node</i> refers to the platorms he is placing every 3 blocks down. Here you can assign what "Node" of the mine the miner should be branching out and working in, creating his mineshafts.</li><br>
      <li><strong>Inventory:</strong> This is the most important button. Here you can access the buildings storage from where the worker takes and deposits materials, tools and anything they find along the way (citizens will pickup anything in their path that is considered a drop; saplings, seeds, rotten flesh, bones, arrows, etc.).</li>
    </ul>
  </div>
</div>  
  
  <br>
  
### **To see build options please see the [Builder](../../source/workers/builder) Page**  

