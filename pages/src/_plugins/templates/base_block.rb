class BaseBlock < Liquid::Block
    def initialize(tag_name, args, tokens)
        super
        @tag_name = tag_name
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
end