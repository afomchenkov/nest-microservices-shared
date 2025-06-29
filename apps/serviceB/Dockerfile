FROM node:23 AS dependencies

# Update and install security patches
RUN apt-get update && apt-get upgrade -y && apt-get clean

WORKDIR /usr/src/app

RUN apk add --no-cache bash curl dos2unix

COPY package*.json ./
COPY nx.json ./
COPY tsconfig*.json ./

COPY apps/serviceB/project.json ./apps/serviceB/
COPY libs/core/project.json ./libs/core/

RUN npm install

FROM dependencies AS build

WORKDIR /usr/src/app

COPY . .

RUN npm build

FROM node:23 AS production

WORKDIR /usr/src/app

COPY . .

COPY --from=build /usr/src/app/dist ./dist

ENTRYPOINT [ "npm", "run", "start:prod:service-b" ]

EXPOSE 3003