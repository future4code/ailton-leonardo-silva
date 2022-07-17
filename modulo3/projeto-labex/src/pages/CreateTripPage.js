import React from 'react'
import axios from 'axios'
import { Container,
         Header, 
         Main, 
         Wrapper, 
         Input, 
         ContainerButtons, 
         ButtonPages,
         Form} from './PagesStyles'
import { useNavigate } from 'react-router-dom'
import { goToAdminHPage } from '../routes/Coordinator'
import { useState , useEffect } from 'react'
import { BASE_URL } from '../constants/Constant'
import useForm from '../hooks/useForm'
import useProtectedPage from '../hooks/useProtectedPage'

export default function CreateTripPage() {
  //Checagem para saber se está logado ou não.
  useProtectedPage()

  //Buscando o valor do localStorage
  const token = localStorage.getItem('token')
  
  //Declarando o useNavigate
  const navigate = useNavigate()

  //Chamando o custom Hook para Formularios
  //Substitui as funções de Inputs Controlados
  const { form , onChange , cleanFields} = useForm({name: "" , description: "" , planet: "" ,  durationInDays: "" , date: "" }) 

  const [data, setData] = useState(undefined);
  const [error, setError] = useState("");


const CreateTrip = (event) => {
    event.preventDefault()

      // Chamando o Axios
    
      const headers = {

        headers: {auth:token}
      }

      console.log(token, form)

      axios
        .post(`${BASE_URL}trips`, form , headers)
        .then(() => {
          alert("Viagem criada com sucesso!")
          cleanFields()
        })
        .catch((error) => {
          setError(error);
          console.log(error.response)
        });
} 
    

  return (
    <Container>
    <Header>
      <h2>LABEX</h2>
    </Header>
    <Main>
      <Form onSubmit={CreateTrip}>
      <Wrapper>
        <h3>Crie uma nova viagem</h3>
        <Input name="name"
               value={form.name}
               placeholder="Nome da viagem"
               onChange={onChange}
               required></Input>
        <Input name="description"
               value={form.description}
               placeholder="Descrição"
               onChange={onChange}
               required></Input>
        <Input name="planet"
               value={form.planet}
               placeholder="Planeta de Destino"
               onChange={onChange}
               required></Input>
        <Input type="number"
               name="durationInDays"
               value={form.durationInDays}
               placeholder="Duração em Dias"
               onChange={onChange}
               required></Input>
        <Input type="date"
               name="date"
               value={form.date}
               placeholder="Data do Início da Viagem"
               onChange={onChange}
               required></Input>
      </Wrapper>
      
        <ContainerButtons>
          <ButtonPages>CRIAR VIAGEM</ButtonPages>
        </ContainerButtons>
      </Form>
        <ContainerButtons>
          <ButtonPages onClick={() => goToAdminHPage(navigate)}>VOLTAR</ButtonPages>
        </ContainerButtons>
    </Main>
    
  </Container>
  )
}
