require_relative "../base_tag"
require_relative "utils"

class BuildingNameTag < BaseTag
    def render_tag(context, arguments)
        building_key = arguments.unkeyed[0]
        building_plural = arguments.keyed["plural"] ||= false

        building = Utils.getBuildingKey(context, arguments.unkeyed[0])
        building_info = Utils.getBuildingInfo(context, building)
        return building_info[building_plural ? "plural" : "name"]
    end
end