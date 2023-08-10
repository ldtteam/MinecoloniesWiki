class BuildingGuiContentBlockHostiles
    def header_name(context)
        "hostiles"
    end

    def image_key(context)
        "hostiles"
    end

    def image_alt(context)
        "Hostiles list"
    end

    def content_template(context, arguments)
        "%s

You can tell the Guard which mobs to attack and which ones to ignore. All hostile mobs are set to on by default.

There are also two controls on the page:
- The black box at the top is a search field.
- Reset to default allows you

%s"
    end
end