// eslint-disable default-case
import React, { Component } from "react";
import {useState, useEffect} from 'react';
import './App.css';
import styledComponents from "styled-components";
import Etapa1 from './components/Etapa1'
import Etapa2 from './components/Etapa2'
import Etapa3 from './components/Etapa3'
import Final from './components/Final'

class App extends React.Component {
    
state = {
  etapa: "1",
}

mudaTela2 = () => {
  this.setState({
    etapa: "2"
  })
}

mudaTela3 = () => {
  this.setState({
    etapa: "3"
  })
}

mudaFinal = () => {
  this.setState({
    etapa: "4"
  })
}

renderizaEtapa = () => {
  switch (this.state.etapa) {
    case '1':
      return <Etapa1 mudaTela2={this.mudaTela2}/>
      break;
    case '2':
      return <Etapa2 mudaTela3={this.mudaTela3}/>
      break;
    case '3':
      return <Etapa3 mudaFinal={this.mudaFinal}/>
      break;
    case '4':
      return <Final />
      break;
  }
}

    render () {


  
    return (
      <div className="App">
        {this.renderizaEtapa()} 
      </div>
    );
    }
}

export default App;
