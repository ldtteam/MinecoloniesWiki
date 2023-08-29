class VersionBlock < BaseBlock
    def render_block(context, content, arguments)
        input_version = arguments.unkeyed[0]
        include_before = arguments.keyed["before"]
        include_after = arguments.keyed["after"]
        block = arguments.keyed["block"] ||= false

        all_versions = context.registers[:site].data["versions"]
        current_versions = all_versions.select { |v| v["name"].strip == input_version.to_s.strip }

        if current_versions.empty? then
            raise Exception.new "version block must contain a valid version defined in 'src/_data/version.yml', version with name '#{input_version}' not found"
        end
        if current_versions.length > 1 then
            raise Exception.new "duplicate version with name #{input_version} found in 'src/_data/version.yml', please correct"
        end

        current_version = current_versions[0]
        selected_versions = []

        for version in all_versions do
            if current_version["order"] == version["order"] then
                selected_versions.push(version)
            end
            if include_before && version["order"] < current_version["order"] then
                selected_versions.push(version)
            end
            if include_after && version["order"] > current_version["order"] then
                selected_versions.push(version)
            end
        end

        VersionRenderer.renderVersionContent(selected_versions.collect { |k| k["order"] }, ContentRenderer.convert_content(context, content.strip), !block)
    end
end

Liquid::Template.register_tag("version", VersionBlock)