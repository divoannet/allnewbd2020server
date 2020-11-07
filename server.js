var fs = require('fs');
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var Player = require('./api/models/playerModel');
var Flags = require('./api/models/flagModel');
var bodyParser = require('body-parser');

var key = fs.readFileSync(process.env.KEY_PATH);
var cert = fs.readFileSync(process.env.CERT_PATH);
var ca = fs.readFileSync(process.env.CA_PATH);

var options = {
  key: key,
  cert: cert,
  ca: ca
};

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/allnewdb2020', {
    useNewUrlParser: true
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/allNewGameRoutes'); //importing route
routes(app);

var https = require('https');
https.createServer(options, app).listen(3000);