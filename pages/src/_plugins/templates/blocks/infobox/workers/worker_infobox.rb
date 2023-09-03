class WorkerInfoBoxBlock < BaseBlock
    TEMPLATE_IMAGE = "<div class=\"glide glide-worker\">
    <div class=\"glide__track\" data-glide-el=\"track\">
        <ul class=\"glide__slides\">
            %s
        </ul>
    </div>
</div>"

    TEMPLATE_TRAITS = "<div class=\"row text-left\">
    <div class=\"col\">
        <p><strong>Primary Trait:</strong></p>
    </div>
    <div class=\"col\">
        <p class=\"badge badge-secondary traitp\" data-toggle=\"%s\" title=\"%s\">%s</p>
    </div>
</div>
<div class=\"row section-text text-left\">
    <div class=\"col\">
        <p><strong>Secondary Trait:</strong></p>
    </div>
    <div class=\"col\">
        <p class=\"badge badge-secondary traits\" data-toggle=\"%s\" title=\"%s\">%s</p>
    </div>
</div>"

    TEMPLATE_BUILDING = "<div class=\"row section-text text-left\">
    <div class=\"col\">
        %s
    </div>
    <div class=\"col\">
        <p><a href=\"/source/buildings/%s\">%s</a></p>
    </div>
</div>
"

    def render_block(context, content, arguments)
        site = context.registers[:site]

        worker = WorkerUtils.getWorkerKey(context.registers[:page], "")
        if worker.nil? then
            raise RuntimeError, "Worker infobox tag cannot be used a non worker page."
        end

        worker_info = WorkerUtils.getWorkerInfo(site, worker)
        worker_styles = context.registers[:site].data["workerstyles"]

        worker_images = Dir.glob("#{site.source}/assets/images/workers/#{worker}/**/*").select do |path|
            isFile = File.file?(path)
            pieces = File.basename(path, '.*').split('-')

            # Filter by male only because we do not want to get duplicate entries for both male and female
            next unless isFile && worker == pieces[0] && pieces[1] == "male"
            true
        end

        images = "<div class=\"col-md col-12\"><div>"

        images += "<select class=\"mb-3\" id=\"glide-dropdown-worker\">"
        for worker_style in worker_styles do
            images += "<option value=\"#{worker_style[0]}\">#{worker_style[1]["name"]}</option>"
        end
        images += "</select>"

        image_items = ""
        for worker_image in worker_images do
            pieces = File.basename(worker_image, '.*').split('-')
            ext = File.extname(worker_image)

            image_items += "<li><div class=\"d-flex worker-image\" data-style='#{pieces[2]}'>"
            image_items += "<div><img src='/assets/images/workers/#{worker}/#{pieces[2]}/male/#{pieces[3]}#{ext}' alt='#{worker_info["name"]} male #{pieces[3]}'/></div>"
            image_items += "<div><img src='/assets/images/workers/#{worker}/#{pieces[2]}/female/#{pieces[3]}#{ext}' alt='#{worker_info["name"]} female #{pieces[3]}'/></div>"
            image_items += "</div></li>"
        end
        images += TEMPLATE_IMAGE % image_items
        images += "</div></div>"

        blocks = []

        primary_trait = worker_info["traits"].nil? ? "None" : worker_info["traits"]["primary"] ||= "None"
        primary_effect = worker_info["effects"].nil? ? "" : worker_info["effects"]["primary"] ||= ""
        secondary_trait = worker_info["traits"].nil? ? "None" : worker_info["traits"]["secondary"] ||= "None"
        secondary_effect = worker_info["effects"].nil? ? "" : worker_info["effects"]["secondary"] ||= ""

        blocks.push(TEMPLATE_TRAITS % [
            primary_effect.empty? ? "" : "tooltip",
            primary_effect,
            primary_trait,
            secondary_effect.empty? ? "" : "tooltip",
            secondary_effect,
            secondary_trait
        ])

        buildings_array = worker_info["buildings"] || []
        blocks.push(buildings_array.map.with_index do |building, index|
            building_names = BuildingUtils.getBuildingNames(context.registers[:site], building)
            building_name = building_names.map do |version|
                VersionRenderer.renderVersionContent(version["versions"], version["name"], true)
            end.join("")

            building_header = ""
            if index == 0 then
                building_header = "<p><strong>Building#{buildings_array.length > 1 ? "s" : ""}:</strong></p>"
            end

            TEMPLATE_BUILDING % [building_header, building, building_name]
        end.join(""))

        InfoBoxBlock.render_info_box(context, worker_info["name"], images, blocks, content)
    end
end

Liquid::Template.register_tag("infobox_worker", WorkerInfoBoxBlock)