var request = require('request');
var cheerio = require('cheerio');


request('[http://www.cnet.com/]', function (error, response, html) {
  var $ = cheerio.load(html);
  var result = [];
  $(['h3.title']).each(function(i, element){

    //scrape some stuff, put it in an object and add it to the result array

    });
  console.log(result);
});