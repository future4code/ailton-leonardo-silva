import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios';

const TelaMusica = styled.div`
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
const InputMusica = styled.input`
    display: flex;
    background-color: white;
`
const InputArtista = styled.input`
    display: flex;
    background-color: white;
`
const InputURL = styled.input`
    display: flex;
    background-color: white;
`


export default class CriaMusicas extends Component {

  state = {
    cadastroPlaylist: [],
    tela: "inicial",
    nameMusica: "",
    nameArtista: "",
    endURL: ""
  }

  componentDidMount() {
    this.getPlaylist();
  }

  componentDidUpdate() {
    this.getPlaylist();
  }

  onChangeMusica =(event) => {
    this.setState({ nameMusica: event.target.value})
  };

  onChangeArtista =(event) => {
    this.setState({ nameArtista: event.target.value})
  };

  onChangeendURL =(event) => {
    this.setState({ endURL: event.target.value})
  };

  // Função para verificar as playlists
    
    
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
  



    
    
    // Função para adicionar uma música na lista usando o Axios
    
    createMusica = () => {
    
    const body = {
      id: this.state.cadastroPlaylist.id, // Inserido apenas para dar o npm run build
      name: this.state.nameMusica,
      artist: this.state.nameArtista,
      url: this.state.endURL
    };
    
    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:${id}/tracks`,
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
        <TelaMusica>
            <h2>Adicione uma música </h2>
            <InputMusica
                placeholder={"Música"}
                value={this.state.nameMusica}
                onChange={this.onChangeMusica}
            />
            <InputArtista
                placeholder={"Artista"}
                value={this.state.nameArtista}
                onChange={this.onChangeArtista}
            />
            <InputURL
                placeholder={"Endereço URL"}
                value={this.state.endURL}
                onChange={this.onChangeendURL}
            />
            <hr/>
            <button onClick={this.createMusica}>Adicionar Música</button>
          


        </TelaMusica>
        
 
    )
  }
}