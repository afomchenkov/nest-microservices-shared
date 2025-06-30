FROM node:23-bullseye AS dependencies

# Update and install security patches
RUN apt-get update && apt-get upgrade -y && apt-get clean

WORKDIR /usr/src

COPY package*.json ./
COPY nx.json ./
COPY tsconfig*.json ./

COPY apps/serviceB/project.json ./apps/serviceB/
COPY libs/core/project.json ./libs/core/

RUN npm install

FROM dependencies AS build

WORKDIR /usr/src

COPY . .

RUN npm run build:service-b

FROM node:23-bullseye AS production

WORKDIR /usr/src

COPY . .

COPY --from=build /usr/src/dist ./dist

ENTRYPOINT [ "npm", "run", "start:prod:service-b" ]

EXPOSE 3003