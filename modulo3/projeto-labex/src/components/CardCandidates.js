import React from 'react'
import { BASE_URL } from '../constants/Constant';
import { ButtonPages , Container, ContainerButtons, Main } from '../pages/PagesStyles' 
import { H2C , H2 , H3 , WrapperAdmin } from "./CardListTripPageStyles";
import axios from 'axios';


export default function Candidates(props) {
  
  //Buscando o valor do localStorage
  const token = localStorage.getItem('token')
  //Jogando as props para as constantes candidates e trip
  const approved = props.approved;
  const candidates = props.candidate;
  const trip = props.trip;
  
  const ApproveCandidate = (id, approve) => {
  const body = {
    approve: approve
  }
  axios
    .put(`${BASE_URL}trips/${trip.id}/candidates/${id}/decide`, body, {
      headers: {
        auth: token
      }
    })
    .then((response) => {
        console.log(response.data)
        if (approve) {
          alert("Sucesso! Esse candidato está aprovado para a viagem!")
        } else {
          alert("Candidato será rejeitado para a viagem!")
        }
    })
    .catch((error) => {
        console.log(error.message)
    })
  }


  return (
    <Container>
        {candidates.length !== 0 ?
        <Main>
          <H2C>Candidatos</H2C>
          {candidates.map((candidate) => {
          return (
            <WrapperAdmin key={candidate.id}>
              <H3>{candidate.name}</H3>
              <H3>Idade: {candidate.age}</H3>
              <H3>Profissão: {candidate.profession}</H3>
              <H3>País: {candidate.country}</H3>
              <H3>Texto: {candidate.applicationText}</H3>
              <ContainerButtons>
                <ButtonPages onClick={() => ApproveCandidate(candidate.id, false)}>REJEITAR</ButtonPages>
                <ButtonPages onClick={() => ApproveCandidate(candidate.id, true)}>APROVAR</ButtonPages>
              </ContainerButtons>
            </WrapperAdmin>
          )
          })}
        </Main>
          : <H2C>Sem candidatos</H2C>}
          {/* SEGUNDO LISTA PARA OS CANDIDATOS APROVADOS */}
        {approved.length !== 0 ?
        <Main>
          <H2C>Candidatos Aprovados</H2C>
          {approved.map((approved) => {
          return (
            <WrapperAdmin key={approved.id}>
              <H3>{approved.name}</H3>
              <H3>Idade: {approved.age}</H3>
              <H3>Profissão: {approved.profession}</H3>
              <H3>País: {approved.country}</H3>
              <H3>Texto: {approved.applicationText}</H3>
            </WrapperAdmin>
            )
          })}
        </Main>
        : <H2C>Sem candidatos aprovados</H2C>}
        
    </Container>
  )
}