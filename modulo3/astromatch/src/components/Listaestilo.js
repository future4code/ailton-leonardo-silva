import styled from "styled-components";

export const ContainerLista = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    justify-content: center;
`

export const DivLista = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    background-color: white;
    border: none;
    box-shadow: 2px 2px 5px darkgray;
    border-radius: 0.4em;
    align-items: center;
    align-self: center;
    justify-content: flex-start;
    width: 32em;
    height: 32em;
`
export const HeaderLista = styled.div`
    background-color: lightpink;
    width: 100%;
    height: 4em;
    border-radius: 0.4em;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
export const DivPhoto = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    background-color: white;
    border: none;
    align-items: center;
    align-self: center;
    justify-content: center;
    width: 100%;
    height: 75%;
`

export const FooterLista = styled.div`
    background-color: lightpink;
    width: 100%;
    height: 4em;
    border-radius: 0.4em;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`