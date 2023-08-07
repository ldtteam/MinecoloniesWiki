---
type: building
building: builder
layout: building
---
{% capture content %}
### Before you build *any* other building, you must build the Builder's Hut. If the Builder’s Hut is not built, the Builder cannot build other buildings.

Before you choose a place to build the Builder's Hut, take into account the distances among the other possible building sites and obstacles like water, trees, caves, mountains, lava sources, etc. After you have selected a place for the hut, you have to craft the Builder’s Hut block and place it with your [build tool](../items/buildtool). Once the hut is placed, the Builder will be automatically assigned (or you can manually assign one with the best [Traits](../systems/worker) for a Builder if you changed this in the settings tab in the {% building_link townhall %}).

Now you will have to issue the build assignment so the Builder can build their own hut first. The Builder will ask for the materials they need. Make sure to check the [Resource Scroll](../../source/items/resourcescroll) or the Required Resources tab of the Builder's Hut GUI to see what materials the Builder is requesting for any build/upgrade. Any material in the list that is still missing will be in red letters.

Once the Builder's Hut is built you can now build anything you want, like worker huts, buildings, decorations, or your own schematics.

- **Note:** The Builder can only build or upgrade any other hut up to the level of their own hut. So, in order for the Builder to upgrade any building, the Builder's Hut must be upgraded first. Then the Builder will be able to upgrade any other building(s).

## Hints and Tips

For the placement of the Builder's Hut, you should consider having the hut in the middle of where you plan to have the rest of your buildings so that the Builder has less of a distance to walk between their hut and the build sites.

The Builder will not start another build assignment until they have finished the current one.

You can go into the Town Hall's GUI and click on the work orders tab to cancel builds as well as arrange the priorities of the other build orders you have there. If you cancel a work order and it was being built already, if you assign the build order again, the Builder will continue where they left off.

If the Builder removes a block while building and/or upgrading, they will keep it in their inventory and dump any items in their inventory at the end of a build into the Builder's Hut inventory.
{% endcapture %}
{% capture infobox %}
{% include infobox/building.html %}
{% endcapture %}
{% include infobox/wrapper.html content=content infobox=infobox %}

## Builder's Hut GUI

{% include contentblock/building/main-gui.html header="When accessing the Builder's Hut block by right-clicking on it, you will see a GUI with different options. You start on the main tab:" image="../../assets/images/gui/buildergui1.png" %}

{% include contentblock/building/stock-gui.html buildingname="Builder's Hut" header="The second tab of the GUI is <strong>Minimum Stock</strong>. It has one button:" image="../../assets/images/gui/buildergui2.png" %}

{% include contentblock/building/settings-gui.html key="builder" header="The third tab of the GUI is <strong>Settings</strong>." image="../../assets/images/gui/buildergui3.png" %}

{% include contentblock/building/other-gui.html header="The fourth tab of the GUI is <strong>Crafting Recipes</strong>." content="Here you can see all the crafting recipes this hut knows.  The arrows allow you to move them up or down in priority.  You are also able to disable specific recipes.<p><strong> Teach Recipe:</strong> When clicking teach recipe, it opens a crafting grid which allows you to teach this hut recipes (not the worker).</p>" image="../../assets/images/gui/buildergui4.png" %}

{% include contentblock/building/other-gui.html header="The fifth tab of the GUI is <strong>Work Orders</strong>." content="This page shows you what buildings have been assigned to this builder, along with the distance away from the builder's hut.  You can cancel the work order here." image="../../assets/images/gui/buildergui5.png" %}

{% include contentblock/building/other-gui.html header="The sixth tab of the GUI is <strong>Required Resources</strong>." content="These are the resources that the Builder will need for the build order they are currently working on.
- **Current project** The top line tells you which building is being worked on and its level.
- **Step** What step of the project the builder is on.
- **Supplied % / Used %** How much of the needed resources are in the builder hut inventory, and how many of the resources have been placed.
- **Item** Each needed item is displayed, along with how many of that item is in inventory, and how many are needed. These amounts will change as they place blocks and will show only what blocks the Builder still needs to place. The block in black are in their inventory. The blocks in red are the ones neither you nor the Builder has in their inventory. The blocks in green are ones you have in inventory but the builder needs.  Clicking the up arrow next to the item will automatically remove that item from your inventory and place it into the builder's." image="../../assets/images/gui/buildergui6.png" %}