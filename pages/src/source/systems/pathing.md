---
title: Pathing System
layout: default
---
# Pathing System

You're sure to have noticed that getting your colonists to run the right way to their job isn't always easy. It almost seems like they have a mind of their own in how they move. Fortunately, there are some basic guidelines that help you corral these incorrigible colonists to go where you want them to faster.

## Getting Started

Unlike the normal villagers you might see in the world, your colonists are a bit smarter. They'll generally find a pretty good path to get where they want to go due to their advanced degrees in walking from Raycoms University and their RavenEyes© vision.

As such, they're able to move across flat ground, single-block steps, stairs, slabs, and other such blocks. They know how to open both wood and iron doors — even without any redstone input — trapdoors, and fence gates. They'll climb up and down ladders and vines just fine as well. However, they will try to avoid going through fences, as is expected, and generally will find a way around dangerous obstacles like fire, magma, lava, cacti, and sweet berry bushes.

## Getting Stuck

But what if a colonist can't find a path to where they want to go? What if, say, they fall in a hole and get stuck, or they're trying to climb somewhere high up that doesn't have any way there yet, or if they get trapped inside a wall by an overenthusiastic Builder? Not to fear! Your colonists are also slightly magical in that, if they're stuck in one place for too long, they'll build up enough willpower to relocate themselves forcibly to a nearby valid location and continue on their way. 

This does take a while, though, and sometimes can result in unforeseen circumstances, like a guard Leeroy Jenkins-ing into a cave, only to be overwhelmed by monsters. However, this is rare and generally won't be an issue.

## Pathblocks

On certain pathblocks (in 1.18 [[list]](https://github.com/ldtteam/minecolonies/blob/version/main/src/datagen/generated/minecolonies/data/minecolonies/tags/blocks/pathblocks.json) and 1.19 [[list]](https://github.com/ldtteam/minecolonies/blob/version/1.19/src/datagen/generated/minecolonies/data/minecolonies/tags/blocks/pathblocks.json)), your colonists move faster and stick to the paths when pathfinding. Building roads out of these can help keep them on a safe path and get them around the colony faster.

## Waypoints and Decorative Paths

Waypoints are also used to guide your citizens along the right path, but whereas the pathblocks are for local pathing, waypoints are used more for long-distance pathing. Adding a waypoint onto bridges, for example, or in areas that you want citizens to traverse a little more frequently, can help them path across the colony more easily. As such, you don't need very many waypoints: having a couple here and there where the pathing may be more difficult is plenty.

The Builder can build waypoints if you request them with the [build tool](../items/buildtool). You can find them in the under the decorative elements of the build tool. 

To remove a waypoint, place a solid block, such as dirt, on the waypoint and wait a few minutes. After a while, you can remove the block, and the waypoint should be removed.

The build tool also includes several decorative paths as part of the schematics. These paths often include waypoints, so you can see how the professional schematics designers used them.

## Research

There are several researches your [University](../buildings/university) can unlock that increase colonist move speed. Check the [Research System](../../source/systems/research) page for more details.

One research of note is the Rails research. It allows colonists to use rails to move around the colony. They automagically create their own minecart, so all you need to do is place rails down. The rails don't need to be powered, either! However, the extra boost of powered rails can still help with some of the tougher hills.

Intersections should include a block or two gap. Colonists will sometimes overshoot a turn in their minecart, so including a gap at intersections will ensure they don't overshoot their turn.

## Water

Although your colonists generally prefer to be on land, they can slowly bob up and down on the surface of the water the same way you do. However, they don't know how to use boats. Do try to keep them from drowning!

## Mounts

Colonists do not interact with any mounts yet, but mounted knights are planned eventually!
