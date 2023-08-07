class BuildingNameTag < BaseTag
    def render_tag(context, arguments)
        building_key = arguments.unkeyed[0]
        building_plural = arguments.keyed["plural"] ||= false

        building = BuildingUtils.getBuildingKey(context, arguments.unkeyed[0])
        building_names = BuildingUtils.getBuildingNames(context, building, building_plural)

        building_names.collect { |version| VersionRenderer.renderVersionContent(version["versions"], version["name"]) }.join("")
    end
end