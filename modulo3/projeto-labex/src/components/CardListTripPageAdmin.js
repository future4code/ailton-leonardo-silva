import React from "react";
import { WrapperAdmin , H2 , H3 } from "./CardListTripPageStyles";
import { ButtonPages, Container, ContainerButtons } from "../pages/PagesStyles";
import { useNavigate , useParams } from "react-router-dom";
import { goToTripDetailsPage } from "../routes/Coordinator";

export default function CardListTripPageAdmin(props) {
  
    //Declarando o useNavigate
    const navigate = useNavigate()
  
    // Jogando a props para trip 
    const trip = props.trip;

    //Declarando o useParams
    const pathParams = useParams(trip.id)
    
    return (
        <Container>
            <WrapperAdmin>
                <H2>{trip.name}</H2>
                <H3>{trip.description}</H3>
                <H3>Destino: {trip.planet}</H3>
                <H3>Duração: {trip.durationInDays}</H3>
                <H3>Data de início da viagem: {trip.date}</H3>
                <ContainerButtons>
                    <ButtonPages onClick={() => goToTripDetailsPage(navigate, trip.id)}>DETALHES</ButtonPages>
                    <ButtonPages>EXCLUIR</ButtonPages>
                </ContainerButtons>
            </WrapperAdmin>
        </Container>
    );
}