---
title: MineColonies Wiki
layout: default
---
# Claim system

---

Colonies have an area of claimed chunks around them. Upon colony creation, a colony claims chunks (16x16 block areas) in a square around it, the radius is set with the config setting *initialColonySize*. 

Those claims normally are protected from modification through other players, see Systems#Protection.

Extending your claim area can be done with buildings. Buildings do claim a square area around them after beeing built, expanding to all sides from the chunk the hutblock is located in. How much they claim depends on the building. They do not claim over the max range, set with the config setting *maxColonySize*.

Removing a building does remove the chunks it claimed, the colony's initial claim radius is excluded.

#### Building Claim Areas:

**TownHall:**

Level     |     Additional Chunks     
----  | ----
1   |  1 Chunk radius
3   |  2 Chunk radius                
4   |  3 Chunk radius                 
5   |  5 Chunk radius

**Normal Buildings** (non decoration):

Level     |     Additional Chunks
----  | ----
1 | 1 Chunk radius
2 | 1 Chunk radius
3 | 1 Chunk radius
4 | 2 Chunk radius
5 | 2 Chunk radius

**Guard Tower:**

Level     |     Additional Chunks
----  | ----
1   |    2 Chunk radius          
2   |    3 Chunk radius         
3   |    3 Chunk radius         
4   |    4 Chunk radius        
5   |    5 Chunk radius    

**Barracks**

Level     |     Additional Chunks
----  | ----
X |     average of Barrackstower level, up to 5 

     




# Old claims: 1.12 & 1.14
#### Static Claim Mode:

This claim method is the basic form and the one that is set by default. It is very simple and is set as soon as the Townhall is placed. It will set the claim and protection area for the Town according to the value in the config file (default set to 8 chunk radius).

Which means once the Townhall is placed, it will automatically claim 8 chunks in a square area; 8 chunks to the North, South, East and West. So the entire claimed chunks will be 17 x 17 chunks `(8 + 8 + 1 [chunk where the Townhall is placed] = 17 in the x and z coords)`.

This method is static and will _not_ grow or shrink with the Town development and it's **permanent**, can't be removed, changed or modified, except by commands.

If you have already placed a Townhall and want to change the size of the Town claim, you will have to change value in the config AND manually run the "claim" command to add more chunks to the already set claimed area.

Make sure to stand in the center of your Town claim area and then run the command: `/mc colony claim <colony: colony id> <dimension: dimension id> [range: number in chunks] [add: true | false]` to add more chunks to an already-placed Town Hall.

Also, once the Town Hall is placed, since the claim and protection area is permanent, you can break the Town Hall block and place anywhere else within the claimed area to build it.

#### Dynamic Claim Mode:

**_This claim method is a much more complex form and requires a lot of attention to detail, from its placement to its expansion possibilities._**

Let's begin by explaining the basics of this system:

**1-** The claim is set upon building placement and

**2-** It is expandable upon upgrading the building.

**3-** Newly placed/upgraded huts can expand the existing claim by claiming more unclaimed chunks up to the configuration limit from the center of the town (default 320 blocks).

**4-** Whenever you break a hut block, the claim it had will be "removed/deleted".

**5-** Placement of new huts can only be within the existing claims. As long as the Hut block is inside the existing claim, it will place successfully (even if the building itself is partially outside of the claim when viewing with building tool).

**6-** Breaking the TownHall block and placing it elsewhere will also remove its claim and any building outside of its new claim will not work.

**7-** If for some reason two players are too close and the claim seems to "overlap", the player that placed his claim first will keep the claim, the other player will simply **not** expand into an existing claim. Unless the existing claim removes the claim (by removing a building), then the new "overlapping" claim will take effect as there would be **no** claim in that space.

**Note:** An interesting feature is that in dynamic claim mode, when placing the Townhall, there is NO warning of being too close to another Town. Townhalls CAN be close to each other (outside each other's claim of course) thus allowing very close Town collaborations.

Since there is NO warning of "too close to another Town" to place Townhall tho (like in the static claim mode) it is up to the players to always check their surrounding areas for existing Towns and for players that might not be paying attention and trying to establish a Town or getting too close to an existing Town.

#### Worker Hut Claim Areas:

**TownHall:**

Level     |     Additional Chunks       |   Total Area
----  | ----  | ----
1   |   initial chunk + 4 chunk radius  |   Total: 9x9 
4   | +1 chunk radius                   |   Total 11x11 
5   | +1 chunk radius                   |   Total 13x13 


**Barracks** (x = {Barracks level + Tower1 level + Tower2 level + Tower3 level + Tower4 level} /5 ):

Level     |     Additional Chunks       |   Total Area
----  | ----  | ----
x ≥ 1 |     initial chunk                 |   Total: 1x1 
x ≥ 2 |    +1 chunk radius                |   Total: 3x3 
x ≥ 3 |    +1 chunk radius                |   Total: 5x5 
x ≥ 4 |    +1 chunk radius                |   Total: 7x7 
x ≥ 5 |    +1 chunk radius                |   Total: 9x9 


**Guard Tower:**

Level     |     Additional Chunks       |   Total Area
----  | ----  | ----
1   |     initial chunk                 |   Total: 1x1 
2   |    +1 chunk radius                |   Total: 3x3 
3   |    +1 chunk radius                |   Total: 5x5 
4   |    +1 chunk radius                |   Total: 7x7 
5   |    +1 chunk radius                |   Total: 9x9 

**All other Worker Hut Buildings** (non decoration):


Level     |     Additional Chunks       |   Total Area
----  | ----  | ----
1   |     initial chunk                 |   Total: 1x1 
3   |    +1 chunk radius                |   Total: 3x3 
5   |    +1 chunk radius                |   Total: 5x5 


#### Configuration Options:

**_This can be toggled in the Minecolonies.cfg file (The Static mode is set by default):_**

```
# Should the colony have a fixed radius or should it be dynamic
B:enableDynamicColonySizes=false
```

**_You can also set some other options related to both systems, depending on which one you have selected to use (Static or Dynamic)._**

```
# The minimum distances between town halls for dynamic colony sizes (used as default initial claim too).
I:minTownHallPadding=4
```

```
# Max distance a colony can claim a chunk from the center, 0 if disable maximum
I:workingRangeTownHall=320
```

```
# Colony size (radius in chunks around central colony chunk). Only for the static mode.
I:workingRangeTownHallChunks=8
```

```
# Should the min/max distance from spawn also affect colony placement?
B:restrictColonyPlacement=false
```

**_Or in-game through the "mod Options" button;_**

**1-** Select MineColonies and press the Config button.

**2-** Next screen select MineColonies button.

**3-** Next screen select gameplay button.

**_There you will find the options you can change:_**

* `enableDynamicColonySizes = false` (default value)
* `minTownHallPadding = 4` (default value)
* `townHallPaddingChunk = 1` (default value)
* `workingRangeTownHall = 320` (default value)
* `restrictColonyPlacement = false`  (default value)
