import React from 'react'
import { Container,
  Main,
  Header,
  ButtonPages,
  ContainerButtons } from './PagesStyles'
  import { useNavigate } from 'react-router-dom'
  import { goToAdminHomePageAdmin } from '../routes/Coordinator'
  import { goToCreateTripPage } from '../routes/Coordinator'
  import { BASE_URL } from '../constants/Constant'
  import { useRequestDataTripPage } from '../hooks/useRequestDataTripPage'
  import CardListTripPageAdmin from '../components/CardListTripPageAdmin'

export default function AdminHomePage() {

  //Declarando o useNavigate
  const navigate = useNavigate()

  const [trips, isLoading, error] = useRequestDataTripPage(`${BASE_URL}trips`);
  
  return (
    <Container>
      <Header>
        <h2>LABEX - AdminHomePage</h2>
      </Header>
      <Main>
        <ContainerButtons>
            <ButtonPages onClick={() => goToCreateTripPage(navigate)}>CRIAR VIAGEM</ButtonPages>
            <br/>
            <ButtonPages onClick={() => goToAdminHomePageAdmin(navigate)}>LOGOUT</ButtonPages>
        </ContainerButtons>
        <div>
          {isLoading && <p>Carregando...</p>}
          {!isLoading && error && <p>Ocorreu um erro!</p>}
          {!isLoading && trips && trips.length > 0 && trips.map((trip, id) => {
                    return <CardListTripPageAdmin key={trip.id} trip={trip} />;
                  })}
          {!isLoading && trips && trips.length === 0 && (<p>Não há itens na lista</p>)}
        </div>
      </Main>

    </Container>
  )
}
