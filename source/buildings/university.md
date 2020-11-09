---
title: University
layout: default
---
# University

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/university.png" alt="University's Hut" />
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Worker:</strong></p>
        </div>
        <div class="col">
        <p><a href="../workers/researcher">Researcher</a></p>
        </div>
    </div>
    <hr />
    <recipe>university</recipe>
</div>

The University is where a Researcher will research various upgrades to your colony. 

## University GUI

When accessing the University's hut block by right-clicking on it, you will see a GUI with different options:

<br>
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/universitygui1.png" class="img-fluid mx-auto" alt="University GUI">
  </div>
  <div class="col-sm-12 col-md">
    <br>
    <ul>
      {% for item in site.data.gui.global %}
        <li><strong>{{ item.button }}:</strong> {{ item.content }}</li>
      {% endfor %}
    </ul>
  </div>
</div>
<br>

<br>

Page 2 of the GUI will show you the options for each research tree.

<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/universitygui2.png" class="img-fluid mx-auto" alt="University GUI Page 2">
  </div>
</div>
    
<br>
    
Once you click on a research tree, you will see the options for each research branch. Each option will tell you the requirements and how long it takes to research that option. (Time is real-world time spent in-game.)

**Note:** Each column of a research tree is also the level the University needs to be to begin a research from that column. So:

| Research Tree Column | Minimum University Level |
| -------------------- | ------------------------ |
| 1                    | 1                        |
| 2                    | 2                        |
| 3                    | 3                        |
| 4                    | 4                        |
| 5 and higher         | 5                        |

**Note:** You can only choose one column 6 research in each of the Combat, Civilian, and Technology trees.

<br>

## Combat
<br>
<img src="../../assets/images/gui/universitycombat.png" class="img-fluid mx-auto" alt="University Combat GUI Page">
<br>

### First Column

| Name | Requirements | Effects |
| ---- | ------------ | ------- |
| Accuracy | [Guard Tower](../../source/buildings/guardtower) at least level 1; 16 iron ingots | Reduces the time [Guards](../../source/workers/guard) sleep by 50% |
| Tactic Training | Guard Tower at least level 3; 3 blocks of iron | Unlocks the [Barracks](../../source/buildings/barracks) |
| Avoidance | Guard Tower at least level 3; 3 blocks of iron | Lets Knights use shields |
| Improved Leather | [Town Hall](../../source/buildings/townhall) at leat level 1; 32 leather | Increases Guards' armor's durabilty by 10% |
| Taunt | Guard Tower at leat level 1; 8 rotten flesh, 8 bones, 8 spider eyes | After a Guard attacks a mob, the mob targets the Guard instead of citizens or the player |

### Second Column

| Name | Prerequisites | Requirements | Effects |
| ---- | ------------- | ------------ | ------- |
| Quick Draw | Accuracy | Barracks at least level 3; 2 blocks of iron | Increases Knights' damage by half a heart |
| Precise Shot | Accuracy | Barracks at least level 3; 16 flint | Increases Archers' damage by half a heart |
| Improved Swords | Tactic Training | Barracks at least level 3; 6 blocks of iron | Unlocks the [Combat Academy](../../source/buildings/combatacademy) |
| Improved Bows | Tactic Training | Barracks at least level 3; 6 blocks of iron | Unlocks the [Archery](../../source/buildings/archery) |
| Parry | Avoidance | [Smeltery](../../source/buildings/smeltery) at least level 1; 16 iron ingots | Increases Knights' armor by 5% |
| Dodge | Avoidance | Smeltery at least level 1; 16 iron ingots | Increases Archers' armor by 5% |
| Boiled Leather | Improved Leather | Town Hall at least level 2; 64 leather | Increases Guards' armor's durability by 20% |
| Regeneration | Improved Leather | Guard Tower at least level 2; 1 emerald | Lets Guards run away when they have low health (this can be turned off in the 2nd page of their tower's GUI) |
| Arrow Usage | Taunt | Guard Tower at least level 2; 64 arrows | Archers will request arrows for their bows, and using them will give the Archers a damage boost of 1 heart. If they run out of arrows, they can still shoot, but without the damage boost |

### Third Column

| Name | Prerequisites | Requirements | Effects |
| ---- | ------------- | ------------ | ------- |
| Power Attack | Quick Draw | Combat Academy at least level 3; 4 blocks of iron | Increases Knights' damage by half a heart (cumulative) |
| Penetrating Shot | Precise Shot | Archery at least level 3; 32 flint | Increases Archers' damage by half a heart (cumulative) |
| Squire Training | Improved Swords | Combat Academy at least level 3; 4 shields | Increases the chance for Knights to block attacks by 5% |
| Tick Shot | Improved Bows | Archery at least level 3; 5 bows | 5% chance for Archers to shoot 2 arrows at the same time |
| Repost | Parry | Combat Academy at least level 1; 32 iron ingots | Increases Knights' armor by 10% |
| Improved Dodge | Dodge | Archery at least level 1; 32 leather | Increases Archers' armor by 10% |
| Iron Skin | Boiled Leather | Town Hall at least level 3; 16 iron ingots | Increases Guards' armor's durability by 30% |
| Feint | Regeneration | Guard Tower at least level 4; 8 emeralds | When Guards are fleeing, the damage they take is reduced by 20% |
| Avoid | Regeneration | Guard Tower at least level 4; 8 emeralds | Increases the fleeing speed of Guards by 10% |
| Arrow Piercing | Arrow Usage | Archery at least level 1; 64 arrows, 64 redstone dust | Archers' arrows can pierce through multiple enemies and cannot hit Knights |

### Fourth Column

| Name | Prerequisites | Requirements | Effects |
| ---- | ------------- | ------------ | ------- |
| Cleave | Power Attack | Guard Towers adding up to at least level 10; 8 blocks of iron | Increases Knights' damage by half a heart (cumulative) |
| Piercing Shot | Penetrating Shot | Guard Towers adding up to at least level 10; 64 flint | Increases Archers' damage by half a heart (cumulative) |
| Knight Training | Squire Training | Combat Academy at least level 4; 8 shields | Increases the chance for Knights to block attacks by 10% |
| Multi Shot | Tick Shot | Archery at least level 4; 9 bows | 10% chance for Archers to shoot 2 arrows at the same time |
| Duelist | Repost | Smeltery at least level 3; 64 iron ingots | Increases Knights' armor by 25% |
| Evasion | Improved Dodge | Smeltery at least level 3; 64 leather | Increases Archers' armor by 25% |
| Iron Armor | Iron Skin | Town Hall at least level 4; 32 iron ingots | Increases Guards' armor's durability by 40% |
| Fear | Feint | Guard Towers adding up to at least level 8; 16 emeralds | When Guards are fleeing, the damage they take is reduced by 30% |
| Evade | Avoid | Guard Towers adding up to at least level 8; 16 emeralds | Increases the fleeing speed of Guards by 20% |
| Unlock Whirlwind Ability for Knights | Arrow Piercing | Barracks at least level 4; 64 redstone dust, 64 gold ingots, 128 lapis lazuli | Knights have a chance to do a special Whirlwind attack, which damages and knocks back all the enemies near them |

### Fifth Column

| Name | Prerequisites | Requirements | Effects |
| ---- | ------------- | ------------ | ------- |
| Mightly Cleave | Cleave | Barracks level 5; 16 blocks of iron | Increases Knights' damage by half a heart (cumulative) |
| Wounding Shot | Piercing Shot | Barracks level 5; 128 flint | Increases Archers' damage by half a heart (cumulative) |
| Captain Training | Knight Training | Combat Academy level 5; 16 shields | Increases the chance for Knights to block attacks by 25% |
| Rapid Shot | Multi Shot | Archery level 5; 18 bows | 25% chance for Archers to shoot 2 arrows at the same time |
| Provost | Duelist | Combat Academy level 5; 16 diamonds | Increases Knights' armor by 50% |
| Improved Evasion | Evasion | Archery level 5; 16 diamonds | Increases Archers' armor by 50% |
| Steel Armor | Iron Armor | Town Hall level 5; 64 iron ingots | Increases Guards' armor's durability by 50% |
| Retreat | Fear | Guard Towers adding up to at least level 12; 32 emeralds | When Guards are fleeing, the damage they take is reduced by 40% |
| Flee | Evade | Guard Towers adding up to at least level 12; 32 emeralds | Increases the fleeing speed of Guards by 30% |

### Sixth Column

| Name | Prerequisites | Requirements | Effects |
| ---- | ------------- | ------------ | ------- |
| Whirlwind | Mightly Cleave | 32 blocks of iron | Increases Knights' damage by 2 hearts (cumulative) |
| Deadly Aim | Wounding Shot | 256 flint | Increases Archers' damage by 2 hearts (cumulative) |
| Captain of the Guard | Captain Training | 27 shields | Increases the chance for Knights to block attacks by 50% |
| Master Bowman | Rapid Shot | 27 bows | 50% chance for Archers to shoot 2 arrows at the same time |
| Master Swordsman | Provost | 64 diamonds | Increases Knights' armor by 100% |
| Agile Archer | Improved Evasion | 64 diamonds | Increases Archers' armor by 100% |
| Diamond Skin | Steel Armor | 64 diamonds | Increases Guards' armor's durability by 100% |
| Full Retreat | Retreat | 64 emeralds | When Guards are fleeing, the damage they take is reduced by 100% |
| Hotfoot | Flee | 64 emeralds | Increases the fleeing speed of Guards by 50% |

## Civilian
<br>
<img src="../../assets/images/gui/universitycivilian.png" class="img-fluid mx-auto" alt="University Civilian GUI Page">
<br>
 
## Technology
<br>
<img src="../../assets/images/gui/universitytechnology.png" class="img-fluid mx-auto" alt="University Technology GUI Page">
<br>
