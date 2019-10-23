var express = require('express');  
var app     = express(); 
var request = require('request');
  
app.get('/', function(req, res) {  
    var url = process.env.APP_URL || 'https://sf-devs-developer-edition.ap15.force.com';
    req.pipe(request(url)).pipe(res);
});
 
const server = app.listen(process.env.PORT || 8080, function () {
    const host = server.address().address;
    const port = server.address().port;
    
    console.log("App listening at http://%s:%s", host, port);
});