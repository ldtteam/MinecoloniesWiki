class ContentRenderer
    def self.convert_content(context, content)
        page = context.registers[:site].pages.detect { |p| p.path == context['page']['path'] }
        renderer = Jekyll::Renderer.new(context.registers[:site], page)
        template = Liquid::Template.parse(content)
        template_content = template.render(context)
        return renderer.convert(template_content)
    end
end