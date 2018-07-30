<table>
  <tr>
    <th>Command</th>
    <th>Command Description</th>
    <th>Permission Node (Servers)</th>
    <th>Default Permission Level</th>
  </tr>
  <tr>
    <td>/minecolonies &lt;colonies | kill | colony | citizens | rs | rtp | backup | home | raid-tonight | raid-now | check | whoami | whereami | scan&gt; (/mc)</td>
    <td colspan="3">Base command for all other Minecolonies commands</td>
  </tr>
  <tr>
    <td>rtp</td>
    <td>Allows random teleporting around the world</td>
    <td>com.minecolonies.coremod.RandomTeleport</td>
    <td>OP</td>
  </tr>
  <tr>
    <td>backup</td>
    <td>Makes a backup of your colony data</td>
    <td>com.minecolonies.coremod.Backup</td>
    <td>OP</td>
  </tr>
  <tr>
    <td>home</td>
    <td>Teleports you back to the Town Hall in your colony</td>
    <td>com.minecolonies.coremod.HomeTeleport</td>
    <td>OP</td>
  </tr>
  <tr>
    <td>raid-tonight</td>
    <td>Schedule a barbarian raid for every colony, to start the coming night</td>
    <td>com.minecolonies.coremod.RaidAllTonight</td>
    <td>OP</td>
  </tr>
  <tr>
    <td>raid-now</td>
    <td>Schedule a barbarian raid for every colony to start right now</td>
    <td>com.minecolonies.coremod.RaidAllNow</td>
    <td>OP</td>
  </tr>
  <tr>
    <td>check</td>
    <td>Checks all colonies for ones where the owner hasn't played in a set amount of time, giving the option to delete them</td>
    <td>com.minecolonies.coremod.CheckForAutoDeletes</td>
    <td>OP</td>
  </tr>
  <tr>
    <td>whoami</td>
    <td>Outputs your name, the name of your colony and the coordinates for the center</td>
    <td>com.minecolonies.coremod.WhoAmI</td>
    <td>OP</td>
  </tr>
  <tr>
    <td>whereami</td>
    <td>Outputs how far you are from a colony, if you are near one, or that there is none nearby</td>
    <td>com.minecolonies.coremod.WhereAmI</td>
    <td>OP</td>
  </tr>
  <tr>
    <td>scan [player: online player] &lt;x1: x coord&gt; &lt;y1: y coord&gt; &lt;z1: z coord&gt; &lt;x2: x coord&gt; &lt;y2: y coord&gt; &lt;z2: z coord&gt; [name: name]</td>
    <td>Scans an area and saves it as a schematic</td>
    <td>com.minecolonies.coremod.Scan</td>
    <td>OP</td>
  </tr>
  <tr>
    <td>/minecolonies colonies &lt;list|rsResetAll&gt;</td>
    <td colspan="3">Base command for all colonies commands</td>
  </tr>
  <tr>
    <td>list [page: page number]</td>
    <td>Lists all colonies</td>
    <td>com.minecolonies.coremod.ListColonies</td>
    <td>OP</td>
  </tr>
  <tr>
    <td>rsresetall</td>
    <td>Resets the request system for all colonies</td>
    <td>com.minecolonies.coremod.RequestSystemResetAll</td>
    <td>OP</td>
  </tr>
  <tr>
    <td>/minecolonies kill &lt;barbarians | animals | mob | chicken | cow | pig | sheep</td>
    <td colspan="3">Base command for all kill commands</td>
  </tr>
  <tr>
    <td>barbarians</td>
    <td>Kills all barbarians inside all colonies</td>
    <td>com.minecolonies.coremod.BarbarianKill</td>
    <td>OP</td>
  </tr>
  <tr>
    <td>animals</td>
    <td>Kills all animals inside all colonies</td>
    <td>com.minecolonies.coremod.AnimalKill</td>
    <td>OP</td>
  </tr>
  <tr>
    <td>mob</td>
    <td>Kills all mobs inside all colonies</td>
    <td>com.minecolonies.coremod.MobKill</td>
    <td>OP</td>
  </tr>
  <tr>
    <td>chicken</td>
    <td>Kills all chickens inside all colonies</td>
    <td>com.minecolonies.coremod.ChickenKill</td>
    <td>OP</td>
  </tr>
  <tr>
    <td>cow</td>
    <td>Kills all cows inside all colonies</td>
    <td>com.minecolonies.coremod.CowKill</td>
    <td>OP</td>
  </tr>
  <tr>
    <td>pig</td>
    <td>Kills all pig inside all colonies</td>
    <td>com.minecolonies.coremod.PigKill</td>
    <td>OP</td>
  </tr>
  <tr>
    <td>sheep</td>
    <td>Kills all sheep inside all colonies</td>
    <td>com.minecolonies.coremod.SheepKill</td>
    <td>OP</td>
  </tr>
  <tr>
    <td>/minecolonies colony &lt;info | delete | barbarians | addOfficer | refresh | ownerchange | teleport | deletable | raid | raid-tonight | claim&gt;</td>
    <td colspan="3">Base command for all colony commands</td>
  </tr>
  <tr>
    <td>info [player: online player] [colony: colony id]</td>
    <td>Shows some basic information about the colony specified (ID, Name, Mayor, Citizens, Coordinates, Last contact with owner, If the colony can be deleted or not)</td>
    <td>com.minecolonies.coremod.ShowColonyInfo</td>
    <td>OP</td>
  </tr>
  <tr>
    <td>delete &lt;colony: colony id&gt; [canDestroy: true/false] [confirmDelete: true/false]</td>
    <td>Deletes a colony and all Minecolonies buildings (as long as the hut is still placed)</td>
    <td>com.minecolonies.coremod.DeleteColony</td>
    <td>OP</td>
  </tr>
  <tr>
    <td>barbarians &lt;colony: colony id&gt; &lt;disableSpawns: true/false&gt;</td>
    <td>Disables or Enables spawning of barbarians in a colony</td>
    <td>com.minecolonies.coremod.DisableBarbarianSpawns</td>
    <td>OP</td>
  </tr>
  <tr>
    <td>addOfficer &lt;colony: colony id&gt; &lt;player: online player&gt;</td>
    <td>Adds an officer to a colony</td>
    <td>com.minecolonies.coremod.AddOfficer</td>
    <td>OP</td>
  </tr>
  <tr>
    <td>refresh [player: online player] [colony: colony id]</td>
    <td>Refreshes a colony</td>
    <td>com.minecolonies.coremod.RefreshColony</td>
    <td>OP</td>
  </tr>
  <tr>
    <td>ownerchange &lt;colony: colony id&gt; &lt;player: online-player&gt;</td>
    <td>Changes the owner of a colony</td>
    <td>com.minecolonies.coremod.ChangeColonyOwner</td>
    <td>OP</td>
  </tr>
  <tr>
    <td>teleport &lt;colony: colony id&gt;</td>
    <td>Teleports you to the specified colony</td>
    <td>com.minecolonies.coremod.ColonyTeleport</td>
    <td>OP</td>
  </tr>
  <tr>
    <td>deletable &lt;colony: colony id&gt; &lt;canBeDeleted: true/false&gt;</td>
    <td>Sets whether a colony can be marked for auto-deletion or not</td>
    <td>com.minecolonies.coremod.MakeNotAutoDeletable</td>
    <td>OP</td>
  </tr>
  <tr>
    <td>raid &lt;colony: colony id&gt;</td>
    <td>Schedules a barbarian raid for the specified colony to start right now</td>
    <td>com.minecolonies.coremod.DoRaidNow</td>
    <td>OP</td>
  </tr>
  <tr>
    <td>raid-tonight &lt;colony: colony id&gt;</td>
    <td>Schedules a barbarian raid for the specified colony to start the coming night</td>
    <td>com.minecolonies.coremod.DoRaidTonight</td>
    <td>OP</td>
  </tr>
  <tr>
    <td>claim [colony: colony id] [range: number in chunks] [add: true/false]</td>
    <td>Claims chunks a specified number of chunks from your location</td>
    <td>com.minecolonies.coremod.Claim</td>
    <td>OP</td>
  </tr>
  <tr>
    <td>/minecolonies citizens &lt;list | kill | respawn | info&gt;</td>
    <td colspan="3">Base command for all citizens commands</td>
  </tr>
  <tr>
    <td>list &lt;colony: colony id&gt; [page: page number]</td>
    <td>Lists all citizens in a colony</td>
    <td>com.minecolonies.coremod.ListCitizens</td>
    <td>ALL</td>
  </tr>
  <tr>
    <td>kill &lt;colony: colony id&gt; &lt;citizen: citizen id/full name&gt;</td>
    <td>Kills a specified citizen in a colony</td>
    <td>com.minecolonies.coremod.KillCitizen</td>
    <td>ALL</td>
  </tr>
  <tr>
    <td>respawn &lt;colony: colony id&gt; &lt;citizen: citizen id/full name&gt;</td>
    <td>Respawns the specified citizen in a colony</td>
    <td>com.minecolonies.coremod.RespawnCitizen</td>
    <td>ALL</td>
  </tr>
  <tr>
    <td>info &lt;colony: colony id&gt; &lt;citizen: citizen id/full name&gt;</td>
    <td>Gives basic information about a specified citizen in a colony</td>
    <td>com.minecolonies.coremod.CitizenInfo</td>
    <td>ALL</td>
  </tr>
  <tr>
    <td>/minecolonies rs &lt;reset&gt;</td>
    <td colspan="3">Base command for all request system commands</td>
  </tr>
  <tr>
    <td>reset &lt;colony: colony id&gt;</td>
    <td>Resets the request system for a colony</td>
    <td>com.minecolonies.coremod.RSReset</td>
    <td>OP</td>
  </tr>
</table>