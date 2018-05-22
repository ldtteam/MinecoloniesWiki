LIST_CITIZENS("com.minecolonies.coremod.ListCitizens", DefaultPermissionLevel.ALL, "Can ListCitizens...."),
KILL_CITIZEN("com.minecolonies.coremod.KillCitizen", DefaultPermissionLevel.ALL, "Can KillCitizen...."),
RESPAWN_CITIZEN("com.minecolonies.coremod.RespawnCitizen", DefaultPermissionLevel.ALL, "Can RespawnCitizen...."),
CITIZEN_INFO("com.minecolonies.coremod.CitizenInfo", DefaultPermissionLevel.ALL, "Can view detailed citizen info."),
CHANGE_COLONY_OWNER("com.minecolonies.coremod.ChangeColonyOwner", DefaultPermissionLevel.OP, "Can change owner of a colony."),
COLONY_TELEPORT("com.minecolonies.coremod.ColonyTeleport", DefaultPermissionLevel.OP, "Can ColonyTeleport...."),
MAKE_NOT_AUTO_DELETABLE("com.minecolonies.coremod.MakeNotAutoDeletable", DefaultPermissionLevel.OP, "Can MakeNotAutoDeletable...."),
DO_RAID_NOW("com.minecolonies.coremod.DoRaidNow", DefaultPermissionLevel.OP, "Can DoRaidNow...."),
DO_RAID_TONIGHT("com.minecolonies.coremod.DoRaidTonight", DefaultPermissionLevel.OP, "Can DoRaidTonight...."),
REQUEST_SYSTEM_RESET("com.minecolonies.coremod.RSReset", DefaultPermissionLevel.OP, "Can RSReset...."),
CLAIM("com.minecolonies.coremod.Claim", DefaultPermissionLevel.OP, "Can claim structures.")

<table>
  <tr>
    <th>Command</th>
    <th>Command Description</th>
    <th>Permission Node (Servers)</th>
    <th>Default Permission Level</th>
  </tr>
  <tr>
    <td>/minecolonies &lt;colonies|kill|colony|citizens|rs|rtp|backup|home|raid-tonight|raid-now|check|whoami|whereami|scan&gt; (/mc)</td>
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
    <td>list</td>
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
    <td>/minecolonies kill &lt;barbarians|animals|mob|chicken|cow|pig|sheep</td>
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
    <td>/minecolonies colony &lt;info|delete|barbarians|addOfficer|refresh|ownerchange|teleport|deletable|raid|raid-tonight|claim&gt;</td>
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
    <td>refresh &lt;colony: colony id&gt;</td>
    <td>Refreshes a colony</td>
    <td>com.minecolonies.coremod.RefreshColony</td>
    <td>OP</td>
  </tr>
  <tr>
    <td>ownerchange &lt;colony: colony id&gt; &lt;player: online-player&gt;</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>teleport &lt;colony: colony id&gt;</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>
