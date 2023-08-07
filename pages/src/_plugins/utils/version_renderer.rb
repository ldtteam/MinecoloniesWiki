class VersionRenderer
    def self.renderVersionContent(versions, content)
        return "<span data-versions='#{versions.join(",")}'>#{content}</span>"
    end
end