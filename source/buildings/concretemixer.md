---
title: Concrete Mixer's Hut
layout: default
---
# Concrete Mixer

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/concretemixer.png" alt="Concrete Mixer" />
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Worker:</strong></p>
        </div>
        <div class="col">
        <p><a href="../workers/concretemixer">Concrete Mixer</a></p>
        </div>
    </div>
    <hr />
    <recipe>concretemixer</recipe>
</div>

### Note: The Concrete Mixer's Hut cannot be built until you have a level 1 [Crusher's Hut](../../source/buildings/crusher) and have finished the [research](../../source/systems/research) in the [University](../../source/buildings/university).
<br>

The Concrete Mixer will craft all types of concrete powder and place them in flowing water (built in to their hut), then mine the resulting concrete. The Concrete Mixer will only make concrete and concrete powder when they receive a request for a block and have the needed materials. (All their recipes are pretaught.)

## Concrete Mixer's Hut GUI

When accessing the Concrete Mixer's Hut by right-clicking on it, you will see a GUI with different options:

<br>
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/concretemixergui.png" class="img-fluid mx-auto" alt="Concrete Mixer's Hut GUI">
  </div>
  <div class="col-sm-12 col-md">
    <br>
    <ul>
      {% for item in site.data.gui.global %}
        <li><strong>{{ item.button }}:</strong> {{ item.content }}</li>
      {% endfor %}
    </ul>
  </div>
</div>  
  <br>
  
The 2nd page of the GUI shows what task(s) the Concrete Mixer currently has.
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/craftertasklist.png" class="img-fluid mx-auto" alt="Concrete Mixer's Hut GUI 2">
  </div>
  <div class="col-sm-12 col-md">
    <br>
  </div>
</div>
<br> <br>
