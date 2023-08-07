{% assign tabs = "first,second,third,fourth,fifth,sixth,seventh,eight,ninth,tenth" | split: "," %}

{% assign tab_index = include.order | minus: 1 %}
{% assign tab_index_name = tabs[tab_index] %}
{% assign header = "The " | append: tab_index_name | append: " tab of the GUI is the **" | append: include.name | append: "**. " | append: include.description %}
{% assign image = "../../assets/images/gui/" | append: page.building | append: "/" | append: include.image_key | append: ".png" %}