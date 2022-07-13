import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 48em;
    height: 16em;
    padding: 0.2em;
    margin: 0.2em;
    background-color: #b3b3b3;
    color: white;
    border: 0.14em solid black;
    border-radius: 0.6em;
    align-self: center;
    justify-content: space-evenly;
    box-shadow: 0.2em 0.2em 0.5em wheat;
`
// Wrapper inserido no Card exibido no Admin por causa do excluir
export const WrapperAdmin = styled.div`
    display: flex;
    flex-direction: column;
    width: 48em;
    height: 24em;
    padding: 0.2em;
    margin: 0.2em;
    background-color: #b3b3b3;
    color: white;
    border: 0.14em solid black;
    border-radius: 0.6em;
    align-self: center;
    justify-content: space-evenly;
    box-shadow: 0.2em 0.2em 0.5em wheat;
`


export const H2 = styled.h2`
    display: flex;
    color: white;
    font-weight: bold;
    font-size: 1.6em;
`
export const H3 = styled.h3`
    display: flex;
    color: white;
    font-weight: bold;
    font-size: 1em;
`