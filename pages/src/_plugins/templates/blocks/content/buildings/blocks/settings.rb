class BuildingGuiContentBlockSettings
    def header_name(context)
        "settings"
    end

    def header_description(context)

    end

    def image_key(context)
        "settings"
    end

    def image_alt(context)
        "Settings"
    end

    def content_template(context, arguments)
        building = context.registers[:page]["building"]
        settings = context.registers[:site].data["buildinginfo"][building]["settings"]

        list_output = ""
        for setting in settings do
            options = setting["options"] ||= []
            options_output = ""
            for option in options do
                options_output += "<li>%s</li>" % ContentRenderer.convert_content(context, "**#{option["name"]}**: #{option["description"]}")
            end

            list_output += "<li>%s%s</li>" % [ContentRenderer.convert_content(context, "**#{setting["name"]}**: #{setting["description"]}"), options.length() > 0 ? "<ul>%s</ul>" % options_output : ""]
        end

        "%s

<ul>
" + list_output + "
</ul>

%s"
    end
end