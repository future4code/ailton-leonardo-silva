import React from "react";
import styled from "styled-components";
import { ListaPhoto , H3 , ListaMatchesContainer } from "./Listaestilo";

export default function CardLista(props) {
  const matches = props.matches;

  return (
  
    <ListaMatchesContainer>
      <ListaPhoto src={matches.photo} /> &nbsp;&nbsp;
      <H3>{matches.name}</H3>
    </ListaMatchesContainer>
    
  );
}

