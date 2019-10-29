const fetch   = require('node-fetch');
const express = require('express');
const favicon = require('serve-favicon');
const path  = require("path");
const url  = require("url");

const app = express();

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
	
app.all('*', function(req, res, next){
	var appUrl = process.env.APP_URL + url.parse(req.url).pathname;
    fetch(appUrl)
    .then(res => res.text())
    .then(data => {
    	if(req.url.includes('.js')){
			res.type('text/javascript');
		} else if(req.url.includes('.css')){
			res.type('text/css');
		}
    	res.send(data);
    })
    .then(next)
    .catch(err => {
    	console.error(JSON.stringify(err));
    	next();
    });
});
 
const server = app.listen(process.env.PORT, function () {
    const host = server.address().address;
    const port = server.address().port;
    console.log("App listening at http://", host, port);
});