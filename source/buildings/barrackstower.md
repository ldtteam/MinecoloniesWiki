---
title: Minecolonies Wiki
layout: default
---
# Barracks Tower

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/barrackstower.png" alt="Barracks Tower" />
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Worker:</strong> <a href="../workers/guard">Guard</a></p>
        </div>
    </div>
    <hr />
 </div>


# About the Building

The Barracks Tower buildings house your Barracks Guards. The Barracks Towers (unlike the normal Guard Towers) will employ and house 1 citizen for every level built! Each new guard will need a bed in a house in order to spawn, however, once they are hired at the barracks that becomes their new residence and the bed in the house will open up for another new citizen (child or recruit). Each Barracks Towers will house and employ 5 guards, for a total of 20 guards for your colony.

The Barracks Tower locations are predetermined by the Barracks that you choose. They are placed in specific locations to fit within the Barracks Hut Building. 


| Barracks Level | Max # of Guard Towers | Max Level of Guard Tower |
| :----: | :----: | :----: |
| 1 | 1 | 1 |
| 2 | 2 | 2 |
| 3 | 3 | 3 |
| 4 | 4 | 4 |
| 5 | 4 | 5 |

<br>

# Barracks Tower GUI
Once the building is built, you can access the Barracks Tower block (right click on it) and you will see a GUI with different options:

<br>
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/barrackstowergui1.png" class="img-fluid mx-auto" alt="Barracks Tower GUI">
  </div>
  <div class="col-sm-12 col-md"><br><br>
    <p>The Barracks Tower and it's current Level. And the buttons:</p>
  <ul>
      {% for item in site.data.gui.global%}
        <li><strong>{{ item.button }}:</strong> {{ item.content }}</li>
      {% endfor %}
    </ul>  
  </div>
</div>
<br>


This is "page 2" of the GUI. It shows the guard actions you can select: Knight or Ranger The Guard has 2 Guard modes you can choose from: **Knight** or **Ranger**. BUT... before you can choose any of these two modes you *MUST* change the "Assign the guard to job:" mode from **Automatically** to **Manually**. 

<p style="color:Blue;">When the Guard is set to <b>Knight</b> mode; the guard will use a sword.
When the Guard is set to <b>Ranger</b> mode; the guard will use a bow.</p>

<br>
Also here you will be able to set (if "Find patrol target: Manually") the way the guard will work: Patrol / Follow / Guard.  And the buttons:

<div class="row">
  <div class="col-sm-12 col-md">
    <br>
    <img src="../../assets/images/gui/barrackstowergui2.png" class="img-fluid mx-auto" alt="Guard GUI">
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
      <li><strong>Inventory:</strong>This is the most important button. Here you can access the buildings storage from where the “worker” takes and deposits materials, tools and anything he/she finds along the way (citizens will pickup anything in their path that is considered a "drop"; sapling, seeds, rotten flesh, bones, arrows, etc.).</li>
    </ul>
  </div>
</div>
<br>

On the third page of the GUI you can tell the guard who to attack and who to ignore
<div class="row">
  <div class="col-sm-12 col-md">
    <br>
    <img src="../../assets/images/gui/barrackstowergui3.png" class="img-fluid mx-auto" alt="Guard GUI">
  </div>
  <div class="col-sm-12 col-md">
</div>
