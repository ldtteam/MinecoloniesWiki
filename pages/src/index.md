---
title: Homepage
layout: default
---
# Welcome to the MineColonies Wiki!

MineColonies is an interactive building mod that allows you to create your own thriving town within Minecraft. It lets your leadership skills soar by providing you with everything you need to build your kingdom. MineColonies gives you the flexibility to create a colony as unique as every player. With so many options, you’ll create a different colony every time, adapt it to any biome, build inside a mountain, on top of one, under the ocean, or in the sky.

The limit is your imagination!

MineColonies features NPC workers such as {% worker_link builder plural=true %}, {% worker_link farmer plural=true %}, {% worker_link fisher plural=true %}, {% worker_link forester plural=true %}, {% worker_link miner plural=true %}, {% worker_link smelter plural=true %}, {% worker_link baker plural=true %}, {% worker_link cook plural=true %}, {% worker_link courier plural=true %}, five types of animal herders, {% worker_link composter plural=true %}, and many more, with even more being developed and added as the mod grows.

It also includes specialized buildings such as the {% building_link warehouse %}, {% building_link house %}, {% building_link townhall %}, {% building_link barracks %}, {% building_link library %}, {% building_link university %}, and even the {% building_link school %}.

### Please note that the wiki is a work in progress and will usually refer to the latest 1.18.2 and&#47;or 1.19.2 alpha version of MineColonies!

<hr />

<div class="row">
{% for item in site.data.subnav.subnav %}
    <div class="col-lg col-md-3 col-sm-12 text-center">
        <h3 class="button p-1">{{ item.title }}</h3>
        {% case item.type %}
            {% when "buildings" %}
                {% for entry in site.data.buildinginfo %}
                    {% building_link entry[0] %}<br />
                {% endfor %}
            {% when "workers" %}
                {% assign grouped = site.data.workerinfo | group_by_exp: "item", "item[1].type | default: 'default'" %}
                {% for group in grouped %}
                    {% unless forloop.first %}
                        <br/>
                    {% endunless %}
                    <span>{{ site.data.workertypes[group.name].name }}</span><br/>
                    {% for entry in group.items %}
                        {% worker_link entry[0] %}<br />
                    {% endfor %}
                {% endfor %}
            {% else %}
                {% for entry in item.subitems %}
                    <a href="{{ entry.url | relative_url }}">{{ entry.page }}</a><br />
                {% endfor %}
        {% endcase %}
    </div>
{% endfor %}
</div>

<hr />

MineColonies is a free and open-source mod developed by Let's Dev Together (LDT), a non-profit community. The source code is available on [GitHub](https://github.com/ldtteam/minecolonies). Our developers are a hard-working, well-integrated coding team, continuously adding more content to make the MineColonies experience even greater. However, we are always looking for more people to contribute to the mod, whether as a coder, builder, artist, voice actor, wiki editor, tester, or simply supporting us on [Patreon](https://www.patreon.com/minecolonies)!

Found a bug? Report it as an [issue](https://github.com/ldtteam/minecolonies/issues/new/choose) to help us give you the best gaming experience. If you require any help or just want to join the conversation, check us out on [Discord](https://discord.minecolonies.com)!
