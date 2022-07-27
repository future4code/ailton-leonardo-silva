import React from 'react'
import { useNavigate } from "react-router-dom"
import { GlobalContext } from "../../components/global/GlobalContext"
import { goToFeed } from '../../routes/Coordinator'
import useForm from '../../hooks/useForm'
import axios from 'axios'
import { BASE_URL } from '../../constants/Constants'

export default function RegisterPage() {
  //Declarando o useNavigate
  const navigate = useNavigate()  

  //Chamando o custom Hook para Formularios
  //Substitui as funções de Inputs Controlados
  const { form , onChange , cleanFields} = useForm({username: "" , email: "" , password: ""}) 

 // Função de Login
  const onSubmitRegister = (event) => {
  event.preventDefault()
  
  //Chamando o Axios
  axios
  
    .post(`${BASE_URL}/users/signup`, form)
    .then((response) => {
      console.log(response.data.token)
      localStorage.setItem('token', response.data.token)
      alert("Usuário(a) cadastrado(a) com sucesso!")
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
            <div>
            </div>
            <div>
            </div>
            <button onClick={() => goToFeed(navigate)}>Entrar</button>
        </header>
        <main>
          <label>Olá, boas vindas ao LabEddit ;)</label>
          <form onSubmit={onSubmitRegister}>
              <h2>NOME</h2>
              <input
                  placeholder="Nome"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  value={form.username} 
                  onChange={onChange}
                  // pattern={"[a-z][A-Z][0-9]"}
                  title="Utilize apenas caracteres ou números."
                  required/>
              <h2>EMAIL</h2>
              <input
                  placeholder="email"
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
        </main>
    </div>
  )
}
