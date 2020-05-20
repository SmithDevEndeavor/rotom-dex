const Pokedex = require('pokeapi-js-wrapper');
const P = new Pokedex.Pokedex();
const options = {
    protocol: 'https',
    hostName: 'localhost:443',
    versionPath: '/api/v2/',
    cache: true,
    timeout: 5 * 1000 // 5s
  }

P.getVersionByName("red")
    .then(function(response) {
      console.log(response);
    });