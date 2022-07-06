import React from 'react'
import { ContainerMatches , DivMatches, DivPhoto, FooterMatches, HeaderMatches, MatchPhoto } from './Matchesestilo'
import styled from 'styled-components';
import axios from 'axios';
import { useState , useEffect } from 'react';

export default function Matches() {

    // valor do useState que guarda infos e foto do pokemon
    const [matchUser, setmatchUser] = useState([]);

    // Chamando o useEffect para acessar o Astromatch via Axios
    useEffect(() => {
        const pegarMatch = () => {
          axios
          .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo-silva/person')
            .then((response) => {
            
            setmatchUser(response.data.profile);
            })
            .catch((error) => {
              console.log(error.response);
            });
        };
        pegarMatch();
        console.log({setmatchUser})
      }, []);
    


  return (
    <ContainerMatches>
        <DivMatches>
            <HeaderMatches>
                <p>{matchUser.name}</p>
            </HeaderMatches>
            <DivPhoto>
                <MatchPhoto src={matchUser.photo} />
                </DivPhoto>
            <FooterMatches>
                <p>{matchUser.bio}</p>
                <p>Idade: {matchUser.age}</p>
            </FooterMatches>
        </DivMatches>
    </ContainerMatches>
  )
}
