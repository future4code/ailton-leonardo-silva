import React from 'react'
import { Container,
  Main,
  Header,
  ButtonPages,
  ContainerButtons,
  ContainerForms } from './PagesStyles'
  import { useNavigate } from 'react-router-dom'
  import { goToHomePage , goToAdminHomePage } from '../routes/Coordinator'

export default function LoginPage() {

    //Declarando o useNavigate
    const navigate = useNavigate()

  return (
    <Container>
      <Header>
        <h2>LABEX - LOGINPAGE</h2>
      </Header>
      <Main>
        <ContainerForms>
          <h2>LOGIN</h2>
          <input />
          <h2>SENHA</h2>
          <input />
        </ContainerForms>
        <ContainerButtons>
          <ButtonPages onClick={() => goToHomePage(navigate)}>VOLTAR</ButtonPages> 
          <br/>
          <ButtonPages onClick={() => goToAdminHomePage(navigate)}>ENTRAR</ButtonPages>
        </ContainerButtons>
      </Main>

    </Container>
  )
}
