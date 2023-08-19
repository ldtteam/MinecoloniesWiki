class ResearchLookup
    def self.get_building_unlock(site, building)
        result, tree = ResearchLookup.lookup_by_unlocks(site.data["research"], "building", building)
        unless result.nil? then
            clone = result.clone
            clone.delete("children")
            clone_tree = tree.clone
            clone_tree.delete("chains")
            return clone, clone_tree
        end
        nil
    end

    private

    def self.lookup_by_unlocks(data, unlock_type, unlock_value)
        for _, tree in data["trees"] do
            for chain in tree["chains"] do
                result = ResearchLookup.lookup_by_unlocks_recurse(chain, unlock_type, unlock_value)
                unless result.nil? then
                    return result, tree
                end
            end
        end

        nil
    end

    def self.lookup_by_unlocks_recurse(research, unlock_type, unlock_value)
        for unlock in research["unlocks"] do
            case unlock["type"]
            when "building"
                if unlock["building"] == unlock_value
                    return research
                end
            end
        end

        for child in (research["children"] ||= []) do
            result = ResearchLookup.lookup_by_unlocks_recurse(child, unlock_type, unlock_value)
            unless result.nil? then
                return result
            end
        end

        nil
    end
end