---
title: Colony Border System
layout: default
---
# Colony Border System

Colonies have an area of claimed chunks (16x16 block areas) around them. Upon colony creation, a colony claims chunks in a square around it. The radius is set with the [config](../../source/misc/configfile) setting *initialColonySize*, which has a default of 4 chunks (not including the chunk the Town Hall is in).

Those claims are protected from modification through other players. See the [Colony Protection System](../../source/systems/protection) page for more information.

Extending your claim area can be done by building huts. Huts claim a square area around them after they are built, expanding all sides from the chunk the hutblock is located in. How much they claim depends on the building. They won't claim over the max range, set with the [config](../../source/misc/configfile) setting *maxColonySize*, which has a default of 20 chunks (not including the chunk the Town Hall is in). 

Deconstructing a building *will* remove the chunks it claimed.

### Building Claim Areas:

#### [Town Hall](../../source/workers/chickenfarmer)

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

| Level | Additional Chunks |
| ----- | ----------------- |
| All   | 2 Chunk Radius    |
| 4+ and 4 towers built | 3 Chunk Radius |

#### Other Huts (non-decoration)

| Level | Additional Chunks |
| ----- | ----------------- |
| 1     | 1 Chunk Radius    |
| 2     | 1 Chunk Radius    |
| 3     | 1 Chunk Radius    |
| 4     | 2 Chunk Radius    |
| 5     | 2 Chunk Radius    |
