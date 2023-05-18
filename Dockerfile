FROM node:20-alpine3.16 AS build-env

WORKDIR /app

COPY . ./

RUN npm install

RUN npm run build

#paso 2
FROM nginx:1.23.4-alpine