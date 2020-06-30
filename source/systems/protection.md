---
title: Colony Protection System
layout: default
---
# Colony Protection System

Our Colony Protection System (once a [Town Hall](../../source/buildings/townhall) is placed) can be toggled in the config file.

The protection includes turning explosions off (by default), so creepers, TNT, and any modded blocks won't destroy your colony. By default, only the colony owner can break or place blocks within a colony, but you can add other players in the permissions section of the Town Hall GUI.

It also covers from Y = 0 to Y = 256, so you don't have to worry about griefing from bedrock to the sky limit.

**Note:** The protection system depends on the border system. Only areas that are within the colony's border will be protected. See [Colony Border System](../../source/systems/border) for more information.

### Config File Options

```
# Should colony protection be enabled?
B:enableColonyProtection=true
```

```
# Independent from the colony protection setting (above), should explosions be turned off inside colonies?
B:turnOffExplosionsInColonies=true
```

```
# Should players be allowed to build their colonies over existing (vanilla) villages?
B:protectVillages=true
```
