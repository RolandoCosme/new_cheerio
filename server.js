var express = require('express');
var app = express();
var request = require('request');
var cheerio = require('cheerio');
var mongojs = require('mongojs');

var PORT = process.env.PORT || 3000;

var databaseUrl = "scraper";

var collections = ["scrapedData"];

var db = mongojs(databaseUrl, collections);

db.on('error', function(err) {
  console.log('Database Error:', err);
});


request('http://slickdeals.net/', function (error, response, html) {
  var $ = cheerio.load(html);
  var result = [];
  $('.itemImageLink').each(function(i, element){
    var link = $(this).attr('href');
    var title = $(this).attr('title');
    db.scrapedData.insert({'title': title});
    //scrape some stuff, put it in an object and add it to the result array
    // result.push({
    //   title: title,
    //   link: link
    // })
  });

});




app.get('/', function(req,res){
  res.send('Scraper homepage');
})

app.get('/scraper', function(req,res){
  db.scrapedData.find({}, function(err, dbResults){
    if(err) {
      throw err;
    }
    res.send(dbResults);
  });
});

app.get('/illegal', function(req,res){
  db.scraper.find({}, function(err, dbResults){
    if(err) {
      throw err;
    }
    res.send(dbResults);
  });
});


app.listen(3000, function() {
  console.log('App running on port 3000!');
});
