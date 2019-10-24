const fetch   = require('node-fetch');
const express = require('express');
const path  = require("path");
const url  = require("url");

const app = express();

/*process.env.APP_URL = 'http://sf-devs-developer-edition.ap15.force.com';
process.env.PORT = 8080;*/

app.use(express.static(path.join(__dirname, 'public')));

app.all('*', function(req, res, next){
	if (req.url.startsWith('/_slds')) {
		next();
	} else {
		var appUrl = process.env.APP_URL + url.parse(req.url).pathname;
	    fetch(appUrl)
	    .then(res => res.text())
	    .then(data => res.send(data))
	    .then(next)
	    .catch(err => {
	    	console.error(JSON.stringify(err));
	    	next();
	    })
	}
});
 
const server = app.listen(process.env.PORT, function () {
    const host = server.address().address;
    const port = server.address().port;
    console.log("App listening at http://", host, port);
});