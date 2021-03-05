---
title: Mine
layout: default
---
# Mine

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/mine.png" alt="Mine's Hut" />
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Worker:</strong></p>
        </div>
        <div class="col">
        <p><a href="../workers/miner">Miner</a></p>
        </div>
    </div>
    <hr />
    <recipe>mine</recipe>
</div>

The Mine is where the Miner will mine for ores and materials. Once they are hired, the Miner will create a shaft downward and then branch out.

**Hint:** The shaft the Miner creates downwards will go to a specific depth depending on the level of the Mine:

| Mine Level | Shaft Y Level |
| ---------- | ------------- |
| 1 | 50 |
| 2 | 30 |
| 3+ | Bedrock |

## Mine GUI

<div class="row">
  <div class="col">
    
    When accessing the Mine's hut block by right-clicking on it, you will see a GUI with different options:  

    <div class="row">
      <div class="col-sm-12 col-md">
        <img src="../../assets/images/gui/minegui1.png" class="img-fluid mx-auto" alt="Miner GUI">
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

    This is page two of the Mine's GUI.  

    <div class="row">
      <div class="col-sm-12 col-md">
        <img src="../../assets/images/gui/minegui2.png" class="img-fluid mx-auto" alt="Miner GUI 2">
      </div>
      <div class="col-sm-12 col-md">
        <ul>
          <li><strong>Levels:</strong> The level refers to the platforms the Miner will place every 3 blocks down. Here you can assign what level of the Mine the Miner will create their mineshafts (nodes). If a level has a red number next to it, that means the Miner is currently mining that level. The Miner will ignore orders to mine at a specific level until the entire mineshaft is completed to the maximum depth their hut's level allows.</li><br>
        </ul>
      </div>
    </div>  
      
      <br>
  </div>
</div>
