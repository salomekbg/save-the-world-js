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

var express = require("express");
var bodyParser = require("body-parser");
var app = express();

// configure express to use body-parser as middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// help with CORS issue
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// get the data from the frontend and find the closest hero to the location
app.post('/findclosesthero', function(req, res){
  var location = req.body.location;
  redisClient.georadius("cities", String(cities[location][1]), String(cities[location][0]), "500", "mi", "WITHDIST", function(err, reply) {
    if (err) {
      console.log(err);
    } else {
      // sort by distance, the closest one first
      reply.sort(function(a, b) {
        return a[1] - b[1];
      });
      closestHeroesToLocation = reply;
    }
  });
  res.end("done");
});

app.get('/getclosesthero', function(req, res){
  // don't need the last city as it's the one at the coordinates
  res.send(closestHeroesToLocation);
});
// which port to listen on
app.listen(3000);

var redis = require('redis');
var redisClient = redis.createClient({host : 'localhost', port : 6379});

redisClient.on('ready',function() {
  console.log("Redis is ready");
});

redisClient.on('error',function() {
 console.log("Error in Redis");
});

for (var key in cities) {
  redisClient.geoadd("cities", String(cities[key][1]), String(cities[key][0]), key, function(err, reply) {
    if (err) {
      console.log(err);
    }
  });
};

// find cities closets to Boston specifically
redisClient.georadius("cities", String(cities["Boston"][1]), String(cities["Boston"][0]), "500", "mi", "WITHDIST", function(err, reply) {
  if (err) {
    console.log(err);
  } else {
    console.log(reply);
  }
});
