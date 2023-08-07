class BuildingLinkTag < BaseTag
    def render_tag(context, arguments)
        building_key = arguments.unkeyed[0]
        building_plural = arguments.keyed["plural"] ||= false
        building_class = arguments.keyed["class"] ||= ""

        building = BuildingUtils.getBuildingKey(context, arguments.unkeyed[0])
        building_names = BuildingUtils.getBuildingNames(context, building, building_plural)

        building_names.collect do |version|
            VersionRenderer.renderVersionContent(version["versions"], "<a href='/source/buildings/#{building}' class='#{CommonUtils.cn(building_class)}'>" + version["name"] + "</a>")
        end.join("")
    end
end