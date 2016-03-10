var request = require('request');
var cheerio = require('cheerio');
var express = require('express');
var mongojs = require('mongojs');
var app = express();

var PORT = process.env.PORT || 4000;
var db = mongojs ('slickdeals', ['deals']);

db.on('error', function (err){
  console.error('Database error, err');
});

app.get('/', function (req , res){
  res.send('You got deals!');
});

request('http://slickdeals.net/', function (error, response, html) {
  var $ = cheerio.load(html);
  var result = [];
  $('.itemImageLink').each(function(i, element){
    var link = $(this).attr('href');
    var title = $(this).attr('title');
    //scrape some stuff, put it in an object and add it to the result array
    result.push({
      title: title,
      link: link
    })
    });
  console.log(result);
});

app.listen(PORT, function (){
  console.log('up and running on port %s', PORT);
});