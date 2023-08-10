class BuildingGuiContentBlockMainResidential
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
    - **Assigned Citizens**: This will show you how many citizens are assigned to this hut, it also displays their name, and occupation (if employed).
- Controls:
    - **Manage Housing**: This lets you change which citizens are assigned to this hut. **Note:** this only works if you have turned the housing assignment mode in the {%% building_link townhall %%} block to manual; otherwise your citizens will be housed automatically.
    - **Build Options**: Lets you create a build, upgrade, or repair build order for this hut. To learn more about the building system, please visit the {%% worker_link builder %%} page.
    - **Recall Citizens**: Teleports all the citizens living here to the hut block.
- Footer:
    - **Info Button**: Some huts have an in-game guide. Press the ? button to access it.
    - **Inventory**: Here you can access the hut block's storage, where the worker at this hut takes and deposits materials. They will also use any [racks](../../source/items/rack) that were placed in the hut when it was built or upgraded, so be sure to check those as well!
    - **Chest Icon**: Click this button to see all the items in the hut's storage (including the hut block's inventory and any racks that came with the hut). Clicking the ? button next to an item's count will highlight the storage container it's in.

%s"
    end
end