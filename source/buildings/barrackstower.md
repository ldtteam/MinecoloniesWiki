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
        <p><strong>Worker:</strong></p>
        </div>
        <div class="col">
        <p><a href="../workers/guard">Guard</a></p>
        </div>
    </div>
</div>

# About the Barracks Tower

The Barracks Towers will employ and house 1 [Guard](../../source/workers/guard) for every level built (unlike the normal [Guard Towers](../../source/buildings/guardtower), which can only have 1 Guard at a time). Each Barracks Tower will house and employ 5 Guards at the highest level. Each new Guard will need a bed in a house in order to spawn, however, once they are hired at the Barracks Tower that becomes their new residence and the bed in the house will open up for another new citizen (child or recruit).

The Barracks Tower locations are predetermined by the [Barracks](../../source/buildings/barracks) that you choose. They are placed in specific locations to fit within the Barracks. 


| Barracks Level | Max # of Barracks Towers | Max Level of Barracks Towers |
| :----: | :----: | :----: |
| 1 | 1 | 1 |
| 2 | 2 | 2 |
| 3 | 3 | 3 |
| 4 | 4 | 4 |
| 5 | 4 | 5 |

<br>

# Barracks Tower GUI

When accessing the Barracks Tower's hut block by right-clicking on it, you will see a GUI with different options:

<br>
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/barrackstowergui1.png" class="img-fluid mx-auto" alt="Barracks Tower GUI">
  </div>
  <div class="col-sm-12 col-md"><br><br>
    <br>
    <ul>
      {% for item in site.data.gui.global%}
        <li><strong>{{ item.button }}:</strong> {{ item.content }}</li>
      {% endfor %}
    </ul>  
  </div>
</div>
<br>

This is page two of the GUI.

<br>

<div class="row">
  <div class="col-sm-12 col-md">
    <br>
    <img src="../../assets/images/gui/barrackstowergui2.png" class="img-fluid mx-auto" alt="Guard GUI">
  </div>
  <div class="col-sm-12 col-md">
    <ul>
        <li><strong>Knight or Ranger:</strong> This is where you can choose if you want the Guard to be a Knight or a Ranger-just click to change the setting. The difference between the two is that Knights use swords, while Rangers use bows. <b>Note:</b> You can only change this if you have turned <strong>Assign the Guard to the Job</strong> to manually, otherwise the Guard will be a Knight by default.</li>
        <li><strong>Patrol, Follow, or Guard:</strong> This is where you can choose if you want the Guard to patrol, follow, or guard.</li>      
        <ul>
        <li>If you set it to Guard, you can set one area for the Guard to stay in. You can set the area by clicking Set Guarding Target, which will spawn a Guard-scepter in your inventory. Right-clicking on a block with the Guard-scepter will set it as the guard spot. </li>
        <li>If you set it to Follow, the Guard will follow you around as your personal bodyguard protecting you or fighting alongside you. However, if you are more than 40*Barracks Tower level blocks away from the Barracks Tower, the Guard will automatically return to their tower.</li>
        <li>If you set it to Patrol, you have a couple different options. </li>
        <ul>
        <li>If you set Find Patrol Target to automatically, the Guard will patrol from hut to hut and back to their tower.</li>
        <li>If you set Find Patrol Target to manually, you can set the patrol route when you click on Set Patrol Positions. Clicking on it will spawn a Guard-scepter in your inventory. You can right-click using the Guard-scepter to set patrol positions for the Guard to patrol between.</li>
      </ul>
    </ul>
      </ul>
    </ul>
      </ul>
    </ul>
  </div>
</div>
<br>

On the third page of the GUI you can tell the Guard which mobs to attack and which ones to ignore. You can also choose the priority of each mob by moving them up or down in the list. The default order is reverse alphabetically.

<div class="row">
  <div class="col-sm-12 col-md">
    <br>
    <img src="../../assets/images/gui/barrackstowergui3.png" class="img-fluid mx-auto" alt="Guard GUI">
  </div>
  <div class="col-sm-12 col-md">
</div>
