class Utils
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

    def self.getBuildingInfo(context, building)
        if building.nil? || building.empty?
            throw "Building key is not defined"
        end

        buildinginfo = context.registers[:site].data["buildinginfo"][building]

        if buildinginfo.nil?
            throw "Building info for building '#{building}' does not exist. Please provide a valid building key."
        end

        return buildinginfo
    end
end