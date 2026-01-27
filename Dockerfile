FROM node:23 AS build
WORKDIR /app
RUN npm install -g pnpm
COPY package*.json ./
COPY pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm run build

FROM node:23-alpine AS runtime
COPY --from=build /app/dist /app/dist
COPY deploy/nginx.conf /etc/nginx/nginx.conf
COPY deploy/start.sh /start.sh

RUN apk add --no-cache nginx && chmod +x /start.sh && mkdir -p /run/nginx

EXPOSE 80

ENTRYPOINT ["/start.sh"]