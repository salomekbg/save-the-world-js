// $(document).ready(function() {
//   getHeroes100();
//   getHeroes200();
//   getHeroes300();
//   getHeroes400();
//   getHeroes500();
//   getHeroes600();
//   getHeroes700();
//   getHeroes800();
//   getHeroes900();
//   getHeroes1000();
//   getHeroes1100();
//   getHeroes1200();
//   getHeroes1300();
//   getHeroes1400();
//   getHeroes1500();
  // setRedisInfo();
// })

// const PUBL_KEY = config.PUBL_KEY;
// const PRIV_KEY = config.PRIV_KEY;
// var ts = String(Date.now());
// var hash = md5(ts + PRIV_KEY + PUBL_KEY);
// var superheroes = [];
// var mostFamous = [];
// var heroesCities = [];
var cities = {
  // this is in latitude, longitude, but Redis needs longitude first
"NYC":[40.730610, -73.935242],
"Boston":[42.364506, -71.038887],
"DC":[38.894207, -77.035507],
"Chicago":[41.881832, -87.623177],
"Indianapolis":[39.832081, -86.145454],
"LA":[34.052235, -118.243683],
"SF":[37.733795, -122.446747],
"Dallas":[32.897480, -97.040443],
"Denver":[39.742043, -104.991531],
"Seattle":[47.608013, -122.335167],
"New Orleans":[29.951065, -90.071533],
"Orlando":[28.538336, -81.379234],
"Baltimore":[39.299236, -76.609383],
"Minneapolis":[44.986656, -93.258133],
"Cleveland":[41.505493, -81.681290]
};

// function getHeroes100() {
//   $.ajax({
//     method: "GET",
//     url: 'https://gateway.marvel.com/v1/public/characters?orderBy=name&limit=100&offset=0',
//     data: {
//       "apikey": PUBL_KEY,
//       "ts": ts,
//       "hash": hash
//     }
//   }).done(function(result) {
//     for (let key in result.data.results) {
//       superheroes.push(new Array(result.data.results[key].name, result.data.results[key].comics.available));
//     }
//   })
// }
//
// function getHeroes200() {
//   $.ajax({
//     method: "GET",
//     url: 'https://gateway.marvel.com/v1/public/characters?orderBy=name&limit=100&offset=100',
//     data: {
//       "apikey": PUBL_KEY,
//       "ts": ts,
//       "hash": hash
//     }
//   }).done(function(result) {
//     for (let key in result.data.results) {
//       superheroes.push(new Array(result.data.results[key].name, result.data.results[key].comics.available));
//     }
//   })
// }
//
// function getHeroes300() {
//   $.ajax({
//     method: "GET",
//     url: 'https://gateway.marvel.com/v1/public/characters?orderBy=name&limit=100&offset=200',
//     data: {
//       "apikey": PUBL_KEY,
//       "ts": ts,
//       "hash": hash
//     }
//   }).done(function(result) {
//     for (let key in result.data.results) {
//       superheroes.push(new Array(result.data.results[key].name, result.data.results[key].comics.available));
//     }
//   })
// }
//
// function getHeroes400() {
//   $.ajax({
//     method: "GET",
//     url: 'https://gateway.marvel.com/v1/public/characters?orderBy=name&limit=100&offset=300',
//     data: {
//       "apikey": PUBL_KEY,
//       "ts": ts,
//       "hash": hash
//     }
//   }).done(function(result) {
//     for (let key in result.data.results) {
//       superheroes.push(new Array(result.data.results[key].name, result.data.results[key].comics.available));
//     }
//   })
// }
//
// function getHeroes500() {
//   $.ajax({
//     method: "GET",
//     url: 'https://gateway.marvel.com/v1/public/characters?orderBy=name&limit=100&offset=400',
//     data: {
//       "apikey": PUBL_KEY,
//       "ts": ts,
//       "hash": hash
//     }
//   }).done(function(result) {
//     for (let key in result.data.results) {
//       superheroes.push(new Array(result.data.results[key].name, result.data.results[key].comics.available));
//     }
//   })
// }
//
// function getHeroes600() {
//   $.ajax({
//     method: "GET",
//     url: 'https://gateway.marvel.com/v1/public/characters?orderBy=name&limit=100&offset=500',
//     data: {
//       "apikey": PUBL_KEY,
//       "ts": ts,
//       "hash": hash
//     }
//   }).done(function(result) {
//     for (let key in result.data.results) {
//       superheroes.push(new Array(result.data.results[key].name, result.data.results[key].comics.available));
//     }
//   })
// }
//
// function getHeroes700() {
//   $.ajax({
//     method: "GET",
//     url: 'https://gateway.marvel.com/v1/public/characters?orderBy=name&limit=100&offset=600',
//     data: {
//       "apikey": PUBL_KEY,
//       "ts": ts,
//       "hash": hash
//     }
//   }).done(function(result) {
//     for (let key in result.data.results) {
//       superheroes.push(new Array(result.data.results[key].name, result.data.results[key].comics.available));
//     }
//   })
// }
//
// function getHeroes800() {
//   $.ajax({
//     method: "GET",
//     url: 'https://gateway.marvel.com/v1/public/characters?orderBy=name&limit=100&offset=700',
//     data: {
//       "apikey": PUBL_KEY,
//       "ts": ts,
//       "hash": hash
//     }
//   }).done(function(result) {
//     for (let key in result.data.results) {
//       superheroes.push(new Array(result.data.results[key].name, result.data.results[key].comics.available));
//     }
//   })
// }
//
// function getHeroes900() {
//   $.ajax({
//     method: "GET",
//     url: 'https://gateway.marvel.com/v1/public/characters?orderBy=name&limit=100&offset=800',
//     data: {
//       "apikey": PUBL_KEY,
//       "ts": ts,
//       "hash": hash
//     }
//   }).done(function(result) {
//     for (let key in result.data.results) {
//       superheroes.push(new Array(result.data.results[key].name, result.data.results[key].comics.available));
//     }
//   })
// }
//
// function getHeroes1000() {
//   $.ajax({
//     method: "GET",
//     url: 'https://gateway.marvel.com/v1/public/characters?orderBy=name&limit=100&offset=900',
//     data: {
//       "apikey": PUBL_KEY,
//       "ts": ts,
//       "hash": hash
//     }
//   }).done(function(result) {
//     for (let key in result.data.results) {
//       superheroes.push(new Array(result.data.results[key].name, result.data.results[key].comics.available));
//     }
//   })
// }
//
// function getHeroes1100() {
//   $.ajax({
//     method: "GET",
//     url: 'https://gateway.marvel.com/v1/public/characters?orderBy=name&limit=100&offset=1000',
//     data: {
//       "apikey": PUBL_KEY,
//       "ts": ts,
//       "hash": hash
//     }
//   }).done(function(result) {
//     for (let key in result.data.results) {
//       superheroes.push(new Array(result.data.results[key].name, result.data.results[key].comics.available));
//     }
//   })
// }
//
// function getHeroes1200() {
//   $.ajax({
//     method: "GET",
//     url: 'https://gateway.marvel.com/v1/public/characters?orderBy=name&limit=100&offset=1100',
//     data: {
//       "apikey": PUBL_KEY,
//       "ts": ts,
//       "hash": hash
//     }
//   }).done(function(result) {
//     for (let key in result.data.results) {
//       superheroes.push(new Array(result.data.results[key].name, result.data.results[key].comics.available));
//     }
//   })
// }
//
// function getHeroes1300() {
//   $.ajax({
//     method: "GET",
//     url: 'https://gateway.marvel.com/v1/public/characters?orderBy=name&limit=100&offset=1200',
//     data: {
//       "apikey": PUBL_KEY,
//       "ts": ts,
//       "hash": hash
//     }
//   }).done(function(result) {
//     for (let key in result.data.results) {
//       superheroes.push(new Array(result.data.results[key].name, result.data.results[key].comics.available));
//     }
//   })
// }
//
// function getHeroes1400() {
//   $.ajax({
//     method: "GET",
//     url: 'https://gateway.marvel.com/v1/public/characters?orderBy=name&limit=100&offset=1300',
//     data: {
//       "apikey": PUBL_KEY,
//       "ts": ts,
//       "hash": hash
//     }
//   }).done(function(result) {
//     for (let key in result.data.results) {
//       superheroes.push(new Array(result.data.results[key].name, result.data.results[key].comics.available));
//     }
//   })
// }
//
// function getHeroes1500() {
//   $.ajax({
//     method: "GET",
//     url: 'https://gateway.marvel.com/v1/public/characters?orderBy=name&limit=100&offset=1400',
//     data: {
//       "apikey": PUBL_KEY,
//       "ts": ts,
//       "hash": hash
//     }
//   }).done(function(result) {
//     for (let key in result.data.results) {
//       superheroes.push(new Array(result.data.results[key].name, result.data.results[key].comics.available));
//     }
//     sortHeroes();
//     sortHeroesCities();
//   })
// }
//
// // sort heroes by number of comics and get the first 15 into a new array
// function sortHeroes() {
//   superheroes.sort(function(a, b) {
//     return b[1] - a[1];
//   });
//   var top15 = superheroes.slice(0, 15);
//   for (let i = 0; i < top15.length; i++) {
//     mostFamous.push(top15[i][0]);
//   }
// }
//
// // get array of cities and associated heroes
// function sortHeroesCities() {
//   // push each city into a nested array
//   for (var city in cities) {
//     heroesCities.push(new Array(city))
//   }
//   // push each hero into a nested array
//   for (let i = 0; i < mostFamous.length; i++) {
//     heroesCities[i].push(mostFamous[i])
//   }
//   console.log(heroesCities);
// }

// function setRedisInfo() {
  var redis = require('redis');
  var redisClient = redis.createClient({host : 'localhost', port : 6379});

  redisClient.on('ready',function() {
    console.log("Redis is ready");
  });

  redisClient.on('error',function() {
   console.log("Error in Redis");
  });

// }
