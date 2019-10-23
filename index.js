const fetch   = require('node-fetch');
const express = require('express');
const path  = require("path");
const url  = require("url");

const app = express();

process.env.APP_URL = 'http://sf-devs-developer-edition.ap15.force.com';
process.env.PORT = 8080;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/_slds', function(){});

app.all('*', function(req, res){
	var appUrl = process.env.APP_URL + url.parse(req.url).pathname;
    fetch(appUrl).then(res => res.text()).then(data => res.send(data));
});
 
const server = app.listen(process.env.PORT, function () {
    const host = server.address().address;
    const port = server.address().port;
    console.log("App listening at http://%s:%s", host, port);
});