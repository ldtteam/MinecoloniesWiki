class VersionRenderer
    def self.renderVersionContent(versions, content, inline)
        tag = inline ? "span" : "div"
        return "<#{tag} data-versions='#{versions.join(",")}'>#{content}</#{tag}>"
    end
end