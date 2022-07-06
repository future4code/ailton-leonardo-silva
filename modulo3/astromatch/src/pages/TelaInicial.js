import React from 'react'
import { useState } from 'react'
import { ButtonPaginas, ContainerInicial, Header } from './EstiloPaginas'

export default function TelaInicial(props) {

    return (
        <ContainerInicial>
            <Header>
                <h2>Projeto AstroMatch</h2>
            </Header>
            <div>
                <ButtonPaginas onClick={props.goToMatches}>Tela Matches</ButtonPaginas>
                <br/>
                <ButtonPaginas onClick={props.goToLista}>Tela das Listas</ButtonPaginas>
            </div>
        </ContainerInicial>
    )
}