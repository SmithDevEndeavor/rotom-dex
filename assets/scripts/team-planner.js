const Item = new Pokedex.Pokedex();

//placeholder default sprite
var pokeballSpriteUrl;
var sloti;

/*utilizes "getItemByName()" method to obtain the default sprite image 
of a pokeball. Once obtained, the url response is set as the src for
all 6 of the team slots images  */
const initDefaultPlaceHolders = () => {
    Item.getItemByName("poke-ball")
    .then(function(response) {
        console.log(response.sprites["default"]);
        pokeballSpriteUrl = response.sprites["default"];
        for(i = 1; i <= 6; i++){
            sloti = document.getElementById("slot-" + i).src = pokeballSpriteUrl;
        }
    });
    
    for(i = 1; i <= 6; i++){
        sloti.src = pokeballSpriteUrl;
    }
}

const changeSprite = () => {
    document.getElementById("slot-1").src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/master-ball.png";
}

initDefaultPlaceHolders();






