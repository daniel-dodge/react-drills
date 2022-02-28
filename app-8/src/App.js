import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() {
  
  const [pokemon, changePokemon] = useState("")
  axios.get('https://pokeapi.co/api/v2/pokemon/4').then(res=>{

    changePokemon(res.data)
  })

  return (
    <div className="App">
      <h1>Name: {pokemon.name}</h1>
      <h1>Height: {pokemon.height}</h1>
      {/* <h1>Type: {pokemon.types.type.name}</h1> */}
      <h1>Weight: {pokemon.weight}</h1>

    </div>
  );
}

export default App;
