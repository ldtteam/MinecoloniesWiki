---
title: Happiness and Saturation Systems
layout: default
---
# Happiness and Saturation Systems

The Saturation and Happiness systems for the citizens are locked in to each other, which means that the citizens require food to increase their happiness.

The citizens, however, will NOT die if their saturation goes down to 0, they will simply stop leveling, request food in chat regularly, and gain the slowness effect. The workers will stop working. This will affect the overall happiness of each citizen as well as the entire colony.

## Happiness System

There is an **overall** colony happiness and an **individual** citizen happiness. Higher colony happiness increases the initial level and skills of new colonists. Higher citizen happiness increases the rate the colonist's gains Intelligence when studying at a [Library](../../source/buildings/library).

Overall colony happiness is 1-10 (initially set to 5). Happiness depends on three basic factors: **security, housing, and saturation**.

If a colonist's saturation above 7 shanks, they will be more happy.
If the colonist's home (or for [guards](../../source/workers/guard), or [trainees](../../source/workers/archerintraining), workplace) is above level 2, the colonist will be more happy.
If two [Guards](../../source/workers/guard) are available for every three Workers, the colonists will be more happy.

These basic factors benefit from partial completion. Citizens will be happier with 5 shanks of saturation than 1, with 1 Guard for every 4 Workers than 1 Guard for every 10, and enjoy a level 2 house even more than a level 1 house. Colonists also become more happy as these values increase further, such as from upgrading a house to level 4 or 5, or being completely full on saturation.

Each time a citizen, other than a guard, dies, other citizens need to mourn the next day, and will be less happy for the next three days.  All citizens become slightly less happy for the next day when injured.

Every night, colonists will also become less happy if sick, homeless, unemployed, or with nothing to do at their jobs, and will become increasingly unhappy the longer the problem persists. Injury will reduce colonist happiness, as will guards who are unable to sleep. Colonists will also become less happy if fellow colonists become sick, starving, homeless, or unemployed.

Surviving a raid without losing any colonists provides a colony-wide happiness boost.

## Hunger/Saturation System

The citizen saturation system is between 0-10. If it's 0, the citizen won't level anymore, won't work anymore, will request food in chat regularly, and will have the slowness effect. If it's less than 3, the citizen won't heal<!-- and will have a -25% leveling speed. If it's between 3 and 5, the citizen will have a -10% leveling speed. If it's between 5 and 7, the citizen will have a +10% leveling speed. If it's between 7 and 10, the citizen will have a +25% leveling speed-->. If it's 10, the citizen will have a double healing speed<!-- and a +25% leveling speed-->. They increase their saturation by eating, just like the player. Saturation is displayed with the saturation bar in each citizen's GUI (it looks like the hunger bar in the player's HUD).

Every time a citizen goes to sleep (starts the walk back to their [House](../../source/buildings/house) or [Tavern](../../source/buildings/tavern)), they will decrease their saturation by 0.2 times their worker hut level. They will also decrease their saturation while working.

**Note:** When a citizen's hunger level gets to 3 or lower, they will head to the [Restaurant](../../source/buildings/restaurant) to get food from the [Cook](../../source/workers/cook). If there is no Cook, they will request in their GUI that you build them a Restaurant or provide them with food manually.
