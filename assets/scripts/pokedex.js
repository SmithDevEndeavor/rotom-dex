const pokedex = document.getElementById("pokedex");
var lastSelected = document.getElementById("btn-gen-1");
var titleChange = document.getElementById("dex-title");
var currentSelected;

/*sets the "currentSelected" and "lastSelected" variables to the current button id
for the "styleButtons()" method. Calls the "fetchByGenerations(int, int)" method passing
the first and last pokemon ids for the specified generation and changes the Pokedex title 
to the region of the  specified generation.*/
const fetchKantoDex = () => {
    currentSelected = document.getElementById("btn-gen-1");
    fetchByGeneration(1, 151);
    styleButtons();
    titleChange.textContent = "Kanto Pokedex";
    lastSelected = document.getElementById("btn-gen-1");
}



const fetchJohtoDex = () => {
    currentSelected = document.getElementById("btn-gen-2");
    fetchByGeneration(152, 251);
    styleButtons();
    titleChange.textContent = "Johto Pokedex";
    lastSelected = document.getElementById("btn-gen-2");
}

const fetchHoennDex = () => {
    currentSelected = document.getElementById("btn-gen-3");
    fetchByGeneration(252, 386);
    styleButtons();
    titleChange.textContent = "Hoenn Pokedex";
    lastSelected = document.getElementById("btn-gen-3");
}

const fetchSinnohDex = () => {
    currentSelected = document.getElementById("btn-gen-4");
    fetchByGeneration(387, 493);
    styleButtons();
    titleChange.textContent = "Sinnoh Pokedex";
    lastSelected = document.getElementById("btn-gen-4");
}

const fetchUnovaDex = () => {
    currentSelected = document.getElementById("btn-gen-5");
    fetchByGeneration(494, 649);
    styleButtons();
    titleChange.textContent = "Unova Pokedex";
    lastSelected = document.getElementById("btn-gen-5");
}

const fetchKalosDex = () => {
    currentSelected = document.getElementById("btn-gen-6");
    fetchByGeneration(650, 721);
    styleButtons();
    titleChange.textContent = "Kalos Pokedex";
    lastSelected = document.getElementById("btn-gen-6");
}

const fetchAlolaDex = () => {
    currentSelected = document.getElementById("btn-gen-7");
    fetchByGeneration(722, 802);
    styleButtons();
    titleChange.textContent = "Alola Pokedex";
    lastSelected = document.getElementById("btn-gen-7");
}
/*creates an array of pokemon objects by querying the poke-api
using a for loop to manipulate the request url to store data from 
pokemon "x" to pokemon "y" objects properties and calls the 
"displayPokemon(pokemon)" method.*/
const fetchByGeneration = (x , y) => {
    //initialize array to hold the pokedex map
    const promises = [];
    //loops through the poke-api by appending the count passed from parameters to the request url
    for(let i = x; i <= y; i++){
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }
    //asynchronosly stores all pokemon-object results properties in a map object    
    Promise.all(promises).then((results) => {
        const pokemon = results.map((data) => ({
            name: data.name,
            id: data.id,
            image: data.sprites["front_default"],
            type: data.types.map(type => type.type.name).join(", ")
        }));
        //publishes stored pokemon info to HTML card
        displayPokemon(pokemon);
    });

}

/*creates an HTMLstring using the pokemon-object map initialized 
in the "fetchByGeneration(int, int)" method. Inputs the current pokemons
properties into the HTMLString to populate the card data. Then 
populates the HTML element of the "pokedex" id with the generated HTML.*/
const displayPokemon = (pokemon) => { 
    //Inputs properties stored from pokemon-object in map to HTMLstring
    const pokemonHTMLstring = pokemon.map(selectedPoke => `
        <li class="card">
            <img class="card-image" src="${selectedPoke.image}" alt="${selectedPoke.name}"/>
                <h4 class="card-title">${selectedPoke.id}. ${selectedPoke.name}</h4>
            <p class="card-subtitle">Type: ${selectedPoke.type}</p>
        </li>
    `
    ).join("");
    //populates HTML element with "pokedex" id in pokedex.html with generated HTMLstring
    pokedex.innerHTML = pokemonHTMLstring;
}

/* uses lastSelected and currentSelected variables to manipulate 
the css of the current selected button and the last selected button 
to highlight for the user which button is currently selected.*/ 
const styleButtons = () => {
    //changes color, background-color, and border-color css properties of last selected button
    lastSelected.style.color = "#e46e51ff";
    lastSelected.style.backgroundColor = "#FFE1A8";
    lastSelected.style.borderColor = "#e46e51ff";
    //changes color, background-color, and border-color css properties of currently selected button
    currentSelected.style.color = "#FFE1A8";
    currentSelected.style.backgroundColor = "#e46e51ff";
}
fetchKantoDex();


