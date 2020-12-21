require('dotenv').config()
module.exports = {
  target: 'serverless',
  env: {
    // Reference a variable that was defined in the .env file and make it available at Build Time
    SLASH_ENDPOINT: process.env.SLASH_ENDPOINT,
  },
}