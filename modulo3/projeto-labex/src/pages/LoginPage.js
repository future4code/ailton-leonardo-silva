import React from 'react'
import { Container,
  Main,
  Header,
  ButtonPagesDiffBack,
  ContainerButtons,
  ContainerForms, 
  InputLogin,
  H2, 
  Form,
  Wrapper,
  } from './PagesStyles'

import { useNavigate } from 'react-router-dom'
import { goToHomePage , goToAdminHomePage } from '../routes/Coordinator'
import axios from 'axios'
import { BASE_URL } from '../constants/Constant'
import useForm from '../hooks/useForm'

export default function LoginPage() {

  //Chamando o custom Hook para Formularios
  //Substitui as funções de Inputs Controlados
  const { form , onChange , cleanFields} = useForm({email: "" , password: ""}) 

  //Limpando o localStorage
  localStorage.clear()
  
  //Declarando o useNavigate
  const navigate = useNavigate()


  // Função de Login
  const onSubmitLogin = (event) => {
    event.preventDefault()

    axios
      .post(`${BASE_URL}login`, form)
      .then((response) => {
        console.log(response.data.token)
        localStorage.setItem('token', response.data.token)
        goToAdminHomePage(navigate)

      })
      .catch((error) => {
        console.log(error.response)
        alert("Usuário(a)/Senha invalidos")
      })
      
  }

  return (
    <Container>
      <Header>
        <h2>LABEX</h2>
      </Header>
      <Main>
        <Wrapper>
        <Form onSubmit={onSubmitLogin}>
              <H2>EMAIL</H2>
              <InputLogin
                  placeholder="email"
                  name="email"
                  type="email"
                  value={form.email} 
                  onChange={onChange}
                  pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"}
                  title="Utilize apenas caracteres minúsculos, números, não esqueça da @."
                  required/>
              <H2>SENHA</H2>
              <InputLogin
                  placeholder="Digite a sua senha"
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={onChange}
                  pattern={"^.{5,}$"}
                  title="Sua senha deve ter no mínimo 5 caracteres."
                  required/>
          <ContainerButtons>
            <ButtonPagesDiffBack>LOGIN</ButtonPagesDiffBack>
          </ContainerButtons>
        </Form>
        <ContainerButtons>
          <ButtonPagesDiffBack onClick={() => goToHomePage(navigate)}>VOLTAR</ButtonPagesDiffBack> 
        </ContainerButtons>
        </Wrapper>
      </Main>

    </Container>
  )
}
