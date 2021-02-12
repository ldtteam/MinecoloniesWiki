---
title: Crusher
layout: default
---
# Crusher

<div class="infobox box text-center">
<img src="../../assets/images/workers/smelter_m.png" alt="Crusher Male" />&nbsp;&nbsp;&nbsp;<img src="../../assets/images/workers/smelter_f.png" alt="Crusher Female" />
<hr />
  <div class="row section-text text-left">
    <div class="col">
      <p><strong>Primary Trait:</strong></p>
      <p><strong>Secondary Trait:</strong></p>
      <p><strong>Building:</strong></p>
    </div>
    <div class="col">
      <p class="traitp">Stamina</p>
      <p class="traits">Strength</p>
      <p><a href="../buildings/crusher">Crusher's Hut</a></p>
    </div>
  </div>
</div>

The Crusher is a part of your colony's production line. The Crusher will crush materials into other materials.

The defaults are:
<ul>
  <li>Cobblestone into Gravel (chance to get flint)</li>
  <li>Gravel into Sand</li>
  <li>Sand into Clay</li>
</ul>

However, you can change this in the [config file](../../source/misc/configfile). This also works with modded items. Anything can be added here, it is up to the player (or the server owner).

The Crusher works on a 2:1 ratio, so, for example, it takes 2 cobblestone to get 1 gravel. However, there is a [research](../../source/systems/research) in the [University](../../source/buildings/university) to make them work on a 1:1 ratio.

The Crusher can only crush a certain amount of materials per day, depending on their hut level.

| Hut Level | Daily Max |
| --------- | --------- |
| 1         | 16        |
| 2         | 64        |
| 3         | 144       |
| 4         | 256       |
| 5         | 999       |


The higher a Crusher's Stamina level, the less of a chance they have to get sick. The higher their Strength level, the faster they'll work.
