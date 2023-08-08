class BaseTag < Liquid::Tag
    def initialize(tag_name, args, tokens)
        super
        @tag_name = tag_name
        @arguments = args.strip
    end

    def render(context)
        arguments = ArgumentParser.parse(context, @arguments)
        return render_tag(context, arguments)
    end

    def render_tag(context, arguments)
        return ""
    end
end