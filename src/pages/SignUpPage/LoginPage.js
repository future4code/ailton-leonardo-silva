import React from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from "../../components/global/GlobalContext"
import { goToFeed, goToRegister } from '../../routes/Coordinator'
import axios from 'axios'
import { BASE_URL } from '../../constants/Constants'
import useForm from '../../hooks/useForm'


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
    <div>
      <header>
        <h2>LABEDDIT LOGINPAGE</h2>
      </header>
      <main>
        <div>
        <form onSubmit={onSubmitLogin}>
              <h2>EMAIL</h2>
              <input
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={form.email} 
                  onChange={onChange}
                  pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"}
                  title="Utilize apenas caracteres minúsculos, números, não esqueça da @."
                  required/>
              <h2>SENHA</h2>
              <input
                  placeholder="Digite a sua senha"
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={onChange}
                  pattern={"^.{8,30}$"}
                  title="Sua senha deve ter no mínimo 8 e no máximo 30 caracteres."
                  required/>
          <div>
            <button>Continuar</button>
          </div>
        </form>
        <div>
          <button onClick={() => goToRegister(navigate)}>Crie uma conta!</button> 
        </div>
        </div>
      </main>

    </div>
  )
}
