class NumberUtils
    def self.number_or_nil(string)
        Integer(string || '') rescue ArgumentError
        nil
    end
end