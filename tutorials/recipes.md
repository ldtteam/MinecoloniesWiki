---
layout: recipes
---
# Recipes

{% for icons in site.data.icons.minecraft %}
<div class="crafting-table">
  <div class="ct-input">
    <div class="ct-row">
      <div class="invslot">
        <br>
      </div>
      <div class="invslot">
        <br>
      </div>
      <div class="invslot">
        <br>
      </div>
    </div>
    <div class="ct-row">
      <div class="invslot slides">
        {{ icons.boat }}
      </div>
      <div class="invslot">
          <br>
      </div>
      <div class="invslot slides">
        {{ icons.boat }}
      </div>
    </div>
    <div class="ct-row">
      <div class="invslot slides">
        {{ icons.boat }}
      </div>
      <div class="invslot slides">
        {{ icons.boat }}
      </div>
      <div class="invslot slides">
        {{ icons.boat }}
      </div>
    </div>
  </div>
  <div class="ct-arrow">
    <br>
  </div>
  <div class="ct-output">
    <div class="invslot invslot-large">
      <div class="invslot-item"><img data-placement="top" data-toggle="tooltip" src="../assets/images/icons/minecolonies/supplychest.png" title="Supplychest" class="inv-sprite"></div>
    </div>
  </div>
</div>
{% for icons in site.data.icons.minecraft %}
<div class="crafting-table">
    <div class="ct-input">
        <div class="ct-row">
            <div class="invslot">
              <br>
            </div>
            <div class="invslot">
              <br>
            </div>
            <div class="invslot">
              {{ icons.cobblestone }}
            </div>
        </div>
        <div class="ct-row">
            <div class="invslot">
              <br>
            </div>
            <div class="invslot">
              {{ icons.stick }}
            <div class="invslot">
              <br>
            </div>
        </div>
        <div class="ct-row">
            <div class="invslot">
              {{ icons.stick }}
            </div>
            <div class="invslot">
              <br>
            </div>
            <div class="invslot">
              <br>
            </div>
        </div>
    </div>
    <div class="ct-arrow"></div>
    <div class="ct-output">
        <div class="invslot invslot-large">
          <div class="invslot-item"><img data-placement="top" data-toggle="tooltip" src="../assets/images/icons/minecolonies/sceptergold.png" title="Builders Tool" class="inv-sprite"></div>
            </div>
        </div>
    </div>
</div>
{% endfor %}
