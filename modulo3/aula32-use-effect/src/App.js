import React from "react";
import "./styles.css";
import axios from "axios";
import PokeCard from "./components/PokeCard/PokeCard";
import { useState, useEffect } from "react";

export default function App() {

    // lista de pokemons que está sendo guardada no useState
    const [pokeList, setpokeList] = useState([])
    const [pokeName, setpokeName] = useState ("")
  
  // método que roda após a montagem do componente

  useEffect(() => {
    const pegarPokemon = () => {
      axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
        .then((response) => {
          // função que está setando no estado os 151 pokemons
        setpokeList(response.data.results);
        })
        .catch((error) => {
          console.log(error.response);
        });
    };
    pegarPokemon();
  }, []);

  const changePokeName = (event) => {
    setpokeName(event.target.value);
  };

  
    return (
      <div className="App">
        <h2> PokeDex </h2>
        <br/>
        {/* evento onChange chama função toda vez que o usuário 
        escolhe um novo pokemon no dropdown */}
        <select onChange={changePokeName}>
          <option value={""}>Nenhum</option>
          {/* renderizando a lista de pokemons como opções do select */}
          {pokeList.map((pokemon) => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        {/* expressão booleana que renderiza o componente PokeCard,
        caso o valor de pokeName, no estado, seja true */}
        {pokeName && <PokeCard pokeName={pokeName} />}
      </div>
    );
  }

