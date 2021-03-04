---
title: Guard Tower
layout: default
---
# Guard Tower

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/guardtower.png" alt="Guard Tower" />
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Worker:</strong></p>
        </div>
        <div class="col">
        <p><a href="../workers/guard">Guard</a></p>
        </div>
    </div>
    <hr />
    <recipe>guardtower</recipe>
</div>

The Guard Tower will employ and house 1 [Guard](../../source/workers/guard) to protect your colony. The new Guard will need a bed in a house in order to spawn. However, once they are hired at the Guard Tower, that becomes their new residence and the bed in the house will open up for another new citizen (child or recruit).

The Guard will patrol a set distance around their tower, which is based on their tower's level.

| Tower Level | Max Patrol Distance |
| ----------- | ------------------- |
| 1 | 80 blocks |
| 2 | 110 blocks |
| 3 | 140 blocks |
| 4 | 170 blocks |
| 5 | 200 blocks |

<strong>Note:</strong> If you place Guard Towers near your colony border and level them up, your border will [expand](../../source/systems/border).

## Guard Tower GUI

When accessing the Guard Tower hut block by right-clicking on it, you will see a GUI with different options:

<br>
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/guardtowergui1.png" class="img-fluid mx-auto" alt="Guard GUI">
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

This is page 2 of the GUI.

<div class="row">
  <div class="col-sm-12 col-md">
    <br><br><br>
    <img src="../../assets/images/gui/barrackstowergui2.png" class="img-fluid mx-auto" alt="Guard GUI">
  </div>
  <div class="col-sm-12 col-md">
    <ul>
        <li><strong>Knight or Archer:</strong> This is where you can choose if you want the Guard to be a Knight or an Archer-just click to change the setting. The difference between the two is that Knights use swords, while Archers use bows. <b>Note:</b> You can only change this if you have turned the <strong>Assign the Guard to the Job</strong> setting to manually.</li>
        <li><strong>Try to Retreat on Low Health:</strong> Here you can choose if the Guard will retreat when they have low health, if possible. You can choose from Off or On.  
        <li><strong>Try to hire from training facility:</strong> If there is a vacancy at this tower, here is where you can choose if you want a Guard to be hired from the respective training facility (<a href="../../source/buildings/archery">Archery</a> for Archers and <a href="../../source/buildings/combatacademy"> Combat Academy</a> for knights) instead of an unemployed colonist. (This setting only matters if Assign Colonists to Jobs is turned to Automatic in the <a href="../../source/buildings/townhall"> Town Hall</a> GUI.)
        <li><strong>Patrol, Follow, or Guard:</strong> This is where you can choose if you want the Guard to patrol, follow, or guard.</li>      
        <ul>
        <li>If you set it to Guard, you can set one area for the Guard to stay in. You can set the area by clicking <b>Set Guarding Target</b>, which will spawn a Guard-scepter in your inventory. Right-clicking on a block with the Guard-scepter will set it as the guard spot. </li>
        <li>If you set it to Follow, the Guard will follow you around as your personal bodyguard protecting you or fighting alongside you. They will even go outside the colony when following! If you choose <b>Loose Grouping</b>, the Guard will stay close to you, but not as close as if you choose <b>Tight Grouping</b>.</li>
        <li>If you set it to Patrol, you have a couple different options. </li>
        <ul>
            <li>If you set <strong>Find Patrol Target</strong> to automatically, the Guard will patrol from hut to hut and back to their tower.</li>
            <li>If you set <strong>Find Patrol Target</strong> to manually, you can set the patrol route when you click on <b>Set Patrol Positions</b>. Clicking on it will spawn a Guard-scepter in your inventory. You can right-click using the Guard-scepter to set patrol positions for the Guard to patrol between. To delete patrol positions, simply get a new Guard-scepter and click a new patrol position. The old ones should disappear.</li>
      </ul>
    </ul>
        
<br>

On the third page of the GUI you can tell the Guard which mobs to attack and which ones to ignore. You can also choose the priority of each mob by moving them up or down in the list. The default order is reverse alphabetically.
<div class="row">
  <div class="col-sm-12 col-md">
    <br>
    <img src="../../assets/images/gui/barrackstowergui3.png" class="img-fluid mx-auto" alt="Guard GUI">
  </div>
  <div class="col-sm-12 col-md">
</div>
