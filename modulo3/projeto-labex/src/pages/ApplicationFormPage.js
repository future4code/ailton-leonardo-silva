import React from 'react'
import { Container,
  Main,
  Header,
  ButtonPages,
  ContainerButtons, 
  Wrapper,
  Input,
  Select} from './PagesStyles'
  import { useNavigate } from 'react-router-dom'
  import { useState } from 'react'
  import { BASE_URL } from '../constants/Constant'
  import { useRequestDataTripPage } from '../hooks/useRequestDataTripPage'
  import { goToListTripsPage } from '../routes/Coordinator'

export default function ApplicationFormPage() {

  const [trips, isLoading , error] = useRequestDataTripPage(`${BASE_URL}trips`)
  const [tripName, setTripName] = useState("")

  const chooseTrip = (event) =>{
      setTripName(event.target.value)
  }


  //Declarando o useNavigate
  const navigate = useNavigate()

  const aviso = () => {
    alert("Cadastro feito com sucesso! Em construção!")
  }

  return (
    <Container>
      <Header>
        <h2>LABEX</h2>
      </Header>
      <Main>
        <Wrapper>
          <h3>Vamos nos cadastrar para uma viagem interestelar</h3>
          <Select onChange={chooseTrip}>
            <option value={""}>Escolha uma Viagem</option>
            {!isLoading && trips && trips.length > 0 && trips.map((trip) => {
              return (
                <option key={trip.name} value={trip.name}>
                  {trip.name}
                </option>
              );
            })}
            {!isLoading && trips && trips.length === 0 && (<option>Não há itens na lista</option>)}
          </Select>
                <Input placeholder="Nome"></Input>
                <Input type="number" placeholder="Idade"></Input>
                <Input placeholder="Texto de Candidatura"></Input>
                <Input placeholder="Profissão"></Input>
                <Input placeholder="Escolha um País"></Input>
        </Wrapper>
        
        <ContainerButtons>
          <ButtonPages onClick={() => goToListTripsPage(navigate)}>VOLTAR</ButtonPages>
          <br/>
          <ButtonPages onClick={aviso}>ENVIAR</ButtonPages>
        </ContainerButtons>
      </Main>
    </Container>
  )
}
