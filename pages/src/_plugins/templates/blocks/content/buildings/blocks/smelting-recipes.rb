class BuildingGuiContentBlockSmeltingRecipes
    def header_name(context)
        "smelting recipes"
    end

    def image_key(context)
        "smelting-recipes"
    end

    def image_alt(context)
        "Smelting recipes"
    end

    def content_template(context, arguments)
        "%s

Here you can see all the smelting recipes this hut knows.
The arrows allow you to move them up or down in priority. You are also able to disable or remove specific recipes.
- **Teach Recipe**: When clicking teach recipe, it opens a furnace grid which allows you to teach this hut recipes (not the worker). Place the item to smelt in the upper slot.

%s"
    end
end