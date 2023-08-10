TEMPLATE_ROOT = "<div class=\"row py-3\">
    %s
    <div class=\"col-md-%s col-12\">
        %s
    </div>
</div>"
TEMPLATE_IMAGE = "<div class=\"col-md-%s col-12\">
    <img
        alt=\"%s\"
        class=\"img-fluid mx-auto\"
        src=\"%s\"
    >
</div>"

TOTAL_COL_COUNT = 12

class ContentBlock < BaseBlock
    def render_block(context, content, arguments)
        image_link = arguments.keyed["image"]
        image_alt = arguments.keyed["image_alt"]
        image_cols = arguments.keyed["cols"] ||= 4

        ContentBlock.render_content_block(context, content, image_link, image_alt, image_cols)
    end

    def self.render_content_block(context, content, image, image_alt, cols)
        content_col_count = TOTAL_COL_COUNT - cols
        
        image_content = ""
        if !image.nil? then
            image_content = TEMPLATE_IMAGE % [cols, image_alt, image]
        end

        TEMPLATE_ROOT % [image_content, content_col_count, ContentRenderer.convert_content(context, content.strip)]
    end
end

Liquid::Template.register_tag("content_block", ContentBlock)