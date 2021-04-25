FROM starefossen/github-pages:onbuild

CMD jekyll serve -d /_site --watch --force_polling -H 0.0.0.0 -P 4000 --baseurl https://wiki.minecolonies.ldtteam.com/
