{% include contentblock/building/vars.md name="main interface" description="These are the main options for the building:" image_key="main" order=include.order %}
{% content_block image=image %}
{{ header }}

- **Pencil**: Allows you to rename the building. The level of the building will always be listed after the name.
- **Hut Level**: Tells you the type of hut and the build level of the building you have selected.
- **Assigned Workers**: Tells you the worker assigned to this building.
- **Manage Workers**: Lets you change which worker is assigned to work at this hut. There can only be one worker at each hut. **Note:** this only works if you have turned the worker hiring mode in the {% building_link townhall %} block to manual, otherwise your citizens will be hired automatically.
- **Recall Worker**: Recalls the worker at this building to their hut block. You might use it if they are stuck somewhere, you want to see what they have, or want to give them something directly.
- **Build Options**: Lets you create a build, upgrade, or repair build order for this hut. To learn more about the building system, please visit the {% worker_link builder %} page.
- **Pickup Priority**: You can set the priority that a {% worker_link courier %} will visit this hut and pick up items (when the worker at this hut issues a request), or you can tell Couriers to *never* visit this hut to pick up items. You can also tell a Courier to do a pickup now using the Request Pickup Now button. (For the pickup priority, 10 is the highest.)
- **Inventory**: Here you can access the hut block's storage, where the worker at this hut takes and deposits materials. They will also use any [racks](../../source/items/rack) that were placed in the hut when it was built or upgraded, so be sure to check those as well!
- **?**: Some huts have an in-game guide. Press the ? button to access it.
- **A chest icon**: Pencil
- **Button**: Click this button to see all the items in the hut's storage (including the hut block's inventory and any racks that came with the hut). Clicking the ? button next to an item's count will highlight the storage container it's in.
{% endcontent_block %}
