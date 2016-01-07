var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio'); //Allows use of JQuery

function redboxScraper(movie) {
	start = 'http://www.redbox.com/movies/'
	end = movie.split(' ').join('-');
	url = start + end;

	request(url, function(err, resp, html) {
		
		if(!err && resp.statusCode == 200) {
			var $ = cheerio.load(html);

			var movieDetails = {title: '', plot: ''}

			$('div.head').filter(function() {
				var contents = $(this);
				var title = contents.children().first().text();
				movieDetails.title = title;
			});
			$('div.details-plot-text.details-plot-description').filter(function() {
				var contents = $(this);
				var plot = contents.text()
				movieDetails.plot = plot;
			});
			console.log(movieDetails);
		}
	})
}

redboxScraper('Life of Pi');