---
title: Minecolonies Wiki
layout: default
---
# Welcome to the Minecolonies Wiki!

### About our Mod

Minecolonies is an interactive Town building mod that allows you to create your own thriving Town within Minecraft. It lets you use your imagination and skills by providing you with many options to build your own Town and enhance your gaming experience. Featuring NPC workers such as: Builder, Farmer, Fisherman, LumberJack, Guard, Miner, Smeltery, Baker, Cook/Restuarant, Deliveryman, four types of Animal Herders, Composter and many more are being developed and added as the mod grows. Also specialized buildings such as: Warehouse, Citizen Huts, Townhall, Barrack and a Library. Minecolonies gives you the flexibility to create a colony as rich and unique as every player. With so many options you'll build a different Colony every time, adapt it to any biome and terrain, build inside a mountain, on top of it, under the ocean or in the Sky. The limit is your imagination!

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

Minecolonies is a free and open source mod developed by Let's Dev Together (LDT), a non-profit community. The source code is available on [GitHub](https://github.com/ldtteam/minecolonies). Our developers are a hardworking well integrated coding team, continuously working to add more content to our mod and make the Minecolonies experience even greater! But we are always looking for more people to contribute to our project! Found any bugs? Report it as an [issue](https://github.com/ldtteam/minecolonies/issues/new) to help us ensure you have the best gaming experience. If you require any help, or just want to join in the conversation, check us out on [Discord!](https://discord.gg/YEas2Yv) 
