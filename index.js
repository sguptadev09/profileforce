var http = require('http');

var proxy = require('http-proxy');

var url = require('url');

proxyServer = proxy.createProxyServer({ target: 'http://sf-devs-developer-edition.ap15.force.com:80' });

//proxyServer.listen(process.env.PORT);

server = http.createServer(function (req, res) {

 req.headers.host = 'http://sf-devs-developer-edition.ap15.force.com:80';

 console.log(req.url);

 proxyServer.web(req, res, { target: 'http://sf-devs-developer-edition.ap15.force.com:80', changeOrigin: true });

 proxyServer.on('error', function(e) {

  console.log("Error in proxy call", e);

 });

});

server.listen(process.env.PORT || 8080);