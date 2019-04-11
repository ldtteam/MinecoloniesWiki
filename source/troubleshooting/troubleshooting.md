---
title: Minecolonies Wiki
layout: default
---
#Troubleshooting

## CHECKLIST: Identifying why a Citizen is not working <br>
<li> Is it daytime? Citizens do not work after sunset.</li>
<li> Is it raining? Citizens do not work in the rain.</li>
<li> Did a citizen die yesterday? Citizens will mourn the next day and not work if one of them died the day before.</li>
<li> Are there Barbarians or Pirates still around? Citizens will hide during raids until all attackers are killed.</li>
<li> Is their workhut of low level? Does worker have low XP at their career? Then they will often idle in between actually working until their personal XP improves and /or their workhut is upgraded. </li>
<li> Is their hut PAUSED? Work huts now have a pause button. Sometimes players forget to unpause.</li>
<li> Is their hunger level low? Citizens won't work while hungry. Give them food and if you have a Restaurant check that it is stocked. If they are hungry but won't eat the food they have, fire them until they eat then rehire them. </li>
<li> Do they have any open requests? They might need a tool or other material to continue their work. </li>
<li> Does their workhut have any open requests? They might be waiting for materials to continue their work. </li>
<li> Do they have tools of the correct [level](../../source/system/workerinfo)?</li>
<li> Is their inventory or their workhut inventory full? They will get stuck if they have no room to move things in or out.</li><br>
**Note**  If none of these apply, go on to the next Troubleshooting checklists.
<br>
<br>
## CHECKLIST: Troubleshooting a Citizen not working by Career<br>
<li>   Builder: Remember to click the "Build Building" button inside the hut block you want to be built. Then wait for the BuilderNPC to announce they have begun building. </li>
<li>   Woodcutter: Set which type of tree they are allowed to cut, and if they should replant them. </li>
<li>   Miner: Is there an ore they cannot mine in their way? Break it for them. </li>
<li>   Restaurant: Set which fuel you want them to use. </li>
<li>   Bakery: Set which fuel you want them to use, and which recipe you want them to make.</li>
<li>   Smelter: Set which fuel you want them to use. </li>
<li>   Farmer: Make sure each scarecrow has a seed set. Make sure all tilled soil is hydrated. </li>
<li>   Composter: Set which items you want them to convert into compost. </li>
<li>   Crafter: The request for materials must be made after the crafter is hired and the colony must have a Delivery person. Cancel the request at the original NPC to generate a new request, or make a new request from the PostBox.</li>
<li>   Crafter: Teach them the recipes they're allowed to craft and make sure afterwards that the recipes were saved. </li>
<li>   Crafter - Blacksmith: Set which fuel you want them to use. </li>
<li>   Crafter - StoneSmelter: Set which fuel you want them to use. They know their recipes already.</li>
<br>
<br>
## CHECKLIST: Troubleshooting a Citizen not working for unknown reason<br>
<li> Log out of the game. Open the (your game location)/config/minecolonies.cfg file.
    <ul> 1.) Go to the line <blue><pre># Should in development features be enabled (might be buggy)
    B:enableInDevelopmentFeatures=false</blue></pre></ul>
    <ul> 2.) Change the false to true</ul>
    <ul> 3.) Restart your game</ul>
    <ul> 4.) Watch the name area above the workers head, the information at the end will be important for devs to troubleshoot issues or assist you on the discord #help channel</ul></li>
<li>  Nudge worker by walking into them, off the block they are standing on or out a door. </li>
<li>  Recall worker to their workhut. </li>
<li>  Is the path to the worksite clear of obstructions? Recall worker to their workhut then follow them to see where they stop.</li>
<li>  Bug: They will get stuck if walking over a slab in the "top" position without another slab underneath. Check your slabs. </li>
<li>  Recall all Citizens to the TownHall. </li>
<li>  Pause the problem workhut, wait a few minutes, unpause the workhut and recall the worker. </li>
<li>  Fire worker, wait a few minutes, hire the same worker. </li>
<li>  Empty out worker's personal and workhut inventories, then only give them what they request in the amount requested until they have no more requests.</li>
<li>  Fire worker, empty out their personal and workhut inventories, wait for them to actually get into bed at night, after sunrise, hire the same worker. </li>
<li>  Punch them with empty hand (taking damage resynchronizes them with world). Never punch a guard, fire them first then punch then rehire. </li>
<li>  Use the /mc rs reset [Command](../../source/system/commands)</li>
<li>  Repair their workhut. Some buildings will stop working if required elements are not present. Only the BuilderNPC can place beds, crafting tables, furnaces, chests, racks, compost bins. If you broke any of those, break all of them and let the BuilderNPC repair the building. </li>
<li>  Fire worker, wait a few minutes, hire a different worker (You will lose advantage of the experience the first worker had accumulated at this career).</li>
