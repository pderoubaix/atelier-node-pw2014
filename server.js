'use strict';

require('colors');

var express = require('express');
var http    = require('http');
var morgan  = require('morgan');

var app = express();
var server = http.createServer(app);

app.set('port', process.env.PORT || 3000);

var devMode = 'development' === app.get('env');

app.use(morgan(devMode ? 'dev' : 'common'));

require('./controllers/home')(app);

server.listen(app.get('port'), function() {
  console.log('✔︎︎ Express server listening on http://localhost:%d/'.green, app.get('port'));
});
