FROM cypress/included:3.4.0
MAINTAINER Milliam Jehnyffen

# Run tests
CMD ["./node_modules/.bin/cypress", "run", "--record", "--key bda27b52-019f-4fe1-a879-20202a07f99d"]