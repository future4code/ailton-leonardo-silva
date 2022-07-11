import React from 'react'
import axios from 'axios'
import { Container,
         Main,
         Header,
         ButtonPages } from './PagesStyles'


export default function ListTripsPage() {
  return (
    <Container>
      <Header>
        <h2>LABEX - VIAGENS</h2>
      </Header>
      <Main>
        <ButtonPages>VOLTAR</ButtonPages>
        <br/>
        <ButtonPages>INSCREVER-SE</ButtonPages>
        <br/>
      </Main>

    </Container>
  )
}
