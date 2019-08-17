FROM node:10

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY . .
RUN apt update
RUN apt-get install libgconf-2-4
RUN npm install tslint
RUN npm ci

CMD ["npm", "run", "cy:run:smoke"]
