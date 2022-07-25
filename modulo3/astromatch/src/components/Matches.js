import React from 'react'
import { ContainerMatches , DivMatches, DivPhoto, FooterMatches, HeaderMatches, MatchPhoto , H3 } from './Matchesestilo'
import axios from 'axios';
import { useState , useEffect } from 'react';
import cancelar from '../assets/icons/cancelar.png'
import heart from '../assets/icons/heart.png'

export default function Matches() {

    // valor do useState que guarda infos e foto do pokemon
    const [matchUser, setmatchUser] = useState([]);
    const [likedMatch, setlikedMatch] = useState([])
    
    // Buscando o localStorage
    const user = localStorage.getItem("user");

    // Chamando o useEffect para acessar o Astromatch via Axios
      const pegarMatch = () => {
      axios
        .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${user}/person`)
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
          `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${user}/choose-person`,
          body
        )
        .then((response) => {
          // If para salvar o likedMatch apenas quem também corresponde ao like
          // a resposta vem da API, através do response.data.isMatch
          if (response.data.isMatch === true) {
            setlikedMatch(response.data.profile);
            console.log("Esse gostou: isMatch = ", response.data.isMatch)
            alert("Deu MATCH! Que tal iniciar uma conversa?")
            pegarMatch();
          } else {
            console.log("Esse não gostou: isMatch = ", response.data.isMatch)
            pegarMatch()
          }
        });
      }

    
  useEffect(() => {
    pegarMatch();
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
                <H3>{matchUser.name}</H3>
            </HeaderMatches>
            <DivPhoto>
                <MatchPhoto src={matchUser.photo} />
                <H3>{matchUser.bio}</H3>
                <H3>Idade: {matchUser.age}</H3>
            </DivPhoto>
            <FooterMatches>
                <img src={cancelar} alt={"Não curti"} onClick={onClickDislike}/>
                <img src={heart} alt={"curti"} onClick={onClickLike}/>
            </FooterMatches>
        </DivMatches>
    </ContainerMatches>
  )
}