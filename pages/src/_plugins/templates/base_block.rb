class BaseBlock < Liquid::Block
    def initialize(tag_name, args, tokens)
        super
        @arguments = args.strip
    end

    def render(context)
        content = super
        arguments = ArgumentParser.parse(context, @arguments)
        return render_block(context, content, arguments)
    end

    def render_block(context, arguments)
        return ""
    end

    def convert_content(context, content)
        page = context.registers[:site].pages.detect { |p| p.path == context['page']['path'] }
        renderer = Jekyll::Renderer.new(context.registers[:site], page)
        return renderer.convert(content)
    end
end