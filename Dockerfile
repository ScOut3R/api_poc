FROM node:10-alpine as builder

WORKDIR /usr/src

ADD package.json package-lock.json /usr/src/

RUN npm install --production

ADD . .

RUN npm build && \
  rm -rf .git


FROM node:10-alpine

WORKDIR /opt/app

COPY --from=builder /usr/src/ /opt/app

EXPOSE 3000
CMD [ "server.js" ]