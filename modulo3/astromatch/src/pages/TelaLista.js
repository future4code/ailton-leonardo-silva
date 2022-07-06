import React from 'react'
import { useState } from 'react'
import { ButtonPaginas, ContainerInicial, Header } from './EstiloPaginas'
import Lista from '../components/Lista'

export default function TelaLista(props) {
    
    return (
        <ContainerInicial>
            <Header>
                <h2>AstroMatch</h2>
            </Header>
            <br/>
            <Lista />
            <br/>
            <ButtonPaginas onClick={props.goToInicial}>Tela Inicial</ButtonPaginas>
            <br/>
            <ButtonPaginas onClick={props.goToMatches}>Tela Matches</ButtonPaginas>
        </ContainerInicial>
    )
}