---
title: Mine
layout: default
---
# Mine

{% capture content %}
The Mine is where you can hire a [Miner](../../source/workers/miner) to work the mine, or a [Quarrier](../../source/workers/quarrier) to work the [Quarry](../../source/buildings/quarry). If you hire a Quarrier, there will be no Miner at this Mine. 

At the Mine, the Miner will mine for ores and materials. Once they are hired, the Miner will first create a shaft downward to a specific depth depending on the level of the Mine.  Once the main shaft is completed, the Miner will then branch out.

**Note:** Placing the Mine hut below the maximum Y level it can mine will cause the Miner not work and complain the hut needs to be upgraded.  It's recommended to always have your hut above Y=54 (1.16) or Y=44 (1.18).

| Mine Level | Shaft Y Level | Shaft Y Level |
| ---------- | ------------- | ------------- |
| | 1.16 | 1.18 |
| 1 | 50 | 40 |
| 2 | 30 | 20 |
| 3 | Bedrock | 0 |
| 4 | | Bedrock |
{% endcapture %}
{% capture infobox %}
{% include infobox/building.html key="mine" %}
{% endcapture %}
{% include page-infobox-wrapper.html content=content infobox=infobox %}

## Mine GUI

<div class="row">
  <div class="col">
    {% include contentblock/main-gui.html header="When accessing the Mine hut block by right-clicking on it, you will see a GUI with different options. You start on the main tab:" image="../../assets/images/gui/minegui1.png" %}

    {% include contentblock/basic.html header="The second tab of the GUI is <strong>Crafting Recipes</strong>." content="Here you can see all the crafting recipes this hut knows.  The arrows allow you to move them up or down in priority.  You are also able to remove or disable specific recipes.<p><strong> Teach Recipe:</strong> When clicking teach recipe, it opens a crafting grid which allows you to teach this hut recipes (not the worker).</p>" image="../../assets/images/gui/minegui2.png" %}

    {% include contentblock/stock-gui.html buildingname="Mine" header="The third tab of the GUI is <strong>Minimum Stock</strong>. It has one button:" image="../../assets/images/gui/minegui3.png" %}

    {% include contentblock/basic.html header="The fourth tab of the GUI is <strong>Required Resources</strong>." content="These are the resources that the Miner will need for the area of the Mine they are currently working on.
    <ul>
      <li><strong>Current project</strong> The top line tells you which mine schematic is being worked on.</li>
      <li><strong>Step</strong> What step of the project the Miner is on.</li>
      <li><strong>Supplied %/ Used %</strong> How much of the needed resources are in the Miner's & Mine hut's inventory, and how many of the resources have been placed.</li>
      <li><strong>Item</strong> Each needed item is displayed, along with how many of that item is in inventory, and how many are needed.  These amounts will change as they place blocks and will show only what blocks the Miner still needs to place. The block in black are in their inventory.  The blocks in red are the ones neither you nor the Miner has in their inventory.  The blocks in green are ones you have in inventory but the Miner needs.  Clicking the up arrow next to the item will automatically remove that item from your inventory and place it into the Mine hut's.</li>
    </ul>" image="../../assets/images/gui/minegui4.png" %}
    
    {% include contentblock/basic.html header="The fifth tab of the GUI is <strong>Levels</strong>." content="The level refers to the platforms the Miner will place every 3 blocks down. Here you can assign what level of the Mine the Miner will create their mineshafts (nodes). If a level has a red number next to it, that means the Miner is currently mining that level. The Miner will ignore orders to mine at a specific level until the entire mineshaft is completed to the maximum depth their hut's level allows. You can also click Repair, to tell the Miner to restore that level to its original state. This can be useful if a fire breaks out in the mineshaft." image="../../assets/images/gui/minegui5.png" %}

    {% include contentblock/settings-gui.html key="mine" header="The sixth tab of the GUI is <strong>Settings</strong>." image="../../assets/images/gui/minegui6.png" %}

    {% include contentblock/basic.html header="The seventh tab of the GUI is <strong>Guards</strong>." content="Here is where you can assign <a href='../../source/workers/guard'>Guards</a> to patrol this Mine. If assigned, they will patrol the level the Miner is currently mining at, to help protect them from hostile mobs. Only Guards set to the Patrol Mine task will show up here; tasks can be set in the <a href='../../source/buildings/guardtower'>Guard Tower</a> GUI (<a href='../../source/buildings/barrackstower'>Barracks Towers</a> do not have the Patrol Mine task). One Guard can be assigned at Mine levels 1 and 2, two Guards can be assigned at Mine levels 3 and 4, and three Guards can be assigned at Mine level 5." image="../../assets/images/gui/minegui7.png" %}
  </div>
</div>