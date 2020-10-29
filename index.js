// **************************************** TAREA EN GRUPO ****************************************
// Hacer un fetch a la API de pokemon, y renderizar los pokemones que devuelva la api en tarjetas individuales.
// Con imagen, y nombre del Pokemon
// if (darleOndaALosEstilos) {
// puntos += 5
//}

// DOM
const imagenPokemon = document.querySelector("#imagenContainer");

// Creando la funcion para traer los pokemones
// creamos una funcion async await.
const traerPokemon = async () => {
  try {
    const fetchPokemon = await fetch("https://pokeapi.co/api/v2/pokemon"); //Pedimos el fetch
    const pokemonDefinitivo = await fetchPokemon.json(); // Lo pasamos a JSON
    console.log(pokemonDefinitivo);
    pokemonDefinitivo.results.map(async (value) => {
      // Ahora usamos la propiedad de la api results para que nos traiga la url
      const pokemonUrlFetch = await fetch(value.url);
      const pokemonUrl = await pokemonUrlFetch.json(); // pasamos a JSON el nuevo fetch
      console.log(pokemonUrl);
      const name = pokemonUrl.name; // Por cada iteracion pedimos del map pedimos su name
      const id = pokemonUrl.id; // Por cada iteracion del map pedimos su id para despues utilizarlo en la img
      mostrarPokemon(name, id);
    });
  } catch (error) {
    console.log(error);
  }
};
//Creando la arrow function para mostrar los pokemones con su respectiva imagen y name
const mostrarPokemon = (name, id) => {
  const codigoHTML = `<img src="https://pokeres.bastionbot.org/images/pokemon/${id}.png"><p>${name}</p>`;
  imagenPokemon.innerHTML += codigoHTML;
};
traerPokemon();
