import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import axios from 'axios'; 
import Detalhes from './components/Detalhes';
import CriaUsuario from './components/CriaUsuario';

const Container = styled.div`
  display: flex;
  flex-wrap:wrap;
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
  flex-wrap: wrap;
  border:1px solid black;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  background-color: lightgray;
  align-items: left;
  align-self: center;
  justify-content: flex-end;
  justify-self: start;
  /* width: 1%; */
  /* height: 40em; */
`
const Button = styled.button`
  background-color: lightgray;
  border: none;
  border-left: 1px solid;
  border-right: 1px solid;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: bold;
  
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
            <Button onClick={this.nextPage}>Tela de Usuários</Button>
          )}
          {this.state.page === 2 && (
            <Button onClick={this.previousPage}>Tela de Cadastro</Button>
          )}
        </Main>
        
      </Container>
    )
  }
}



