var http = require('http');
var https = require('https');

http.createServer(onRequest).listen(process.env.PORT || 8080);

function onRequest(client_req, client_res) {
    console.log('serve: ' + client_req.url);

    var options = {
        hostname: process.env.APP_URL || 'https://sf-devs-developer-edition.ap15.force.com',
        port: 443,
        path: client_req.url,
        method: client_req.method,
        headers: client_req.headers
    };

    var proxy = https.request(options, function (res) {
        client_res.writeHead(res.statusCode, res.headers)
        res.pipe(client_res, {
            end: true
        });
    });

    client_req.pipe(proxy, {
        end: true
    });
}