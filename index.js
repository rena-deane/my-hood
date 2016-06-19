var bodyParser = require('body-parser')
var dotenv = require('dotenv')
var express = require('express')
var app = express()
var fs = require('fs')
var path = require('path')
var request = require('superagent')


// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//---------------------Ignore above here-------------------//

app.get('/', function (req, res) {
  res.send('Hello World')
})

module.exports = app