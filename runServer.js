/**
* To run the server on the command line.
*/

// Enable ES6 - this will make it automatically transpile required files. See: http://babeljs.io/docs/usage/require/
require('babel/register');

var server = require('./server');

server.start();
