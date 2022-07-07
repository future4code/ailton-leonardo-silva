import React from 'react'
import { ContainerMatches , DivMatches, DivPhoto, FooterMatches, HeaderMatches, MatchPhoto } from './Matchesestilo'
import styled from 'styled-components';
import axios from 'axios';
import { useState , useEffect } from 'react';
import cancelar from '../assets/icons/cancelar.png'
import heart from '../assets/icons/heart.png'

export default function Matches() {

    // valor do useState que guarda infos e foto do pokemon
    const [matchUser, setmatchUser] = useState([]);
    const [likedMatch, setlikedMatch] = useState([])
    
    // Chamando o useEffect para acessar o Astromatch via Axios
      const pegarMatch = () => {
      axios
        .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo-silva/person')
        .then((response) => {
          setmatchUser(response.data.profile);
        })
        .catch((error) => {
          console.log(error.response);
        });
      }
    
    // Função para dar like
    const likeMatch = (liked) => {
      const body = {
        choice: liked,
        id: matchUser.id,
      };

      axios
        .post(
          "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo-silva/choose-person",
          body
        )
        .then((response) => {
          // If para salvar lo likedMatch apenas quem também corresponde ao like
          // a resposta vem da API, através do response.data.isMatch
          if (response.data.isMatch === true) {
            setlikedMatch(response.data.profile);
            console.log("Esse gostou: isMatch = ", response.data.isMatch)
            pegarMatch();
          } else {
            console.log("Esse não gostou: isMatch = ", response.data.isMatch)
            pegarMatch()
          }
        });
      }

    
    useEffect(() => {
      if ({matchUser} !== "") {
        pegarMatch();
      } else {
        alert ("A Api chegou ao fim. Vamos limpar suas escolhas")
      }
    }, []);
    

    // Funções auxiliares para me ajudar a dar o like ou dislike
    const onClickDislike = () => {
      console.log("Clicou não")
      likeMatch(false);
    };
  
    const onClickLike = () => {
      console.log("Clicou sim")
      likeMatch(true);
    };

  return (
    <ContainerMatches>
        <DivMatches>
            <HeaderMatches>
                <h3>{matchUser.name}</h3>
            </HeaderMatches>
            <DivPhoto>
                <MatchPhoto src={matchUser.photo} />
                <p>{matchUser.bio}</p>
                <p>Idade: {matchUser.age}</p>
            </DivPhoto>
            <FooterMatches>
                <img src={cancelar} onClick={onClickDislike}/>
                <img src={heart} onClick={onClickLike}/>
            </FooterMatches>
        </DivMatches>
    </ContainerMatches>
  )
}
