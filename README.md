# MineColonies Wiki

A wiki for the Minecraft mod [MineColonies](https://github.com/ldtteam/minecolonies). Read it [here](https://wiki.minecolonies.ldtteam.com/)!

## Guidelines to pages

### Worker/building names
We want to avoid having to change a bazillion occurences all over the wiki in case we ever need to rename a worker or a building, for that reason there are 2 templates (`_includes/worker/name.html` and `_includes/building/name.html`) which you can use to write the name of the worker/building directly based on the name defined in the data files.

You can use these by doing `{% include building/name.html %}` (only directly in the building source page) OR `{% include building/name.html key="apiary" %}` (when referring to a building outside of the building page itself). This setup is identical for the worker (just change the include to `worker/name.html`).

### Links
We have a lot of links in the website referring to other documentation pages, a lot of them are still configured with a manually written name + path, for example: `[Apiary](/source/buildings/apiary)`.

Going forwards we are using link templates, you can find these in `_includes/links/`. These can refer to some commonly used link pages and can be expanded in the future aswell.

#### Buildings
In order to write a building link you have to write: `{% include links/building.html key="apiary" %}` where the key of the building can be found in the `_data/buildinginfo.yml` (top most entries in the file, i.e. `apiary`).

These link templates will automatically generate the path to the building aswell as use the proper name defined the in `_data/buildinginfo.yml`.

#### Workers
In order to write a worker link you have to write: `{% include links/worker.html key="alchemist" %}` where the key of the worker can be found in the `_data/workerinfo.yml` (top most entries in the file, i.e. `alchemist`).

These link templates will automatically generate the path to the worker aswell as use the proper name defined the in `_data/workerinfo.yml`.

#### Research
In order to write a research link you have to write: `{% include links/research.html tree="Civilian" name="Stamina" %}` where the tree and name of the research have to match exactly the way they're written in the research page (this is so the path fragment is generated correctly).

## Testing locally
The project can be ran locally to test if your changes work as expected. You need the following installed to be able to run it.

- Ruby
    - Windows (recommended): https://rubyinstaller.org/ (this includes RubyGems and Bundler, make sure to get the Devkit installer to get native extensions)
    - Other: https://www.ruby-lang.org/en/documentation/installation
- RubyGems: https://rubygems.org/pages/download
- Bundler: https://bundler.io/#getting-started
- Native extensions: https://www.msys2.org/

### Preparing the project
After cloning the project and having all the required tools installed you need to run:
`bundle install`

This will install all of the project dependencies defined in the `Gemfile`.

### Running the project
The project is served using [Jekyll](https://jekyllrb.com/), this processes all of the files in the project and turns it into proper HTML before deploying it.

In order to serve the project locally you have to run:
`cd pages`
`bundle exec jekyll serve`