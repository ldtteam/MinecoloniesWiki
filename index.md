---
title: Homepage
layout: default
---
# Welcome to the MineColonies Wiki!

MineColonies is an interactive building mod that allows you to create your own thriving town within Minecraft. It lets your leadership skills soar by providing you with everything you need to build your kingdom. MineColonies gives you the flexibility to create a colony as unique as every player. With so many options, you’ll create a different colony every time, adapt it to any biome, build inside a mountain, on top of one, under the ocean, or in the sky.

The limit is your imagination!

MineColonies features NPC workers such as [Builders](../../source/workers/builder), [Farmers](../../source/workers/farmer), [Fishermen](../../source/workers/fisherman), [Lumberjacks](../../source/workers/lumberjack), [Guards](../../source/workers/guard), [Miners](../../source/workers/miner), [Smelters](../../source/workers/smelter), [Bakers](../../source/workers/baker), [Cooks](../../source/workers/cook), [Deliverymen](../../source/workers/deliveryman), four types of animal herders, [Composters](../../source/workers/composter), and many more, with even more being developed and added as the mod grows.

It also includes specialized buildings such as the [Warehouse](../../source/buildings/warehouse), [Citizen's Hut](../../source/buildings/citizenhut), [Town Hall](../../source/buildings/townhall), [Barracks](../../source/buildings/barracks), [Library](../../source/buildings/library), [University](../../source/buildings/university), and even the [School](../../source/buildings/school).

### Please note that the wiki is always referring to the latest 1.15.2 alpha version of MineColonies!

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

MineColonies is a free and open-source mod developed by Let's Dev Together (LDT), a non-profit community. The source code is available on [GitHub](https://github.com/ldtteam/minecolonies). Our developers are a hard-working, well-integrated coding team, continuously adding more content to make the MineColonies experience even greater. However, we are always looking for more people to contribute to the mod, whether as a coder, builder, artist, wiki editor, tester, or simply supporting us on [Patreon](https://www.patreon.com/minecolonies)!

Found any bugs? Report it as an [issue](https://github.com/ldtteam/minecolonies/issues/new/choose) to help us give you the best gaming experience. If you require any help, or just want to join the conversation, check us out on [Discord](https://discord.minecolonies.com)!
