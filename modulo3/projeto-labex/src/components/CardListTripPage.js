import React from "react";
import { Wrapper , H2 , H3 } from "./CardListTripPageStyles";
import { Container } from "../pages/PagesStyles";
export default function CardListTripPage(props) {
  
  // Jogando a props para trip 
  const trip = props.trip;
  
  return (
    <Container>
      <Wrapper>
        <H2>{trip.name}</H2>
        <H3>{trip.description}</H3>
        <H3>Destino: {trip.planet}</H3>
        <H3>Duração: {trip.durationInDays}</H3>
        <H3>Data de início da viagem: {trip.date}</H3>
      </Wrapper>
    </Container>
  );
}