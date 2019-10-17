const http = require("http");
const url = require("url");
const request = require("request");

//const location = "http://sf-devs-developer-edition.ap15.force.com/";

http.createServer(function(req, res) {
	var pathname = url.parse(req.url).pathname;
  	request.get(process.env.APP_URL + pathname, function(err, response, body) {
	    if (err) body = err; 
	    res.write(body);
	    res.end();
  	});
}).listen(process.env.PORT || 8000);