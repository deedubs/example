var http = require('http');
var db = require('./lib/db');
var config = require('./lib/config');
var debug = require('debug')('app');

var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n' + JSON.stringify(config.cfg));
})

config.ready(function (err, cfg) {
  debug('Listening @ http://localhost:%d', cfg.PORT);
  server.listen(cfg.PORT);
});
