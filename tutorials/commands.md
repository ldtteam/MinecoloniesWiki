
RAID_ALL_TONIGHT("com.minecolonies.coremod.RaidAllTonight", DefaultPermissionLevel.OP, "Can RaidAllTonight...."),
RAID_ALL_NOW("com.minecolonies.coremod.RaidAllNow", DefaultPermissionLevel.OP, "Can RaidAllNow...."),
LIST_COLONIES("com.minecolonies.coremod.ListColonies", DefaultPermissionLevel.OP, "Can ListColonies...."),
REQUEST_SYSTEM_RESET_ALL("com.minecolonies.coremod.RequestSystemResetAll", DefaultPermissionLevel.OP, "Can RequestSystemResetAll...."),
LIST_CITIZENS("com.minecolonies.coremod.ListCitizens", DefaultPermissionLevel.ALL, "Can ListCitizens...."),
KILL_CITIZEN("com.minecolonies.coremod.KillCitizen", DefaultPermissionLevel.ALL, "Can KillCitizen...."),
RESPAWN_CITIZEN("com.minecolonies.coremod.RespawnCitizen", DefaultPermissionLevel.ALL, "Can RespawnCitizen...."),
CITIZEN_INFO("com.minecolonies.coremod.CitizenInfo", DefaultPermissionLevel.ALL, "Can view detailed citizen info."),
CHANGE_COLONY_OWNER("com.minecolonies.coremod.ChangeColonyOwner", DefaultPermissionLevel.OP, "Can change owner of a colony."),
SHOW_COLONY_INFO("com.minecolonies.coremod.ShowColonyInfo", DefaultPermissionLevel.OP, "Can ShowColonyInfo...."),
DELETE_COLONY("com.minecolonies.coremod.DeleteColony", DefaultPermissionLevel.OP, "Can DeleteColony...."),
DISABLE_BARBARIAN_SPAWNS("com.minecolonies.coremod.DisableBarbarianSpawns", DefaultPermissionLevel.OP, "Can DisableBarbarianSpawns...."),
ADD_OFFICER("com.minecolonies.coremod.AddOfficer", DefaultPermissionLevel.OP, "Can AddOfficer...."),
REFRESH_COLONY("com.minecolonies.coremod.RefreshColony", DefaultPermissionLevel.OP, "Can RefreshColony...."),
COLONY_TELEPORT("com.minecolonies.coremod.ColonyTeleport", DefaultPermissionLevel.OP, "Can ColonyTeleport...."),
MAKE_NOT_AUTO_DELETABLE("com.minecolonies.coremod.MakeNotAutoDeletable", DefaultPermissionLevel.OP, "Can MakeNotAutoDeletable...."),
DO_RAID_NOW("com.minecolonies.coremod.DoRaidNow", DefaultPermissionLevel.OP, "Can DoRaidNow...."),
DO_RAID_TONIGHT("com.minecolonies.coremod.DoRaidTonight", DefaultPermissionLevel.OP, "Can DoRaidTonight...."),
REQUEST_SYSTEM_RESET("com.minecolonies.coremod.RSReset", DefaultPermissionLevel.OP, "Can RSReset...."),
BARBARIAN_KILL("com.minecolonies.coremod.BarbarianKill", DefaultPermissionLevel.OP, "Can BarbarianKill...."),
ANIMAL_KILL("com.minecolonies.coremod.AnimalKill", DefaultPermissionLevel.OP, "Can AnimalKill...."),
MOB_KILL("com.minecolonies.coremod.MobKill", DefaultPermissionLevel.OP, "Can MobKill...."),
CHICKEN_KILL("com.minecolonies.coremod.ChickenKill", DefaultPermissionLevel.OP, "Can ChickenKill...."),
COW_KILL("com.minecolonies.coremod.CowKill", DefaultPermissionLevel.OP, "Can CowKill...."),
PIG_KILL("com.minecolonies.coremod.PigKill", DefaultPermissionLevel.OP, "Can PigKill...."),
SHEEP_KILL("com.minecolonies.coremod.SheepKill", DefaultPermissionLevel.OP, "Can SheepKill...."),
SCAN("com.minecolonies.coremod.Scan", DefaultPermissionLevel.OP, "Can scan structures."),
CLAIM("com.minecolonies.coremod.Claim", DefaultPermissionLevel.OP, "Can claim structures.")

<table>
  <tr>
    <th>Command</th>
    <th>Command Description</th>
    <th>Permission Node (Servers)</th>
    <th>Default Permission Level</th>
  </tr>
  <tr>
    <td>/minecolonies &lt;command&gt; (/mc &lt;command&gt;)</td>
    <td colspan="3">Base command for all other Minecolonies commands</td>
  </tr>
  <tr>
    <td>/mc rtp</td>
    <td>Allows random teleporting around the world</td>
    <td>com.minecolonies.coremod.RandomTeleport</td>
    <td>OP</td>
  </tr>
  <tr>
    <td>/mc home</td>
    <td>Teleports you back to the Town Hall in your colony</td>
    <td>com.minecolonies.coremod.HomeTeleport</td>
    <td>OP</td>
  </tr>
  <tr>
    <td>/mc whoami</td>
    <td>Outputs your name, the name of your colony and the coordinates for the center</td>
    <td>com.minecolonies.coremod.WhoAmI</td>
    <td>OP</td>
  </tr>
  <tr>
    <td>/mc whereami</td>
    <td>Outputs how far you are from a colony, if you are near one, or that there is none nearby</td>
    <td>com.minecolonies.coremod.WhereAmI</td>
    <td>OP</td>
  </tr>
  <tr>
    <td>/mc backup</td>
    <td>Makes a backup of your colony data</td>
    <td>com.minecolonies.coremod.Backup</td>
    <td>OP</td>
  </tr>
  <tr>
    <td>/mc check</td>
    <td>Checks for colonies where the owner hasn't played in a set amount of time for deletion</td>
    <td>com.minecolonies.coremod.CheckForAutoDeletes</td>
    <td>OP</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>
