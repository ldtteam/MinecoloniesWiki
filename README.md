# MineColonies Wiki

A wiki for the Minecraft mod [MineColonies](https://github.com/ldtteam/minecolonies). Read it [here](https://wiki.minecolonies.ldtteam.com/)!

## Testing locally
The project can be ran locally to test if your post works as expected. You need the following installed to be able to run it.

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
`bundle exec jekyll serve`