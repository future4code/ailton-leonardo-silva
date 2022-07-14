import React from "react";
import { WrapperAdmin , H2 , H3 } from "./CardListTripPageStyles";
import { ButtonPages, Container, ContainerButtons } from "../pages/PagesStyles";
import { useNavigate , useParams } from "react-router-dom";
import { goToTripDetailsPage } from "../routes/Coordinator";
import axios from "axios";
import { BASE_URL } from "../constants/Constant";
import { useRequestDataTripPage } from "../hooks/useRequestDataTripPage";

export default function CardListTripPageAdmin(props) {
  
    //Declarando o useNavigate
    const navigate = useNavigate()

    //Buscando o valor do localStorage
    const token = localStorage.getItem('token')

    // const Refresh = () => useRequestDataTripPage(`${BASE_URL}trips`)
  
    // Jogando a props para trip 
    const trip = props.trip;

    //Declarando o useParams
    const pathParams = useParams(trip.id)

    //Criando a função do Axios para deletar a viagem.
    const DeleteTrip = (id) => {
          // Chamando o Axios
          const headers = {
            headers: {auth:token}
          }
          axios
            .delete(`${BASE_URL}trips/${trip.id}`, headers)
            .then(() => {
              alert("Viagem deletada com sucesso!")
            // Refresh()
              
            })
            .catch((error) => {
              console.log(error.response)
            });
      } 
    
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
                    <ButtonPages onClick={DeleteTrip}>EXCLUIR</ButtonPages>
                </ContainerButtons>
            </WrapperAdmin>
        </Container>
    );
}