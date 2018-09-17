# Fisherman

<div class="infobox box text-center">
<img src="../../assets/images/workers/fisherman.png" alt="Fisherman" />
<hr />
  <div class="row section-text text-left">
    <div class="col">
      <p><strong>Primary Trait:</strong></p>
      <p><strong>Secondary Trait:</strong></p>
      <p><strong>Building:</strong></p>
    </div>
    <div class="col">
      <p>Intelligence</p>
      <p>Dexterity</p>
      <p><a href="../buildings/fisher.md">Fisher's Hut</a></p>
    </div>
  </div>
</div>

Welcome to the Fisherman's Information Site.

The Fisherman is an important worker for your Colony. As long as you provide the Fisherman with a fishing rod, the Fisherman will provide your Town with everything that can be caught; fish, salmon, pufferfish, clownfish as well as junk and even TREASURE!

Before you choose a place to build his hut, take into account that he has to be near water or that you personally will have to build him a pond close to his hut so he can fish. After you have selected a place for the hut you have to craft the Fisherman's Hut block in the crafting table and use your [Building Tool](../../) to place the building. Once you "commit" to the placement of the Fisherman's Hut, the block will be placed and the Fisherman will be automatically assigned (or you can manually assign one with the best "[Traits](../../)" for Fisherman if you changed this in the setting tab in the [Town Hall's GUI](../../).

You now officially have a "Fisherman!" CONGRATULATIONS!

Now you can give the Fisherman a fishing rod and it will start to fish. Also, you will have to issue the builder the "Build" assignment so he can build the "Fisherman's Hut".

**Hint**: If you see the builder has not finished building/upgrading your farmer's hut and you don't see the builder asking for any materials, go to the builder's hut and "recall" the builder and wait a bit to see what the builder needs. Watch the Minecraft "chat" section. Also you can go to page 2 of the builder's hut GUI and check the list of materials required, any material in the list that is still missing will be in red colored letters.

**Note**: The Fisherman will require a body of water of a minimum of 7 x 7 x 1 block deep for the Fisherman to be able to work. And it must be near his hut.

<p style="text-align:center;"><img src="../../assets/images/workers/pond.png" alt="Pond"></p>

Once the builder is done, you can think about upgrading the Fisherman's hut to expand the range at which it can fish as well as having a higher cap level.

Now you can access the Fisherman's Hut block (right click on it) and you will see a GUI with different options:


<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/fishermangui.png" class="img-fluid mx-auto" alt="Fisherman GUI">
</div>
  <div class="col-sm-12 col-md">
    <br>
    <p>The Worker assigned and their Level. (The worker levels up in time by doing their work. The 
higher the level the faster and more efficient they will be). And the buttons:</p>
    <ul>
      {% for item in site.data.gui.global %}
        <li><strong>{{ item.button }}:</strong> {{ item.content }}</li>
      {% endfor %}
    </ul>
  </div>
</div>


**Hint**: You can give the Fisherman an enchanted fishing rod an reap the benefits of the treasures he/she will be catching for you. Also, the higher the level of the "Fisherman's Hut" is, the higher the level of "loot" he will be fishing out.
