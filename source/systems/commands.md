---
title: MineColonies Wiki
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

| If you see this...  |               Then               |
| :-----------------: | :------------------------------: |
|     `plaintext`     |   Enter this exactly as shown    |
| `<angle brackets>`  | This is a **required** argument  |
| `[square brackets]` | This is an **optional** argument |
|     `x | y | z`     |    Pick one of these options     |

## Base Command

/minecolonies `<colonies | kill | colony | citizens | rs | rtp | backup | home | raid-tonight | raid-now | check | whoami | whereami | scan | help>` (/mc)

<table class="table">
  <thead>
    <tr>
      <th class="w-50">Command</th>
      <th class="d-none d-lg-table-cell w-50">Command Description</th>
    </tr>
  </thead>
  <tbody>
    <tr class="d-block d-lg-table-row">
      <td class="d-block d-lg-table-cell"><code>/mc rtp</code><br><br><span class="perm">Permission node: com.minecolonies.coremod.RandomTeleport</span><br>Default Permission Level: OP
      </td>
      <td class="d-block d-lg-table-cell">Allows random teleporting around the world, will place the player outside the range of someone else's colony</td>
    </tr>
    <tr class="d-block d-lg-table-row">
      <td class="d-block d-lg-table-cell"><code>/mc backup</code><br><br><span class="perm">Permission node: com.minecolonies.coremod.Backup</span><br>Default Permission Level: OP<br></td>
      <td class="d-block d-lg-table-cell">Makes a backup of all colony data</td>
    </tr>
    <tr class="d-block d-lg-table-row">
      <td class="d-block d-lg-table-cell"><code>/mc home</code><br><br><span class="perm">Permission node: com.minecolonies.coremod.HomeTeleport</span><br>Default Permission Level: OP</td>
      <td class="d-block d-lg-table-cell">Teleports a colony owner back to the Town Hall of their colony</td>
    </tr>
    <tr class="d-block d-lg-table-row">
      <td class="d-block d-lg-table-cell"><code>/mc raid-tonight</code><br><br><span class="perm">Permission node: com.minecolonies.coremod.RaidAllTonight</span><br>Default Permission Level: OP</td>
      <td class="d-block d-lg-table-cell">Schedule a barbarian raid for every colony, to start the coming night</td>
    </tr>
    <tr class="d-block d-lg-table-row">
      <td class="d-block d-lg-table-cell"><code>/mc raid-now</code><br><br><span class="perm">Permission node: com.minecolonies.coremod.RaidAllNow</span><br>Default Permission Level: OP</td>
      <td class="d-block d-lg-table-cell">Schedule a barbarian raid for every colony to start right now</td>
    </tr>
    <tr class="d-block d-lg-table-row">
      <td class="d-block d-lg-table-cell"><code>/mc check</code><br><br><span class="perm">Permission node: com.minecolonies.coremod.CheckForAutoDeletes</span><br>Default Permission Level: OP</td>
      <td class="d-block d-lg-table-cell">Checks all colonies for ones where the owner hasn't played in a set amount of time, giving the option to delete them</td>
    </tr>
    <tr class="d-block d-lg-table-row">
      <td class="d-block d-lg-table-cell"><code>/mc whoami</code><br><br><span class="perm">Permission node: com.minecolonies.coremod.WhoAmI</span><br>Default Permission Level: OP</td>
      <td class="d-block d-lg-table-cell">Outputs the player's name, the name of their colony and the coordinates for the center</td>
    </tr>
    <tr class="d-block d-lg-table-row">
      <td class="d-block d-lg-table-cell"><code>/mc whereami</code><br><br><span class="perm">Permission node: com.minecolonies.coremod.WhereAmI</span><br>Default Permission Level: OP</td>
      <td class="d-block d-lg-table-cell">Outputs how far the player is from a colony, if they are near one, or that there is none nearby</td>
    </tr>
    <tr class="d-block d-lg-table-row">
      <td class="d-block d-lg-table-cell"><code>/mc scan [player: online player] &lt;x1: x coord&gt; &lt;y1: y coord&gt; &lt;z1: z coord&gt; &lt;x2: x coord&gt; &lt;y2: y coord&gt; &lt;z2: z coord&gt; [name: name of schematic]</code><br><br><span class="perm">Permission node: com.minecolonies.coremod.Scan</span><br>Default Permission Level: OP</td>
      <td class="d-block d-lg-table-cell">Scans an area and saves it as a schematic (Command version of what the scan tool can be used for)<br><br>Examples:<br><code>/mc scan x1: 1 y1: 1 z1: 1 x2: 5 y2: 5 z2: 5</code><br><code>/mc scan player: Steve x1: 1 y1: 1 z1: 1 x2: 5 y2: 5 z2: 5</code><br><code>/mc scan x1: 1 y1: 1 z1: 1 x2: 5 y2: 5 z2: 5 name: MyAwesomeDecoration</code></td>
    </tr>
     <tr class="d-block d-lg-table-row">
      <td class="d-block d-lg-table-cell"><code>/mc help</code><br><br><span class="perm">Permission node: com.minecolonies.coremod.Scan</span><br>Default Permission Level: ALL</td>
      <td class="d-block d-lg-table-cell">Displays the URL for the wiki as well as the URL for the Discord server.</code></td>
    </tr>
  </tbody>
</table>

## Colonies Commands

/minecolonies colonies `<list | rsResetAll>`

<table class="table">
  <thead>
    <tr>
      <th class="w-50">Command</th>
      <th class="d-none d-md-table-cell w-50">Command Description</th>
    </tr>
  </thead>
  <tbody>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc colonies list [page: page number]</code><br><br><span class="perm">Permission node: com.minecolonies.coremod.ListColonies</span><br>Default permission level: OP</td>
      <td class="d-block d-md-table-cell">Lists all colonies (9 results per page) with each colonies' ID, Name and Coordinates<br><br>Examples:<br><code>/mc colonies list</code><br><code>/mc colonies list page: 5</code></td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc colonies rsresetall</code><br><br><span class="perm">Permission node: com.minecolonies.coremod.RequestSystemResetAll</span><br>Default permission level: OP</td>
      <td class="d-block d-md-table-cell">Resets the request system for all colonies, forcing all colonists to re-request if they need to</td>
    </tr>
  </tbody>
</table>

## Kill Commands

/minecolonies kill `<raiders | animals | mob | chicken | cow | pig | sheep>`

<table class="table">
  <thead>
    <tr>
      <th class="w-50">Command</th>
      <th class="d-none d-md-table-cell w-50">Command Description</th>
    </tr>
  </thead>
  <tbody>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc kill raiders</code><br><br><span class="perm">Permission node: com.minecolonies.coremod.BarbarianKill</span><br>Default permission level: OP</td>
      <td class="d-block d-md-table-cell">Kills all raiders (barbarians or Pirates) inside all colonies</td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc kill animals</code><br><br><span class="perm">Permission node: com.minecolonies.coremod.AnimalKill</span><br>Default permission level: OP</td>
      <td class="d-block d-md-table-cell">Kills all animals inside all colonies</td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc kill mob</code><br><br><span class="perm">Permission node: com.minecolonies.coremod.MobKill</span><br>Default permission level: OP</td>
      <td class="d-block d-md-table-cell">Kills all mobs inside all colonies</td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc kill chicken</code><br><br><span class="perm">Permission node: com.minecolonies.coremod.ChickenKill</span><br>Default permission level: OP</td>
      <td class="d-block d-md-table-cell">Kills all chickens inside all colonies</td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc kill cow</code><br><br><span class="perm">Permission node: com.minecolonies.coremod.CowKill</span><br>Default permission level: OP</td>
      <td class="d-block d-md-table-cell">Kills all cows inside all colonies</td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc kill pig</code><br><br><span class="perm">Permission node: com.minecolonies.coremod.PigKill</span><br>Default permission level: OP</td>
      <td class="d-block d-md-table-cell">Kills all pig inside all colonies</td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc kill sheep</code><br><br><span class="perm">Permission node: com.minecolonies.coremod.SheepKill</span><br>Default permission level: OP</td>
      <td class="d-block d-md-table-cell">Kills all sheep inside all colonies</td>
    </tr>
  </tbody>
</table>

## Colony Commands

/minecolonies colony `<info | delete | barbarians | addOfficer | refresh | ownerchange | teleport | deletable | raid | raid-tonight | claim>`

<table class="table">
  <thead>
    <tr>
      <th class="w-50">Command</th>
      <th class="d-none d-md-table-cell w-50">Command Description</th>
    </tr>
  </thead>
  <tbody>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc colony info &lt;[player: online player] | [colony: colony id]&gt;</code><br><br><span class="perm">Permission node: com.minecolonies.coremod.ShowColonyInfo</span><br>Default permission level: OP</td>
      <td class="d-block d-md-table-cell">Shows some basic information about the colony specified (ID, Name, Mayor, Citizens, Coordinates, Last contact with owner, If the colony can be deleted or not)<br><br>Examples:<br><code>/mc colony info colony: 1</code><br><code>/mc colony info player: Steve</code></td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc colony delete &lt;colony: colony id&gt; [canDestroy: true | false] [confirmDelete: true | false]</code><br><br><span class="perm">Permission node: com.minecolonies.coremod.DeleteColony</span><br>Default permission level: OP</td>
      <td class="d-block d-md-table-cell">Deletes a colony and all MineColonies buildings (as long as the hut is still placed)<br><code>candestroy</code> will set whether the buildings should be deleted with the claim<br><code>candelete</code> will set whether the colony is instantly deleted when the command is run, without asking for confirmation in chat<br><br>Examples:<br><code>/mc colony delete colony: 1</code><br><code>/mc colony delete colony: 1 candestroy: false</code><br><code>/mc colony delete colony: 1 confirmdelete: true</code></td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc colony barbarians &lt;colony: colony id&gt; &lt;disableSpawns: true | false&gt;</code><br><br><span class="perm">Permission node: com.minecolonies.coremod.DisableBarbarianSpawns</span><br>Default permission level: OP</td>
      <td class="d-block d-md-table-cell">Disables or Enables spawning of barbarians in a colony<br><br>Examples:<br><code>/mc colony barbarians colony: 1 disablespawns: true</code></td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc colony addOfficer &lt;colony: colony id&gt; &lt;player: online player&gt;</code><br><br><span class="perm">Permission node: com.minecolonies.coremod.AddOfficer</span><br>Default permission level: OP</td>
      <td class="d-block d-md-table-cell">Adds an officer to a colony<br><br>Examples:<br><code>/mc colony addofficer colony: 1 player: Steve</code></td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc colony refresh &lt;[player: online player] | [colony: colony id]&gt;</code><br><br><span class="perm">Permission node: com.minecolonies.coremod.RefreshColony</span><br>Default permission level: OP</td>
      <td class="d-block d-md-table-cell">Refreshes a colony<br><br>Examples:<br><code>/mc colony refresh colony: 1</code><br><code>/mc colony refresh player: Steve</code></td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc colony ownerchange &lt;colony: colony id&gt; &lt;player: online-player&gt;</code><br><br><span class="perm">Permission node: com.minecolonies.coremod.ChangeColonyOwner</span><br>Default permission level: OP</td>
      <td class="d-block d-md-table-cell">Changes the owner of a colony<br><br>Examples:<br><code>/mc colony ownerchange colony: 1 player: Steve</code></td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc colony teleport &lt;colony: colony id&gt;</code><br><br><span class="perm">Permission node: com.minecolonies.coremod.ColonyTeleport</span><br>Default permission level: OP</td>
      <td class="d-block d-md-table-cell">Teleports the player to the specified colony<br><br>Examples:<br><code>/mc colony teleport colony: 1</code></td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc colony deletable &lt;colony: colony id&gt; &lt;canBeDeleted: true | false&gt;</code><br><br><span class="perm">Permission node: com.minecolonies.coremod.MakeNotAutoDeletable</span><br>Default permission level: OP</td>
      <td class="d-block d-md-table-cell">Sets whether a colony can be marked for auto-deletion or not<br><br>Examples:<br><code>/mc colony deletable colony: 1 canbedeleted: false</code></td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc colony raid &lt;colony: colony id&gt;</code><br><br><span class="perm">Permission node: com.minecolonies.coremod.DoRaidNow</span><br>Default permission level: OP</td>
      <td class="d-block d-md-table-cell">Schedules a barbarian raid for the specified colony to start right now<br><br>Examples:<br><code>/mc colony raid colony: 1</code></td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc colony raid-tonight &lt;colony: colony id&gt;</code><br><br><span class="perm">Permission node: com.minecolonies.coremod.DoRaidTonight</span><br>Default permission level: OP</td>
      <td class="d-block d-md-table-cell">Schedules a barbarian raid for the specified colony to start the coming night<br><br>Examples:<br><code>/mc colony raid-tonight colony: 1</code></td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc colony claim &lt;colony: colony id&gt; &lt;dimension: dimension id&gt; [range: number in chunks] [add: true | false]</code><br><br><span class="perm">Permission node: com.minecolonies.coremod.Claim</span><br>Default permission level: OP</td>
      <td class="d-block d-md-table-cell">Claims chunks (or removes claimed chunks) a specified number of chunks from the player's location for a colony<br><br>Examples:<br><code>/mc colony claim colony: 1 dimension: 0 range: 8 add: true</code></td>
    </tr>
  </tbody>
</table>

## Citizens Commands

/minecolonies citizens `<list | kill | respawn | info>`

<table class="table">
  <thead>
    <tr>
      <th class="w-50">Command</th>
      <th class="d-none d-md-table-cell w-50">Command Description</th>
    </tr>
  </thead>
  <tbody>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc citizens list &lt;colony: colony id&gt; [page: page number]</code><br><br><span class="perm">Permission node: com.minecolonies.coremod.ListCitizens</span><br>Default permission level: ALL</td>
      <td class="d-block d-md-table-cell">Lists all citizens in a colony with each citizen's ID and name (9 results per page)<br><br>Examples:<br><code>/mc citizens list colony: 1</code><br><code>/mc citizens list colony: 1 page: 3</code></td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc citizens kill &lt;colony: colony id&gt; &lt;citizen: citizen id | full name&gt;</code><br><br><span class="perm">Permission node: com.minecolonies.coremod.KillCitizen</span><br>Default permission level: ALL</td>
      <td class="d-block d-md-table-cell">Kills a specified citizen in a colony<br><br>Examples:<br><code>/mc citizens kill colony: 1 citizen: 1</code><br><code>/mc citizens kill colony: 1 citizen: Steve S. Steveson</code></td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc citizens respawn &lt;colony: colony id&gt; &lt;citizen: citizen id | full name&gt;</code><br><br><span class="perm">Permission node: com.minecolonies.coremod.RespawnCitizen</span><br>Default permission level: ALL</td>
      <td class="d-block d-md-table-cell">Respawns the specified citizen in a colony (Only respawns current living citizens) The citizen must be recalled after respawning them<br><br>Examples:<br><code>/mc citizens respawn colony: 1 citizen: 1</code><br><code>/mc citizens respawn colony: 1 citizen: Steve S. Steveson</code></td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc citizens info &lt;colony: colony id&gt; &lt;citizen: citizen id | full name&gt;</code><br><br><span class="perm">Permission node: com.minecolonies.coremod.CitizenInfo</span><br>Default permission level: ALL</td>
      <td class="d-block d-md-table-cell">Gives basic information about a specified citizen in a colony such as their ID and name<br><br>Examples:<br><code>/mc citizens info colony: 1 citizen: 1</code><br><code>/mc citizens info colony: 1 citizen: Steve S. Steveson</code></td>
    </tr>
  </tbody>
</table>

## RS Commands

/minecolonies rs `<reset>`

<table class="table">
  <thead>
    <tr>
      <th class="w-50">Command</th>
      <th class="d-none d-md-table-cell w-50">Command Description</th>
    </tr>
  </thead>
  <tbody>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc rs reset &lt;colony: colony id&gt;</code><br><br><span class="perm">Permission node: com.minecolonies.coremod.RSReset</span><br>Default permission level: OP</td>
      <td class="d-block d-md-table-cell">Resets the request system for a colony, forcing all colonists in that colony to re-request if they need to<br><br>Examples:<br><code>/mc rs reset colony: 1</code></td>
    </tr>
  </tbody>
</table>
