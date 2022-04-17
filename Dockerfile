FROM jekyll/jekyll:4.2.2 as builder
ADD pages /srv/jekyll/
ENV BUNDLE_GEMFILE=Gemfile.production
RUN chown -R jekyll:jekyll /usr/gem
RUN bundle install
RUN bundle exec jekyll build

FROM nginx:alpine
COPY --from=builder /srv/jekyll/build /usr/share/nginx/html