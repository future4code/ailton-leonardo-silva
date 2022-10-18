import React, { useContext } from "react"
import { GlobalContext } from "../../components/global/GlobalContext"
import { useState } from "react"
import { ButtonNumber, Container, Footer_Sidebar, Header_Sidebar, Main, Main_Sidebar, Name_div, Numbers_div, Select, Sidebar } from "./styled"
import { BASE_URL } from "../../constants/urls"
import { useRequestData } from "../../hooks/useRequestData"
import { Color } from "../../constants/colors"
import trevodacaixa from "../../assets/trevodacaixa.svg"
import Moment from 'moment';

const HomePage = () => {

    const [ data ] = useRequestData([],`${BASE_URL}/loterias`);
    const [concursos] = useRequestData([], `${BASE_URL}/loterias-concursos`);
    const [loterias, setLoterias] = useState(0);
    const [valor , setValor ] = useState(2359)

    
  
  //Controlando o valor do select
  const handleChange = (event) => {
    setLoterias(event.target.value);
    switch (event.target.value) {
      case "mega-sena":
        setValor(2359)
        break
      case "quina":
        setValor(5534)
        break
      case "lotofácil":
        setValor(2200)
        break
      case "lotomania":
        setValor(2167)
        break
      case "timemania":
        setValor(1622)
        break
      case "dia de sorte":
        setValor(440)
        break
      
      default:
        setValor(2359);
    }
  };

 
  //Setando o nome 
  const nomeLoteria = data && data?.filter((loteria) => { 
    return loterias === loteria.nome
  });

  //Vou filtrar o id da loteria-concurso pelo id do select
  const loteriaconcurso = concursos?.filter((loteria) => {
    return loterias === loteria.loteriaId
  });

  // console.log("Loteria Concursos *** " , loteriaconcurso)

  //Buscando os resultados dos sorteios
  const [resultadoConcurso] = useRequestData([],`${BASE_URL}/concursos/${valor}`);
    
  // console.log("Valor" , valor )
  console.log("data", data)
  
  console.log("Concursos", concursos)
  
  console.log("Resultado Concurso",resultadoConcurso)

  var dataDoConcurso = `${new Date(resultadoConcurso.data)}`;
  var date = Moment(dataDoConcurso).format('DD/MM/YYYY');
  console.log("Date" , date)
  // formato('YYYY-MM-DDTHH:mm:ss')
  

// console.log("Disso", loteriaconcurso[valor])

    return (
        <Container>
            <Sidebar>
                <Header_Sidebar style={{backgroundColor: Color(nomeLoteria?.[0]?.nome)}}>
                <Select name="loterias" value={loterias} onChange={handleChange}>
                    <option value="mega-sena">Mega-Sena</option>
                    <option value="quina">Quina</option>
                    <option value="lotofácil">Lotofácil</option>
                    <option value="lotomania">Lotomania</option>
                    <option value="timemania">Timemania</option>
                    <option value="dia de sorte">Dia de Sorte</option>
               
                </Select>
                    <div></div>
                </Header_Sidebar>
                <Main_Sidebar style={{backgroundColor: Color(nomeLoteria?.[0]?.nome)}}>
                    <img src={trevodacaixa} alt="trevo" />
                    <h3>{nomeLoteria?.[0]?.nome === undefined ? (<h3>MEGA-SENA</h3>) : (nomeLoteria?.[0]?.nome.toUpperCase())}</h3>
                </Main_Sidebar>
                <Footer_Sidebar style={{backgroundColor: Color(nomeLoteria?.[0]?.nome)}}>
                    <h3>Concurso - {resultadoConcurso.id} - {date}</h3>
                    <div></div>
                </Footer_Sidebar>
            </Sidebar>
            <Main>
                <h3>{nomeLoteria?.[0]?.nome === undefined ? (<h4>MEGA-SENA</h4>) : (nomeLoteria?.[0]?.nome.toUpperCase())}</h3>
                <div>
                <div></div>
                <Numbers_div>
                  {resultadoConcurso.numeros && resultadoConcurso.numeros?.map((numbers) => {
                    return (
                      <ButtonNumber key={Math.random()}>
                        {numbers}
                      </ButtonNumber>
                    );
                  })}
                </Numbers_div>
      </div>
                <h4>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</h4>
            </Main>
            <div>
                
          
            </div>

        </Container>

    )
}


export default HomePage