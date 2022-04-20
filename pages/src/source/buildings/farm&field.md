---
title: Farm & Field
layout: default
---
# Farm & Field

{% capture content %}
The Farm is where the Farmer will grow crops for your colony. The crops the Farmer currently cultivates are wheat, carrots, potatoes, beets, melons, pumpkins, and most crops from other mods (as long as they have normal growth behavior). Before the Farmer can start, you will have to give the Farmer a hoe, an axe (for harvesting crops), and the crop you want to cultivate. 

The Farmer will also craft seeds, carved pumpkins, hay bales, [composted dirt](../../source/items/compost), and coarse dirt. They will only make items when they have been taught the recipes, receive a request for an item, and have the needed materials.

**Note:** The Farmer can only learn a set number of recipes based on their hut level. So:

| Hut Level | Recipes |
| --------- | ------- |
| 1         | 10      |
| 2         | 20      |
| 3         | 40      |
| 4         | 80      |
| 5         | 160     |

For the Farmer to start, you will also need to place fields. Place the Field block (it looks like a scarecrow) in the plot of farmland you want the Farmer to work on and right-click on it to access its GUI. Here you will place the seed of the crop you want this specific field to cultivate. (For potatoes, carrots, and other plants without seeds, just put the raw potato/carrot/etc in the Field.) If you decide later to change the type of crop you want cultivated in that farmland, just go into the Field's GUI and switch the seed there.

<br>
<p style="text-align:center;">
<img src="../../assets/images/misc/field.png" alt="Field">
<img src="../../assets/images/gui/fieldgui1.png" alt="Field GUI Empty">
<img src="../../assets/images/gui/fieldgui2.png" alt="Field GUI Assigned"></p>
<br>

You can click on the arrows to increase the size of the area the Farmer will farm. (Right-clicking will decrease the area.) The max size is 5 blocks in each direction from the Field block, or 11x11 total.

**IMPORTANT:** The Farmer will farm up to five Fields, depending on the level of the Farm. The level of the Farm is the number of Fields the Farmer can cultivate:

| Farm Level | Fields |
| :--------: | :----: |
|     1      |   1    |
|     2      |   2    |
|     3      |   3    |
|     4      |   4    |
|     5      |   5    |
{% endcapture %}
{% capture infobox %}
{% include infobox/building.html worker="farmer" recipes="farm,field" image="../../assets/images/buildings/flowershop.png" alt="Flower Shop's Hut" %}
{% endcapture %}
{% include page-infobox-wrapper.html content=content infobox=infobox %}

## Farm GUI
<div class="row">
<div class="col">
{% include contentblock/main-gui.html header="When accessing the Farm block by right-clicking on it, you will see a GUI with different options.   You start on the main tab:" image="../../assets/images/gui/farmgui1.png" %}

{% include contentblock/basic.html header="The second tab of the GUI is <strong>List of Recipes</strong>." content="Here you can see all the crafting recipes this hut knows.  The arrows allow you to move them up or down in priority.  You are also able to disable specific recipes.<p><strong> Teach Recipe:</strong> When clicking teach recipe, it opens a crafting grid which allows you to teach this hut recipes (not the worker).</p>" image="../../assets/images/gui/farmgui2.png" %}

{% include contentblock/basic.html header="The third tab of the GUI is <strong>Tasks</strong>." content="This tab shows you any requests the hut is working on, and where it is going." image="../../assets/images/gui/farmgui3.png" %}
  
{% include contentblock/settings-gui.html settingskey="farm" header="The fourth tab of the GUI is <strong>Settings</strong>. It has two buttons:" image="../../assets/images/gui/farmgui4.png" %}

{% include contentblock/basic.html header="The fifth tab of the GUI is <strong>Fields</strong>." content="<ul><li><b>Assign Fields to Farmer:</b> Automatic by default. Here you can define if you prefer to manually assign the Fields for this Farmer.</li><li><b>Fields:</b>This is the list of recognized fields (recognizable by the crop in its GUI and its distance). If the field shows an X, that means it is already assigned to a Farmer and will list the name of the Farmer who takes care of that field. If the X is red and the button is not grayed out, that field belongs to the current Farmer and you can unassign it. If the field has a green check, then that field can be assigned to the Farmer. If the button is grayed out with a check, that means that no one is assigned to that field but the Farmer can not accept any more fields. </li></ul>" image="../../assets/images/gui/farmgui5.png" %}

{% include contentblock/stock-gui.html buildingname="Farm" header="The sixth tab of the GUI is <strong>Minimum Stock</strong>. It has one button:" image="../../assets/images/gui/farmgui6.png"%}
</div>
</div>