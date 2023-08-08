class BuildingGuiContentBlockStock
    def header_name()
        "minimum stock"
    end

    def image_key()
        "stock"
    end

    def image_alt()
        "Stock GUI of the building"
    end

    def content_template()
        "%s

Use this button to tell the {%% building %%} to keep a minimum stock on hand. Set items will be displayed above the button.

%s"
    end
end