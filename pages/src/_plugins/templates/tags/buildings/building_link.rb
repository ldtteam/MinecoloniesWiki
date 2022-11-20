require_relative "../base_tag"
require_relative "utils"

class BuildingLinkTag < BaseTag
    def render_tag(context, arguments)
        building_key = arguments.unkeyed[0]
        building_plural = arguments.keyed["plural"] ||= false

        building = Utils.getBuildingKey(context, arguments.unkeyed[0])
        building_info = Utils.getBuildingInfo(context, building)
        building_name = building_info[building_plural ? "plural" : "name"]

        if arguments.keyed["class"].nil?
            return "<a href='/source/buildings/#{building}'>#{building_name}</a>"
        else
            return "<a href='/source/buildings/#{building}' class='#{arguments.keyed["class"]}'>#{building_name}</a>"
        end
    end
end