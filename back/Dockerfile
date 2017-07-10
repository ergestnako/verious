FROM node:8.0.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
COPY package-lock.json /usr/src/app/

RUN npm install

COPY . /usr/src/app/

RUN npm run documentation

EXPOSE 8080
CMD [ "npm", "start" ]
