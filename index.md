---
title: Minecolonies Wiki
layout: default
---
# Welcome to the MineColonies Wiki!

### About our Mod

MineColonies is an interactive building mod that allows you to create your own thriving town within Minecraft. It gives you the tools to let your leadership skills soar by providing you with everything you need to build your own personal kingdom.

Featuring NPC workers such as Builders, Farmers, Fishermen, Lumberjacks, Guards, Miners, Smelters, Bakers, Cooks, Deliverymen, four types of animal herders, Composters, and many more, with even more being developed and added as the mod grows.

We also include specialized buildings such as the Warehouse, Citizen Hut, Town Hall, Barracks, Library, University, and even a School.

MineColonies gives you the flexibility to create a colony as rich and unique as every player. With so many options you'll build a different colony every time, adapt it to any biome and terrain, build inside a mountain, on top of it, under the ocean or in the sky.

The limit is your imagination!

### Please note that the Wiki is always referring to the latest (alpha) version of MineColonies!

---


<div class="row">
{% for item in site.data.subnav.subnav %}
    <div class="col-lg col-md-3 col-sm-12 text-center">
        <h3 class="button p-1">{{ item.title }}</h3>
        {% for entry in item.subitems %}
            <a class="" href="{{ entry.url | relative_url }}">{{ entry.page }}</a><br />
        {% endfor %}
    </div>
{% endfor %}
</div>

---

MineColonies is a free and open source mod developed by Let's Dev Together (LDT), a non-profit community. The source code is available on [GitHub](https://github.com/ldtteam/minecolonies). Our developers are a hard-working, well-integrated coding team, continuously working to add more content to our mod and make the MineColonies experience even greater! We are always looking for more people to contribute to our project.

Found any bugs? Report it as an [issue](https://github.com/ldtteam/minecolonies/issues/new) to help us give you the best gaming experience. If you require any help, or just want to join in the conversation, check us out on [Discord](https://discord.gg/YEas2Yv)!
