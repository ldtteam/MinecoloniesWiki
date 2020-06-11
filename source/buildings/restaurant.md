---
title: MineColonies Wiki
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

## About the Restaurant

The Restaurant is where the Cook will cook food, provided they have the necessary ingredients and fuel. When citizens are hungry, they will come to the Restaurant and the Cook will give them food.

## Restaurant GUI

When accessing the Restaurant's hut block by right-clicking on it, you will see a GUI with different options:

<br>
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/restaurantgui1.png" class="img-fluid mx-auto" alt="Restaurant GUI">
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

This is page two of the Restaurant GUI.

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/restaurantgui2.png" class="img-fluid mx-auto" alt="Restaurant GUI">
  </div>
  <div class="col-sm-12 col-md">
      <ul>
      <li><strong> Fuel: </strong> Listed here are items that can be used by the Cook as fuel in their furnaces. Simply turn on any that you want your Cook to use, and the Deliveryman will deliver those items to the Cook when they need fuel. (The black box at the top is to search for items.)
      </ul>
    </div>  
  <br>
