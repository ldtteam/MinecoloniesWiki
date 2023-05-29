---
title: Waypoint
layout: default
---
# Waypoint

<div class="infobox box text-center">
    <p style="text-align:center;"><img src="../../assets/images/items/waypoint.png" alt="Waypoint"></p>
    <recipe>waypoint</recipe>
</div>

Waypoints tell your citizens where to walk. For example, you might put one on a road so your citizens will walk on it.
<br>

## Using the Waypoint

In schematics, you can place a waypoint to denote where workers should walk. When traveling from place to place, your citizens will walk through the waypoints along the way. They are mostly used in road schematics but can be used in any schematic. However, they should be used sparingly. There are no restrictions on where they can be placed, but when a citizen is nearby they will go to it or try to, so make sure they are placed in appropriate and accessible locations.

When placing a waypoint, do **not** craft one and place it on the ground. 

{% version "1.18.2" before=true %}
Open the [build tool](../../source/items/buildtool) GUI, then go to Decorations -> Infrastructure -> Waypoint, and place the build order.
{% endversion %}

{% version "1.19.2" after=true %}
Open the build tool GUI, use the Minecolonies Original pack, then go to Infrastructure -> misc -> Waypoint, and place the build order.
{% endversion %}

This tells the [Builder](../../source/workers/builder) to place the waypoint where you want it. If you did it right, the waypoint should be invisible.

To remove a waypoint, place a solid block, such as dirt, on the waypoint and wait a few minutes. If you're not sure where the waypoint is, you can hold a build tool to see it. After a while, you can remove the block, and the waypoint should be removed.
