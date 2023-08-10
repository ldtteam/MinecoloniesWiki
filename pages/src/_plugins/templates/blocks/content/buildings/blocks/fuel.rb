class BuildingGuiContentBlockFuel
    def header_name(context)
        "fuel list"
    end

    def image_key(context)
        "fuel"
    end

    def image_alt(context)
        "Fuel list"
    end

    def content_template(context, arguments)
        "%s

Listed here are items that can be used by the {%% building %%} as fuel in their furnaces.
Simply turn on any that you want your {%% worker baker %%} to use, and a {%% worker courier %%} will deliver those items to the {%% worker baker %%} when they need fuel. All items are off by default.

There are also two controls on the page:
- The black box at the top is a search field.
- Reset to default allows you

%s"
    end
end