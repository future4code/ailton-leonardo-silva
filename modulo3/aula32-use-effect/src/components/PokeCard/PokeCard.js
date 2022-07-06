import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function PokeCard(props) {
  // valor do useState que guarda infos e foto do pokemon
  const [pokemon, setpokemon] = useState([]);

  useEffect(() => {
    const pegaPokemon = (pokeName) => {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        .then((response) => {
          setpokemon(response.data);
        })
        .catch((error) => {
          console.log(error.response);
        });
    };
    pegaPokemon(props.pokeName);
  }, [props.pokeName]);

  return (
    <div>
      <p>{pokemon.name}</p>
      <p>{pokemon.weight} Kg</p>
      {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
      {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
    </div>
  );
}