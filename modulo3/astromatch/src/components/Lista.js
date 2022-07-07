import React from 'react'
import { ContainerLista , DivLista, FooterLista , HeaderLista , DivPhoto , ListaPhoto , H3 , CardLista } from './Listaestilo'
import styled from 'styled-components'
import axios from 'axios'
import { useState , useEffect } from 'react'

export default function Matches() {

  const [matches, setMatches] = useState([]);
  
  const AllMatches = () =>{

    axios
    .get(
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo-silva/matches"
    )
    .then((response) => {
      console.log(response.data.matches);
      setMatches(response.data.matches);
    })
    .catch((erro) => {
      console.log(erro);
    });

  }
  useEffect(() => {
    AllMatches()
  }, []);



    // setlistaMatches(novalistaMatches);
  
    // Mapeamento para renderizar em listas
    const mapmatches = matches?.map((pessoa) => {
      return <CardLista key={pessoa.id}> 
            <H3>
              <ListaPhoto src={pessoa.photo} />{pessoa.name}
            </H3>
        </CardLista>
    });


  return (
    <ContainerLista>
        
        <DivLista>
            <HeaderLista>
              <h3>Seus Matches</h3>
            </HeaderLista>
            {mapmatches}
        </DivLista>
    </ContainerLista>
  )
}