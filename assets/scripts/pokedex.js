const pokedex = document.getElementById("pokedex");
var lastSelected = document.getElementById("btn-gen-1");
var titleChange = document.getElementById("dex-title");
var currentSelected;

const fetchFirstGenPokemon = () => {
    currentSelected = document.getElementById("btn-gen-1");
    const promises = [];
    for(let i = 1; i <= 151; i++){
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
        

    }

    Promise.all(promises).then((results) => {
        const pokemon = results.map((data) => ({
            name: data.name,
            id: data.id,
            image: data.sprites["front_default"],
            type: data.types.map(type => type.type.name).join(", ")
        }));
        
        styleButtons();
        titleChange.textContent = "Kanto Pokedex";
        displayPokemon(pokemon);
        lastSelected = document.getElementById("btn-gen-1");
    });
}

const fetchSecondGenPokemon = () => {
    currentSelected = document.getElementById("btn-gen-2");
    const promises = [];
    for(let i = 152; i <= 251; i++){
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
        

    }
        
    Promise.all(promises).then((results) => {
        const pokemon = results.map((data) => ({
            name: data.name,
            id: data.id,
            image: data.sprites["front_default"],
            type: data.types.map(type => type.type.name).join(", ")
        }));
        styleButtons();
        titleChange.textContent = "Johto Pokedex";
        displayPokemon(pokemon);
        
        lastSelected = document.getElementById("btn-gen-2");
    });
}

const fetchThirdGenPokemon = () => {
    currentSelected = document.getElementById("btn-gen-3");
    const promises = [];
    for(let i = 252; i <= 386; i++){
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }
        
    Promise.all(promises).then((results) => {
        const pokemon = results.map((data) => ({
            name: data.name,
            id: data.id,
            image: data.sprites["front_default"],
            type: data.types.map(type => type.type.name).join(", ")
        }));
        styleButtons();
        titleChange.textContent = "Hoenn Pokedex";
        
        displayPokemon(pokemon);

        lastSelected = document.getElementById("btn-gen-3");
    });
}

const fetchFourthGenPokemon = () => {
    currentSelected = document.getElementById("btn-gen-4");
    const promises = [];
    for(let i = 387; i <= 493; i++){
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }
        
    Promise.all(promises).then((results) => {
        const pokemon = results.map((data) => ({
            name: data.name,
            id: data.id,
            image: data.sprites["front_default"],
            type: data.types.map(type => type.type.name).join(", ")
        }));
        styleButtons();
        titleChange.textContent = "Sinnoh Pokedex";
        displayPokemon(pokemon);

        lastSelected = document.getElementById("btn-gen-4");
    });
}

const fetchFifthGenPokemon = () => {
    currentSelected = document.getElementById("btn-gen-5");
    const promises = [];
    for(let i = 494; i <= 649; i++){
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }
        
    Promise.all(promises).then((results) => {
        const pokemon = results.map((data) => ({
            name: data.name,
            id: data.id,
            image: data.sprites["front_default"],
            type: data.types.map(type => type.type.name).join(", ")
        }));
        styleButtons();
        titleChange.textContent = "Unova Pokedex";
        displayPokemon(pokemon);

        lastSelected = document.getElementById("btn-gen-5");
    });
}

const fetchSixthGenPokemon = () => {
    currentSelected = document.getElementById("btn-gen-6");
    const promises = [];
    for(let i = 650; i <= 721; i++){
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }
        
    Promise.all(promises).then((results) => {
        const pokemon = results.map((data) => ({
            name: data.name,
            id: data.id,
            image: data.sprites["front_default"],
            type: data.types.map(type => type.type.name).join(", ")
        }));
        styleButtons();
        titleChange.textContent = "Kalos Pokedex";
        displayPokemon(pokemon);

        lastSelected = document.getElementById("btn-gen-6");
    });
}

const fetchSeventhGenPokemon = () => {
    currentSelected = document.getElementById("btn-gen-7");
    const promises = [];
    for(let i = 722; i <= 802; i++){
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }
        
    Promise.all(promises).then((results) => {
        const pokemon = results.map((data) => ({
            name: data.name,
            id: data.id,
            image: data.sprites["front_default"],
            type: data.types.map(type => type.type.name).join(", ")
        }));
        styleButtons();
        titleChange.textContent = "Alola Pokedex";
        displayPokemon(pokemon);

        lastSelected = document.getElementById("btn-gen-7");
    });
}

const displayPokemon = (pokemon) => {
    console.log(pokedex);
    const pokemonHTMLstring = pokemon.map(selectedPoke => `
    <li class="card">
        <img class="card-image" src="${selectedPoke.image}"/>
            <h4 class="card-title">${selectedPoke.id}. ${selectedPoke.name}</h4>
        <p class="card-subtitle">Type: ${selectedPoke.type}</p>
    </li>
    `
    ).join("");
    pokedex.innerHTML = pokemonHTMLstring;
}

const styleButtons = () => {
    lastSelected.style.color = "#e46e51ff";
    lastSelected.style.backgroundColor = "#FFE1A8";
    lastSelected.style.borderColor = "#e46e51ff";
    currentSelected.style.color = "#FFE1A8";
    currentSelected.style.backgroundColor = "#e46e51ff";
}

fetchFirstGenPokemon();
