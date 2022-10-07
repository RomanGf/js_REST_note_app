FROM node:16 as base
WORKDIR /usr/app
COPY package*.json ./
COPY tsconfig*.json ./
RUN npm install typescript -g
RUN npm install
COPY . .

FROM base as prod
RUN npm run build
