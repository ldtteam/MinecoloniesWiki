---
type: building
building: university
layout: building
---
{% capture content %}
The University is where a Researcher will research various upgrades to your colony.

As you level up the University, you can hire more Researchers:

| Max Researchers | University Level |
| --------------- | ---------------- |
| 1               | 1                |
| 2               | 2                |
| 3               | 3                |
| 4               | 4                |
| 5               | 5                |

Each Researcher can start their own research, but more Researchers does not lower the amount of time each individual research takes. For example, having two Researchers but only one research in progress does not decrease the time that single research takes.

**Note:** Research time is real-world time spent in-game. However, Researchers will sometimes use offline time to work on researches. Researchers' Knowledge skill affects the amount of research time they get from the offline time (it's not a 1:1 ratio), and their Mana skill affects the max amount of research time they can get. Offline research time is unlocked at University level 3. 
{% endcapture %}
{% capture infobox %}
{% include infobox/building.html %}
{% endcapture %}
{% include infobox/wrapper.html content=content infobox=infobox %}

## University GUI

<div class="row">
  <div class="col">
    {% include contentblock/building/main-gui.html header="When accessing the University hut block by right-clicking on it, you will see a GUI with different options. You start on the main tab:" image="../../assets/images/gui/universitygui1.png" %}

    {% include contentblock/building/other-gui.html header="The second tab of the GUI is <strong>Research</strong>." content="Here you can select what research you want to unlock. <strong>Research in Progress</strong> displays how many research projects are currently being worked on, along with the maximum research that can be done. Once you click on a research tree, you will see the options for each research branch. Each option will tell you the requirements and how long it takes to research that option. To see a description of each of the researches, please visit the <a href='../systems/research'>Research System</a> page." image="../../assets/images/gui/universitygui2.png" %}
  </div>
</div>
