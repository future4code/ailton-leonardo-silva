import React from 'react'
import axios from 'axios'
import { Container,
         Header, 
         Main, 
         Wrapper, 
         Input, 
         ContainerButtons, 
         ButtonPages} from './PagesStyles'
import { useNavigate } from 'react-router-dom'
import { goToAdminHPage } from '../routes/Coordinator'
import { useState , useEffect } from 'react'
import { BASE_URL } from '../constants/Constant'

export default function CreateTripPage() {

  //Buscando o valor do localStorage
  const token = localStorage.getItem('token')
  
  //Declarando o useNavigate
  const navigate = useNavigate()

  //Declarando os useState
  const [createTripName, setCreateTripName] = useState("")
  const [createTripDesc, setCreateTripDesc] = useState("")
  const [createTripPlanet, setCreateTripPlanet] = useState("")
  const [createTripDuration, setCreateTripDuration] = useState("")
  const [createTripDate, setCreateTripDate] = useState("")
  const [body, setBody] =useState([])
  const [data, setData] = useState(undefined);
  const [error, setError] = useState("");


  // Funções para controlar os Inputs
  const createName = (event) =>{
    setCreateTripName(event.target.value)
  }

  const createDesc = (event) =>{
    setCreateTripDesc(event.target.value)
  }
  const createPlanet = (event) =>{
    setCreateTripPlanet(event.target.value)
  }
  const createDuration = (event) =>{
    setCreateTripDuration(event.target.value)
  }
  
  const createDate = (event) =>{
    setCreateTripDate(event.target.value)
  }

const CreateTrip = () => {
    // Chamando o Axios
    
      const body = {   
        name: createTripName,
        description: createTripDesc,
        planet: createTripPlanet,
        durationInDays: +createTripDuration,
        date: createTripDate,
      }
      const headers = {

        headers: {auth:token}
      }

      console.log(token, body)

      axios
        .post(`${BASE_URL}trips`, body, headers)
        .then(() => {
          alert("Viagem criada com sucesso!")
        })
        .catch((error) => {
          setError(error);
          console.log(error.response)
        });
   
  } 
    

  return (
    <Container>
    <Header>
      <h2>LABEX - CreateTripPage</h2>
    </Header>
    <Main>
      <Wrapper>
        <h3>Crie uma nova viagem</h3>
        <Input placeholder="Nome da viagem" onChange={createName}></Input>
        <Input placeholder="Descrição" onChange={createDesc}></Input>
        <Input placeholder="Planeta de Destino" onChange={createPlanet}></Input>
        <Input type="number" placeholder="Duração em Dias" onChange={createDuration}></Input>
        <Input type="date" placeholder="Data do Início da Viagem" onChange={createDate}></Input>
      </Wrapper>
      
      <ContainerButtons>
        <ButtonPages onClick={() => goToAdminHPage(navigate)}>VOLTAR</ButtonPages>
        <br/>
        <ButtonPages onClick={CreateTrip}>CRIAR VIAGEM</ButtonPages>
      </ContainerButtons>
    </Main>
  </Container>
  )
}
