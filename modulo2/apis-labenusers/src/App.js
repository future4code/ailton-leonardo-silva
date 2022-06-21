import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import axios from 'axios'; 
import Detalhes from './components/Detalhes';
import CriaUsuario from './components/CriaUsuario';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: center;
  align-self: center;
  justify-content: flex-start;
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



export default class App extends Component {
  // Definindo os states
  
  state = {
    page: 1,
  
  };

  renderizaEtapa = () => {
    switch (this.state.page) {
      case 1:
        return <CriaUsuario />;
      case 2:
        return <Detalhes />;
    }
  }

  nextPage = () => {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage = () => {
    this.setState({ page: this.state.page - 1 });
  }

  render() {

    return (
      <Container>
        <Main>
          
          {this.renderizaEtapa()}
          {this.state.page === 1 && (
            <button onClick={this.nextPage}>Tela de Usuários</button>
          )}
          {this.state.page === 2 && (
            <button onClick={this.previousPage}>Tela de Cadastro</button>
          )}
        </Main>
        
      </Container>
    )
  }
}



