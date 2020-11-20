---
title: Colony Border System
layout: default
---
# Colony Border System

Colonies have an area of claimed chunks (16x16 block areas) around them. Upon colony creation, a colony claims chunks in a square around it. The radius is set with the config setting *initialColonySize* (default 4x4 chunks). 

Those claims are protected from modification through other players. See the [Colony Protection System](../../source/systems/protection) page for more information.

Extending your claim area can be done by building huts. Huts claim a square area around them after they are built, expanding all sides from the chunk the hutblock is located in. How much they claim depends on the building. They won't claim over the max range, set with the config setting *maxColonySize* (default 20x20 chunks).

Deconstructing a building *will* remove the chunks it claimed.

### Building Claim Areas:

#### [Town Hall](../../source/buildings/townhall)

| Level | Additional Chunks |
| ----  | ----------------- |
| 1     |  1 Chunk Radius   |
| 3     |  2 Chunk Radius   |
| 4     |  3 Chunk Radius   |
| 5     |  5 Chunk Radius   |

#### [Guard Towers](../../source/buildings/guardtower)

| Level | Additional Chunks |
| ----- | ----------------- |
| 1     | 2 Chunk Radius    |
| 2     | 3 Chunk Radius    |
| 3     | 3 Chunk Radius    |
| 4     | 4 Chunk Radius    |
| 5     | 5 Chunk Radius    |

#### [Barracks](../../source/buildings/barracks)

| Level | Additional Chunks                                                                 |
| ----- | --------------------------------------------------------------------------------- |
| All   | Average of [Barracks Tower](../../source/buildings/barrackstower) levels, up to 5 |

#### Other Huts (non-decoration)

| Level | Additional Chunks |
| ----- | ----------------- |
| 1     | 1 Chunk Radius    |
| 2     | 1 Chunk Radius    |
| 3     | 1 Chunk Radius    |
| 4     | 2 Chunk Radius    |
| 5     | 2 Chunk Radius    |
