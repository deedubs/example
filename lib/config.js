var Config = require('config');
var config = module.exports = new Config();


config
  .env(process.env.NODE_ENV);
