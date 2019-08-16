FROM cypress/base:10.11.0

RUN npm install --save-dev cypress

RUN $(npm bin)/cypress verify

RUN $(npm bin)/cypress run
