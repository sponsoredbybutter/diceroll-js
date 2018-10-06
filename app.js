var express = require('express');
var app = express();
var mysql = require('mysql');

const port = 5000;

app.use(express.static('public'))

app.get('/', function(req, res){
  res.sendFile('public/home.html' , { root : __dirname});
});

app.listen(port, function(){
  console.log("listening...");
});
