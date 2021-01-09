# Save That Box

> A Vue.js project

## About

This site gives information on retailers return policy, highlights retailer news, and latest trends going on.

## Development commands

```bash
# install dependencies
yarn install

# serve with hot reload at localhost:8080
yarn start

# build for production with minification
yarn build

# generate data json
yarn generate

# deploy built project to AWS
yarn deploy
```

## AWS Notes

Cloudfront needs custom error pages so 403 and 404 routes back to /index.html
This is because it's a SPA
