import React from 'react'
import './LoginPageStyles.css'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from "../../components/global/GlobalContext"
import { goToFeed, goToRegister } from '../../routes/Coordinator'
import axios from 'axios'
import { BASE_URL } from '../../constants/Constants'
import useForm from '../../hooks/useForm'
import labenu from "../../assets/icone_labenu.png"

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
      .post(`${BASE_URL}/users/login`, form)
      .then((response) => {
        localStorage.setItem('token', response.data.token)
        goToFeed(navigate)

      })
      .catch((error) => {
        console.log(error.response)
        alert("Usuário(a)/Senha invalidos")
      })
      
  }

  return (
    <div className="Container__Login">
      <header className="Header__Login">
        <img src={labenu} alt="imagem"/>
        <h3>LabEddit</h3>
        <h5>O projeto de rede social da Labenu</h5>
      </header>
      <main>
        <form className="Wrapper" onSubmit={onSubmitLogin}>
              <input className="Input"
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={form.email} 
                  onChange={onChange}
                  pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"}
                  title="Utilize apenas caracteres minúsculos, números, não esqueça da @."
                  required/>
              <input className="Input"
                  placeholder="Senha"
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={onChange}
                  pattern={"^.{8,30}$"}
                  title="Sua senha deve ter no mínimo 8 e no máximo 30 caracteres."
                  required/>
          <div>
            <br/>
            <button className="Button">Continuar</button>
          </div>
        </form>
        <div className="Wrapper">
          <button className="ButtonCadastro" onClick={() => goToRegister(navigate)}>Crie uma conta!</button> 
        </div>
      </main>

    </div>
  )
}
