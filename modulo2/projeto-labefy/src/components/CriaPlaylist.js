import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios';

const TelaPlaylist = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  background-color: lightcoral;
  align-items: center;
  align-self: center;
  justify-content: flex-start;
  width: 20em;
  height: 40em;
`
const InputPlaylist = styled.input`
    display: flex;
    background-color: white;
`



export default class CriaPlaylist extends Component {

  state = {
    cadastroPlaylist: [],
    tela: "inicial",
    name: "",
    playlist: "",
    namePlaylist: "",
  }

  componentDidMount() {
    this.getPlaylist();
  }

  componentDidUpdate() {
    this.getPlaylist();
  }

  onChangePlaylist =(event) => {
    this.setState({ namePlaylist: event.target.value})
  };

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
      
    }  
  


  //Tentando criar um check para saber se já existe o mesmo nome na API   
    searchPlaylist = () => {

      const body = {
        name: this.state.namePlaylist,
        
      };
    
      axios
        .get(
          `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?name=${this.state.namePlaylist}`,
          {
            headers: {
              Authorization: "leonardo-silva-ailton",
            }
          }
          
        )
        .then((response) => {
          this.getPlaylist();
          console.log("Funcionou eu acho", response.data.list.name)  
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
    
    
    // Função para adicionar um usuário usando o Axios
    
    createPlaylist = () => {
    
    const body = {
      name: this.state.namePlaylist,
      
    };
    
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        body,
        {
          headers: {
            Authorization: "leonardo-silva-ailton",
          }
        }
        
      )
      .then((response) => {
        this.getPlaylist();
      })
      .catch((error) => {
        console.log(error.message);
      });
    }
    

  render() {
    return (
        <TelaPlaylist>
            <h2>Adicione uma playlist </h2>
            <InputPlaylist
            placeholder={"Playlist"}
            value={this.state.namePlaylist}
            onChange={this.onChangePlaylist}
          />
          <hr/>
          <button onClick={this.createPlaylist}>Criar Playlist</button>
          <button onClick={this.searchPlaylist}>Busca Playlist</button>


        </TelaPlaylist>
        
 
    )
  }
}