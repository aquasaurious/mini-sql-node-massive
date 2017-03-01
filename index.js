var express = require('express');

var app = module.exports = express();

var bodyParser = require('body-parser');
var massive = require('massive');
var cors = require('cors');
var controller = require('./controller.js');

var connectionString = "postgres://postgres:hose88@localhost/sandbox";
app.use(bodyParser.json());
app.use(cors());


var massiveInstance = massive.connectSync({connectionString : connectionString});

app.set('db', massiveInstance);


controller.getPlanes();


/*
var db = app.get('db');

db.new_plane(function(err, planes){
    console.log(err, "plane added")
});

db.get_planes(function(err, planes){
    console.log(err, planes)
});
*/

app.listen('5432', function(){
  console.log("Successfully listening on : 5432")	
});

