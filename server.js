var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cors = require('cors');
var config = require('./config');
var profileCtrl = require('./controllers/profileCtrl');
var userCtrl = require('./controllers/userCtrl');

var app = express();


var corsOptions = {
  origin: 'http://localhost:8080'
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(session({secret: config.sessionSecret}));

app.post('/api/login', userCtrl.login);

var corsOptions = {
  origin: 'http://localhost:8080'
};

app.listen(8080, function(){
  console.log('listening on port 8080');
});
