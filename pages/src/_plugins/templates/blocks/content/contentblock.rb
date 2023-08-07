TEMPLATE_ROOT = "<div class=\"row py-3\">
    %s
    <div class=\"col-md-%s col-12\">
        <p>%s</p>
    </div>
</div>"
TEMPLATE_IMAGE = "<div class=\"col-md-%s col-12\">
    <img
        alt=\"%s\"
        class=\"img-fluid mx-auto\"
        src=\"%s\"
    >
</div>"

class ContentBlock < BaseBlock
    def render_block(context, content, arguments)
        image_link = arguments.keyed["image"]
        image_alt = arguments.keyed["image_alt"]
        image_cols = arguments.keyed["cols"] ||= 4

        total_col_count = 12
        content_col_count = total_col_count - image_cols
        
        image_content = ""
        if !image_link.nil? then
            image_content = TEMPLATE_IMAGE % [image_cols, image_alt, image_link]
        end

        TEMPLATE_ROOT % [image_content, content_col_count, convert_content(context, content.strip)]
    end
end