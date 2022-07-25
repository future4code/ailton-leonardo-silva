import styled from "styled-components";

export const ContainerInicial = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    justify-content: center;
`
export const Header = styled.div`
    background-color: lightpink;
    width: 100%;
    height: 4em;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-weight: bold;
`
export const ButtonPaginas = styled.button`
    background-color: lightpink;
    width: 12em;
    border: 0.2em solid black;
    border-radius: 0.4em;
    margin: 0.2em;
    font-weight: bold;
    :hover {
        cursor: pointer;
    }
    
`
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 12em;
    align-self: center;
    align-items: center;
    justify-content: center;
`
export const InputNome = styled.input`
    width: 12em;
    margin: 0.2em;
    border-radius: 0.4em;
    font-weight: bold;
`
export const H3 = styled.h3`
    display: flex;
    font-weight: bold;

`