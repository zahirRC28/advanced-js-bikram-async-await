//DESARROLLA AQUI TUS SOLUCIONES

const connect = async (urlAp) => {
    try {
        const resp = await fetch(urlAp)
        if(resp.ok){
            const datos = await resp.json()
            return datos
        } else {
            throw 'No hay'
        }
    } catch (error) {
        throw (error + 'no encontramos nada')
    }
}

const urlPoke = `https://pokeapi.co/api/v2/pokemon`
const urlBreed = `https://dog.ceo/api/breed`
const urlRickYMorty = `https://rickandmortyapi.com/api`;


//Ejercicio 1.- Declara una función getRandomPokemon que retorne un pokemon aleatorio.
const getRandomPokemon = async () =>{
    try {
        const datos = await connect(`${urlPoke}`);
        //console.log(datos);
        const pokes = Object.values(datos.results);
        //console.log(pokes)
        const tam = pokes.length;
        const random = Math.floor(Math.random()*tam);
        //console.log(random);
        const poke = pokes[random].name;
        //console.log(poke);
        const datos2 = await connect(`${urlPoke}/${poke}`);
        //console.log(datos2);
        return datos2;

    } catch (error) {
        console.log(error)
    }
};

//Ejercicio 2.- Declara una funcion getImageAndName que retorne el nombre y la URL de la imagen de un pokemon => (return {img, name})
/*async function getImageAndName (pokemon){

    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    let data = await response.json();
    let name = data.name;
    let img = data.sprites.front_default;
    return {name, img}
    
}*/
const getImageAndName = async (pokemon) =>{
    try {
        const datos = await connect(`${urlPoke}/${pokemon}`);
        //console.log(datos);
        const name = datos.name;
        //console.log(name);
        const img = datos.sprites.front_default;
        //console.log(img);
        return {name, img}
    } catch (error) {
        console.log(error)
    }
}

//Ejercicio 3.- Declara una funcion printImageAndName que retorne el string necesario para pintar la imagen y el nombre del pokemon en el DOM de la siguiente forma:
const printImageAndName = async () =>{
    try {
        const pokemon = await getRandomPokemon();
        //console.log(pokes)
        const pokeName = pokemon.name;
        const pokeImg = pokemon.url
        const pintar = `
            <section>
                <img src="${pokeImg}" alt="${pokeName}">
                <h1>${pokeName}</h1>
            </section>`
        return pintar;

    } catch (error) {
        console.log(error)
    }
};

//Ejercicio 4.- Declara una función getRandomDogImage que retorne la url de la imagen de un perro aleatorio
const getRandomDogImage = async () =>{
    try {
        const datos = await connect(`${urlBreed}s/image/random`);
        //console.log(datos);
        const img = datos.message;
        //console.log(img);
        return img;
    } catch (error) {
        console.log(error)
    }
};
//Ejercicio 5.- Declara una función getRandomPokemonImage que retorne la url de la imagen de un pokemon aleatorio.
const getRandomPokemonImage = async () =>{
    try {
        const pokemon = await getRandomPokemon();
        //console.log(pokemon);
        const pokeName = pokemon.name;
        const pokemonData = await connect(`${urlPoke}/${pokeName}`);
        const pokeImg = pokemonData.sprites.front_default;
        console.log(pokeImg);
        return pokeImg;
    } catch (error) {
        console.log(error)
    }
};


//Ejercicio 7.- Declara una función getRandomCharacter que retorne un personaje aleatorio.

const getRandomCharacter = async () => {
    try {
        const datos = await connect(`${urlRickYMorty}/character`);
        const personajes = Object.values(datos.results);
        console.log(personajes);
        const tam = personajes.length;
        const random = Math.floor(Math.random()*tam);
        const personaje = await connect(`${urlRickYMorty}/character/${random}`);
        console.log(personaje);
        return personaje;
    } catch (error) {
        console.log(error)
    }
};

//Ejercicio 7.- Declara una función getRandomCharacter que retorne un personaje aleatorio.
const getRandomCharacterInfo = async () => {
    try {
        const personaje = await getRandomCharacter();
        const img = personaje.image;
        console.log(img);
        const name = personaje.name;
        console.log(name);
        const episodes = personaje.episode;
        console.log(episodes);
        const firstEpisode = personaje.episode[0];
        console.log(firstEpisode);
        const dateEpisode = personaje.created;
        console.log(dateEpisode);
        return {img, name, episodes, firstEpisode, dateEpisode};

    } catch (error) {
        console.log(error)
    }
};