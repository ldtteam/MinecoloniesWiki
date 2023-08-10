---
type: building
building: warehouse
layout: building
---
{% capture content %}
The Warehouse is the central storage from where a Courier will store and retrieve everything your workers harvest, craft, or need. Items will be stored in [racks](../../source/items/rack).

The level of the Warehouse will determine how many Couriers will be able to use it at the same time. Level up the Warehouse to increase the amount of Couriers that can work in it. Leveling up the Warehouse will also increase its storage capacity.

| Building Level | Max Couriers |
|----------------|--------------|
| 1              | 2            |
| 2              | 4            |
| 3              | 6            |
| 4              | 8            |
| 5              | 10           |
{% endcapture %}
{% capture infobox %}
{% include infobox/building.html %}
{% endcapture %}
{% include infobox/wrapper.html content=content infobox=infobox %}

## {% building %} GUI

{% building_gui_content_block_main order=1 %}
{% building_gui_content_block_custom order=2 header="workers" image_key="workers" image_alt="Workers" %}
- **Assigned Workers:** A list of the {% worker_link courier plural=true %} assigned to this Warehouse.
- **Manage Workers:** You can choose which {% worker_link courier plural=true %} to hire at the {% building %}. **Note:** this only works if you have turned the worker hiring mode in the {% building %} block to manual, otherwise your {% worker_link courier plural=true %} will be hired automatically.
- **Recall Workers:** Recalls the {% worker_link courier plural=true %} at this {% building %} to the hut block. You might use it if they are stuck somewhere, you want to see what they have, or want to give them something directly.
{% endbuilding_gui_content_block_custom %}
{% building_gui_content_block_stock order=3 %}
{% building_gui_content_block_custom order=4 header="storage" image_key="storage" image_alt="Upgrade storage" %}
- **Block of Emerald:** You can increase the max amount of stacks in each rack by pressing this button. This can only be done when the {% building %} is at level 5 and you have at least one block of emerald in your inventory. The storage can be increased 3 times.
- **Sort:** The sort option is available when the {% building %} reaches level 3. It sorts and stacks all the items in the racks.</li>>
{% endbuilding_gui_content_block_custom %}