---
title: Minecolonies Wiki
layout: default
---
# Fisherman's Hut
<div class="infobox box text-center">
    <img src="../../assets/images/buildings/fisherman.png" alt="Fisherman's Hut" />
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Worker:</strong> <a href="../workers/fisherman">Fisherman</a></p>
        </div>
    </div>
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Recipe:</strong> 
        </div>
    </div>
    <recipe>fisherman</recipe>
    
</div>
<hr />

# About the Building

**Note**: The Fisherman will require a body of water of a minimum of 7 x 7 x 1 block deep for the Fisherman to be able to work. And it must be near his hut.

<p style="text-align:center;"><img src="../../assets/images/gui/pond.png" alt="Pond"></p>

Once the building is built, you can think about upgrading the Fisherman's hut to expand the range at which it can fish as well as having a higher cap to the level it can reach.

# Fisherman's GUI

Now you can access the Fisherman's Hut block (right click on it) and you will see a GUI with different options:

<br>
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/fishermangui.png" class="img-fluid mx-auto" alt="Fisherman GUI">
</div>
  <div class="col-sm-12 col-md">
    <p>The Worker assigned and it's Level. (The worker levels up in time by working. The 
higher the level the faster and more efficient it will be). And the buttons:</p>
    <ul>
      {% for item in site.data.gui.global %}
        <li><strong>{{ item.button }}:</strong> {{ item.content }}</li>
      {% endfor %}
    </ul>
  </div>
</div>

**Hint**: You can give the Fisherman an enchanted fishing rod **_(only when the Hut is level 5)_** and reap the benefits of the treasures he/she will be catching for you. Also, the higher the level of the "Fisherman's Hut" is, the higher the level of "loot" he will be fishing out.
