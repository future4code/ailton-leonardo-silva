import React from 'react'
import './RegisterPageStyles.css'
import { useNavigate } from "react-router-dom"
import { GlobalContext } from "../../components/global/GlobalContext"
import { goToFeed, goToLogin } from '../../routes/Coordinator'
import useForm from '../../hooks/useForm'
import axios from 'axios'
import { BASE_URL } from '../../constants/Constants'
import labenu_small from "../../assets/icone_labenu_small.png"


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
    <div className="Container__Register">
        <header className="Header__Register">
            <div>
            </div>
            <div>
              <img src={labenu_small} alt="imagem"/>
            </div>
            <button className="Button__Header__Register" onClick={() => goToLogin(navigate)}>Entrar</button>
        </header>
        <main>
          <h3>Olá, boas vindas ao LabEddit ;)</h3>
          <form className="Wrapper__Register" onSubmit={onSubmitRegister}>
              <input className="Input__Register"
                  placeholder="Nome"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  value={form.username} 
                  onChange={onChange}
                  // pattern={"[a-z][A-Z][0-9]"}
                  title="Utilize apenas caracteres ou números."
                  required/>
              <input className="Input__Register"
                  placeholder="email"
                  name="email"
                  type="email"
                  value={form.email} 
                  onChange={onChange}
                  pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"}
                  title="Utilize apenas caracteres minúsculos, números, não esqueça da @."
                  required/>
              <input className="Input__Register"
                  placeholder="Digite a sua senha"
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={onChange}
                  pattern={"^.{8,30}$"}
                  title="Sua senha deve ter no mínimo 8 e no máximo 30 caracteres."
                  required/>
              <div>
                <h5>Ao continuar, você concorda com o nosso Contrato de usuário e nossa Política de Privacidade</h5>
                <input type="checkbox" id="userAgreement" name="Agreement" required />
                <label htmlFor="userAgreement">Eu concordo em receber emails sobre coisas legais no Labeddit</label>
              </div>
              <br/>
              <div>
                <button className="Button__Register">Continuar</button>
              </div>
          </form>
        </main>
    </div>
  )
}
