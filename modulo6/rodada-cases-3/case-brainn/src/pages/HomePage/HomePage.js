import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { GlobalContext } from "../../components/global/GlobalContext"
import { Seletor } from "../../components/Seletor"
import { useState } from "react"
import { buttonNumber, Container, Footer_Sidebar, Header_Sidebar, Main, Main_Sidebar, Sidebar } from "./styled"
import { BASE_URL } from "../../constants/urls"
import { useRequestData } from "../../hooks/useRequestData"
import { Color } from "../../constants/colors"
import { FormatDate } from "../../FormatDate"


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

  console.log("Loteria Concursos *** " , loteriaconcurso)

  //Buscando os resultados dos sorteios
  // const [resultadoConcurso] = useRequestData([],`${BASE_URL}/concursos/${loteriaconcurso?.[0]?.concursoId === undefined? 2359 : loteriaconcurso?.[0]?.concursoId}`);
  const [resultadoConcurso] = useRequestData([],`${BASE_URL}/concursos/${valor}`);
    
  console.log("Valor" , valor )
  console.log("Loterias", loterias)
  
  console.log("Concursos", concursos)
  
  console.log("Resultado Concurso",resultadoConcurso)
  

console.log("Disso", loteriaconcurso[valor])

    return (
        <Container>
            <Sidebar>
                <Header_Sidebar style={{backgroundColor: Color(nomeLoteria?.[0]?.nome)}}>
                <select name="loterias" value={loterias} onChange={handleChange}>
                    <option value="mega-sena">Mega-Sena</option>
                    <option value="quina">Quina</option>
                    <option value="lotofácil">Lotofácil</option>
                    <option value="lotomania">Lotomania</option>
                    <option value="timemania">Timemania</option>
                    <option value="dia de sorte">Dia de Sorte</option>
               
                </select>
                    <div></div>
                </Header_Sidebar>
                <Main_Sidebar style={{backgroundColor: Color(nomeLoteria?.[0]?.nome)}}>
                {nomeLoteria?.[0]?.nome === undefined ? (
                    <p>MEGA-SENA</p>
                ) : (
                    nomeLoteria?.[0]?.nome.toUpperCase()
                )}
                <div></div> 
                </Main_Sidebar>
                <Footer_Sidebar style={{backgroundColor: Color(nomeLoteria?.[0]?.nome)}}>
                    <h3>Concurso - {resultadoConcurso.id} - {resultadoConcurso.data}</h3>
                    <div></div>
                </Footer_Sidebar>
            </Sidebar>
            <Main>
                
                
                {nomeLoteria?.[0]?.nome === undefined ? (
                    <p>MEGA-SENA</p>
                ) : (
                    nomeLoteria?.[0]?.nome.toUpperCase()
                )}
                <div>
        <div></div>
        <div className="button">
          {resultadoConcurso.numeros &&
            resultadoConcurso.numeros?.map((numbers) => {
              return (
                <button key={Math.random()}>
                  {numbers}
                </button>
              );
            })}
        </div>
        
        
      </div>
                <h4>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</h4>
            </Main>
            <div>
                
          
            </div>

        </Container>

    )
}


export default HomePage