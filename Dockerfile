FROM node:carbon-alpine AS build

# Build

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install --prefer-offline

COPY ./tools ./tools
COPY ./public ./public
COPY ./src ./src
COPY config-overrides.js tsconfig.json tslint.json ./

RUN yarn build

# Run

FROM nginx:alpine AS run

RUN mkdir -p /opt/app
COPY --from=build /usr/src/app/build /opt/app

COPY ./tools/nginx /tmp

EXPOSE 80

RUN chmod a+x /tmp/nginx/start.sh

CMD ["/tmp/nginx/start.sh"]
