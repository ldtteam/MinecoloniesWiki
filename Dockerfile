FROM jekyll/jekyll:4.2.2 as builder
ADD --chown=jekyll:jekyll pages /srv/jekyll/
RUN jekyll build

FROM nginx:alpine
COPY --from=builder /srv/jekyll/build /usr/share/nginx/html