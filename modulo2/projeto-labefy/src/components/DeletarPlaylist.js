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
  flex-wrap: wrap;
  border:1px solid black;
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

export default class DeletarPlaylist extends Component {

  state = {
    cadastroPlaylist: [],
    playlist: "",
  }
  
  componentDidMount() {
    this.getPlaylist();

  }

  componentDidUpdate() {
    this.getPlaylist();

  }

  // Função para Verificar os usuários
    
  getPlaylist = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        {
          headers: {
            Authorization: "leonardo-silva-ailton"
          }
        }
      )

      .then((response) => {
        this.setState({ cadastroPlaylist: response.data.result.list });
      })
      .catch((error) => {
        console.log(error.message);
      });
      
      
  };


  // Função para deletar uma playlist
  deletePlaylist = (id) => {

    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
      
        {
          headers: {
            Authorization: "leonardo-silva-ailton",
          }
        }
      )
      .then((response) => {
        this.getPlaylist();
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
                <section>
                    
                    {this.state.cadastroPlaylist?.map((list) => {
                        return  <p key={list.id}>
                                    {list.name} 
                                    <Deletar onClick={() => this.deletePlaylist(list.id)}>Deletar</Deletar>
                                </p>;
                
                    })}
              
                </section>
                
            </Main>
        </Container>
    )
  }
}