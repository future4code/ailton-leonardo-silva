import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { GlobalContext } from "../../components/global/GlobalContext"
import { Seletor } from "../../components/Seletor"
import { useState } from "react"
import { buttonNumber, Container, Footer_Sidebar, Header_Sidebar, Main, Main_Sidebar, Sidebar } from "./styled"
import { BASE_URL } from "../../constants/urls"
import { useRequestData } from "../../hooks/useRequestData"
import { Color } from "../../constants/colors"


const HomePage = () => {

    const [ data ] = useRequestData([],`${BASE_URL}/loterias`);
    const [concursos] = useRequestData([], `${BASE_URL}/loterias-concursos`);
    const [loterias, setLoterias] = useState(0);

    console.log("data",data)
  
  //Controlando o valor do select
  const handleChange = (event) => {
    setLoterias(event.target.value);
  };

  //Vou filtrar o id da loteria-concurso pelo id do select
  const loteriaconcurso = concursos && concursos?.filter((loteria) => loterias === loteria.loteriaId);
  
  //Setando o nome 
  const nomeLoteria = data && data?.filter((loteria) => loterias === loteria.nome);

  //Buscando os resultados dos sorteios
  const [resultadoConcurso] = useRequestData([],`${BASE_URL}/concursos/${loteriaconcurso?.[0]?.concursoId === undefined? 2359 : loteriaconcurso?.[0]?.concursoId}`);
  console.log(resultadoConcurso)

  console.log(nomeLoteria?.[0]?.nome)
  

//   `${BASE_URL}/concursos/${concurso.concursoId}`

    return (
        <Container>
            <Sidebar>
                <Header_Sidebar style={{backgroundColor: Color(nomeLoteria?.[0]?.nome)}}>
                <select name="loterias" value={loterias} onChange={handleChange}>
                    {/* <option value={""}>Escolha um Jogo</option> */}
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
                    <h3>Concurso - {resultadoConcurso.id} - {resultadoConcurso.data.toLocaleDateString('pt-BR')}</h3>
                    <div></div>
                </Footer_Sidebar>
            </Sidebar>
            <Main>
                
                
                <h1>Home Page</h1>
                <div>
        <div></div>
        <div className="button">
          {resultadoConcurso.numeros &&
            resultadoConcurso.numeros?.map((numbers) => {
              return (
                <button sx={buttonNumber} key={Math.random()}>
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