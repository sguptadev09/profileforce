var http = require("http");
var url = require("url");

function handleRequest(req, res){
	var pathname = url.parse(req.url).pathname;
  	res.writeHead(301, { Location: process.env.APP_URL + pathname });
  	res.end();
}

http.createServer(handleRequest).listen(process.env.PORT || 8080);