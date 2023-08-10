class BuildingGuiContentBlockMain
    def header_name(context)
        "main interface"
    end

    def image_key(context)
        "main"
    end

    def image_alt(context)
        "Main"
    end

    def content_template(context, arguments)
        "%s

- Header:
    - **Building Name**: Shows the name of the building, including the level of the building.
    - **Pencil**: Allows you to rename the building. The level of the building will always be listed after the name.
    - **Assigned Workers**: Tells you the worker assigned to this building.
- Controls:
    - **Manage Workers**: Lets you change which worker is assigned to work at this hut. There can only be one worker at each hut. **Note:** this only works if you have turned the worker hiring mode in the {%% building_link townhall %%} block to manual, otherwise your citizens will be hired automatically.
    - **Recall Worker**: Recalls the worker at this building to their hut block. You might use it if they are stuck somewhere, you want to see what they have, or want to give them something directly.
    - **Build Options**: Lets you create a build, upgrade, or repair build order for this hut. To learn more about the building system, please visit the {%% worker_link builder %%} page.
- Request system:
    - **Pickup Priority**: You can set the priority that a {%% worker_link courier %%} will visit this hut and pick up items (when the worker at this hut issues a request), or you can tell Couriers to *never* visit this hut to pick up items. (For the pickup priority, 10 is the highest.)
    - **Request Pickup Now**: You can click this button in order to tell any available {%% worker_link courier %%} to come and pick up all the items from the building.
- Footer:
    - **Info Button**: Some huts have an in-game guide. Press the ? button to access it.
    - **Inventory**: Here you can access the hut block's storage, where the worker at this hut takes and deposits materials. They will also use any [racks](../../source/items/rack) that were placed in the hut when it was built or upgraded, so be sure to check those as well!
    - **Chest Icon**: Click this button to see all the items in the hut's storage (including the hut block's inventory and any racks that came with the hut). Clicking the ? button next to an item's count will highlight the storage container it's in.

%s"
    end
end