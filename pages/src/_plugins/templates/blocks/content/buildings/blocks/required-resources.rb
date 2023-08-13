class BuildingGuiContentBlockRequiredResources
    def header_name(context)
        "required resources"
    end

    def image_key(context)
        "required-resources"
    end

    def image_alt(context)
        "Required resources"
    end

    def content_template(context, arguments)
        "%s

These are the resources that the worker will need for the workorder they are currently working on.
- **Current project**: The top line tells you which workorder is being worked on and its level.
- **Step**: What step of the project the builder is on.
- **Supplied %% / Used %%**: How much of the needed resources are in the building inventory, and how many of the resources have been placed.
- **Item**: Each needed item is displayed, along with how many of that item is in inventory, and how many are needed. These amounts will change as they place blocks and will show only what blocks the worker still needs to place. The block in black are in their inventory. The blocks in red are the ones neither you nor the worker has in their inventory. The blocks in green are ones you have in inventory but the builder needs. Clicking the up arrow next to the item will automatically remove that item from your inventory and place it into the worker.

%s"
    end
end