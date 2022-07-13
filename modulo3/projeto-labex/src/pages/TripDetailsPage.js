import React from 'react'
import { Container,
  Header, 
  Main, 
  Wrapper, 
  Input, 
  ContainerButtons, 
  ButtonPages} from './PagesStyles'
import { useNavigate } from 'react-router-dom'
import { goToAdminHomePage } from '../routes/Coordinator'

export default function TripDetailsPage() {

  //Declarando o useNavigate
  const navigate = useNavigate()
  
  return (
    <Container>
      <Header>
        <h2>LABEX - TripDetailsPage</h2>
      </Header>
      <Main>

      <ContainerButtons>
        <ButtonPages onClick={() => goToAdminHomePage(navigate)}>VOLTAR</ButtonPages>
      </ContainerButtons>

      </Main>


    </Container>
  )
}
