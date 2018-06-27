FROM node:10

WORKDIR /app

ADD . /app

RUN npm install

CMD node server.js
