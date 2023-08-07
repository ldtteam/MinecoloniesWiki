BuildingNameMapping = Struct.new(:versions, :name)

class BuildingUtils
    def self.getBuildingKey(context, input)
        building = nil

        page_data = context.registers[:page]
        if page_data["layout"] == "building"
            building = page_data["building"]
        end

        unless input.nil? || input.empty?
            building = input
        end

        if building.nil? || building.empty?
            throw "Building key could not be resolved from Liquid tag, please provide a building key"
        end

        return building
    end

    def self.getBuildingNames(context, building, plural = false)
        if building.nil? || building.empty?
            throw "Building key is not defined"
        end
        
        all_versions = context.registers[:site].data["versions"]
        building_info = context.registers[:site].data["buildinginfo"][building]

        if building_info.nil?
            throw "Building info for building '#{building}' does not exist. Please provide a valid building key."
        end

        key = plural ? "plural" : "name"
        name = building_info[key]
        result = [BuildingNameMapping.new([], name)]

        for version in all_versions do
            if !building_info["overrides"].nil? && !building_info["overrides"][version["order"]].nil? then
                name = building_info["overrides"][version["order"]][key]
                if name == nil then
                    throw "Building '#{building}' does not have a #{plural ? "plural" : "singular"} name variant, please add one."
                end

                result.push(BuildingNameMapping.new([], name))
            end

            result.last().versions.push(version["order"])
        end

        result
    end
end