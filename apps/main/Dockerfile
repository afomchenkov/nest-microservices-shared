FROM node:22-alpine AS dependencies

WORKDIR /usr/src/app

RUN apk add --no-cache bash curl dos2unix

COPY package*.json ./
COPY nx.json ./
COPY tsconfig*.json ./

COPY apps/main/project.json ./apps/main/
COPY libs/core/project.json ./libs/core/

RUN npm install

FROM dependencies AS build

WORKDIR /usr/src/app

COPY . .

RUN npm build

FROM node:22-alpine AS production

WORKDIR /usr/src/app

COPY . .

COPY --from=build /usr/src/app/dist ./dist

ENTRYPOINT [ "npm", "run", "start:prod:main" ]

EXPOSE 3001