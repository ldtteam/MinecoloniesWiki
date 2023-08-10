---
type: building
building: mine
layout: building
---
{% capture content %}
The Mine is where you can hire a {% worker_link miner %} to work the mine, or a {% worker_link quarrier %} to work the {% building_link quarry %}. If you hire a Quarrier, there will be no Miner at this Mine. 

At the Mine, the Miner will mine for ores and materials. Once they are hired, the Miner will first create a shaft downward to a specific depth depending on the level of the Mine.  Once the main shaft is completed, the Miner will then branch out.

While mining, sometimes the Miner will get lucky and get an ore block instead of a basic stone block. The chance of getting "Lucky Ores" is set in the [config](../../source/misc/configfile).

**Note:** Placing the Mine hut below the maximum Y level it can mine will cause the Miner not work and complain the hut needs to be upgraded.  To avoid this error, place the hut at least 4 blocks above the maximum depth for the hut level (above Y=54 for 1.16 or Y=44 for 1.18 level 1).  If you want your mine to be lower, you will need to upgrade it before the miner will work.

| Mine Level | Shaft Y Level | Shaft Y Level |
|------------|---------------|---------------|
|            | 1.16          | 1.18+         |
| 1          | 50            | 40            |
| 2          | 30            | 20            |
| 3          | Bedrock       | 0             |
| 4          |               | Bedrock       |
{% endcapture %}
{% capture infobox %}
{% include infobox/building.html %}
{% endcapture %}
{% include infobox/wrapper.html content=content infobox=infobox %}

## {% building %} GUI

{% building_gui_content_block_main order=1 %}
{% building_gui_content_block_craftingrecipes order=2 %}
{% building_gui_content_block_stock order=3 %}
{% building_gui_content_block_requiredresources order=4 %}
{% building_gui_content_block_custom order=5 header="levels" image_key="levels" image_alt="Levels" %}
The level refers to the platforms the {% worker miner %} will place every 3 blocks down. Here you can assign what level of the {% building %} the {% worker miner %} will create their mineshafts (nodes).
If a level has a red number next to it, that means the {% worker miner %} is currently mining that level.
The {% worker miner %} will ignore orders to mine at a specific level until the entire mineshaft is completed to the maximum depth their hut's level allows.
You can also click Repair, to tell the {% worker miner %} to restore that level to its original state. This can be useful if a fire breaks out in the mineshaft.
{% endbuilding_gui_content_block_custom %}
{% building_gui_content_block_settings order=6 %}
{% building_gui_content_block_custom order=7 header="guards" image_key="guards" image_alt="Guards" %}
Here is where you can assign guards to patrol this {% building %}. If assigned, they will patrol the level the {% worker miner %} is currently mining at, to help protect them from hostile mobs.
Only guards set to the Patrol Mine task will show up here; tasks can be set in the {% building_link guardtower %} it's GUI ({% building_link barrackstower plural=true %} do not have the Patrol Mine task).

The amount of guards you can assign to the mine changes based on the {% building %} it's level.

| Mine Level | Amount of guards |
|------------|------------------|
| 1          | 1                |
| 2          | 1                |
| 3          | 2                |
| 4          | 2                |
| 5          | 3                |
{% endbuilding_gui_content_block_custom %}