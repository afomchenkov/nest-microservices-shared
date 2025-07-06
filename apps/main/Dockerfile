FROM node:23-bullseye AS dependencies

# Update and install security patches
RUN apt-get update && apt-get upgrade -y && apt-get clean

WORKDIR /usr/src

COPY package*.json ./
COPY nx.json ./
COPY tsconfig*.json ./

# App and lib configs
COPY apps/main/project.json ./apps/main/
COPY libs/core/project.json ./libs/core/

# App and lib source code
COPY apps/main ./apps/main
COPY libs/core ./libs/core

RUN npm install

FROM dependencies AS build

WORKDIR /usr/src

COPY . .

ENV NX_DAEMON false

RUN npm run build:main

FROM node:23-bullseye AS production

WORKDIR /usr/src

COPY . .

COPY --from=dependencies /usr/src/node_modules ./node_modules
COPY --from=build /usr/src/dist ./dist

USER node

EXPOSE 3001

ENTRYPOINT [ "npm", "run", "start:prod:main" ]
