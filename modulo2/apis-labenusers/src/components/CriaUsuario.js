import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: center;
  align-self: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`
const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  border:1px solid black;
  background-color: lightgray;
  align-items: center;
  align-self: center;
  justify-content: flex-start;
  width: 20em;
  height: 40em;
`



export default class CriaUsuario extends Component {

    // Criando os estados
    state = {
        cadastroUsuarios: [],
        usuarioNovo: "",
        nameInput: "",
        emailInput: "",
      };

    componentDidMount() {
      this.getUsers();
    }
    
    // Fazendo as funções dos inputs controlados
    
    onChangeName = (event) => {
      this.setState({nameInput:event.target.value});
    };
    
    onChangeEmail = (event) => {
      this.setState({emailInput:event.target.value});
    };
    
      
    // Função para Verificar os usuários
    
    getUsers = () => {
        axios
          .get(
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
            {
              headers: {
                Authorization: "leonardo-silva-ailton",
              }
            }
          )
          .then((response) => {
            this.setState({ cadastroUsuarios: response.data });
          })
          .catch((error) => {
            console.log(error.message);
          });
          
          
      };
    
    
      // Função para adicionar um usuário usando o Axios
    
      createUser = () => {
        const body = {
          name: this.state.nameInput,
          email: this.state.emailInput
        };
        
        console.log('Nome armazenado no body: ', body.name)
        console.log('Email armazenado no body : ', body.email)
        axios
          .post(
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
            body,
            {
              headers: {
                Authorization: "leonardo-silva-ailton",
              }
            }
            
          )
          .then((response) => {
            this.getUsers();
          })
          .catch((error) => {
            console.log(error.message);
          });
      };
      

  render() {
    return (
      <Container>
        <Main>
            <header>
                <h3>Cadastro de Usuários</h3>
            </header>
            <br/>
            <input
                placeholder={"Nome"}
                value={this.state.nameInput}
                onChange={this.onChangeName}
            />
            <br/>
            <input
                placeholder={"Email"}
                value={this.state.nameEmail}
                onChange={this.onChangeEmail}
            />
            <br/>
            <button onClick={this.createUser}>Criar Usuário</button>
            <br/>
        </Main>
      </Container>
    )
  }
}
