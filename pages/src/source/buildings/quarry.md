---
title: Quarry
layout: default
---
# Quarry

{% capture content %}
The Quarry is where you can hire a [Quarrier](../../source/workers/quarrier) to dig the quarry. The Quarry will be a pit of varied size (simple quarry is 1 x 1 chunks, medium is 2 x 2) to collect larger amounts of stone type blocks.

**Note:** You must first hire a Quarrier at a [Mine](../../source/buildings/mine) before assigning them to a Quarry.
{% endcapture %}
{% capture infobox %}
{% include infobox/building.html key="quarry" %}
{% endcapture %}
{% include page-infobox-wrapper.html content=content infobox=infobox %}

## Quarry GUI

<div class="row">
  <div class="col">

    {% include contentblock/basic.html header="When accessing the Quarry hut block by right-clicking on it, you will see a GUI with different options. You start on the main tab:" content="<ul>
            <li><strong>Pencil:</strong> Allows you to rename the building.  The level of the building will always be listed after the name.</li>
            <li><strong>Hut Level:</strong>Tells you the type of hut and the build level of the building you have selected.</li>
            <li><strong>Build Options:</strong>Lets you create a build, upgrade, reposition, or repair build order for this hut. To learn more about the building system, please visit the <a href='../../source/workers/builder'> Builder</a> page.</li>
            <li><strong>Inventory:</strong>Here you can access the hut block's storage, where the worker at this hut takes and deposits materials. They will also use any <a href='../../source/items/rack'> racks</a> or chests that were placed in the hut when it was built or upgraded, so be sure to check those as well!</li>
            <li><strong>A chest icon:</strong>Click this button to see all the items in the hut's storage (including the hut block's inventory and any racks that came with the hut). Clicking the ? button next to an item's count will highlight the storage container it's in.</li>
        </ul>" image="../../assets/images/gui/quarrygui1.png" %}
    
    {% include contentblock/basic.html header="The second tab of the GUI is <strong>Manage Workers</strong>." content="<ul>
            <li><strong>Assigned Workers:</strong>Tells you the worker assigned to this building.</li>
            <li><strong>Manage Workers:</strong>Lets you change which worker is assigned to work at this hut. There can only be one worker at each hut. <b>Note:</b> this only works if you have turned the worker hiring mode in the <a href='../../source/buildings/townhall'> Town Hall</a> block to manual, otherwise your citizens will be hired automatically.</li>
            <li><strong>Recall Worker:</strong>Recalls the worker at this building to their hut block. You might use it if they are stuck somewhere, you want to see what they have, or want to give them something directly.</li>           
        </ul>" image="../../assets/images/gui/quarrygui2.png" %}
  </div>
</div>
