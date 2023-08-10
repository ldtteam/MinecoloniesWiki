class BuildingInfoBoxBlock < BaseBlock
    TEMPLATE_WORKER = "<div class=\"row section-text text-left\">
    <div class=\"col\">
        %s
    </div>
    <div class=\"col\">
        <p><a href=\"/source/workers/%s\">%s</a></p>
    </div>
</div>
"

    TEMPLATE_RECIPE = "<div class=\"row section-text text-center infobox-recipe-row\">
    <div class=\"col-12\">
        <recipe>%s</recipe>
    </div>
</div>
"

    def render_block(context, content, arguments)
        building = BuildingUtils.getBuildingKey(context, "")
        if building.nil? then
            raise RuntimeError, "Building infobox tag cannot be used a non building page."
        end

        building_names = BuildingUtils.getBuildingNames(context, building)        
        building_info = context.registers[:site].site_data["buildinginfo"][building]
        
        header = building_names.map do |version|
            VersionRenderer.renderVersionContent(version["versions"], version["name"])
        end.join("")

        images = [{
            link: "/assets/images/buildings/%s.png" % building,
            alt: "Block icon for the %s building" % building_info["name"]
        }]

        blocks = []

        workers_array = building_info["workers"] || []
        blocks.push(workers_array.map.with_index do |worker, index|
            worker_info = context.registers[:site].site_data["workerinfo"][worker]

            worker_header = ""
            if index == 0 then
                worker_header = "<p><strong>Worker:</strong></p>"
            end

            TEMPLATE_WORKER % [worker_header, worker, worker_info["name"]]
        end.join(""))

        recipes_array = building_info["recipes"] || []
        blocks.push(recipes_array.map { |recipe| TEMPLATE_RECIPE % recipe }.join(""))

        InfoBoxBlock.render_info_box(context, header, images, blocks, content)
    end
end

Liquid::Template.register_tag("infobox_building", BuildingInfoBoxBlock)