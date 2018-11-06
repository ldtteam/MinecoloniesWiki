---
title: Minecolonies Wiki
layout: default
---
# Commands

These are the in game commands currently available, most require that a user have operator privileges to work, or require that a single player world has cheats enabled. If you would like to make use of Permission nodes you require a server API such as SpongeForge along with a permissions system such as LuckPerms

- [Commands](#commands)
    - [Base Command](#base-command)
    - [Colonies Commands](#colonies-commands)
    - [Kill Commands](#kill-commands)
    - [Colony Commands](#colony-commands)
    - [Citizens Commands](#citizens-commands)
    - [RS Commands](#rs-commands)
{: .box .py-3 .pr-4 }

**Command Syntax**

| If you see this...   | Then                              |
| :------------------: | :-------------------------------: |
| plaintext            | Enter this exactly as shown       |
| `<angle brackets>`   | This is a **required** argument   |
| [square brackets]    | This is an **optional** argument  |
| `x | y | z`          | Pick one of these options         |

## Base Command

/minecolonies `<colonies | kill | colony | citizens | rs | rtp | backup | home | raid-tonight | raid-now | check | whoami | whereami | scan>` (/mc)

| Command | Command Description | Permission Node (Servers) | Default Permission Level |
|---------|---------------------|---------------------------|--------------------------|
| rtp     | Allows random teleporting around the world | com.minecolonies.coremod.RandomTeleport | OP |
| backup  | Makes a backup of your colony data | com.minecolonies.coremod.Backup | OP |
| home    | Teleports you back to the Town Hall in your colony | com.minecolonies.coremod.HomeTeleport | OP |
| raid-tonight | Schedule a barbarian raid for every colony, to start the coming night | com.minecolonies.coremod.RaidAllTonight | OP |
| raid-now | Schedule a barbarian raid for every colony to start right now | com.minecolonies.coremod.RaidAllNow | OP |
| check | Checks all colonies for ones where the owner hasn't played in a set amount of time, giving the option to delete them | com.minecolonies.coremod.CheckForAutoDeletes | OP |
| whoami | Outputs your name, the name of your colony and the coordinates for the center | com.minecolonies.coremod.WhoAmI | OP |
| whereami | Outputs how far you are from a colony, if you are near one, or that there is none nearby | com.minecolonies.coremod.WhereAmI | OP |
| scan [player: online player] `<x1: x coord> <y1: y coord> <z1: z coord> <x2: x coord> <y2: y coord> <z2: z coord>` [name: name] | Scans an area and saves it as a schematic | com.minecolonies.coremod.Scan | OP |
{: .table .table-responsive}

## Colonies Commands

/minecolonies colonies `<list | rsResetAll>`

| Command                  | Command Description                        | Permission Node (Servers)                      | Default Permission Level |
| ------------------------ | ------------------------------------------ | ---------------------------------------------- | ------------------------ |
| list [page: page number] | Lists all colonies                         | com.minecolonies.coremod.ListColonies          | OP                       |
| rsresetall               | Resets the request system for all colonies | com.minecolonies.coremod.RequestSystemResetAll | OP                       |
{: .table .table-responsive}

## Kill Commands

/minecolonies kill `<barbarians | animals | mob | chicken | cow | pig | sheep>`

| Command | Command Description | Permission Node (Servers) | Default Permission Level |
|---------|---------------------|---------------------------|--------------------------|
| barbarians | Kills all barbarians inside all colonies | com.minecolonies.coremod.BarbarianKill | OP |
| animals | Kills all animals inside all colonies | com.minecolonies.coremod.AnimalKill | OP |
| mob | Kills all mobs inside all colonies | com.minecolonies.coremod.MobKill | OP |
| chicken | Kills all chickens inside all colonies | com.minecolonies.coremod.ChickenKill | OP |
| cow | Kills all cows inside all colonies | com.minecolonies.coremod.CowKill | OP |
| pig | Kills all pig inside all colonies | com.minecolonies.coremod.PigKill | OP |
| sheep | Kills all sheep inside all colonies | com.minecolonies.coremod.SheepKill | OP |
{: .table .table-responsive}

## Colony Commands

/minecolonies colony `<info | delete | barbarians | addOfficer | refresh | ownerchange | teleport | deletable | raid | raid-tonight | claim>`

| Command | Command Description | Permission Node (Servers) | Default Permission Level |
|---------|---------------------|---------------------------|--------------------------|
| info [player: online player] [colony: colony id] | Shows some basic information about the colony specified (ID, Name, Mayor, Citizens, Coordinates, Last contact with owner, If the colony can be deleted   or not) | com.minecolonies.coremod.ShowColonyInfo | OP |
| delete <colony: colony id> [canDestroy: true/false] [confirmDelete: true/false] | Deletes a colony and all Minecolonies buildings (as long as the hut is still placed) | com.minecolonies.coremod.DeleteColony | OP |
| barbarians <colony: colony id> <disableSpawns: true/false> | Disables or Enables spawning of barbarians in a colony | com.minecolonies.coremod.DisableBarbarianSpawns | OP |
| addOfficer <colony: colony id> <player: online player> | Adds an officer to a colony | com.minecolonies.coremod.AddOfficer | OP |
| refresh [player: online player] [colony: colony id] | Refreshes a colony | com.minecolonies.coremod.RefreshColony | OP |
| ownerchange <colony: colony id> <player: online-player> | Changes the owner of a colony | com.minecolonies.coremod.ChangeColonyOwner | OP |
| teleport <colony: colony id> | Teleports you to the specified colony | com.minecolonies.coremod.ColonyTeleport | OP |
| deletable <colony: colony id> <canBeDeleted: true/false> | Sets whether a colony can be marked for auto-deletion or not | com.minecolonies.coremod.MakeNotAutoDeletable | OP |
| raid <colony: colony id> | Schedules a barbarian raid for the specified colony to start right now | com.minecolonies.coremod.DoRaidNow | OP |
| raid-tonight <colony: colony id> | Schedules a barbarian raid for the specified colony to start the coming night | com.minecolonies.coremod.DoRaidTonight | OP |
| claim [colony: colony id] [range: number in chunks] [add: true/false] | Claims chunks a specified number of chunks from your location | com.minecolonies.coremod.Claim | OP |
{: .table .table-responsive}

## Citizens Commands

/minecolonies citizens `<list | kill | respawn | info>`

| Command                                                     | Command Description                                           | Permission Node (Servers)               | Default Permission Level |
| ----------------------------------------------------------- | ------------------------------------------------------------- | --------------------------------------- | ------------------------ |
| list <colony: colony id> [page: page number]                | Lists all citizens in a colony                                | com.minecolonies.coremod.ListCitizens   | ALL                      |
| kill <colony: colony id> <citizen: citizen id/full name>    | Kills a specified citizen in a colony                         | com.minecolonies.coremod.KillCitizen    | ALL                      |
| respawn <colony: colony id> <citizen: citizen id/full name> | Respawns the specified citizen in a colony                    | com.minecolonies.coremod.RespawnCitizen | ALL                      |
| info <colony: colony id> <citizen: citizen id/full name>    | Gives basic information about a specified citizen in a colony | com.minecolonies.coremod.CitizenInfo    | ALL                      |
{: .table .table-responsive}

## RS Commands

/minecolonies rs `<reset>`

| Command                   | Command Description                    | Permission Node (Servers)        | Default Permission Level |
| ------------------------- | -------------------------------------- | -------------------------------- | ------------------------ |
| reset <colony: colony id> | Resets the request system for a colony | com.minecolonies.coremod.RSReset | OP                       |
{: .table .table-responsive}
