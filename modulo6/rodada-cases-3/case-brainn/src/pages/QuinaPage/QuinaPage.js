import React from "react"
import { Seletor } from "../../components/Seletor";
import { quinaName } from "../../constants/names";
import { Container, Footer_Sidebar, Header_Sidebar, Main, Main_Sidebar, Sidebar } from "./styled"

const QuinaPage = () => {
    return (
        <Container>
            <Sidebar>
                <Header_Sidebar>
                    <Seletor/>
                    <div></div>
                </Header_Sidebar>
                <Main_Sidebar>
                    <h1>{quinaName}</h1>
                    <div></div> 
                </Main_Sidebar>
                <Footer_Sidebar>
                    <h3>Concurso</h3>
                    <div></div>
                </Footer_Sidebar>
            </Sidebar>
            <Main>
                
                
                <h1>{quinaName}</h1>
            </Main>

        </Container>

    )
}

export default QuinaPage;