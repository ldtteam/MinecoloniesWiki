class BuildingGuiContentBlockItemList
    def content_template(context, arguments)
        default_on = arguments.keyed["default_on"] == true
        "%s

%s

Each row contains a button to toggle the usage of this item on or off. By default this is **" + (default_on ? "on" : "off") + "** for all items.

There are also two controls on the page:
- The black box at the top is a search field.
- Reset to default allows you to reset everything to **" + (default_on ? "on" : "off") + "**."

    end
end