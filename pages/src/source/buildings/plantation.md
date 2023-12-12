---
type: building
building: plantation
layout: building
---
{% infobox_building %}
{% version "1.19.1" before=true %}
The {% building %} is where the {% worker_link planter %} will grow either sugar cane, bamboo, or cactus.

The {% building %} its level determines how many crops the {% worker_link planter %} can plant at a time.

| Plantation Level | Crops Grown |
| ---------------- | ----------- |
| 1                | 4           |
| 2                | 8           |
| 3                | 12          |
| 4                | 16          |
| 5                | 20          |
{% endversion %}
{% version "1.19.2" after=true %}
The {% building %} is where the {% worker_link planter %} will grow a variety of plants:

- [Sugar Cane](https://minecraft.wiki/w/Sugar_Cane)
- [Cactus](https://minecraft.wiki/w/Cactus)
- [Bamboo](https://minecraft.wiki/w/Bamboo)
- [Cocoa Beans](https://minecraft.wiki/w/Cocoa_Beans)
- [Vine](https://minecraft.wiki/w/Vine)
- [Kelp](https://minecraft.wiki/w/Kelp)
- [Seagrass](https://minecraft.wiki/w/Seagrass)
- [Sea Pickles](https://minecraft.wiki/w/Sea_Pickle)
- [Glow Berries](https://minecraft.wiki/w/Glow_Berries)
- [Weeping Vines](https://minecraft.wiki/w/Weeping_Vines)
- [Twisting Vines](https://minecraft.wiki/w/Twisting_Vines)
- Crimson Plants ([Crimson Roots](https://minecraft.wiki/w/Roots) and [Crimson Fungus](https://minecraft.wiki/w/Fungus))
- Warped Plants ([Warped Roots](https://minecraft.wiki/w/Roots) and [Warped Fungus](https://minecraft.wiki/w/Fungus))

Each plant is grown on fields, which can be schematics (part of your style pack) that the builder can construct.
Howevr, these fields have different requirements as outlined on the [Schematics](/source/tutorials/schematics#plantation-fields) page.

> These do **not** work like {% building_link farm %} fields where you only have to place a scarecrow down!

The {% building %} has a limit of fields, based on it's building level, as well as one accompanying research.

| Building Level | Number of Fields | Number of Fields with "Crop Rotation" Research |
| -------------- | ---------------- | ---------------------------------------------- |
| 1              | 1                | 2                                              |
| 2              | 1                | 3                                              |
| 3              | 2                | 3                                              |
| 4              | 2                | 4                                              |
| 5              | 3                | 4                                              |

The {% building %} is also limited by the amount of concurrent plants it can work on, so if you were to have a field of Sugar Cane and Cactus, those are two different plants.
Unlike the field limit, this one does not increase by the research, meaning that - with the research unlocked - you will not be able to have four different kinds of fields.

| Building Level | Number of Concurrent Plants |
| -------------- | --------------------------- |
| 1              | 1                           |
| 2              | 1                           |
| 3              | 2                           |
| 4              | 2                           |
| 5              | 3                           |

{% endversion %}

The {% worker_link planter %} can also craft paper, books, sugar, and anything made with bamboo. The {% worker_link planter %} will only make these items when they have been taught the recipes, receive a request for an item, and have the needed materials.

**Note:** The {% worker_link planter %} can only learn a certain amount of recipes per their hut level. 

| Building Level | Number of Recipes |
| -------------- | ----------------- |
| 1              | 10                |
| 2              | 20                |
| 3              | 40                |
| 4              | 80                |
| 5              | 160               |
{% endinfobox_building %}

## {% building %} GUI

{% building_gui_content_block_main order=1 %}
{% building_gui_content_block_craftingrecipes order=2 %}
{% building_gui_content_block_tasks order=3 %}
{% building_gui_content_block_fields order=4 %}
{% building_gui_content_block_settings order=5 %}
