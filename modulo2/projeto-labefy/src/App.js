import React from 'react';
import './App.css';
import { Container, Section, Header, Main } from "./estilos"
import CriaPlaylist from './components/CriaPlaylist'
import DeletarPlaylist from './components/DeletarPlaylist';
import CriaMusicas from './components/CriaMusicas';


export default class App extends React.Component {


  state = {
    tela: "inicial",
  }

  render() {

    return (
      <Container>
        <Section>
          <CriaPlaylist />
          <br />
          <CriaMusicas />
          

        </Section>
        <Main>
          <Header>
            <h2>Projeto Labefy</h2>
          </Header>
          
          <DeletarPlaylist />
          
        </Main>
      </Container>
    );
  }

}
