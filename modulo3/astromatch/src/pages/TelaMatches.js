import React from 'react'
import Matches from '../components/Matches'
import { ButtonPaginas, ContainerInicial, Header } from './EstiloPaginas'

export default function TelaMatches(props) {
    // Buscando o localStorage
    const user = localStorage.getItem("user");

    return (
        <ContainerInicial>
            <Header>
                <h2>AstroMatch - Oi, {user}!</h2>
            </Header>
            <br/>
            <Matches />
            <br/>
            <ButtonPaginas onClick={props.goToInicial}>Tela Inicial</ButtonPaginas>
            <br/>
            <ButtonPaginas onClick={props.goToLista}>Tela das Listas</ButtonPaginas>
            
        </ContainerInicial>
    )
}
