FROM node:14-alpine as builder

WORKDIR /app
COPY . .
RUN npm i && npm run build && npm prune --production && rm -rf src

FROM node:14-alpine as base

ENV REQUEST_TIMEOUT="60000"
ENV DATA_PATH="/tmp"
ENV ENV="production"
ENV USER="root"
ENV PASS="toor"

EXPOSE 80
WORKDIR /app

COPY --from=builder --chown=node:node /app /app

RUN npm i -g pm2
CMD ["pm2-runtime", "ecosystem.config.js"]
