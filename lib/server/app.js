var express = require('express');
var server = express();
var path = require('path');
var passport = require('passport');

var GitHubStrategy = require('passport-github').Strategy;


server.config(require('../auth/twitter/config.js'));

server.use(express.static(path.join(__dirname, 'public')));
 
server.get('/', require('./routes/index.js'));

server.get('/auth/twitter', require('./routes/twitter/auth.js'));
server.get('/auth/twitter/redirect', require('./routes/twitter/redirect.js'));

module.exports = function(db) {
  server.listen(process.env.PORT);
  return server;
};