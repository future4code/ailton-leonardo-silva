import React, { Component } from 'react'
import styled from 'styled-components';
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
  flex-direction: column;
  border:1px solid black;
  border-radius:0.5em;
  background-color: lightgray;
  align-items: center;
  align-self: center;
  justify-content: flex-start;
  width: 20em;
  height: 40em;
`
const Deletar = styled.button`
  display: flex;
  border-radius: 0.5em;
  align-items: center;
  
`

export default class Detalhes extends Component {

  state = {
    usuarios: []
  }
  
  componentDidMount() {
    this.getUsers();

  }

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


  // Função para deletar um usuário
  deleteUser = (id) => {

    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
      
        {
          headers: {
            Authorization: "leonardo-silva-ailton"
          }
        }
      )
      .then((response) => {
        this.getUsers();
        alert("Excluido com sucesso!")
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
                <h3>Tela de Cadastro</h3>
              </header>
              <section>
                {this.state.cadastroUsuarios?.map((usuario) => {
                  return <p key={usuario.id}>{usuario.name} <Deletar onClick={() => this.deleteUser(usuario.id)}>Deletar</Deletar></p>;
                  })}
              </section>
            </Main>
        </Container>
    )
  }
}
