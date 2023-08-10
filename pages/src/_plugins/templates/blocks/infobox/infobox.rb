class InfoBoxBlock < BaseBlock
    TOTAL_COL_COUNT = 12

    TEMPLATE_ROOT = "<div class=\"row pb-3\">
    <div class=\"col-xl-8 col-md-6 col-12\">
        %s
    </div>
    <div class=\"col-xl-4 col-md-6 col-12\">
        %s
    </div>
</div>"

    TEMPLATE_INFOBOX = "<div class=\"infobox box text-center w-100\">
    <h2>%s</h2>

    %s

    %s
</div>
"

    def render_block(context, content, arguments)
        header = arguments.keyed["header"] || ""
        images = arguments.keyed["images"] || ""
        image_alts = arguments.keyed["image_alts"] || ""
        infobox_content = arguments.keyed["content"] || ""
        
        images_parsed = images.split(",").map { |url| { link: url } }
        image_alts.split(",").each_with_index do |item, index|
            unless images_parsed[index].nil? then
                images_parsed[index][:alt] = item
            end
        end

        InfoBoxBlock.render_info_box(context, header, images_parsed, [infobox_content], content)
    end

    def self.render_info_box(context, header, images, blocks, content)
        images_content = ""
        if images.length > 0 then
            images_content += "<div class=\"infobox-image row\">"

            for image in images do
                images_content += "<div class=\"col-md col-12\"><img alt=\"%s\" src=\"%s\" /></div>" % [image[:alt], image[:link]]
            end

            images_content += "</div>"
        end

        blocks_content = ""
        if blocks.length > 0 then
            for block in blocks do
                blocks_content += "<hr/><div class=\"infobox-content\">%s</div>" % ContentRenderer.convert_content(context, block.strip)
            end
        end

        infobox_content = TEMPLATE_INFOBOX % [header, images_content, blocks_content]
        TEMPLATE_ROOT % [ContentRenderer.convert_content(context, content.strip), infobox_content]
    end
end

Liquid::Template.register_tag("infobox", InfoBoxBlock)