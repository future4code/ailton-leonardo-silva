import React from 'react'
import { Container,
  Main,
  Header,
  ButtonPages,
  ContainerButtons } from './PagesStyles'
import { useNavigate } from 'react-router-dom'
import { goToAdmin , goToListTripsPageHome } from '../routes/Coordinator'

export default function HomePage() {

  //Declarando o useNavigate
  const navigate = useNavigate()

  return (
    <Container>
      <Header>
        <h2>LABEX - HOMEPAGE</h2>
      </Header>
      <Main>
      <ContainerButtons>
          <ButtonPages onClick={() => goToListTripsPageHome(navigate)}>VIAGENS</ButtonPages>
          <br/>
          <ButtonPages onClick={() => goToAdmin(navigate)}>ADMIN</ButtonPages>
        </ContainerButtons>
      </Main>
        
    </Container>
  )
}
