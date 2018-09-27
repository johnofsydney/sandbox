const http = require('http') // in standard node library

http.createServer( function (req, res) { // request and response
  console.log("serving a request")
  res.writeHeader(200, {'Content-Type': 'text-plain'});
  res.end("Hello world from node.js server\n")
}).listen(1337); //port number

console.log("server running at port 1337 - http://localhost:1337");
