FROM node:23 AS build
WORKDIR /app
RUN npm install -g pnpm
COPY package*.json ./
COPY pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm run build

FROM node:23-alpine AS runtime
COPY --from=build /app/dist ./dist
COPY deploy/nginx.conf /etc/nginx/nginx.conf
COPY deploy/start.sh /start.sh

RUN chmod +x /start.sh && mkdir -p /run/nginx

EXPOSE 80