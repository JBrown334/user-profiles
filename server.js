//dependencies
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cors = require('cors');
var config = require('./config');

//controllers
var profileCtrl = require('./controllers/profileCtrl');
var userCtrl = require('./controllers/userCtrl');

//init express
var app = express();


var corsOptions = {
  origin: 'http://localhost:8080'
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(session({
  secret: config.sessionSecret,
  resave: true,
  saveUninitialized: true
}));
app.use(express.static(__dirname + '/public'));


app.post('/api/login', userCtrl.login);
app.get('/api/profiles', profileCtrl.getCurrentUser);

app.listen(8080, function(){
  console.log('listening on port 8080');
});
