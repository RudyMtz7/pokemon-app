import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';

function PokemonList({ onPokemonClick }) {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=20"
      );
      const results = response.data.results;
      const newPokemonList = [];
      for (const result of results) {
        const pokemonResponse = await axios.get(result.url);
        const pokemon = {
          name: pokemonResponse.data.name,
          image: pokemonResponse.data.sprites.front_default,
          number: pokemonResponse.data.id,
          type: pokemonResponse.data.types.map((type) => type.type.name).join(", "),
          abilities: pokemonResponse.data.abilities.map(ability => ability.ability),
          forms: pokemonResponse.data.forms.map(form => form.name),
          height: pokemonResponse.data.height,
          moves: pokemonResponse.data.moves.map(move => ({ name: move.move.name })),
          stats: pokemonResponse.data.stats.map(stat => ({ name: stat.stat.name, value: stat.base_stat })),
        };
        newPokemonList.push(pokemon);
      }
      setPokemonList(newPokemonList);
    };
    fetchData();
  }, []);

  return (
    <div className="pokemon-list">
      {pokemonList.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} onPokemonClick={onPokemonClick} />
      ))}
    </div>
  );
}

export default PokemonList;
