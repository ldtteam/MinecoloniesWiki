class BuildingGuiContentBlockTasks
    def header_name(context)
        "tasks"
    end

    def image_key(context)
        "tasks"
    end

    def image_alt(context)
        "Tasks"
    end

    def content_template(context, arguments)
        "%s

This tab shows you any requests the hut is working on, and where it is going.

%s"
    end
end