class BuildingLinkTag < BaseTag
    def render_tag(context, arguments)
        building_key = arguments.unkeyed[0]
        building_plural = arguments.keyed["plural"] ||= false
        building_class = arguments.keyed["class"] ||= ""

        building = BuildingUtils.getBuildingKey(context.registers[:page], arguments.unkeyed[0])
        building_names = BuildingUtils.getBuildingNames(context.registers[:site], building, building_plural)

        versioned_header = building_names.collect do |version|
            VersionRenderer.renderVersionContent(version["versions"], version["name"], true)
        end.join("")

        "<a href='/source/buildings/#{building}' class='#{CommonUtils.cn(building_class)}'>#{versioned_header}</a>"
    end
end