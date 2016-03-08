var request = require('request');
var cheerio = require('cheerio');

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

