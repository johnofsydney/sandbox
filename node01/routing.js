const http = require('http')

http.createServer(function (req, res) {
  console.log(req.url);
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end("Hello from <strong>HOMEPAGE</strong>")
  } else if (req.url === "/account" && req.method === "GET") {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end("Accounts")
  } else if (req.url === "/info" && req.method === "GET") {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end("INFORMATION: " + req.headers["user-agent"])
  } else {
    res.writeHead(404, {"Content-Type": "text/html"});
    res.end("404 page not found")
  }
}).listen(1337)
