import React from 'react'
import { Container,
  Main,
  Header,
  ButtonPages,
  ContainerButtons, 
  Wrapper,
  Input,
  Select, 
  Form } from './PagesStyles'
  import { useNavigate } from 'react-router-dom'
  import { useState } from 'react'
  import { BASE_URL } from '../constants/Constant'
  import { useRequestDataTripPage } from '../hooks/useRequestDataTripPage'
  import { goToListTripsPage } from '../routes/Coordinator'
  import useForm from '../hooks/useForm'
  import axios from 'axios'

export default function ApplicationFormPage() {

  const [trips, isLoading , error] = useRequestDataTripPage(`${BASE_URL}trips`)
  const [tripID, setTripID] = useState("")

  const chooseTrip = (event) =>{
      setTripID(event.target.value)
  }
  
  //Chamando o custom Hook para Formularios
  //Substitui as funções de Inputs Controlados
  const { form , onChange , cleanFields} = useForm({name:"", age:"", applicationText:"" , profession:"" , country:""}) 

  //Declarando o useNavigate
  const navigate = useNavigate()

  const CreateApplicant = (event, id) => {
    event.preventDefault()
      
      // Chamando o Axios
      axios
        .post(`${BASE_URL}trips/${tripID}/apply`, form)
        .then((response) => {
          alert("Cadastro feito com sucesso!")
          console.log(response)
          cleanFields()
        })
        .catch((error) => {
          
          console.log(error.message)
        });
  } 
  
  return (
    <Container>
      <Header>
        <h2>LABEX</h2>
      </Header>
      <Main>
        <Wrapper>
          <h3>Vamos nos cadastrar para uma viagem interestelar</h3>
          <Form onSubmit={CreateApplicant}>
            <Select onChange={chooseTrip}>
              <option value={""}>Escolha uma Viagem</option>
              {!isLoading && trips && trips.length > 0 && trips.map((trip) => {
                return (
                  <option key={trip.id} value={trip.id}>
                    {trip.name}
                  </option>
                );
              })}
              {!isLoading && trips && trips.length === 0 && (<option>Não há itens na lista</option>)}
            </Select>
            <Input placeholder="Nome"
                   name="name"
                   value={form.name}
                   onChange={onChange}
                   required/>
            <Input type="number"
                   placeholder="Idade"
                   name="age"
                   value={form.age}
                   onChange={onChange}
                   required/>
            <Input placeholder="Texto de Candidatura"
                   name="applicationText"
                   value={form.applicationText}
                   onChange={onChange}
                   required/>
            <Input placeholder="Profissão"
                   name="profession"
                   value={form.profession}
                   onChange={onChange}
                   required/>
            <Input placeholder="Escolha um País"
                   name="country"
                   value={form.country}
                   onChange={onChange}
                   required/>
            <ContainerButtons>
              <ButtonPages>ENVIAR</ButtonPages>
            </ContainerButtons>
          </Form>
        </Wrapper>
        
        <ContainerButtons>
          <ButtonPages onClick={() => goToListTripsPage(navigate)}>VOLTAR</ButtonPages>
          
        </ContainerButtons>
      </Main>
    </Container>
  )
}
