---
title: Minecolonies Wiki
layout: default
---
# Archery

<div class="infobox box text-center">
    <img src="../../assets/images/buildings/archery.png" alt="Archery" />
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Worker:</strong> <a href="../workers/ranger">Ranger in Training</a></p>
        </div>
    </div>
    <hr />
    <div class="row section-text text-left">
        <div class="col">
        <p><strong>Recipe:</strong> 
        </div>
    </div>
    <recipe>archery</recipe>
    
</div>
<hr />

# About the Building
The Archery building is where your [Rangers in Training](../../source/workers/ranger) become [Rangers Guards](../../source/workers/guard). This also allows them to level up without risk of dying to mobs. The number of students depend on the level of the building. 

| Archery Level | Max # of Students |
| :----: | :----: |
| 1 | 1 |
| 2 | 2 |
| 3 | 3 |
| 4 | 4 |
| 5 | 5 |

The Rangers in Training require a bow to practice. They will stand on or near the glowstone in the floor/ground and shoot at the targets, a bail of hay on a fence post. 

The Rangers in Training are not actual guards even though they will be dressed as guards, in the usual Ranger clothes. They will go to their own house at night to sleep. 



# Archery GUI

Once the building is built, you can access the Archery block (right click on it) and you will see a GUI with different options:

<br>
<div class="row">
  <div class="col-sm-12 col-md">
    <img src="../../assets/images/gui/archerygui.png" class="img-fluid mx-auto" alt="Archery GUI">
   </div>
  <div class="col-sm-12 col-md">
    <p>The Worker assigned and it's Level. (The worker levels up in time by doing it's work. The higher the level the faster and more efficient it will be). And the buttons:</p>
    <ul>
      {% for item in site.data.gui.global%}
        <li><strong>{{ item.button }}:</strong> {{ item.content }}</li>
      {% endfor %}
    </ul>
  </div>
</div>  
  <br>
  
### **To see build options please see the [Builder](../../source/workers/builder) Page**  

