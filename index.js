var dotenv = require('dotenv')
var express = require('express')
var fs = require('fs')
var google = require('googleapis')
var request = require('superagent')

var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//---------------------Ignore above here-------------------//

var clientGoogle = new Google(process.env.GOOGLE_API_KEY)

app.get('/', function (req, res) {
  res.send('Hello World')
})
