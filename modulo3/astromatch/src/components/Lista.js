import React from 'react'
import { ContainerLista , DivLista, HeaderLista , DivPhoto, ButtonPaginasLista, ListaPhoto, WrapperList , H3 } from './Listaestilo'
import axios from 'axios';
import { useState , useEffect } from 'react';
import CardLista from './CardLista';

export default function Lista() {

    const [Matches , setMatches ] = useState ([])

    // Buscando o localStorage
    const user = localStorage.getItem("user");

    // Chamando o useEffect para acessar o Astromatch via Axios
    const AllMatches = () => {
        axios
        .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${user}/matches`)
        .then((response) => {
            setMatches(response.data.matches);
            console.log(response.data.matches)
            })
        .catch((error) => {
            console.log(error.response);
            });
    }
    
  // Limpando a API
  const limparMatches = () => {
    axios
    .put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${user}/clear`)
    .then((response) => {
        console.log("Mensagem do response:" , response.data.message);
    })
    .catch((error) => {
        console.log(error.response);
    });
}

const onClickLimpar = () => {
    alert("Pronto a sua API foi limpa.")
    limparMatches()
}

useEffect(() => {
  AllMatches();
}, []);

  return (
    <ContainerLista>
        <DivLista>
            <HeaderLista>
                <h3>Seus Matches</h3>
                <ButtonPaginasLista onClick={onClickLimpar}>Limpar Matches</ButtonPaginasLista>
            </HeaderLista>
            <DivPhoto>
                {Matches?.map((matches) => {
                    return <CardLista matches={matches} />;
                })}
            </DivPhoto>
        </DivLista>
    </ContainerLista>
  )
}