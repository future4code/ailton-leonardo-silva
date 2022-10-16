import React, { useContext } from "react"
import { Seletor } from "../../components/Seletor";
import { megasenaName } from "../../constants/names";
import { Container, Footer_Sidebar, Header_Sidebar, Main, Main_Sidebar, Sidebar } from "./styled"
import { GlobalContext } from "../../components/global/GlobalContext";
import { useRequestData } from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";

const MegaSenaPage = () => {
    const {states, setters, requests} = useContext(GlobalContext)
    const {loteriaConcurso, loterias, loteriasConcursos, value} = states
    const {setLoterias , setLoteriasConcursos} = setters

    // const [ resultLoteria ] = useRequestData(`${BASE_URL}/loterias`);

    // console.log("Loteria", resultLoteria)
    // console.log("Loteria Concurso", loteriaConcurso)

    // console.log("Value", value)
    
    // const filterLoteria = loteria.filter((result) => {
    //     return result.nome === value
    // })

    // console.log(filterLoteria[0].id) // 0 Valor correto

    // const concurso = loteriaConcurso[filterLoteria[0].id]
    // console.log(concurso)

    // const [ sorteio ] = useRequestData(`${BASE_URL}/concursos/${concurso.concursoId}`);
    // console.log("sorteio", sorteio)

    return (
        <Container>
            <Sidebar>
                <Header_Sidebar>
                    
                    <Seletor/>
                    <div></div>
                    
                </Header_Sidebar>
                <Main_Sidebar>
                    <h1>{megasenaName}</h1>
                    <div></div> 
                </Main_Sidebar>
                <Footer_Sidebar>
                    <h3>Concurso</h3>
                    
                    <div></div>
                </Footer_Sidebar>
            </Sidebar>
            <Main>
                
                
                <h1>{megasenaName}</h1>
            </Main>

        </Container>

    )
}

export default MegaSenaPage;