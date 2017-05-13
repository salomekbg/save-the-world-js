$(document).ready(function() {
  getHeroes100();
  getHeroes200();
  getHeroes300();
  getHeroes400();
  getHeroes500();
  getHeroes600();
  getHeroes700();
  getHeroes800();
  getHeroes900();
  getHeroes1000();
  getHeroes1100();
  getHeroes1200();
  getHeroes1300();
  getHeroes1400();
  getHeroes1500();
})

const PUBL_KEY = config.PUBL_KEY;
const PRIV_KEY = config.PRIV_KEY;
var ts = String(Date.now());
var hash = md5(ts + PRIV_KEY + PUBL_KEY);
var superheroes = [];
var mostFamous = []

function getHeroes100() {
  $.ajax({
    method: "GET",
    url: 'https://gateway.marvel.com/v1/public/characters?orderBy=name&limit=100&offset=0',
    data: {
      "apikey": PUBL_KEY,
      "ts": ts,
      "hash": hash
    }
  }).done(function(result) {
    for (let key in result.data.results) {
      superheroes.push(new Array(result.data.results[key].name, result.data.results[key].comics.available));
    }
    console.log(result.data.results)
    debugger
  })
}

function getHeroes200() {
  $.ajax({
    method: "GET",
    url: 'https://gateway.marvel.com/v1/public/characters?orderBy=name&limit=100&offset=100',
    data: {
      "apikey": PUBL_KEY,
      "ts": ts,
      "hash": hash
    }
  }).done(function(result) {
    for (let key in result.data.results) {
      superheroes.push(new Array(result.data.results[key].name, result.data.results[key].comics.available));
    }
  })
}

function getHeroes300() {
  $.ajax({
    method: "GET",
    url: 'https://gateway.marvel.com/v1/public/characters?orderBy=name&limit=100&offset=200',
    data: {
      "apikey": PUBL_KEY,
      "ts": ts,
      "hash": hash
    }
  }).done(function(result) {
    for (let key in result.data.results) {
      superheroes.push(new Array(result.data.results[key].name, result.data.results[key].comics.available));
    }
  })
}

function getHeroes400() {
  $.ajax({
    method: "GET",
    url: 'https://gateway.marvel.com/v1/public/characters?orderBy=name&limit=100&offset=300',
    data: {
      "apikey": PUBL_KEY,
      "ts": ts,
      "hash": hash
    }
  }).done(function(result) {
    for (let key in result.data.results) {
      superheroes.push(new Array(result.data.results[key].name, result.data.results[key].comics.available));
    }
  })
}

function getHeroes500() {
  $.ajax({
    method: "GET",
    url: 'https://gateway.marvel.com/v1/public/characters?orderBy=name&limit=100&offset=400',
    data: {
      "apikey": PUBL_KEY,
      "ts": ts,
      "hash": hash
    }
  }).done(function(result) {
    for (let key in result.data.results) {
      superheroes.push(new Array(result.data.results[key].name, result.data.results[key].comics.available));
    }
  })
}

function getHeroes600() {
  $.ajax({
    method: "GET",
    url: 'https://gateway.marvel.com/v1/public/characters?orderBy=name&limit=100&offset=500',
    data: {
      "apikey": PUBL_KEY,
      "ts": ts,
      "hash": hash
    }
  }).done(function(result) {
    for (let key in result.data.results) {
      superheroes.push(new Array(result.data.results[key].name, result.data.results[key].comics.available));
    }
  })
}

function getHeroes700() {
  $.ajax({
    method: "GET",
    url: 'https://gateway.marvel.com/v1/public/characters?orderBy=name&limit=100&offset=600',
    data: {
      "apikey": PUBL_KEY,
      "ts": ts,
      "hash": hash
    }
  }).done(function(result) {
    for (let key in result.data.results) {
      superheroes.push(new Array(result.data.results[key].name, result.data.results[key].comics.available));
    }
  })
}

function getHeroes800() {
  $.ajax({
    method: "GET",
    url: 'https://gateway.marvel.com/v1/public/characters?orderBy=name&limit=100&offset=700',
    data: {
      "apikey": PUBL_KEY,
      "ts": ts,
      "hash": hash
    }
  }).done(function(result) {
    for (let key in result.data.results) {
      superheroes.push(new Array(result.data.results[key].name, result.data.results[key].comics.available));
    }
  })
}

function getHeroes900() {
  $.ajax({
    method: "GET",
    url: 'https://gateway.marvel.com/v1/public/characters?orderBy=name&limit=100&offset=800',
    data: {
      "apikey": PUBL_KEY,
      "ts": ts,
      "hash": hash
    }
  }).done(function(result) {
    for (let key in result.data.results) {
      superheroes.push(new Array(result.data.results[key].name, result.data.results[key].comics.available));
    }
  })
}

function getHeroes1000() {
  $.ajax({
    method: "GET",
    url: 'https://gateway.marvel.com/v1/public/characters?orderBy=name&limit=100&offset=900',
    data: {
      "apikey": PUBL_KEY,
      "ts": ts,
      "hash": hash
    }
  }).done(function(result) {
    for (let key in result.data.results) {
      superheroes.push(new Array(result.data.results[key].name, result.data.results[key].comics.available));
    }
  })
}

function getHeroes1100() {
  $.ajax({
    method: "GET",
    url: 'https://gateway.marvel.com/v1/public/characters?orderBy=name&limit=100&offset=1000',
    data: {
      "apikey": PUBL_KEY,
      "ts": ts,
      "hash": hash
    }
  }).done(function(result) {
    for (let key in result.data.results) {
      superheroes.push(new Array(result.data.results[key].name, result.data.results[key].comics.available));
    }
  })
}

function getHeroes1200() {
  $.ajax({
    method: "GET",
    url: 'https://gateway.marvel.com/v1/public/characters?orderBy=name&limit=100&offset=1100',
    data: {
      "apikey": PUBL_KEY,
      "ts": ts,
      "hash": hash
    }
  }).done(function(result) {
    for (let key in result.data.results) {
      superheroes.push(new Array(result.data.results[key].name, result.data.results[key].comics.available));
    }
  })
}

function getHeroes1300() {
  $.ajax({
    method: "GET",
    url: 'https://gateway.marvel.com/v1/public/characters?orderBy=name&limit=100&offset=1200',
    data: {
      "apikey": PUBL_KEY,
      "ts": ts,
      "hash": hash
    }
  }).done(function(result) {
    for (let key in result.data.results) {
      superheroes.push(new Array(result.data.results[key].name, result.data.results[key].comics.available));
    }
  })
}

function getHeroes1400() {
  $.ajax({
    method: "GET",
    url: 'https://gateway.marvel.com/v1/public/characters?orderBy=name&limit=100&offset=1300',
    data: {
      "apikey": PUBL_KEY,
      "ts": ts,
      "hash": hash
    }
  }).done(function(result) {
    for (let key in result.data.results) {
      superheroes.push(new Array(result.data.results[key].name, result.data.results[key].comics.available));
    }
  })
}

function getHeroes1500() {
  $.ajax({
    method: "GET",
    url: 'https://gateway.marvel.com/v1/public/characters?orderBy=name&limit=100&offset=1400',
    data: {
      "apikey": PUBL_KEY,
      "ts": ts,
      "hash": hash
    }
  }).done(function(result) {
    for (let key in result.data.results) {
      superheroes.push(new Array(result.data.results[key].name, result.data.results[key].comics.available));
    }
  })
}
