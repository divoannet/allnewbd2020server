var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Player = require('./api/models/playerModel'),
    Flags = require('./api/models/flagModel'),
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/allnewdb2020', {
    useNewUrlParser: true
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/allNewGameRoutes'); //importing route
routes(app);

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
