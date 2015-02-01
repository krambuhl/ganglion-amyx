var express = require('express');
var server = express();
var path = require('path');
var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;

// var addTweet = require('./manip/twitter/addTweet.js');

server.use(express.static(path.join(__dirname, 'public')));
 
server.get('/', require('./routes/index.js'));

server.get('/twitter', require('./routes/twitter/index.js'));
server.get('/twitter/auth', require('./routes/twitter/auth.js'));
server.get('/twitter/redirect', require('./routes/twitter/redirect.js'));

module.exports = function(db) {
  server.listen(process.env.PORT);
  return server;
};