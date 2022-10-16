import styled from "styled-components";
// import "@fontsource/roboto";
import {backgroundColor, whiteColor} from "../../constants/colors"
import {megasenaColor} from "../../constants/colors"

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    background-color: ${backgroundColor};
`

export const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    width: 38.3rem;
    height: 47.5rem;
    justify-content: center;
    background-color: ${megasenaColor};
    border: 0.14em solid black;
`
export const Main = styled.div`
    display: flex;
    flex-direction: column;
    width: 60rem;
    height: 47.5rem;
    background-color: ${backgroundColor};
    border: 0.14em solid black;
`

export const Header_Sidebar = styled.div`
    display: flex;
    flex-direction: row;
    width: 38.3rem;
    height: 20%;
    align-itens: center;
    align-content: center;
    align-self: center;
    justify-content: space-around;
    flex-wrap: wrap;
    background-color: ${megasenaColor};
`

export const Main_Sidebar = styled.div`
    display: flex;
    flex-direction: row;
    width: 38.3rem;
    height: 60%;
    align-itens: center;
    align-content: center;
    align-self: center;
    justify-content: space-around;
    flex-wrap: wrap;
    background-color: ${megasenaColor};
    color: ${whiteColor};
`

export const Footer_Sidebar = styled.div`
    display: flex;
    flex-direction: row;
    width: 38.3rem;
    height: 20%;
    align-itens: center;
    align-content: center;
    align-self: center;
    justify-content: space-around;
    flex-wrap: wrap;
    background-color: ${megasenaColor};
    color: ${whiteColor};
`
