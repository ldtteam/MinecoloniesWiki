Arguments = Struct.new(:keyed, :unkeyed)

class BaseBlock < Liquid::Block
    def initialize(tag_name, args, tokens)
        super
        @arguments = args.strip.split(" ")
        @arguments ||= []
    end

    def render(context)
        content = super
        arguments = parse_arguments(context)
        return render_block(context, content, arguments)
    end

    def render_block(context, arguments)
        return ""
    end

    private

    def parse_arguments(context)
        keyed = Hash.new()
        unkeyed = []

        @arguments.each do |argument|
            split_argument = argument.split("=")
            if split_argument.length > 1
                keyed.store(split_argument[0], lookup(context, split_argument[1]))
            else
                unkeyed.push(lookup(context, split_argument[0]))
            end
        end

        return Arguments.new(keyed, unkeyed)
    end

    def lookup(context, key)
        value = context[key]
        if value.nil?
            return key
        else
            return value
        end
    end
end