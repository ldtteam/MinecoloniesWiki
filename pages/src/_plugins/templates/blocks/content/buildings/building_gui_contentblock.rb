require_relative "require"

TAB_INDEXES = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eight", "ninth", "tenth"]

module BuildingGuiContentFunctions
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
            raise ArgumentError, "Type for building gui content block could not be loaded: #{type_str}."
        end

        building = BuildingUtils.getBuildingKey(context.registers[:page], "")
        if building.nil? then
            raise RuntimeError, "Building gui content tag cannot be used a non building page."
        end
        building_info = BuildingUtils.getBuildingInfo(context.registers[:site], building)

        header = arguments.keyed["header"] || BuildingGuiContentFunctions.call_renderer_method(type[:renderer], "header_name", context) || ""
        description = arguments.keyed["description"] || BuildingGuiContentFunctions.call_renderer_method(type[:renderer], "header_description", context) || ""
        order = NumberUtils.number_or_default(arguments.keyed["order"], 1)

        image_key = arguments.keyed["image_key"] || BuildingGuiContentFunctions.call_renderer_method(type[:renderer], "image_key", context) || ""
        image_alt_key = arguments.keyed["image_alt"] || BuildingGuiContentFunctions.call_renderer_method(type[:renderer], "image_alt", context) || ""
        cols = NumberUtils.number_or_default(arguments.keyed["cols"], 4)

        header_content = header.empty? ? "" : ContentRenderer.convert_content(context, "The #{TAB_INDEXES[order - 1]} tab of the GUI is the **#{header}**. #{description}")
        image_url = "../../assets/images/gui/buildings/#{context["page"]["building"]}/#{image_key}.png"
        image_alt = "#{image_alt_key} tab of the #{building_info["name"]} it's GUI"
        ContentBlock.render_content_block(context, type[:renderer].content_template(context, arguments) % [header_content, ""], image_url, image_alt, cols)
    end
end

class BuildingGuiContentBlock < BaseBlock
    def render_block(context, content, arguments)
        type_str, = @tag_name.match(/([^_]+$)/).captures
        type = BUILDING_CONTENT_BLOCK_TYPES[type_str.to_sym]
        if type.nil? then
            raise ArgumentError, "Type for building gui content block could not be loaded: #{type_str}."
        end

        building = BuildingUtils.getBuildingKey(context.registers[:page], "")
        if building.nil? then
            raise RuntimeError, "Building gui content tag cannot be used a non building page."
        end
        building_info = BuildingUtils.getBuildingInfo(context.registers[:site], building)

        header = arguments.keyed["header"] || BuildingGuiContentFunctions.call_renderer_method(type[:renderer], "header_name", context) || ""
        description = arguments.keyed["description"] || BuildingGuiContentFunctions.call_renderer_method(type[:renderer], "header_description", context) || ""
        order = NumberUtils.number_or_default(arguments.keyed["order"], 1)

        image_key = arguments.keyed["image_key"] || BuildingGuiContentFunctions.call_renderer_method(type[:renderer], "image_key", context) || ""
        image_alt_key = arguments.keyed["image_alt"] || BuildingGuiContentFunctions.call_renderer_method(type[:renderer], "image_alt", context) || ""
        cols = NumberUtils.number_or_default(arguments.keyed["cols"], 4)

        header_content = header.empty? ? "" : ContentRenderer.convert_content(context, "The #{TAB_INDEXES[order - 1]} tab of the GUI is the **#{header}**. #{description}")
        image_url = "../../assets/images/gui/buildings/#{context["page"]["building"]}/#{image_key}.png"
        image_alt = "#{image_alt_key} tab of the #{building_info["name"]} it's GUI"
        ContentBlock.render_content_block(context, type[:renderer].content_template(context, arguments) % [header_content, ContentRenderer.convert_content(context, content)], image_url, image_alt, cols)
    end
end

BUILDING_CONTENT_BLOCK_TYPES.each do |key, value|
    Liquid::Template.register_tag("building_gui_content_block_#{key.to_s}", value[:handler] == "tag" ? BuildingGuiContentTag : BuildingGuiContentBlock)
end