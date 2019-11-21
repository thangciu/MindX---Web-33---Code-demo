const http = require('http');
const { readFile } = require('./readfile.js');

http.createServer(function(request, response) {
  readFile(request, response);
}).listen(3000, function() {
  console.log('Server run on port 3000');
});