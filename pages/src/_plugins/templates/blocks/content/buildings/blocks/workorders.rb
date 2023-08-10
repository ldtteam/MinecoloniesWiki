class BuildingGuiContentBlockWorkOrders
    def header_name(context)
        "workorders"
    end

    def image_key(context)
        "workorders"
    end

    def image_alt(context)
        "Workorders"
    end

    def content_template(context, arguments)
        "%s

This page shows you what work orders have been assigned to this {%% building %%}, along with the distance away from the building.
You can cancel the work order here.

%s"
    end
end