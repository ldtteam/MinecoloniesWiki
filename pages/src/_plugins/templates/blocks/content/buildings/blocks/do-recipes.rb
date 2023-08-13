class BuildingGuiContentBlockDoRecipes
    def header_name(context)
        "DO recipes"
    end

    def image_key(context)
        "do-recipes"
    end

    def image_alt(context)
        "Domum Ornamentum recipes"
    end

    def content_template(context, arguments)
        "%s

Here you can see all the [Domum Ornamentum](../dependencies/domumornamentum) recipes this hut knows. These are crafted just like you were using an Architects cutter.
The arrows allow you to move them up or down in priority. You are also able to disable or remove specific recipes.
- **Teach Recipe:** When clicking teach recipe, it opens a crafting grid for the Architect Cutter. Input 1 is the top left slot of the cutter, input 2 is the top right, and input 3 the bottom left slot in the cutter. When you have put the items in the slots, you will see various items below the input slots, the {%% building %%} can create **ALL** of those items from the recipe you have input.

%s"
    end
end