FROM node:7.10.0

WORKDIR /opt/app

RUN mkdir -p /opt
ADD latest.tar.gz /opt/
RUN mv /opt/dist /opt/yarn
ENV PATH "$PATH:/opt/yarn/bin"

ADD package.json yarn.lock /tmp/
ADD .yarn-cache.tgz /
RUN cd /tmp && yarn
RUN mkdir -p /opt/app && cd /opt/app && ln -s /tmp/node_modules

COPY server /opt/app/server
COPY documentation /opt/app/documentation
COPY .eslintrc /opt/app/
COPY package.json /opt/app/
COPY gulpfile.js /opt/app/

RUN yarn build

EXPOSE 8080
CMD [ "npm", "start" ]
