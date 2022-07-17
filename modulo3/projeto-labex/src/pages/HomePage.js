import React from 'react'
import { ContainerHP,
  Main,
  Header,
  ButtonPages,
  ContainerButtons } from './PagesStyles'
import { useNavigate } from 'react-router-dom'
import { goToAdmin , goToListTripsPageHome } from '../routes/Coordinator'
// import Carina from '../assets/carina_nebulae.png'
export default function HomePage() {

  //Declarando o useNavigate
  const navigate = useNavigate()

  return (
    <ContainerHP>
      <Header>
        <h2>LABEX</h2>
      </Header>
      <Main>
      <ContainerButtons>
          <ButtonPages onClick={() => goToListTripsPageHome(navigate)}>VIAGENS</ButtonPages>
          <br/>
          <ButtonPages onClick={() => goToAdmin(navigate)}>ADMIN</ButtonPages>
        </ContainerButtons>
        {/* <img src={Carina} /> */}
      </Main>
        
    </ContainerHP>
  )
}
