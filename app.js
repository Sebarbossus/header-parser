//Basic required imports for NodeJS
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
//Used for easy parsing of user-agent for response
var useragent = require('express-useragent');
//Instantiate express for our app and also body parser and cors
var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
app.use(useragent.express());

//API URL
var api = '/api/whoami';

app.get(api, function(req, res, next){
    var language = req.acceptsLanguages();
    var software = req.useragent;
    var ipaddress = req.ip;

    res.json({'ipaddress': ipaddress, 'language': language[0], 'Operating System': software.os, 'Version': software.version, 'Platform': software.platform, 'Browser': software.browser});
});

//Set up the port to listen on
app.listen(3000, function(){
    console.log("Working");
});