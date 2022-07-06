import './App.css';
import React from 'react';
import axios from 'axios';
import styled  from 'styled-components';
import { useState , useEffect } from 'react'
import TelaInicial from './pages/TelaInicial'
import TelaMatches from './pages/TelaMatches'
import TelaLista from './pages/TelaLista'

function App() {

  // Declarando o useState para troca de telas.
  const [telaAtual , settelaAtual ] = useState("inicial");

  // Funções de troca de telas.
  const goToInicial = () => {
    settelaAtual("inicial")
  }

  const goToMatches = () => {
    settelaAtual("matches")
  }

  const goToLista = () => {
    settelaAtual("lista")
  }

  // Switch para a escolha das telas.
  const selectPage = () => {
    switch (telaAtual){
      case "inicial":
        return <TelaInicial goToMatches={goToMatches} goToLista={goToLista}/>
      case "matches":
        return <TelaMatches goToInicial={goToInicial} goToLista={goToLista}/>
      case "lista":
        return <TelaLista goToInicial={goToInicial} goToMatches={goToMatches}/>
      default:
        return <TelaInicial goToMatches={goToMatches} goToLista={goToLista} />
    }
  }

return (
  <div className="App">
    {selectPage()}
  </div>
  );
}

export default App;






