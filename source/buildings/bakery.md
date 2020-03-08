---
title: Minecolonies Wiki
layout: default
---
# Bakery

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/bakery.png" alt="Bakery" />
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Worker:</strong> <a href="../workers/baker">Baker</a></p>
        </div>
    </div>
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Recipe:</strong> 
        </div>
    </div>
    <recipe>bakery</recipe>
    
</div>
<hr />

# About the Building

The Bakery is where the baker will make bread, cakes, cookies and pies.
<br
> 
<img src="../../assets/images/icons/minecraft/bread.png" class="img-fluid mx-auto" alt="Bread">
<img src="../../assets/images/icons/minecraft/cake.png" class="img-fluid mx-auto" alt="Cake">
<img src="../../assets/images/icons/minecraft/cookie.png" class="img-fluid mx-auto" alt="Cookie">
<img src="../../assets/images/icons/minecraft/pumpkin_pie.png" class="img-fluid mx-auto" alt="Bread">

**Note:** If you have a mod that changes the vanilla recipes, this will not affect the baker as the recipes are hard coded.

<br>

# Bakery GUI

After the building is built, you can access the Baker's Hut block (right clicking on it) you will see a GUI with different options:

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/bakerygui1.png" class="img-fluid mx-auto" alt="Baker GUI">
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

On page two of the GUI, you will see a list of recipes that the baker is able to make, just change the ones you want the baker to make to a yes and they will begin making those items as long as they recieve the required ingredients.
 
 <img src="../../assets/images/gui/bakerygui2.png" alt="Baker GUI Page 2" />

