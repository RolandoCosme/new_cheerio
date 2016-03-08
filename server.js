var request = require('request');
var cheerio = require('cheerio');


request('https://www.reddit.com/', function (error, response, html) {
  var $ = cheerio.load(html);
  var result = [];
  $('p.title').each(function(i, element){
    var a = $(this);
    console.log(a.text());
    //scrape some stuff, put it in an object and add it to the result array

    });
  console.log(result);
});