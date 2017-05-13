$(document).ready(function() {
  getHeroes();
})

const PUBL_KEY = config.PUBL_KEY;
const PRIV_KEY = config.PRIV_KEY;

function getHeroes() {
  let ts = String(Date.now());
  let hash = md5(ts + PRIV_KEY + PUBL_KEY);
  $.ajax({
    method: "GET",
    url: 'https://gateway.marvel.com/v1/public/characters?name=jean%20grey&orderBy=name',
    data: {
      "apikey": PUBL_KEY,
      "ts": ts,
      "hash": hash
    }
  }).done(function(result) {
    console.log(result)
  })
}
