import React from 'react'
import { Container,
         Main,
         Header,
         ButtonPagesDiffBack,
         ContainerButtons } from './PagesStyles'
import { useRequestDataTripPage } from '../hooks/useRequestDataTripPage'
import { BASE_URL } from '../constants/Constant'
import CardListTripPage from '../components/CardListTripPage';
import { useNavigate } from 'react-router-dom'
import { goToHomePage , goToApplicationFormPage } from '../routes/Coordinator';

export default function ListTripsPage() {

  //Declarando o useNavigate
  const navigate = useNavigate()

  const [trips, isLoading, error] = useRequestDataTripPage(`${BASE_URL}trips`);
  
  return (
    <Container>
      <Header>
        <h2>LABEX</h2>
      </Header>
      <Main>
        <ContainerButtons>
          <ButtonPagesDiffBack onClick={() => goToHomePage(navigate)}>VOLTAR</ButtonPagesDiffBack>
          <br/>
          <ButtonPagesDiffBack onClick={() => goToApplicationFormPage(navigate)}>INSCREVER-SE</ButtonPagesDiffBack>
        </ContainerButtons>
        <div>
          {isLoading && <p>Carregando...</p>}
          {!isLoading && error && <p>Ocorreu um erro!</p>}
          {!isLoading && trips && trips.length > 0 && trips.map((trip, id) => {
                    return <CardListTripPage key={trip.id} trip={trip} />;
                  })}
          {!isLoading && trips && trips.length === 0 && (<p>Não há itens na lista</p>)}
        </div>
      </Main>
    </Container>
  )
}
