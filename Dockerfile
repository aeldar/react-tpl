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

RUN echo "daemon off;" >> /etc/nginx/nginx.conf
COPY ./tools/nginx/site.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx"]
