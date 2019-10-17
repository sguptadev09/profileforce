var http = require('http');

var proxy = require('http-proxy');

var url = require('url');

proxyServer = proxy.createProxyServer({target: process.env.APP_URL || "https://sf-devs-developer-edition.ap15.force.com"});

//proxyServer.listen(8000);

server = http.createServer(function (req, res) {

 console.log(req.url);

 proxyServer.web(req, res, { target: req.url });

 proxyServer.on('error', function(e) {

  console.log("Error in proxy call", e);

 });

});

server.listen(process.env.PORT || 8080);