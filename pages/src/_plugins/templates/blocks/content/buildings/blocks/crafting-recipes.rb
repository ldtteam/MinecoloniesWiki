class BuildingGuiContentBlockCraftingRecipes
    def header_name()
        "crafting recipes"
    end

    def image_key()
        "crafting-recipes"
    end

    def image_alt()
        "Crafting recipes GUI of the building"
    end

    def content_template()
        "%s

Here you can see all the crafting recipes this building knows. The arrows allow you to move them up or down in priority. 
You are also able to disable specific recipes.
- **Teach Recipe:** When clicking teach recipe, it opens a crafting grid which allows you to teach this hut recipes (not the worker).

%s"
    end
end