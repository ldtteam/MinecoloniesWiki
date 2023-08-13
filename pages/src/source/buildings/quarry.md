---
type: building
building: quarry
layout: building
---
{% infobox_building %}
The Quarry is where you can hire a {% worker_link quarrier %} to dig the quarry. The Quarry will be a pit of varied size (simple quarry is 1 x 1 chunks, medium is 2 x 2) to collect larger amounts of stone type blocks.  The Quarry will only produce the blocks it digs out.  It will not produce additional ore blocks like the {% building_link mine %}.

**Note:** You must first hire a Quarrier at a Mine before assigning them to a Quarry.
{% endinfobox_building %}

## {% building %} GUI

{% building_gui_content_block_custom order=1 header="main interface" image="main" image_alt="Main" %}
- Header:
    - **Building Name**: Shows the name of the building, including the level of the building.
    - **Pencil**: Allows you to rename the building. The level of the building will always be listed after the name.
- Controls:
    - **Build Options**: Lets you create a build, upgrade, or repair build order for this hut. To learn more about the building system, please visit the {% worker_link builder %} page.
- Footer:
    - **Info Button**: Some huts have an in-game guide. Press the ? button to access it.
    - **Inventory**: Here you can access the hut block's storage, where the worker at this hut takes and deposits materials. They will also use any [racks](../../source/items/rack) that were placed in the hut when it was built or upgraded, so be sure to check those as well!
    - **Chest Icon**: Click this button to see all the items in the hut's storage (including the hut block's inventory and any racks that came with the hut). Clicking the ? button next to an item's count will highlight the storage container it's in.
{% endbuilding_gui_content_block_custom %}

{% building_gui_content_block_custom order=2 header="manage workers" image="workers" image_alt="Manage workers" %}
- Header:
    - **Assigned Workers**: Tells you the worker assigned to this building.
- Controls:
    - **Manage Workers**: Lets you change which worker is assigned to work at this hut. There can only be one worker at each hut. **Note:** Unlike other buildings, you must first hire a {% worker_link quarrier %} at the {% building_link mine %} and then assign that {% worker quarrier %} to work in this building.
    - **Recall Worker**: Recalls the worker at this building to their hut block. You might use it if they are stuck somewhere, you want to see what they have, or want to give them something directly.
{% endbuilding_gui_content_block_custom %}