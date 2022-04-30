---
title: Swineherd's Hut
layout: default
---
# Swineherd's Hut

{% capture content %}
The Swineherd's Hut is where the Swineherd will breed and butcher pigs for food. You will have to capture and bring in two pigs to the Swineherd's Hut, as the Swineherd will not catch and bring in any pigs.

**Note:** The Swineherd will only keep two pigs alive per hut level, so at level 5 they will have ten pigs in their holding pens to breed and butcher. This means they will be faster at producing and collecting meat. So:

| Building Level | Pigs Housed |
| ----- | ----- |
| 1 | 2 |
| 2 | 4 |
| 3 | 6 |
| 4 | 8 |
| 5 | 10 |
{% endcapture %}
{% capture infobox %}
{% include infobox/building.html key="swineherd" %}
{% endcapture %}
{% include page-infobox-wrapper.html content=content infobox=infobox %}

## Swineherd's Hut GUI

When accessing the Swineherd's Hut block by right-clicking on it,  you will see a GUI with different options:

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/swineherdgui.png" class="img-fluid mx-auto" alt="Swineherd's Hut GUI">
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

This is page two of the Swineherd's Hut GUI.

<div class="row">
    <div class="col-sm-12 col-md">
        <img src="../../assets/images/gui/minstockgui.png" class="img-fluid mx-auto" alt="Swineherd's Hut GUI 2">
    </div>
    <div class="col-sm-12 col-md">
        <ul>
        <li><strong> Minimum Stock: </strong> Use this button to tell the Swineherd's Hut to keep a minimum stock on hand. Set items will be displayed above the button.</li>
        </ul>
    </div>
</div>
