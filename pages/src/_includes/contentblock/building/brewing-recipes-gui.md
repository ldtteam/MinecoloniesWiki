{% include contentblock/building/vars.md name="brewing recipes" description="This shows a list of all brewing recipes." image_key="brewingrecipes" order=include.order %}
{% content_block image=image %}
{{ header }}

Here you can see all the brewing recipes this building knows. The arrows allow you to move them up or down in priority. 
You are also able to disable specific recipes.
- **Teach Recipe:** When clicking teach recipe, it opens a grid which allows you to teach this hut brewing recipes (not the worker).
{% endcontent_block %}