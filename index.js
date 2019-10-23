const express = require('express');
const app     = express();
const fetch   = require('node-fetch');
 
app.get('/', function (req, res) {
	res.type('html');

    var url = process.env.APP_URL || 'https://sf-devs-developer-edition.ap15.force.com';
     
    fetch(url)
    .then(res => res.text())
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.send(err);
    });
});
 
const server = app.listen(process.env.PORT || 8080, function () {
    const host = server.address().address;
    const port = server.address().port;
    
    console.log("App listening at http://%s:%s", host, port);
});