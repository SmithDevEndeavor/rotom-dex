const dex = new Pokedex.Pokedex();
const plannerSlot = document.getElementById("selected-slot");
//placeholder default sprite
var defaultSpriteUrl;
var selectedPokeImgUrl;
var selectedPokeName="";

const changeValue = () => {
    document.getElementById("pokemon1").value = "Foo Bar";
}


/*obtains pokemon information to be displayed for the selected pokemon*/
const displaySelectedPokemon = (pokemon) => {
    dex.getPokemonByName(pokemon)
    .then(function(response) {
        selectedPokeImgUrl = response.sprites["front_default"]
        selectedPokeName = response.name;
        document.getElementById("selected-label").value = selectedPokeName; 
        document.getElementById("selected-img").src= selectedPokeImgUrl;
        document.getElementById("pokemon1").text = selectedPokeName;
    });

    
}


/*utilizes "getItemByName()" method to obtain the default sprite 
image. Once obtained, the url response is set as the src for
all 6 of the team slots images with a for loop  */
const initDefaultPlaceHolders = () => {
    var imgi= "";
    dex.getPokemonFormByName("unown-question")
    .then(function(response) {
        console.log(response);
        defaultSpriteUrl = response.sprites["front_default"];
        for(i = 1; i <= 6; i++){
            imgi = document.getElementById("img-" + i).src = defaultSpriteUrl;
        }
    });
    
    for(i = 1; i <= 6; i++){
        imgi.src = defaultSpriteUrl;
    }
    
}

const selectPokemon = (pokemon) => {
    var name = "";
    dex.getPokemonByName(pokemon)
    .then(function(response) {
        name = response.name;
    
    });
    
    displaySelectedPokemon(name);
}


initDefaultPlaceHolders();







