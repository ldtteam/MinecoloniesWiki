class CommonUtils
    def self.cn(*classes)
        newClass = ""
        for clazz in classes do
            if clazz.is_a? String then
                newClass += clazz.split(/\s/).join(" ")
            end
        end
        return newClass
    end
end