import React from 'react'
import { ContainerLista , DivLista, FooterLista , HeaderLista , DivPhoto } from './Listaestilo'
import styled from 'styled-components'

export default function Matches() {
  return (
    <ContainerLista>
        <DivLista>
            <HeaderLista>LISTAS</HeaderLista>
            <DivPhoto>
                <h2>Lista</h2>
            </DivPhoto>
            <FooterLista>Teste do Footer</FooterLista>
        </DivLista>
    </ContainerLista>
  )
}