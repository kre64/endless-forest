require('dotenv').config()
module.exports = {
  target: 'serverless',
  env: {
    // Reference a variable that was defined in the .env file and make it available at Build Time
    GQL_ENDPOINT: process.env.GQL_ENDPOINT,
    GQL_AUTH_TOKEN: process.env.GQL_AUTH_TOKEN
  },
}