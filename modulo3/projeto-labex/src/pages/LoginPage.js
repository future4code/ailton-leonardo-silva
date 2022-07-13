import React from 'react'
import { Container,
  Main,
  Header,
  ButtonPages,
  ContainerButtons,
  ContainerForms, 
  InputLogin,
  H2} from './PagesStyles'
import { useNavigate } from 'react-router-dom'
import { goToHomePage , goToAdminHomePage } from '../routes/Coordinator'
import { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../constants/Constant'

export default function LoginPage() {

  //Limpando o localStorage
  localStorage.clear()

  //Declarando os useStates
  const [email, SetEmail] = useState("")
  const [password, SetPassword] = useState("")

  //Declarando o useNavigate
  const navigate = useNavigate()

  // Funções para controlar os Inputs
  const onChangeEmail = (event) =>{
    SetEmail(event.target.value)
  }

  const onChangePassword = (event) =>{
    SetPassword(event.target.value)
  }

  // Função de Login
  const onSubmitLogin = () => {
    const body = {
      email: email,
      password: password
    }
    axios
      .post(`${BASE_URL}login`, body)
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
        <h2>LABEX - LOGINPAGE</h2>
      </Header>
      <Main>
        <ContainerForms>
          <H2>EMAIL</H2>
          <InputLogin
              placeholder="email"
              type="email"
              value={email} 
              onChange={onChangeEmail}/>
          <H2>SENHA</H2>
          <InputLogin
              placeholder="Digite a sua senha"
              value={password}
              onChange={onChangePassword}/>
        </ContainerForms>
        <ContainerButtons>
          <ButtonPages onClick={() => goToHomePage(navigate)}>VOLTAR</ButtonPages> 
          <br/>
          <ButtonPages onClick={onSubmitLogin}>LOGIN</ButtonPages>
          {/* <br/>
          <ButtonPages onClick={() => goToAdminHomePage(navigate)}>ENTRAR</ButtonPages> */}
        </ContainerButtons>
      </Main>

    </Container>
  )
}
