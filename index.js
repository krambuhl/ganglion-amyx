var database = require('./lib/database/connection.js');
var server = require('./lib/server/app.js');

database(function(err, db) {
  server(db);
});