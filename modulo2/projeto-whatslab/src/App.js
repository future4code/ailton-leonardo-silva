import './App.css';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  border: 2px solid black;
  background-color: lightgray;
`
const Mensagens = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 50em;
  height: 40em;
  align-items: center;
  border: 2px solid black;
  background-color: white;
`
const EspacoInputs = styled.div`
  display: flex;
  width: 50em;
  height: 2em;
  justify-content: space-around;
  border: 2px solid black;
  background-color: yellowgreen;
`

const InputUsuario = styled.input`
  display: flex;
  flex-direction: column;
  width: 10rem;
`
const InputMensagem = styled.input`
  display: flex;
  flex-direction: column;
  width: 30rem;
`

class App extends React.Component {

//IMPLEMENTAR A LÓGICA DOS INPUTS AQUI

//Estado
state = {
  inputUsuario: "",
  UsuarioFinal: "",
  inputMensagem: "",
  MensagemFinal: "",
    
};

  
pegarValorUsuario = (event) => {
  console.log(event.target.value);
  this.setState({
  inputUsuario: event.target.value
  });
};

pegarValorMensagem = (event) => {
  console.log(event.target.value);
  this.setState({
  inputMensagem: event.target.value
  });
};  

Enviando = () => {
  this.setState ({UsuarioFinal: this.state.inputUsuario + ':'})
  this.setState ({inputUsuario: ""})
  this.setState ({MensagemFinal: this.state.inputMensagem})
  this.setState ({inputMensagem: ""})
  
}

  render () {
  
  return (
      <Container>
        <h3>Projeto Whatslab</h3>
        <Mensagens>
          <div>
            <p><b>{this.state.UsuarioFinal}</b> {this.state.MensagemFinal}</p>
            <br/>
          </div>
        </Mensagens>
        <EspacoInputs>
            <InputUsuario value={this.state.inputUsuario}
            onChange={this.pegarValorUsuario}>
            </InputUsuario>
            <InputMensagem value={this.state.inputMensagem}
            onChange={this.pegarValorMensagem}>
            </InputMensagem>
            {/* Joga os dados informados no campo Mensagens */}
            <button onClick={this.Enviando}>Enviar</button>
        </EspacoInputs>
      
      </Container>
    );
  }
}
export default App;
