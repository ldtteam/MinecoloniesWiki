---
title: Command System
layout: default
---
# Command System

These are the in-game commands currently available. Most require that a user have operator privileges to work and that a singleplayer world has cheats enabled.

**Warning:** These commands are not intended for normal gameplay use and should only be used when debugging. Some have the potential to delete your colony or break it!

- [Commands](#commands)
  - [Base Commands](#base-commands)
  - [Colony Commands](#colony-commands)
  - [Citizens Commands](#citizens-commands)
  - [Kill Commands](#kill-commands)
  - [Structurize Commands](#structurize-commands)

**Command Syntax**

| If you see this...  | Then...                                                 |
|---------------------|---------------------------------------------------------|
| `plaintext`         | Enter this exactly as shown                             |
| `<angle brackets>`  | This is a **required** argument                         |
| `[square brackets]` | This is an **optional** argument                        |
| `x | y | z`         | Pick one of these options (can be optional or required) |

## Base Commands

`/minecolonies (or /mc)  <backup | help | home | raid-all-now | raid-all-tonight | resetsupplies | rtp | whereami | whoami | citizens | colony | kill>`

<table class="table">
  <thead>
    <tr>
      <th class="w-50">Command</th>
      <th class="d-none d-lg-table-cell w-50">Command Description</th>
    </tr>
  </thead>
  <tbody>
    <tr class="d-block d-lg-table-row">
      <td class="d-block d-lg-table-cell"><code>/mc backup</code><br>Default Permission Level: OP<br></td>
      <td class="d-block d-lg-table-cell">Makes a backup of all colony data.</td>
    </tr>
    <tr class="d-block d-lg-table-row">
      <td class="d-block d-lg-table-cell"><code>/mc help</code><br>Default Permission Level: All<br></td>
      <td class="d-block d-lg-table-cell">Lists the wiki and the <a href="https://discord.minecolonies.com">Discord</a> links in chat.</td>
    </tr>
    <tr class="d-block d-lg-table-row">
      <td class="d-block d-lg-table-cell"><code>/mc home</code><br>Default Permission Level: All</td>
      <td class="d-block d-lg-table-cell">Teleports a colony owner back to the <a href="../../source/buildings/townhall">Town Hall</a> of their colony.</td>
    </tr>
    <tr class="d-block d-lg-table-row">
      <td class="d-block d-lg-table-cell"><code>/mc raid-All &lt;now | tonight&gt; &lt;amazon_raid | barbarian_raid | egyptian_raid | norsemen_raid | pirate_raid&gt;</code><br>Default Permission Level: OP</td>
      <td class="d-block d-lg-table-cell">Schedules a raid for every colony. You can choose if it starts now or the next Minecraft night, as well as its type.</td>
    </tr>
    <tr class="d-block d-lg-table-row">
      <td class="d-block d-lg-table-cell"><code>/mc resetsupplies &lt;online player's username&gt;</code><br>Default Permission Level: OP</td>
      <td class="d-block d-lg-table-cell">Resets the ability to place a supply camp or ship.</td>
    </tr>
    <tr class="d-block d-lg-table-row">
      <td class="d-block d-lg-table-cell"><code>/mc rtp</code><br>Default Permission Level: All</td>
      <td class="d-block d-lg-table-cell">Randomly teleports you. Will place you outside the range of someone else's colony.</td>
    </tr>
    <tr class="d-block d-lg-table-row">
      <td class="d-block d-lg-table-cell"><code>/mc whereami</code><br>Default Permission Level: All</td>
      <td class="d-block d-lg-table-cell">Outputs how far away the player is from a colony (if they are near one) or that there are no colonies nearby.</td>
    </tr>
    <tr class="d-block d-lg-table-row">
      <td class="d-block d-lg-table-cell"><code>/mc whoami</code><br>Default Permission Level: OP</td>
      <td class="d-block d-lg-table-cell">Outputs your name, the name of your colony, and the coordinates for the center of your colony.</td>
    </tr>
  </tbody>
</table>

## Colony Commands

`/minecolonies (or /mc) colony  <addOfficer | canSpawnRaiders | claim | delete | home | info | list | loadAllColoniesFromBackup | loadBackup | raid-now | raid-tonight | requestsystem-reset | requestsystem-reset-all | setAbandoned | setDeleteable | setowner | teleport>`

<table class="table">
  <thead>
    <tr>
      <th class="w-50">Command</th>
      <th class="d-none d-md-table-cell w-50">Command Description</th>
    </tr>
  </thead>
  <tbody>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc colony addOfficer &lt;colony id&gt; &lt;online player's username&gt;</code><br>Default permission level: All</td>
      <td class="d-block d-md-table-cell">Adds an officer to a colony. For more information on officers, visit the <a href="../../source/buildings/townhall">Town Hall</a> page and look at the Permissions section of the GUI.<br>Example:<br><code>/mc colony addofficer 1 Steve</code></td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc colony canSpawnRaiders &lt;colony id&gt; &lt;canSpawn&gt;</code><br>Default permission level: OP</td>
      <td class="d-block d-md-table-cell">Adds or removes the ability to spawn raiders in a colony.<br>Example:<br><code>/mc colony canSpawnRaiders 1 true</code></td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc colony claim &lt;colony id&gt; [number in chunks] [true | false]</code><br>Default permission level: OP</td>
      <td class="d-block d-md-table-cell">Claims a specified number of chunks for a colony (or removes claimed chunks) based off the player's location.<br>Example:<br><code>/mc colony claim 1 8 true</code></td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc colony delete &lt;colony id&gt; [delete Buildings]</code><br>Default permission level: All</td>
      <td class="d-block d-md-table-cell">Deletes a colony and all MineColonies buildings (as long as the hut block is still placed).<br>Examples:<br><code>/mc colony delete 1 false keep buildings</code><br><code>/mc colony delete 1 true delete buildings</code></td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc colony home</code><br>Default permission level: All</td>
      <td class="d-block d-md-table-cell">Teleports a colony owner back to the <a href="../../source/buildings/townhall">Town Hall</a> of their colony.<br>Example:<br><code>/mc colony home</code></td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc colony info &lt;[colony id]&gt;</code><br>Default permission level: All</td>
      <td class="d-block d-md-table-cell">Shows some basic information about the colony specified (ID, name, mayor, citizens, coordinates, last contact with mayor, and if the colony can be deleted or not).<br>Example:<br><code>/mc colony info 1</code></td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc colony list &lt;[startpage]&gt;</code><br>Default permission level: All</td>
      <td class="d-block d-md-table-cell">Shows a list of all the colonies in this world and their ID, name, and coordinates.<br>Example:<br><code>/mc colony list</code></td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc colony loadAllColoniesFromBackup</code><br>Default permission level: OP</td>
      <td class="d-block d-md-table-cell">Loads all colonies from a backup.<br>Example:<br><code>/mc colony loadAllColoniesFromBackup</code></td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc colony loadBackup &lt;[colony id]&gt;</code><br>Default permission level: OP</td>
      <td class="d-block d-md-table-cell">Loads an individual colony from a backup.<br>Example:<br><code>/mc colony loadBackup 1</code></td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc colony raid &lt;now | tonight&gt; &lt;[colony id]&gt; &lt;amazon_raid | barbarian_raid | egyptian_raid | norsemen_raid | pirate_raid&gt;</code><br>Default permission level: OP</td>
      <td class="d-block d-md-table-cell">Schedules a raid for the specified colony. You can choose if it starts now or the next Minecraft night, as well as its type.<br>Example:<br><code>/mc colony raid-now 1</code></td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc colony requestsystem-reset &lt;[colony id]&gt;</code><br>Default permission level: All</td>
      <td class="d-block d-md-table-cell">Refreshes a specified colony's request system, making all workers resubmit requests.<br>Example:<br><code>/mc colony requestsystem-reset 1</code></td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc colony requestsystem-reset-all</code><br>Default permission level: OP</td>
      <td class="d-block d-md-table-cell">Refreshes all colonies' request systems, making all workers in all colonies resubmit requests.<br>Example:<br><code>/mc colony requestsystem-reset-all</code></td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc colony setAbandoned &lt;colony id&gt;</code><br>Default permission level: All</td>
      <td class="d-block d-md-table-cell">Sets a colony to abandoned and without a mayor.<br>Example:<br><code>/mc colony setAbandoned 1</code></td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc colony setDeletable &lt;colony id&gt; &lt;deleteable&gt;</code><br>Default permission level: OP</td>
      <td class="d-block d-md-table-cell">Sets whether a colony can be marked for auto-deletion or not.<br>Example:<br><code>/mc colony setDeletable 1 false</code></td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc colony setowner &lt;colony id&gt; &lt;online-player's username&gt;</code><br>Default permission level: All</td>
      <td class="d-block d-md-table-cell">Changes the owner of a colony.<br>Example:<br><code>/mc colony setowner 1 Steve</code></td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc colony teleport &lt;colony id&gt;</code><br>Default permission level: All</td>
      <td class="d-block d-md-table-cell">Teleports the player to the specified colony.<br>Example:<br><code>/mc colony teleport 1</code></td>
    </tr>
  </tbody>
</table>

## Citizens Commands

`/minecolonies (or /mc) citizens <info | kill | list | reload | spawnNew | teleport | walk>`

<table class="table">
  <thead>
    <tr>
      <th class="w-50">Command</th>
      <th class="d-none d-md-table-cell w-50">Command Description</th>
    </tr>
  </thead>
  <tbody>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc citizens info &lt;colony id&gt; &lt;citizen id&gt;</code><br>Default permission level: ALL</td>
      <td class="d-block d-md-table-cell">Gives basic information about a specified citizen in a colony such as their ID and name.<br>Example:<br><code>/mc citizens info 1 1</code></td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc citizens kill &lt;colony id&gt; &lt;citizen id&gt;</code><br>Default permission level: ALL</td>
      <td class="d-block d-md-table-cell">Kills a specified citizen in a colony.<br>Example:<br><code>/mc citizens kill 1 1</code></td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc citizens list &lt;colony id&gt; [page number]</code><br>Default permission level: ALL</td>
      <td class="d-block d-md-table-cell">Lists all citizens in a colony with each citizen's ID and name (9 results per page).<br>Examples:<br><code>/mc citizens list 1</code><br><code>/mc citizens list 1 3</code></td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc citizens reload &lt;colony id&gt; &lt;citizen id&gt;</code><br>Default permission level: All</td>
      <td class="d-block d-md-table-cell">Reloads a specified citizen in a colony.<br>Example:<br><code>/mc citizens reload 1 1</code></td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc citizens spawnNew &lt;colony id&gt;</code><br>Default permission level: ALL</td>
      <td class="d-block d-md-table-cell">Spawns a new citizen in a colony.<br>Example:<br><code>/mc citizens spawnNew 1</code></td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc citizens teleport &lt;colony id&gt; &lt;citizen id&gt;&lt;location (x y z)&gt;</code><br>Default permission level: ALL</td>
      <td class="d-block d-md-table-cell">Teleports a specified citizen to a given location.<br>Example:<br><code>/mc citizens teleport 1 1 -50 62 128</code></td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc citizens walk &lt;colony id&gt; &lt;citizen id&gt;&lt;location (x y z)&gt;</code><br>Default permission level: ALL</td>
      <td class="d-block d-md-table-cell">Tells a specified citizen to walk to a given location.<br>Example:<br><code>/mc citizens walk 1 1 -50 62 128</code></td>
    </tr>
  </tbody>
</table>

## Kill Commands

`/minecolonies kill <raider | animals | monster | chicken | cow | pig | sheep>`

<table class="table">
  <thead>
    <tr>
      <th class="w-50">Command</th>
      <th class="d-none d-md-table-cell w-50">Command Description</th>
    </tr>
  </thead>
  <tbody>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc kill raider</code><br>Default permission level: OP</td>
      <td class="d-block d-md-table-cell">Kills all raiders (barbarians, pirates, vikings, or egyptian raiders) inside all colonies.<br>Example:<br><code>/mc kill raider</code></td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc kill animals</code><br>Default permission level: OP</td>
      <td class="d-block d-md-table-cell">Kills all animals (peaceful mobs) inside all colonies.<br>Example:<br><code>/mc kill animals</code></td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc kill monster</code><br>Default permission level: OP</td>
      <td class="d-block d-md-table-cell">Kills all monsters (hostile mobs) inside all colonies.<br>Example:<br><code>/mc kill monster</code></td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc kill chicken</code><br>Default permission level: OP</td>
      <td class="d-block d-md-table-cell">Kills all chickens inside all colonies.<br>Example:<br><code>/mc kill chicken</code></td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc kill cow</code><br>Default permission level: OP</td>
      <td class="d-block d-md-table-cell">Kills all cows inside all colonies.<br>Example:<br><code>/mc kill cow</code></td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc kill pig</code><br>Default permission level: OP</td>
      <td class="d-block d-md-table-cell">Kills all pigs inside all colonies.<br>Example:<br><code>/mc kill pig</code></td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/mc kill sheep</code><br>Default permission level: OP</td>
      <td class="d-block d-md-table-cell">Kills all sheep inside all colonies.<br>Example:<br><code>/mc kill sheep</code></td>
    </tr>
  </tbody>
</table>

## Structurize Commands

`/structurize linksystem <create | addplayer | acceptinvite>`

<table class="table">
  <thead>
    <tr>
      <th class="w-50">Command</th>
      <th class="d-none d-md-table-cell w-50">Command Description</th>
    </tr>
  </thead>
  <tbody>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/structurize linksession create</code><br>Default permission level: All</td>
      <td class="d-block d-md-table-cell">Creates a linksession to which you can invite other players to see build previews.<br>Example:<br><code>/structurize linksession create</code></td>
    </tr>
    <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/structurize linksession addplayer &lt;other player's name&gt;</code><br>Default permission level: All</td>
      <td class="d-block d-md-table-cell">Invites a player to your link session so they can see your building previews. Make sure you create one first! After being invited, players have to accept the invitation.<br>Example:<br><code>/structurize linksession addplayer Steve</code></td>
    </tr>
        <tr class="d-block d-md-table-row">
      <td class="d-block d-md-table-cell"><code>/structurize linksession acceptinvite</code><br>Default permission level: All</td>
      <td class="d-block d-md-table-cell">Accepts an invitation to a link session.<br>Example:<br><code>/structurize linksession acceptinvite</code></td>
    </tr>
  </tbody>
</table>
