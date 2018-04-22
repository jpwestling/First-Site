// var express = require('express');
// var mongoose = require('mongoose');
// var app = module.exports = express.createServer();

// // connect to Mongo when the app initializes
// mongoose.connect('mongodb://localhost/norum');

// app.configure(function(){
//   app.use(express.bodyParser());
//   app.use(express.methodOverride());
//   app.use(app.router);
// });

var listOfCountries = [
  { name: 'Japan', img: 'Tokyo_Park.JPG' },
  { name: 'South Korea', img: 'Pyeongyang.jpeg' },
  { name: 'Thailand', img: 'Thai_Market.JPG' },
  { name: 'Brazil', img: 'Brazil_Ame.jpg' },
  { name: 'Indonesia', img: 'Bali_Waterfall.JPG' },
  { name: 'South Korea', img: 'Seoraksan.jpeg' },
  { name: 'South Korea', img: 'Korea_Wall.jpeg' },
  { name: 'South Korea', img: 'Pyeongyang.jpeg' },
  { name: 'Thailand', img: 'Thai_Spices.JPG' },
  { name: 'Thailand', img: 'Thailand_Buddha.jpeg' },

];

function countryTemplate(country) {
  return (`<img src='./Images/${country.img}'/>`)
}

function placeCountries(countries) {
  $('.containerImage').empty('');
  countries.forEach(function(country) {
    var countryHtml = countryTemplate(country);
    $('.containerImage').append(countryHtml);
  })
}

function filter(countries, input) {
	var newCountries = countries.filter(function(obj){
  		return obj.name === input;
	});
	return newCountries;
}

$(document).ready(function() {

  $('#country-search-form').submit(function(e) {

    e.preventDefault();
    var input = $('#countrySelect').val();
    var newCountries = filter(listOfCountries, input);
    placeCountries(newCountries);

  });
});