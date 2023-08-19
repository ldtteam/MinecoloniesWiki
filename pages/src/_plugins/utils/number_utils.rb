class NumberUtils
    def self.number_or_default(string, default = 0)
        begin
            Integer(string || '')
        rescue ArgumentError
            default
        end
    end
end