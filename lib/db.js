var mongoose = require('mongoose');
var config = require('./config');
var debug = require('debug')('app:db');

config.ready(function (err, cfg) {
  debug('Connecting to %s', cfg.MONGODB_URL);
  mongoose.connect(cfg.MONGODB_URL);
});
