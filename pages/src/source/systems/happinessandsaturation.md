---
title: Happiness and Saturation Systems
layout: default
---
# Happiness and Saturation Systems

The Saturation and Happiness systems for the citizens are locked in to each other, which means that the citizens require food to increase their happiness.

The citizens, however, will NOT die if their saturation goes down to 0, they will simply stop leveling, request food in chat regularly, and gain the slowness effect. The workers will stop working. This will affect the overall happiness of each citizen as well as the entire colony.

## Happiness System

There is an **overall** colony happiness and an **individual** citizen happiness. Higher colony happiness increases the initial level and skills of new colonists. Higher citizen happiness increases the rate colonists gain Intelligence when studying at a {% building_link library %}.

Overall colony happiness is 1-10 (initially set to 5). Happiness depends on three basic factors: **security, housing, and saturation**.

If a colonist's saturation is above 14 shanks, they will be happier.
If the colonist's home (or for Guards/trainees, their workplace) is above level 2.5, the colonist will be happier.
If at least two Guards exist for every three citizens, the colonists will be happier.

These basic factors benefit from partial completion. Citizens will be happier with 5 shanks of saturation than 1, with 1 Guard for every 4 workers than 1 Guard for every 10, and enjoy a level 2 house more than a level 1 house. Colonists also become happier as these values increase further, such as from upgrading a house to level 4 or 5 or having completely full saturation.

Each time a citizen (other than a Guard) dies, other citizens will mourn the next day and be less happy for the next three days. All citizens become slightly less happy for the next day when injured.

Every night, colonists will also become less happy if they are sick, homeless, unemployed, or have nothing to do at their job, and will become increasingly unhappy the longer the problem persists. Citizens (other than Guards) unable to make it to their bed at night to sleep will become unhappy. Fellow colonists' livelihood also matters for happiness (the Social Factor in the {% building_link townhall %}'s happiness page).

Surviving a raid without losing any colonists provides a colony-wide happiness boost.

Colonists also like to have Guards near their homes and work places. Each {% building_link guardtower %} will provide a feeling of protection to the colonists based on how far it expands your [borders](../../source/systems/border). However, sometimes colonists may not recognize a newly placed Guard Tower until you tell them that their concerns for their safety have to do for now.

## Hunger/Saturation System

The citizen saturation system is between 0-20. If it's 0, the citizen won't level anymore, won't work anymore, will request food in chat regularly, and will have the slowness effect. If it's less than 6, the citizen won't heal<!-- and will have a -25% leveling speed. If it's between 6 and 10, the citizen will have a -10% leveling speed. If it's between 10 and 14, the citizen will have a +10% leveling speed. If it's between 14 and 20, the citizen will have a +25% leveling speed-->. If it's 20, the citizen will have a double healing speed<!-- and a +25% leveling speed-->. They increase their saturation by eating, just like the player. Saturation is displayed with the saturation bar in each citizen's GUI (it looks like the hunger bar in the player's HUD).

Every time a citizen goes to sleep (starts the walk back to their {% building_link house %} or {% building_link tavern %}), they will decrease their saturation by 0.2 times their worker hut level. They will also decrease their saturation while working.

Citizens will demand higher levels of food based on their workplace level. **They will not eat food that doesn't meet (or exceed) their requirements.**

| Workplace Level | Min Food Level Requested (in shanks) |
|-----------------|--------------------------------------|
| 0               | Any                                  |
| 1               | 0.5                                  |
| 2               | 1                                    |
| 3               | 1.5                                  |
| 4               | 2                                    |
| 5               | 2.5                                  |

When a citizen's hunger level gets to 6 or lower, they will head to the {% building_link restaurant %} to get food from the {% worker_link cook %}. If there is no Cook, they will request in their GUI that you build them a Restaurant or provide them with food manually.
