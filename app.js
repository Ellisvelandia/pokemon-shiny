const pokemonContainer = document.querySelector(".pokemon-container");

function fetchPokemon(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((res) => res.json())
    .then((data) => {
      createPokemons(data);
      console.log(data);
    });
}

function fetchPokemons(number) {
  for (let i = 1; i < number; i++) {
    fetchPokemon(i);
  }
}

function createPokemons(pokemon) {
  const card = document.createElement("div");
  card.classList.add("pokemon-block");

  const spriteContainer = document.createElement("div");
  spriteContainer.classList.add("img-container");

  const sprite = document.createElement("img");
  sprite.src = pokemon.sprites.other.home.front_shiny;

  spriteContainer.appendChild(sprite);

  const number = document.createElement("p");
  number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;

  const name = document.createElement("p");
  name.classList.add("name");
  name.textContent = pokemon.name;

  const weight = document.createElement("p");
  weight.classList.add("weight");
  weight.textContent = `lb ${pokemon.weight.toString()}`;

  card.appendChild(spriteContainer);
  card.appendChild(number);
  card.appendChild(name);
  card.appendChild(weight);

  pokemonContainer.appendChild(card);
}

fetchPokemons(10);
