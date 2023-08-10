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
        settings = context.registers[:site].site_data["buildinginfo"][building]["settings"]

        list_output = ""
        for setting in settings do
            options = setting["options"] ||= []
            options_output = ""
            for option in options do
                options_output += "<li><p><b>%s:</b> %s</p></li>" % [option["name"], option["description"]]
            end

            list_output += "<li><p><b>%s:</b> %s</p>%s</li>" % [setting["name"], setting["description"], options.length() > 0 ? "<ul>%s</ul>" % options_output : ""]
        end

        "%s

<ul>
" + list_output + "
</ul>

%s"
    end
end