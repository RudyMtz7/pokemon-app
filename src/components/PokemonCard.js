import React from 'react';

function PokemonCard({ pokemon, onPokemonClick }) {
  const firstType = pokemon.type.replace(/[^\w\s]|_/g, "").split(" ")[0];
  console.log(firstType);
  return (

    <div className={`pokemon-card ${firstType}`} onClick={() => onPokemonClick(pokemon)}>
      <img src={pokemon.image} alt={pokemon.name} />
      <h2>{pokemon.name}</h2>
      <p>Type: {pokemon.type}</p>
      <p>Number: {pokemon.number}</p>
    </div>
  );
}

export default PokemonCard;
