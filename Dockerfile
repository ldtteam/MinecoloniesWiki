ARG JEKYLL_HOME=/srv/jekyll

FROM ruby:3.1.1-buster as builder
ARG JEKYLL_HOME

RUN mkdir $JEKYLL_HOME
ADD pages $JEKYLL_HOME/
WORKDIR $JEKYLL_HOME

RUN bundle install
RUN bundle exec jekyll build

FROM nginx:alpine
ARG JEKYLL_HOME

COPY --from=builder $JEKYLL_HOME/build /usr/share/nginx/html