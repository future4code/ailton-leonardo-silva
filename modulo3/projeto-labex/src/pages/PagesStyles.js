import styled from "styled-components";
import "@fontsource/roboto";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    /* background-color: #b3b3b3; */
`
export const ContainerHP = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100%;
    align-items: center;
    justify-content: center;
    /* background-color: #b3b3b3; */
    
    
`
export const ContainerForms = styled.div`
    display: flex;
    flex-direction: column;
    width: 24em;
    height: 18em;
    align-items: center;
    align-self: center;
    justify-content: center;
    background-color: #b3b3b3;
`

export const ContainerButtons = styled.div`
    display: flex;
    width: 24em;
    height: 6em;
    margin: 0.2em;
    padding: 0.2em;
    align-items: center;
    align-self: center;
    justify-content: space-evenly;
    /* background-color: #b3b3b3; */
`

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    /* background-color: #b3b3b3; */
`
export const Header = styled.div`
    display: flex;
    width: 100%;
    height: 4em;
    color: white;
    font-weight: bold;
    background-color: #282828;
    border: 1px solid black;
    font-family: 'Roboto';
    justify-content: center;
`
export const ButtonPages = styled.button`
    display: flex;
    width: 10em;
    font-weight: bold;
    color: white;
    background-color: #404040;
    font-family: 'Roboto';
    justify-content: center;
    border-radius: 0.4em;
    border: none;
    :hover {
        background-color: #b3b3b3;
        color: black;
    }
`
export const ButtonPagesDiffBack = styled.button`
    display: flex;
    width: 10em;
    font-weight: bold;
    color: white;
    background-color: #404040;
    font-family: 'Roboto';
    justify-content: center;
    border-radius: 0.4em;
    border: none;
    :hover {
        background-color: white;
        color: black;
    }
`

export const H2 = styled.h2`
    display: flex;
    flex-wrap: wrap;
    color: #282828;
    font-weight: bold;
    font-size: 1.2em;
`
export const H3 = styled.h3`
    display: flex;
    flex-wrap: wrap;
    color: #282828;
    font-weight: bold;
    font-size: 0.8em;
`
export const Wrapper = styled.div`
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
    align-items: center;
    align-self: center;
    justify-content: space-evenly;
    box-shadow: 0.2em 0.2em 0.5em wheat;
    font-family: "Roboto";
`
export const Input = styled.input`
    display: flex;
    color: black;
    font-weight: bold;
    border-radius: 0.6em;
    width: 48em;
    font-family: "Roboto";
`
export const InputLogin = styled.input`
    display: flex;
    color: black;
    font-weight: bold;
    border-radius: 0.6em;
    width: 24em;
    font-family: "Roboto";
`

export const Select = styled.select`
    display: flex;
    color: black;
    font-weight: bold;
    border-radius: 0.48em;
    width: 48.42em;
    font-family: "Roboto";
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    /* background-color: #b3b3b3; */
    color: white;
    align-items: center;
    align-self: center;
    justify-content: space-evenly;
    font-family: "Roboto";
`