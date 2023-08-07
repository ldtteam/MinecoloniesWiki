Arguments = Struct.new(:keyed, :unkeyed)

class ArgumentParser
    def self.parse(context, arguments)
        keyed = Hash.new()
        unkeyed = []

        # Parse key="string" matches
        keyStringMatcher = /(\S+)\s*?=\s*["']([\S ]+?)["']/
        for match in arguments.scan(keyStringMatcher) do
            key, value = match
            keyed.store(key, value)
            arguments = arguments.gsub(keyStringMatcher, "")
        end
        
        # Parse key=number matches
        keyNumberMatcher = /(\S+)\s*?=\s*(\d+)/
        for match in arguments.scan(keyNumberMatcher) do
            key, value = match
            keyed.store(key, value)
            arguments = arguments.gsub(keyNumberMatcher, "")
        end

        # Parse key=var matches
        keyPairMatcher = /(\S+)\s*?=\s*([^\s\d"']+)/
        for match in arguments.scan(keyPairMatcher) do
            key, value = match
            keyed.store(key, ArgumentParser.lookup(context, value))
            arguments = arguments.gsub(keyPairMatcher, "")
        end

        # Parse unkeyed matches
        for match in arguments.scan(/\S+/) do
            unkeyed.push(ArgumentParser.lookup(context, match))
        end

        return Arguments.new(keyed, unkeyed)
    end

    private

    def self.lookup(context, key)
        value = context[key]
        if value.nil?
            return key
        else
            return value
        end
    end
end