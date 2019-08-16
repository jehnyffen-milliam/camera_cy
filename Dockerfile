FROM cypress/base:10.11.0

WORKDIR /e2e

COPY . .

RUN npm install --save-dev cypress

RUN $(npm bin)/cypress verify

RUN $(npm bin)/cypress run --config integrationFolder=cypress/integration --record --key=bda27b52-019f-4fe1-a879-20202a07f99d --parallel --ci-build-id travis --group 2x-electron
