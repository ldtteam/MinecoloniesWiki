---
title: Graveyard
layout: default
---
# Graveyard

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/graveyard.png" alt="Graveyard" />
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Worker:</strong></p>
        </div>
        <div class="col">
        <p><a href="../workers/undertaker">Undertaker</a></p>
        </div>
    </div>
    <hr />
    <recipe>graveyard</recipe>
</div>

### Note: The Graveyard cannot be built until you have a level 3 [Farm](../../source/buildings/farm&field) (or three level 1 Farms, or another equivalent) and have finished the research in the [University](../../source/buildings/university).
<br>

The Graveyard is where the Undertaker will grow either sugar cane, bamboo, or cactus.

The Graveyard's level determines how many crops the Undertaker can plant at a time.

| Graveyard Level | Crops Grown |
| ----- | ----- |
| 1 | 4 |
| 2 | 8 |
| 3 | 12 |
| 4 | 16 |
| 5 | 20 |

The Undertaker can also craft paper, books, sugar, and anything made with bamboo. The Undertaker will only make these items when they have been taught the recipes, receive a request for an item, and have the needed materials.

**Note:** The Undertaker can only learn a certain amount of recipes per their hut level. 

| Building Level | Number of Recipes |
| :-----: | :-----: |
| 1 | 10 | 
| 2 | 20 |
| 3 | 40 |
| 4 | 80 | 
| 5 | 160 | 

<br>

## Graveyard GUI

When accessing the Graveyard's hut block by right-clicking on it, you will see a GUI with different options:

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/graveyardgui1.png" class="img-fluid mx-auto" alt="Graveyard GUI">
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
<br> <br>

On page two of the GUI, you can select the plant you want the Undertaker to grow. Just click the button to cycle through sugar cane, bamboo, or cactus.

**Note:** If you have completed the Double Trouble research in the [University](../../source/buildings/university) (which lets the Undertaker plant two crops at a time), this button will choose what will *NOT* be planted.

 <img src="../../assets/images/gui/graveyardgui2.png" alt="Graveyard GUI Page 2" />
