class BuildingGuiContentBlockBrewingRecipes
    def header_name(context)
        "brewing recipes"
    end

    def image_key(context)
        "brewing-recipes"
    end

    def image_alt(context)
        "Brewing recipes"
    end

    def content_template(context, arguments)
        "%s

Here you can see all the brewing recipes this building knows.
The arrows allow you to move them up or down in priority. You are also able to disable or remove specific recipes.
- **Teach Recipe:** When clicking teach recipe, it opens a grid which allows you to teach this hut brewing recipes (not the worker).

%s"
    end
end