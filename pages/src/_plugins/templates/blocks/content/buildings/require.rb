require_relative "blocks/brewing-recipes"
require_relative "blocks/crafting-recipes"
require_relative "blocks/custom"
require_relative "blocks/do-recipes"
require_relative "blocks/fields"
require_relative "blocks/fuel"
require_relative "blocks/hostiles"
require_relative "blocks/item-list"
require_relative "blocks/main-residential"
require_relative "blocks/main"
require_relative "blocks/required-resources"
require_relative "blocks/settings"
require_relative "blocks/smelting-recipes"
require_relative "blocks/stock"
require_relative "blocks/tasks"
require_relative "blocks/workorders"

BUILDING_CONTENT_BLOCK_TYPES = {
    brewingrecipes: {
        renderer: BuildingGuiContentBlockBrewingRecipes.new,
        handler: "tag"
    },
    craftingrecipes: {
        renderer: BuildingGuiContentBlockCraftingRecipes.new,
        handler: "tag"
    },
    custom: {
        renderer: BuildingGuiContentBlockCustom.new,
        handler: "block"
    },
    dorecipes: {
        renderer: BuildingGuiContentBlockDoRecipes.new,
        handler: "tag"
    },
    fields: {
        renderer: BuildingGuiContentBlockFields.new,
        handler: "tag"
    },
    fuel: {
        renderer: BuildingGuiContentBlockFuel.new,
        handler: "tag"
    },
    hostiles: {
        renderer: BuildingGuiContentBlockHostiles.new,
        handler: "tag"
    },
    itemlist: {
        renderer: BuildingGuiContentBlockItemList.new,
        handler: "block"
    },
    mainresidential: {
        renderer: BuildingGuiContentBlockMainResidential.new,
        handler: "tag"
    },
    main: {
        renderer: BuildingGuiContentBlockMain.new,
        handler: "tag"
    },
    requiredresources: {
        renderer: BuildingGuiContentBlockRequiredResources.new,
        handler: "tag"
    },
    settings: {
        renderer: BuildingGuiContentBlockSettings.new,
        handler: "tag"
    },
    smeltingrecipes: {
        renderer: BuildingGuiContentBlockSmeltingRecipes.new,
        handler: "tag"
    },
    stock: {
        renderer: BuildingGuiContentBlockStock.new,
        handler: "tag"
    },
    tasks: {
        renderer: BuildingGuiContentBlockTasks.new,
        handler: "tag"
    },
    workorders: {
        renderer: BuildingGuiContentBlockWorkOrders.new,
        handler: "tag"
    }
}