import React from 'react'
import { useState } from 'react'
import { ButtonPaginas, ContainerInicial, Header, DivInicial } from './EstiloPaginas';
import axios from 'axios';

export default function TelaInicial(props) {

    // Limpando a API
    const limparMatches = () => {
        axios
        .put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo-silva/clear')
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

    return (
        <ContainerInicial>
            <Header>
                <h2>Projeto AstroMatch</h2>
            </Header>
            <DivInicial>
                <h3>Essa API tem poucas pessoas no banco de dados e sempre que formos usá-la, podemos limpar para reiniciar os matches.</h3>
                <ButtonPaginas onClick={onClickLimpar}>Limpar Matches</ButtonPaginas>
                <br/>
                <br/>
                <br/>
                <h3>Vamos conhecer nosso jogo de Matches?</h3>
                <ButtonPaginas onClick={props.goToMatches}>Tela Matches</ButtonPaginas>
                <br/>
                <br/>
                <br/>
                <h3>Veja quem gostou de você.</h3>
                <ButtonPaginas onClick={props.goToLista}>Tela das Listas</ButtonPaginas>
            </DivInicial>
        </ContainerInicial>
    )
}