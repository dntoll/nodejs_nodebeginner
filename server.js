//http://www.nodebeginner.org/

var http = require("http");

func = function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
  console.log("Hello from browser");
}

http.createServer(func).listen(8888);