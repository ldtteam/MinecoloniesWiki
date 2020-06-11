---
title: MineColonies Wiki
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

## About the Building

Before you choose a place to build the Tower, take into account the distances among the other buildings and obstacles like rivers, lakes, ponds, trees, caves, mountains, lava sources, etc.

After you have selected a place for the Tower you have to craft the Guard Hut block in the crafting table and place it with your [Building Tool](../items/buildingtool). Once the Hut is placed, the Guard will be automatically assigned (or you can manually assign one with the best [Traits](../systems/workerinfo) for Guard if you changed this in the settings tab in the [Town Hall's GUI](../../source/buildings/townhall).

Now you will have to issue the builder the “Build” assignment so it can build the Guard Tower. 

**Hint:** The level of the Guard’s Tower will dictate how far it can patrol, so if you want a longer patrol range, be sure to upgrade the Guard’s Tower.

The Guard’s Tower also offers a home to the assigned citizens so you don't need to supply a bed in a [Citizens Hut](../../source/buildings/citizenhut) for them.

Now you can access the Guard's Hut block (right click on it) and you will see a GUI with different options:

## Guard Tower GUI
<br>
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/guardtowergui1.png" class="img-fluid mx-auto" alt="Guard GUI">
  </div>
  <div class="col-sm-12 col-md">
    <p>The Worker assigned and it's Level. (The worker levels up in time by doing it's work. The higher the level the faster and more efficient it will be). And the buttons:</p>
    <ul>
      {% for item in site.data.gui.global %}
        <li><strong>{{ item.button }}:</strong> {{ item.content }}</li>
      {% endfor %}
    </ul>
  </div>
</div>
<br>

The Guard has 2 Guard modes you can choose from: **Knight** or **Ranger**. BUT... before you can choose any of these two modes you *MUST* change the "Assign the guard to job:" mode from **Automatically** to **Manually**. 

<p style="color:Blue;">When the Guard is set to <b>Knight</b> mode; the guard will hold a sword.
When the Guard is set to <b>Ranger</b> mode; the guard will use a bow.</p>

This is "page 2" of the GUI. It shows the guard actions you can select: Knight or Ranger (FIRST you have to change the "Assign the guard to the job: to Manually to be able to change the guard actions). Also here you will be able to set (if "Find patrol target: Manually") the way the guard will work: Patrol / Follow / Guard.  And the buttons:

<div class="row">
  <div class="col-sm-12 col-md">
    <br><br><br>
    <img src="../../assets/images/gui/guardtowergui2.png" class="img-fluid mx-auto" alt="Guard GUI">
  </div>
  <div class="col-sm-12 col-md">
    <ul>
      <li><strong>Patrol</strong> When you select this mode you have two options: </li>
      <ul>
        <li>If you set "Find patrol target: Automatically", the Guard will patrol from hut to hut and back to his Tower.</li>
        <li>If you set "Find patrol target: Manually", you can set the patrol route when you click on "Set patrol positions". Doing so will spawn a "Guard-scepter" in your inventory. </li>
      </ul>
    </ul>
You can right click using the Guard-scepter to set a single or multiple patrol positions for the Guard to patrol back and forth.
    <ul>
      <li><strong>Follow:</strong> When you select this mode the guard will follow you around wherever you go, as your personal Guard fighting along side you or defending you. If you leave the guard tower more than "40 * GuardTower level" blocks the guard will automatically return to his tower.</li>
      <li><strong>Guard:</strong> When you select this mode you will receive a "Guard-scepter". You can right click on a block to set it as a guard spot, the guard will stay in that area until his health is low or he has to restock, then he will go the Tower and resupply/regen health and will go back to your designated the guard spot again.</li>
      <li><strong>Knight:</strong> (By default) Here you can define if you want the guard to be a Knight or Ranger.</li>
      <ul>
        <li>Automatically By default. Here you can define if you want the guard to be assigned to Knight or Ranger automatically or Manually.</li>
      </ul>
      <li><strong>Automatically:</strong> (By default) Here you can define if you want the guard to be assigned the patrol target automatically or manually if you want to designate the target(s) for him to patrol.</li>
      <li><strong>Off: </strong> (By default) Here you can define if you want the guard to come back to the Tower on low health to recover his health.</li>
      <li><strong>Patrol / Follow / Guard.-</strong>here you can define how the guard will work.</li>
    </ul>
  </div>
</div>
<br>

**Hint:** You can give the Guard an enchanted bow, enchanted sword and enchanted armor **_(only when Tower is level 5)_** as well and reap the benefits of the protection thye'll be able to provide and the drops the Guard will be picking up along the way.
<br><br>
On the third page of the GUI you can tell the guard who to attack and who to ignore
<div class="row">
  <div class="col-sm-12 col-md">
    <br>
    <img src="../../assets/images/gui/barrackstowergui3.png" class="img-fluid mx-auto" alt="Guard GUI">
  </div>
  <div class="col-sm-12 col-md">
</div>
