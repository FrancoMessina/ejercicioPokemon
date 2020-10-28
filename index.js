// **************************************** TAREA EN GRUPO ****************************************
// Hacer un fetch a la API de pokemon, y renderizar los pokemones que devuelva la api en tarjetas individuales.
// Con imagen, y nombre del Pokemon
// if (darleOndaALosEstilos) {
// puntos += 5
//}

// DOM
const imagenPokemon = document.querySelector("#imagenContainer");

// Creando la funcion para traer los pokemones
const traerPokemon = async () => {
  try {
    const fetchPokemon = await fetch("https://pokeapi.co/api/v2/pokemon");
    const pokemonDefinitivo = await fetchPokemon.json();
    pokemonDefinitivo.results.map(async (value) => {
      const pokemonUrlFetch = await fetch(value.url);
      const pokemonUrl = await pokemonUrlFetch.json();
      const name = pokemonUrl.name;
      const id = pokemonUrl.id;
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
