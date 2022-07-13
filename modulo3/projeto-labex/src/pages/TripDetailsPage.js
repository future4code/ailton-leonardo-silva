import React from 'react'
import { Container,
  Header, 
  Main, 
  Wrapper, 
  Input, 
  ContainerButtons, 
  ButtonPages} from './PagesStyles'
import { useNavigate } from 'react-router-dom'
import { goToAdminHomePage } from '../routes/Coordinator'
import { useState , useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../constants/Constant'
import CardListTripPage from '../components/CardListTripPage'
import { useParams } from 'react-router-dom'

export default function TripDetailsPage() {

  //Declarando o useNavigate
  const navigate = useNavigate()
  const [trip, setTrip] = useState([])

  //Declarando o useParams
  const pathParams = useParams(trip.id)

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(
        `${ BASE_URL }trip/${pathParams.id}`,
        {
          headers: {
            auth: token
          }
        }
      )
      .then((response) => {
        console.log(response.data.trip);
        setTrip(response.data.trip)
      })
      .catch((error) => {
        console.log("Deu erro: ", error.response);
      });
  }, []);
  
  return (
    <Container>
      <Header>
        <h2>LABEX - TripDetailsPage</h2>
      </Header>
      <Main>
      <CardListTripPage trip={trip}/>

      <ContainerButtons>
        <ButtonPages onClick={() => goToAdminHomePage(navigate)}>VOLTAR</ButtonPages>
      </ContainerButtons>

      </Main>


    </Container>
  )
}
