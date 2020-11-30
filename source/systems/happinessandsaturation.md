---
title: Happiness and Saturation Systems
layout: default
---
# Happiness and Saturation Systems

The Saturation and Happiness systems for the citizens are locked in to each other, which means that the citizens require food to increase their happiness.

The citizens, however, will NOT die if their saturation goes down to 0, they will simply stop leveling, request food in chat regularly, and gain the slowness effect. The workers will stop working. This will affect the overall happiness of each citizen as well as the entire colony.

## Happiness System

There is an **overall** colony happiness and an **individual** worker happiness.

Overall colony happiness is 1-10 (initially set to 5). Happiness depends on three basic factors: **security, housing, and saturation**.

Every night the overall colony happiness is recalculated based on the following: If the average colonist saturation is greater than 5 it adds 0.1 per level, and if it's less than 5 it subtracts 0.1 per level.
If the average colonist housing is greater than 1, it adds 0.1 per level.
If 1 [Guard](../../source/workers/guard) level exists for each worker level (worker level 5 needs a Guard level 5, for example), 0.1 is added for each average level more and 0.1 is subtracted for each average level less.

Each time a citizen is killed by a player, the overall happiness will decrease by 9 but won't go lower than 1. Each time a citizen dies otherwise (from a mob, falling, getting burned, etc) it will decrease by 1 (and won't go lower than 1).

## Hunger/Saturation System

The citizen saturation system is between 0-10. If it's 0, the citizen won't level anymore, won't work anymore, will request food in chat regularly, and will have the slowness effect. If it's less than 3, the citizen won't heal<!-- and will have a -25% leveling speed. If it's between 3 and 5, the citizen will have a -10% leveling speed. If it's between 5 and 7, the citizen will have a +10% leveling speed. If it's between 7 and 10, the citizen will have a +25% leveling speed-->. If it's 10, the citizen will have a double healing speed<!-- and a +25% leveling speed-->. They increase their saturation by eating, just like the player. Saturation is displayed with the saturation bar in each citizen's GUI (it looks like the hunger bar in the player's HUD).

Every time a citizen goes to sleep (starts the walk back to their [Citizen's Hut](../../source/buildings/citizenhut) or [Tavern](../../source/buildings/tavern)), they will decrease their saturation by 0.2 times their worker hut level. They will also decrease their saturation while working.

**Note:** When a citizen's hunger level gets to 3 or lower, they will head to the [Restaurant](../../source/buildings/restaurant) to get food from the [Cook](../../source/workers/cook). If there is no Cook, they will request in chat that you build them a Restaurant or provide them with food manually.
