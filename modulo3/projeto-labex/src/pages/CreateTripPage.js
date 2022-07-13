import React from 'react'
import { Container,
         Header, 
         Main, 
         Wrapper, 
         Input, 
         ContainerButtons, 
         ButtonPages} from './PagesStyles'
import { useNavigate } from 'react-router-dom'
import { goToAdminHPage } from '../routes/Coordinator'

export default function CreateTripPage() {

  //Declarando o useNavigate
  const navigate = useNavigate()

  const aviso = () => {
    alert("Viagem criada com sucesso! Em construção!")
  }

  

  return (
    <Container>
    <Header>
      <h2>LABEX - CreateTripPage</h2>
    </Header>
    <Main>
      <Wrapper>
        <h3>Crie uma nova viagem</h3>
        <Input placeholder="Nome da viagem"></Input>
        <Input placeholder="Descrição"></Input>
        <Input placeholder="Planeta de Destino"></Input>
        <Input type="number" placeholder="Duração em Dias"></Input>
        <Input type="date" placeholder="Data do Início da Viagem"></Input>
      </Wrapper>
      
      <ContainerButtons>
        <ButtonPages onClick={() => goToAdminHPage(navigate)}>VOLTAR</ButtonPages>
        <br/>
        <ButtonPages onClick={aviso}>CRIAR VIAGEM</ButtonPages>
      </ContainerButtons>
    </Main>
  </Container>
  )
}
