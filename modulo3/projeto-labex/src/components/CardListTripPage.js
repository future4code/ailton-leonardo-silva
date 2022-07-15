import React from "react";
import { WrapperAdmin , H2 , H3 } from "./CardListTripPageStyles";
import { Container } from "../pages/PagesStyles";
export default function CardListTripPage(props) {
  
  // Jogando a props para trip 
  const trip = props.trip;
  
  return (
    <Container>
      <WrapperAdmin>
        <H2>{trip.name}</H2>
        <H3>{trip.description}</H3>
        <H3>Destino: {trip.planet}</H3>
        <H3>Duração: {trip.durationInDays}</H3>
        <H3>Data de início da viagem: {trip.date}</H3>
      </WrapperAdmin>
    </Container>
  );
}