---
type: building
building: barracks
layout: building
---
{% infobox_building %}
The Barracks is the ultimate protection for your colony. Each Barracks can hold multiple {% building_link barrackstower %} within its structure. The Barracks Towers (unlike the normal {% building_link guardtower %}) will employ *and* house one Guard for every level built, for a total of 5 Guards per Barracks Tower! Each new Guard will need a bed in a house in order to spawn. However, once they are hired at the Barracks Tower, that becomes their new residence and the bed in the house will open up for another new citizen. Currently, all official-style Barracks contain 4 Barracks Towers for a total of 20 Guards per Barracks for your colony. However, custom styles can have more or fewer than 4 Barracks Towers. Colonists like feeling safe, so building Barracks close to colonists' work and homes can improve their [happiness](../../source/systems/happinessandsaturation).

| Barracks Level | Max # of Barracks Towers | Max Level of Barracks Towers |
|----------------|--------------------------|------------------------------|
| 1              | 1                        | 1                            |
| 2              | 2                        | 2                            |
| 3              | 3                        | 3                            |
| 4              | 4                        | 4                            |
| 5              | 4                        | 5                            |

**Note:** The Barracks has slightly higher border expansion than other buildings. See the [border system](../../source/systems/border) page for more information.
<br>
{% endinfobox_building %}

## {% building %} GUI

{% building_gui_content_block_custom order=1 header="main interface" image_key="main" image_alt="Main" %}
- Header:
    - **Building Name**: Shows the name of the building, including the level of the building.
    - **Pencil**: Allows you to rename the building. The level of the building will always be listed after the name.
    - **Current Barbarian Position and Last Barbarian Spawn**: A tracker system for Barbarians. **Note:** you can only see the current barbarian position if you have **hired spies** (see below) during the current raid.
- Controls:
    - **Build Options**: Lets you create a build, upgrade, or repair build order for this hut. To learn more about the building system, please visit the {% worker_link builder %} page.
    - **Hire Spies**: This option is only available after the hut is level 3. Here you can hire spies during raids.
- Footer:
    - **Info Button**: Some huts have an in-game guide. Press the ? button to access it.
    - **Inventory**: Here you can access the hut block’s storage, where the worker at this hut takes and deposits materials. They will also use any racks that were placed in the hut when it was built or upgraded, so be sure to check those as well!
    - **Chest Icon**: Click this button to see all the items in the hut’s storage (including the hut block’s inventory and any racks that came with the hut). Clicking the ? button next to an item’s count will highlight the storage container it’s in.
{% endbuilding_gui_content_block_custom %}
{% building_gui_content_block_custom image_key="hiringspies" image_alt="Hiring spies" %}
Before each raid, you are able to hire spies for 5 gold per raid, these spies will go out into the world and if barbarians are spotted, the spies will tell you exactly where the barbarians are.
{% endbuilding_gui_content_block_custom %}