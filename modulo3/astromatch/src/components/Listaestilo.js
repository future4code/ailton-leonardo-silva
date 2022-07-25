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
    width: 28em;
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
    justify-content: space-evenly;
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
export const ButtonPaginasLista = styled.button`
    background-color: lightpink;
    width: 8em;
    border: 0.2em solid black;
    border-radius: 0.4em;
    font-weight: bold;
    :hover {

    }
`

export const ListaMatchesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 50%;
    align-items: center;
    align-self: flex-start;
    justify-content: baseline;
    padding: 0.2em;
    :hover {
        background-color: lightpink;
    };
    margin: 0.2em;
  
`;

export const ListaPhoto = styled.img`
    width: 3.2em;
    height: 3.2em;
    border-radius: 50%;
    box-shadow: 2px 2px 5px darkgray;
`
export const H3 = styled.h3`
    display: flex;
    font-weight: bold;
    font-size: 0.8em;

`