require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.DEV_USERNAME,
    "password": process.env.DEV_PASSWORD,
    "database": process.env.DEV_DATABASE,
    "host": process.env.DEV_HOST,
    "dialect": process.env.DEV_DIALECT
  },
  "test": {
    "username": process.env.TEST_USERNAME,
    "password": process.env.TEST_PASSWORD,
    "database": process.env.TEST_DATABASE,
    "host": process.env.TEST_HOST,
    "dialect": process.env.TEST_DIALECT
  },
  "production": {
    "username": process.env.PRODUCTION_USERNAME,
    "password": process.env.PRODUCTION_PASSWORD,
    "database": process.env.PRODUCTION_DATABASE,
    "host": process.env.PRODUCTION_HOST,
    "dialect": process.env.PRODUCTION_DIALECT
  }
}