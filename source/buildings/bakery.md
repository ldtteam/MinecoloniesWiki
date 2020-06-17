---
title: MineColonies Wiki
layout: default
---
# Bakery

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/bakery.png" alt="Bakery" />
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Worker:</strong></p>
        </div>
        <div class="col">
        <p><a href="../workers/baker">Baker</a></p>
        </div>
    </div>
    <hr />
    <recipe>baker</recipe>
</div>

## About the Bakery

The Bakery is where the Baker will bake bread, cakes, cookies, and pumpkin pies.
<img src="../../assets/images/icons/minecraft/bread.png" class="img-fluid mx-auto" alt="Bread">
<img src="../../assets/images/icons/minecraft/cake.png" class="img-fluid mx-auto" alt="Cake">
<img src="../../assets/images/icons/minecraft/cookie.png" class="img-fluid mx-auto" alt="Cookie">
<img src="../../assets/images/icons/minecraft/pumpkin_pie.png" class="img-fluid mx-auto" alt="Bread">

<br>

## Bakery GUI

When accessing the Bakery block by right-clicking on it, you will see a GUI with different options:

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/bakerygui1.png" class="img-fluid mx-auto" alt="Baker GUI">
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

On page two of the GUI, you will see a list of recipes that the Baker is able to make. Just click to change the ones you want the Baker to bake to on and they will begin making those items as long as they receive the required ingredients. (The black box at the top is to search for recipes.) The bakery already knows the recipes for bread, cakes, cookies, and pumpkin pies without you having to teach them.

**Note:** If you have a mod that changes the vanilla recipes, this won't affect the Baker, as the recipes are hard-coded.
 
 <img src="../../assets/images/gui/bakerygui2.png" alt="Baker GUI Page 2" />
