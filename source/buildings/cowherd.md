---
title: Cowherd's Hut
layout: default
---
# Cowherd's Hut

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/cowboy.png" alt="Cowherd's Hut" />
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Worker:</strong></p>
        </div>
        <div class="col">
        <p><a href="../workers/cowherd">Cowherd</a></p>
        </div>
    </div>
    <hr />
    <recipe>cowboy</recipe>
</div>

The Cowherd's Hut is where the Cowherd will breed, butcher, and milk (if you have the option enabled) cows for food and leather. You will have to capture and bring in two cows to the Cowherd's Hut, as the Cowherd will not catch and bring in any cows.

**Note:** The Cowherd will only keep two cows alive per hut level, so at level 5 they will have ten cows in their holding pens to breed and butcher. This means they will be faster at producing and collecting meat and leather. So:


| Building Level | Cows Housed |
| ----- | ----- |
| 1 | 2 |
| 2 | 4 |
| 3 | 6 |
| 4 | 8 |
| 5 | 10 |  


## Cowherd's Hut GUI

When accessing the Cowherd's Hut block by right-clicking on it, you will see a GUI with different options:

<br>
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/cowboygui1.png" class="img-fluid mx-auto" alt="Cowherd's Hut GUI">
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

<br>
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/cowboygui2.png" class="img-fluid mx-auto" alt="Cowherd's Hut GUI 2">
  </div>
  <div class="col-sm-12 col-md">
    <br>
    <p>This is page two of the GUI. It has two buttons:</p>
    <ul>
        <li><b>Breeding:</b> On by default. Here you can choose if the Cowherd will breed cows or just collect milk (or do nothing, depending on the setting below).</li>
      <li><b>Collecting Milk:</b> On by default. In this mode, you provide the Cowherd with as many empty buckets as you like. In return, they will milk the cows and give you back buckets of milk (along with the meat and leather). You can click the button to turn off this mode, and the Cowherd will only breed and butcher the cows, not milk them.</li>
    </ul>
  </div>
</div>  
  
  <br>
