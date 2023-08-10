require_relative "require"

TAB_INDEXES = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eight", "ninth", "tenth"]

module BuildingGuiContentFunctions
    def self.number_or_nil(string)
        Integer(string || '')
            rescue ArgumentError
        nil
    end

    def self.call_renderer_method(renderer, name, context)
        if renderer.class.method_defined?(name) then
            return renderer.send(name, context)
        end
        ""
    end
end

class BuildingGuiContentTag < BaseTag
    def render_tag(context, arguments)
        type_str, = @tag_name.match(/([^_]+$)/).captures
        type = BUILDING_CONTENT_BLOCK_TYPES[type_str.to_sym]
        if type.nil? then
            raise ArgumentError, "Type for building gui content block could not be loaded: %s." % type_str
        end
        if context["page"]["type"] != "building" then
            raise RuntimeError, "Building gui content tag cannot be used a non building page."
        end

        header = arguments.keyed["header"] || BuildingGuiContentFunctions.call_renderer_method(type[:renderer], "header_name", context) || ""
        description = arguments.keyed["description"] || BuildingGuiContentFunctions.call_renderer_method(type[:renderer], "header_description", context) || ""
        order = BuildingGuiContentFunctions.number_or_nil(arguments.keyed["order"]) || 1

        image_key = arguments.keyed["image_key"] || BuildingGuiContentFunctions.call_renderer_method(type[:renderer], "image_key", context) || ""
        image_alt_key = arguments.keyed["image_alt"] || BuildingGuiContentFunctions.call_renderer_method(type[:renderer], "image_alt", context) || ""
        cols = BuildingGuiContentFunctions.number_or_nil(arguments.keyed["cols"]) || 4

        header_content = header.empty? ? "" : ContentRenderer.convert_content(context, "The %s tab of the GUI is the **%s**. %s" % [TAB_INDEXES[order - 1], header, description])
        image_url = "../../assets/images/gui/buildings/%s/%s.png" % [context["page"]["building"], image_key]
        image_alt = "%s tab of the %s it's GUI" % [image_alt_key, context.registers[:site].site_data["buildinginfo"][context.registers[:page]["building"]]["name"]]
        ContentBlock.render_content_block(context, type[:renderer].content_template(context, arguments) % [header_content, ""], image_url, image_alt, cols)
    end
end

class BuildingGuiContentBlock < BaseBlock
    def render_block(context, content, arguments)
        type_str, = @tag_name.match(/([^_]+$)/).captures
        type = BUILDING_CONTENT_BLOCK_TYPES[type_str.to_sym]
        if type.nil? then
            raise ArgumentError, "Type for building gui content block could not be loaded."
        end

        header = arguments.keyed["header"] || BuildingGuiContentFunctions.call_renderer_method(type[:renderer], "header_name", context) || ""
        description = arguments.keyed["description"] || BuildingGuiContentFunctions.call_renderer_method(type[:renderer], "header_description", context) || ""
        order = BuildingGuiContentFunctions.number_or_nil(arguments.keyed["order"]) || 1

        image_key = arguments.keyed["image_key"] || BuildingGuiContentFunctions.call_renderer_method(type[:renderer], "image_key", context) || ""
        image_alt_key = arguments.keyed["image_alt"] || BuildingGuiContentFunctions.call_renderer_method(type[:renderer], "image_alt", context) || ""
        cols = BuildingGuiContentFunctions.number_or_nil(arguments.keyed["cols"]) || 4

        header_content = header.empty? ? "" : ContentRenderer.convert_content(context, "The %s tab of the GUI is the **%s**. %s" % [TAB_INDEXES[order - 1], header, description])
        image_url = "../../assets/images/gui/buildings/%s/%s.png" % [context["page"]["building"], image_key]
        image_alt = "%s tab of the %s it's GUI" % [image_alt_key, context.registers[:site].site_data["buildinginfo"][context.registers[:page]["building"]]["name"]]
        ContentBlock.render_content_block(context, type[:renderer].content_template(context, arguments) % [header_content, ContentRenderer.convert_content(context, content)], image_url, image_alt, cols)
    end
end

BUILDING_CONTENT_BLOCK_TYPES.each do |key, value|
    Liquid::Template.register_tag("building_gui_content_block_%s" % key.to_s, value[:handler] == "tag" ? BuildingGuiContentTag : BuildingGuiContentBlock)
end