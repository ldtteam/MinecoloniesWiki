class BuildingGuiContentBlockStock
    def header_name(context)
        "minimum stock"
    end

    def image_key(context)
        "stock"
    end

    def image_alt(context)
        "Stock"
    end

    def content_template(context, arguments)
        "%s

Use this button to tell the {%% building %%} to keep a minimum stock on hand. Set items will be displayed above the button.

%s"
    end
end