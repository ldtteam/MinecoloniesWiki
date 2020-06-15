---
title: MineColonies Wiki
layout: default
---
# Commands

These are the in game commands currently available, most require that a user have operator privileges to work, or require that a single player world has cheats enabled. If you would like to make use of Permission nodes you require a server API such as SpongeForge along with a permissions system such as LuckPerms

- [Commands](#commands)
  - [Base Command](#base-command)
  - [Kill Commands](#kill-commands)
  - [Colony Commands](#colony-commands)
  - [Citizens Commands](#citizens-commands)
{: .box .py-3 .pr-4 }

**Command Syntax**

| If you see this...   | Then                              |
| :------------------: | :-------------------------------: |
| `plaintext`          | Enter this exactly as shown       |
| `<angle brackets>`   | This is a **required** argument   |
| `[square brackets]`  | This is an **optional** argument  |
| `x | y | z`          | Pick one of these options         |

## Base Command

/minecolonies `<backup | help | home | raid-All-now | raid-All-tonight | resetsupplies | rtp | wheremai | whoami | citizens | colony | kill>` (/mc)

<table class="table">
  <thead>
    <tr>
      <th class="w-50">Command</th>
      <th class="d-none d-lg-table-cell w-50">Command Description</th>
    </tr>
  </thead>
  <tbody>
    <tr class="d-block d-lg-table-row">
      <tr class="d-block d-lg-table-row">
      <td class="d-block d-lg-table-cell"><code>/mc backup</code><br><br>Default Permission Level: OP<br></td>
      <td class="d-block d-lg-table-cell">Makes a backup of all colony data.</td>
    </tr>
    <tr class="d-block d-lg-table-row">
      <td class="d-block d-lg-table-cell"><code>/mc help</code><br><br>Default Permission Level: All<br></td>
      <td class="d-block d-lg-table-cell">Lists the Wiki and the Discord channel in game.</td>
    </tr>
      <tr class="d-block d-lg-table-row">
      <td class="d-block d-lg-table-cell"><code>/mc home</code><br><br>Default Permission Level: All</td>
      <td class="d-block d-lg-table-cell">Teleports a colony owner back to the Town Hall of their colony.</td>
    </tr>
      <tr class="d-block d-lg-table-row">
      <td class="d-block d-lg-table-cell"><code>/mc raid-All-now</code><br><br>Default Permission Level: OP</td>
      <td class="d-block d-lg-table-cell">Schedule a barbarian raid for every colony to start right now.</td>
    </tr>
      <tr class="d-block d-lg-table-row">
      <td class="d-block d-lg-table-cell"><code>/mc raid-All-tonight</code><br><br>Default Permission Level: OP</td>
      <td class="d-block d-lg-table-cell">Schedule a barbarian raid for every colony, to start the coming night.</td>
    </tr>
      <tr class="d-block d-lg-table-row">
      <td class="d-block d-lg-table-cell"><code>/mc resetsupplies &lt;online player&gt;</code><br><br>Default Permission Level: OP</td>
      <td class="d-block d-lg-table-cell">Resets the ability to place a supply camp or ship.</td>
    </tr>
      <td class="d-block d-lg-table-cell"><code>/mc rtp</code><br><br>Default Permission Level: All</td>
      <td class="d-block d-lg-table-cell">Allows random teleporting around the world, will place the player outside the range of someone else's colony.</td>
    </tr>
    <tr class="d-block d-lg-table-row">
      <td class="d-block d-lg-table-cell"><code>/mc whereami</code><br><br>Default Permission Level: All</td>
      <td class="d-block d-lg-table-cell">Outputs how far the player is from a colony, if they are near one, or that there is none nearby</td>
    </tr>
    <tr class="d-block d-lg-table-row">
      <td class="d-block d-lg-table-cell"><code>/mc whoami</code><br><br>Default Permission Level: OP</td>
      <td class="d-block d-lg-table-cell">Outputs the player's name, the name of their colony and the coordinates for the center</td>
    </tr>
    </tbody>
</table>

## Colony Commands

/minecolonies colony `<addOfficer | canSpawnRaiders | claim | delete | home | info | list | loadAllColoniesFromBackup | loadBackup | raid-now | raid-tonight | requestsystem-reset | requestsystem-reset-all | setAbandoned | setDeleteable | setowner | teleport>`

<table class="table">
  <thead>
    <tr>
      <th class="w-50">Command</th>
      <th class="d-none d-md-table-cell w-50">Command Description</th>
    </tr>
  </thead>
  <tbody>
    <tr class="d-block d-md-table-row">
      <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc colony addOfficer &lt;colony id&gt; &lt;online player&gt;</code><br><br>Default permission level: All</td>
      <td class="d-block d-md-table-cell">Adds an officer to a colony<br><br>Examples:<br><code>/mc colony addofficer 1 Steve</code></td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc colony canSpawnRaiders &lt;colony id&gt; &lt;canSpawn&gt;</code><br><br>Default permission level: OP</td>
      <td class="d-block d-md-table-cell">Adds or removes the ability to spawn raiders.<br><br>Examples:<br><code>/mc colony canSpawnRaiders 1 true</code></td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc colony claim &lt;colony id&gt; &lt;[number in chunks] [true | false]</code><br><br>Default permission level: OP</td>
      <td class="d-block d-md-table-cell">Claims chunks (or removes claimed chunks) a specified number of chunks from the player's location for a colony<br><br>Examples:<br><code>/mc colony claim 1 8 true</code></td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc colony delete &lt;colony id&gt; [delete Buildings]</code><br><br>Default permission level: All</td>
      <td class="d-block d-md-table-cell">Deletes a colony and all MineColonies buildings (as long as the hut is still placed)<br><br><code>/mc colony delete 1 false keep buildings</code><br><code>/mc colony delete 1 true delete buildings</code></td>
    </tr>
    <tr class="d-block d-md-table-row">
    <td class="d-block d-md-table-cell"><code>/mc colony home</code><br><br>Default permission level: All</td>
      <td class="d-block d-md-table-cell">Teleports a colony owner back to the Town Hall of their colony.<br><br>Examples:<br><code>/mc colony home</code><br></td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc colony info &lt;[colony id]&gt;</code><br><br>Default permission level: All</td>
      <td class="d-block d-md-table-cell">Shows some basic information about the colony specified (ID, Name, Mayor, Citizens, Coordinates, Last contact with owner, If the colony can be deleted or not)<br><br>Examples:<br><code>/mc colony info 1</code><br></td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc colony list &lt;[startpage]&gt;</code><br><br>Default permission level: All</td>
      <td class="d-block d-md-table-cell">Shows a list of all the colonies  (ID, Name, Coordinates)<br><br>Examples:<br><code>/mc colony list</code><br></td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc colony loadAllColoniesFromBackup</code><br><br>Default permission level: OP</td>
      <td class="d-block d-md-table-cell">Loads all colonies from backup<br><br>Examples:<br><code>/mc colony loadAllColoniesFromBackup</td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc colony loadBackup &lt;[colony id]&gt;</code><br><br>Default permission level: OP</td>
      <td class="d-block d-md-table-cell">Loads an individual colony from backup<br><br>Examples:<br><code>/mc colony loadBackup 1</code><br></td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc colony raid-now &lt;colony id&gt;</code><br><br>Default permission level: OP</td>
      <td class="d-block d-md-table-cell">Schedules a barbarian raid for the specified colony to start right now<br><br>Examples:<br><code>/mc colony raid-now 1</code></td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc colony raid-tonight &lt;colony id&gt;</code><br><br>Default permission level: OP</td>
      <td class="d-block d-md-table-cell">Schedules a barbarian raid for the specified colony to start the coming night<br><br>Examples:<br><code>/mc colony raid-tonight 1</code></td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc colony requestsystem-reset &lt;[colony id]&gt;</code><br><br>Default permission level: All</td>
      <td class="d-block d-md-table-cell">Refreshes a specific colony<br><br>Examples:<br><code>/mc colony requestsystem-reset 1</code><br></td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc colony requestsystem-reset-all</code><br><br>Default permission level: OP</td>
      <td class="d-block d-md-table-cell">Refreshes all colonies<br><br>Examples:<br><code>/mc colony requestsystem-reset-all 1</code><br></td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc colony setAbandoned &lt;colony id&gt; </code><br><br>Default permission level: All</td>
      <td class="d-block d-md-table-cell">Sets a colony to abandoned. <br><br>Examples:<br><code>/mc colony setAbandoned 1</code></td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc colony setDeletable &lt;colony id&gt; &lt;deleteable&gt;</code><br><br>Default permission level: OP</td>
      <td class="d-block d-md-table-cell">Sets whether a colony can be marked for auto-deletion or not<br><br>Examples:<br><code>/mc colony setDeletable 1 false</code></td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc colony setowner &lt;colony id&gt; &lt;online-player&gt;</code><br><br>Default permission level: All</td>
      <td class="d-block d-md-table-cell">Changes the owner of a colony<br><br>Examples:<br><code>/mc colony setowner 1 Steve</code></td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc colony teleport &lt;colony id&gt;</code><br><br>Default permission level: All</td>
      <td class="d-block d-md-table-cell">Teleports the player to the specified colony<br><br>Examples:<br><code>/mc colony teleport 1</code></td>
    </tr>
  </tbody>
</table>

## Citizens Commands

/minecolonies citizens `<info | kill | list | reload | spawnNew | teleport | walk>`

<table class="table">
  <thead>
    <tr>
      <th class="w-50">Command</th>
      <th class="d-none d-md-table-cell w-50">Command Description</th>
    </tr>
  </thead>
  <tbody>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc citizens info &lt;colony id&gt; &lt;citizen id&gt;</code><br><br>Default permission level: ALL</td>
      <td class="d-block d-md-table-cell">Gives basic information about a specified citizen in a colony such as their ID and name<br><br>Examples:<br><code>/mc citizens info 1 1</code><br></td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc citizens kill &lt;colony id&gt; &lt;citizen id&gt;</code><br><br>Default permission level: ALL</td>
      <td class="d-block d-md-table-cell">Kills a specified citizen in a colony<br><br>Examples:<br><code>/mc citizens kill 1 1</code><br></td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc citizens list &lt;colony id&gt; [page number]</code><br><br>Default permission level: ALL</td>
      <td class="d-block d-md-table-cell">Lists all citizens in a colony with each citizen's ID and name (9 results per page)<br><br>Examples:<br><code>/mc citizens list 1</code><br><code>/mc citizens list 1 3</code></td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc citizens relaod &lt;colony id&gt; &lt;citizen id&gt;</code><br><br>Default permission level: All</td>
      <td class="d-block d-md-table-cell">Relaods a specified citizen in a colony<br><br>Examples:<br><code>/mc citizens relaod 1 1</code><br></td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc citizens spawnNew &lt;colony id&gt;</code><br><br>Default permission level: ALL</td>
      <td class="d-block d-md-table-cell">Spawns a new citizen in a colony<br><br>Examples:<br><code>/mc citizens spawnNew 1</code><br></td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc citizens teleport &lt;colony id&gt; &lt;citizen id&gt;&lt;location (x y z)&gt;</code><br><br>Default permission level: ALL</td>
      <td class="d-block d-md-table-cell">Teleports a specific citizen to a given location<br><br>Examples:<br><code>/mc citizens teleport 1 1 -50 62 128</code><br></td>
    </tr>
    <td class="d-block d-md-table-cell"><code>/mc citizens walk &lt;colony id&gt; &lt;citizen id&gt;&lt;location (x y z)&gt;</code><br><br>Default permission level: ALL</td>
      <td class="d-block d-md-table-cell">Tells a specific citizen to walk to a given location<br><br>Examples:<br><code>/mc citizens walk 1 1 -50 62 128</code><br></td>
    </tr>
  </tbody>
</table>

## Kill Commands

/minecolonies kill `<raiders | animals | monster | chicken | cow | pig | sheep>`

<table class="table">
  <thead>
    <tr>
      <th class="w-50">Command</th>
      <th class="d-none d-md-table-cell w-50">Command Description</th>
    </tr>
  </thead>
  <tbody>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc kill raiders</code><br><br>Default permission level: OP</td>
      <td class="d-block d-md-table-cell">Kills all raiders (barbarians or Pirates) inside all colonies</td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc kill animals</code><br><br>Default permission level: OP</td>
      <td class="d-block d-md-table-cell">Kills all animals inside all colonies</td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc kill monster</code><br><br>Default permission level: OP</td>
      <td class="d-block d-md-table-cell">Kills all monsters inside all colonies</td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc kill chicken</code><br><br>Default permission level: OP</td>
      <td class="d-block d-md-table-cell">Kills all chickens inside all colonies</td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc kill cow</code><br><br>Default permission level: OP</td>
      <td class="d-block d-md-table-cell">Kills all cows inside all colonies</td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc kill pig</code><br><br>Default permission level: OP</td>
      <td class="d-block d-md-table-cell">Kills all pig inside all colonies</td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc kill sheep</code><br><br>Default permission level: OP</td>
      <td class="d-block d-md-table-cell">Kills all sheep inside all colonies</td>
    </tr>
  </tbody>
</table>
