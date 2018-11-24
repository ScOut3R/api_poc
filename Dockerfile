FROM node:10-alpine

WORKDIR /usr/src

ADD package.json package-lock.json /usr/src/

RUN npm install --production

ADD . .
