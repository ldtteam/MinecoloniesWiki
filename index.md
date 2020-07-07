---
title: Homepage
layout: default
---
# Welcome to the MineColonies Wiki!

## About our Mod

MineColonies is an interactive building mod that allows you to create your own thriving town within Minecraft. It gives you the tools to let your leadership skills soar by providing you with everything you need to build your own personal kingdom. MineColonies gives you the flexibility to create a colony as rich and unique as every player. With so many options you'll build a different colony every time, adapt it to any biome and terrain, build inside a mountain, on top of it, under the ocean or in the sky.

The limit is your imagination!

Featuring NPC workers such as [Builders](../../MinecoloniesWiki/source/workers/builder), [Farmers](../../MinecoloniesWiki/source/workers/farmer), [Fishermen](../../MinecoloniesWiki/source/workers/fisherman), [Lumberjacks](../../MinecoloniesWiki/source/workers/lumberjack), [Guards](../../MinecoloniesWiki/source/workers/guard), [Miners](../../MinecoloniesWiki/source/workers/miner), [Smelters](../../MinecoloniesWiki/source/workers/smelter), [Bakers](../../MinecoloniesWiki/source/workers/baker), [Cooks](../../MinecoloniesWiki/source/workers/cook), [Deliverymen](../../MinecoloniesWiki/source/workers/deliveryman), four types of animal herders, [Composters](../../MinecoloniesWiki/source/workers/composter), and many more, with even more being developed and added as the mod grows.

We also include specialized buildings such as the [Warehouse](../../MinecoloniesWiki/source/buildings/warehouse), [Citizen's Hut](../../MinecoloniesWiki/source/buildings/citizenhut), [Town Hall](../../MinecoloniesWiki/source/buildings/townhall), [Barracks](../../MinecoloniesWiki/source/buildings/barracks), [Library](../../MinecoloniesWiki/source/buildings/library), [University](../../MinecoloniesWikisource/buildings/university), and even the [School](../../MinecoloniesWiki/source/buildings/school).

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

MineColonies is a free and open source mod developed by Let's Dev Together (LDT), a non-profit community. The source code is available on [GitHub](https://github.com/ldtteam/minecolonies). Our developers are a hard-working, well-integrated coding team, continuously working to add more content to our mod and make the MineColonies experience even greater! We are always looking for more people to contribute to our mod, however, whether as a coder, builder, artist, or simply supporting us on [Patreon](https://www.patreon.com/minecolonies)!

Found any bugs? Report it as an [issue](https://github.com/ldtteam/minecolonies/issues/new) to help us give you the best gaming experience. If you require any help, or just want to join in the conversation, check us out on [Discord](https://discord.com/minecolonies)!
