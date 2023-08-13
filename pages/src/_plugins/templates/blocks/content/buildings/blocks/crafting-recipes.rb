class BuildingGuiContentBlockCraftingRecipes
    def header_name(context)
        "crafting recipes"
    end

    def image_key(context)
        "crafting-recipes"
    end

    def image_alt(context)
        "Crafting recipes"
    end

    def content_template(context, arguments)
        "%s

Here you can see all the crafting recipes this building knows.
The arrows allow you to move them up or down in priority. You are also able to disable or remove specific recipes.
- **Teach Recipe:** When clicking teach recipe, it opens a crafting grid which allows you to teach this hut recipes (not the worker).

%s"
    end
end