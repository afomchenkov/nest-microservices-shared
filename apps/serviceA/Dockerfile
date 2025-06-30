FROM node:23-bullseye AS dependencies

# Update and install security patches
RUN apt-get update && apt-get upgrade -y && apt-get clean

WORKDIR /usr/src

COPY package*.json ./
COPY nx.json ./
COPY tsconfig*.json ./

COPY apps/serviceA/project.json ./apps/serviceA/
COPY libs/core/project.json ./libs/core/

RUN npm install

FROM dependencies AS build

WORKDIR /usr/src

COPY . .

RUN npm run build:service-a

FROM node:23-bullseye AS production

WORKDIR /usr/src

COPY . .

COPY --from=build /usr/src/dist ./dist

ENTRYPOINT [ "npm", "run", "start:prod:service-a" ]

EXPOSE 3002