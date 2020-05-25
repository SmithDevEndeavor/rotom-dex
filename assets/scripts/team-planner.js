const teamPlaceholder = new Pokedex.Pokedex();
const plannerSlot = document.getElementById("selected-slot");
//placeholder default sprite
var pokeballSpriteUrl;
var sloti= "";
var selectedPokeImgUrl;
var selectedPokeName="";


const displaySelectedPokemon = (pokemon) => {
    teamPlaceholder.getPokemonByName(pokemon)
    .then(function(response) {
        selectedPokeImgUrl = response.sprites["front_default"]
        selectedPokeName = response.name;
        document.getElementById("selected-label").textContent = selectedPokeName; 
        document.getElementById("selected-img").src= selectedPokeImgUrl;
        document.getElementById("pokemon1").text = selectedPokeName;
    });

    
}


/*utilizes "getItemByName()" method to obtain the default sprite image 
of a pokeball. Once obtained, the url response is set as the src for
all 6 of the team slots images  */
const initDefaultPlaceHolders = () => {
    teamPlaceholder.getItemByName("poke-ball")
    .then(function(response) {
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
displaySelectedPokemon("bulbasaur");






