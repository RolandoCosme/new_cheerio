var express = require('express');
var mongojs = require('mongojs');
var app = express();

var PORT = process.env.PORT || 4000;
var db = mongojs ('zooDB', ['animals']);

db.on('error', function (err){
  console.error('Database error, err');
});

app.get('/', function (req , res){
  res.send('You've got Animlas!'');
});

app.get('/animals', function(req, res){
  db.animals.find({}, function(err, dbresults){
    if(err){
      throw err;
    }
    res.json(dbresults);
  });
});

app.get('/animals/weight');
app.get('/animals/name');
app.get('/animals/numlegs');
app.get('/animals/isMammal');

app.listen(PORT, function (){
  console.log('up and running on port %s', PORT);
});