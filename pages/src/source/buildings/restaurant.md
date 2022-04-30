---
title: Restaurant
layout: default
---
# Restaurant

{% capture content %}
The Restaurant is where the Cook will cook food, provided they have the necessary ingredients and fuel. When citizens are hungry, they will come to the Restaurant and the Cook will give them food. The Assistant Cook also works at the Restaurant. They craft needed food to help supply the colony.

**Note:** You can only hire an Assistant Cook when the Restaurant is level 3 or higher.
{% endcapture %}
{% capture infobox %}
{% include infobox/building.html key="restaurant" %}
{% endcapture %}
{% include page-infobox-wrapper.html content=content infobox=infobox %}

## Restaurant GUI

<div class="row">
  <div class="col">
    
    When accessing the Restaurant's hut block by right-clicking on it, you will see a GUI with different options:

    <br>
    <div class="row">
      <div class="col-sm-12 col-md">
        <img src="../../assets/images/gui/restaurantgui1.png" class="img-fluid mx-auto" alt="Restaurant GUI 1">
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
        <img src="../../assets/images/gui/restaurantgui2.png" class="img-fluid mx-auto" alt="Restaurant GUI 2">
      </div>
      <div class="col-sm-12 col-md">
          <ul>
          <li><strong> Fuel: </strong> Listed here are items that can be used by the Cook as fuel in their furnaces. Simply turn on any that you want your Cook to use, and a <a href="../../source/workers/courier"> Courier</a> will deliver those items to the Cook when they need fuel. (The black box at the top is to search for items.)</li>
          </ul>
        </div>
      </div>
      <br><br><br><br>
      
    This is page three of the Restaurant GUI.

    <div class="row">
      <div class="col-sm-12 col-md">
        <img src="../../assets/images/gui/restaurantgui3.png" class="img-fluid mx-auto" alt="Restaurant GUI 3">
      </div>
      <div class="col-sm-12 col-md">
          <ul>
          <li><strong> Food: </strong> Listed here are food items that will be handed out by the Cook. Disable any you don't want to be handed out or produced. However, if a colonist finds a disabled item, they'll still eat it - the Cook just won't hand it out. (The black box at the top is to search for items.)</li>
          </ul>
        </div> 
      </div>  
      <br><br><br><br>

    This is page four of the Restaurant GUI.

    <div class="row">
      <div class="col-sm-12 col-md">
        <img src="../../assets/images/gui/minstockgui.png" class="img-fluid mx-auto" alt="Restaurant GUI 4">
      </div>
      <div class="col-sm-12 col-md">
          <ul>
          <li><strong> Minimum Stock: </strong> Use this button to tell the Restaurant to request a minimum stock to keep on hand. The Cook will still give out items that are set as the minimum stock, but will request more if they no longer have enough. Set items will be displayed above the button.</li>
          </ul>
        </div>
      </div>
      <br> <br>
  </div>
</div>

