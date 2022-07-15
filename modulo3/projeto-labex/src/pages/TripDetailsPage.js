import React from 'react'
import { Container,
  Header, 
  Main, 
  Wrapper, 
  Input, 
  ContainerButtons, 
  ButtonPages, 
  H3,
  H2 } from './PagesStyles'
import { useNavigate } from 'react-router-dom'
import { goToAdminHomePage } from '../routes/Coordinator'
import { useState , useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../constants/Constant'
import CardListTripPage from '../components/CardListTripPage'
import { useParams } from 'react-router-dom'
import CardCandidates from '../components/CardCandidates'

export default function TripDetailsPage() {

  //Declarando o useNavigate
  const navigate = useNavigate()
  const [trip, setTrip] = useState([])
  const [candidate, setCandidate] = useState([])
  const [approved, setApproved] = useState([])
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
        setCandidate(response.data.trip.candidates)
        setApproved(response.data.trip.approved)
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
        <ContainerButtons>
          <ButtonPages onClick={() => goToAdminHomePage(navigate)}>VOLTAR</ButtonPages>
        </ContainerButtons>
        <br/>
        <CardListTripPage trip={trip}/>
        <br/>
        <ContainerButtons>
          <CardCandidates trip={trip} candidate={candidate} approved={approved}/>
        </ContainerButtons>
      </Main>


    </Container>
  )
}
