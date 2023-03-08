import React, { useState } from 'react';
import './App.css';
import PokemonList from "./components/PokemonList";

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  function handlePokemonClick(pokemon) {
    setSelectedPokemon(pokemon);
  }

  return (
    <div className="App">
      <h1>Pokédex</h1>
      <PokemonList onPokemonClick={handlePokemonClick} />
      {selectedPokemon && (
        <div className="modal-container">
          <div className="modal">
            <h2>{selectedPokemon.name}</h2>
            <img src={selectedPokemon.image} alt={selectedPokemon.name} />
            <p>Type: {selectedPokemon.type}</p>
            <p>Number: {selectedPokemon.number}</p>
            <p>Abilities: {selectedPokemon.abilities.map(ability => ability.name).join(", ")}</p>
            <p>Form: {selectedPokemon.forms[0]}</p>
            <p>Height: {selectedPokemon.height}</p>
            <p>Moves: {selectedPokemon.moves.slice(0, 5).map(move => move.name).join(", ")}</p>
            <p>Stats:</p>
            {selectedPokemon.stats.map(stat => (
              <p key={stat.name}>{stat.name}: {stat.value}</p>
            ))}
            <button onClick={() => setSelectedPokemon(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
