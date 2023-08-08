require_relative "blocks/require"

TYPES = {
    main: {
        renderer: BuildingGuiContentBlockMain.new,
        handler: "tag"
    },
    stock: {
        renderer: BuildingGuiContentBlockStock.new,
        handler: "tag"
    },
    tasks: {
        renderer: BuildingGuiContentBlockTasks.new,
        handler: "tag"
    },
    craftingrecipes: {
        renderer: BuildingGuiContentBlockCraftingRecipes.new,
        handler: "tag"
    },
    brewingrecipes: {
        renderer: BuildingGuiContentBlockBrewingRecipes.new,
        handler: "tag"
    },
    custom: {
        renderer: BuildingGuiContentBlockCustom.new,
        handler: "block"
    }
}
TAB_INDEXES = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eight", "ninth", "tenth"]

class BuildingGuiContentTag < BaseTag
    def render_tag(context, arguments)
        type_str, = @tag_name.match(/([^_]+$)/).captures
        type = TYPES[type_str.to_sym]
        if type.nil? then
            raise ArgumentError, "Type for building gui content block could not be loaded: %s." % type_str
        end
        if context["page"]["type"] != "building" then
            raise RuntimeError, "Building gui content tag cannot be used a non building page."
        end

        header = arguments.keyed["header"] ||= call_renderer_method(type[:renderer], "header_name")
        description = arguments.keyed["description"] ||= call_renderer_method(type[:renderer], "header_description")
        order = Integer(arguments.keyed["order"])

        image_key = arguments.keyed["image_key"] ||= call_renderer_method(type[:renderer], "image_key")
        image_alt = arguments.keyed["image_alt"] ||= call_renderer_method(type[:renderer], "image_alt")
        cols = arguments.keyed["cols"] ||= 4

        header_content = ContentRenderer.convert_content(context, "The %s tab of the GUI is the **%s**. %s" % [TAB_INDEXES[order - 1], header, description])
        image_url = "../../assets/images/gui/%s/%s.png" % [context["page"]["building"], image_key]
        ContentBlock.render_content_block(context, type[:renderer].content_template() % [header_content, ""], image_url, image_alt, cols)
    end

    def call_renderer_method(renderer, name)
        if renderer.class.method_defined?(name) then
            return renderer.send(name)
        end
        ""
    end
end

class BuildingGuiContentBlock < BaseBlock
    def render_block(context, content, arguments)
        type_str, = @tag_name.match(/([^_]+$)/).captures
        type = TYPES[type_str.to_sym]
        if type.nil? then
            raise ArgumentError, "Type for building gui content block could not be loaded."
        end

        header = arguments.keyed["header"] ||= call_renderer_method(type[:renderer], "header_name")
        description = arguments.keyed["description"] ||= call_renderer_method(type[:renderer], "header_description")
        order = Integer(arguments.keyed["order"])

        image_key = arguments.keyed["image_key"] ||= call_renderer_method(type[:renderer], "image_key")
        image_alt = arguments.keyed["image_alt"] ||= call_renderer_method(type[:renderer], "image_alt")
        cols = arguments.keyed["cols"] ||= 4

        header_content = ContentRenderer.convert_content(context, "The %s tab of the GUI is the **%s**. %s" % [TAB_INDEXES[order - 1], header, description])
        image_url = "../../assets/images/gui/%s/%s.png" % [context["page"]["building"], image_key]
        ContentBlock.render_content_block(context, type[:renderer].content_template() % [header_content, ContentRenderer.convert_content(context, content)], image_url, image_alt, cols)
    end

    def call_renderer_method(renderer, name)
        if renderer.class.method_defined?(name) then
            return renderer.send(name)
        end
        ""
    end
end

TYPES.each do |key, value|
    Liquid::Template.register_tag("building_gui_content_block_%s" % key.to_s, value[:handler] == "tag" ? BuildingGuiContentTag : BuildingGuiContentBlock)
end