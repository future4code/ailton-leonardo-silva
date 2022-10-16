import styled from "styled-components";
// import "@fontsource/roboto";
import {backgroundColor, backgroundColor2, whiteColor} from "../../constants/colors"
import {lotofacilColor} from "../../constants/colors"

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    background-color: ${backgroundColor2};

    @media screen and (min-width: 50px) and (max-width: 699px) {
        grid-template-columns: 1fr;
      }
    @media screen and (min-width: 700px) and (max-width: 1100px) {
        grid-template-columns: 1fr 1fr;
    }
`

export const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    width: 38.3rem;
    height: 47.5rem;
    justify-content: center;
    background-color: ${backgroundColor2};
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
    background-color: ${backgroundColor2};
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
    background-color: ${backgroundColor2};
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
    background-color: ${backgroundColor2};
    color: ${whiteColor};
`
export const buttonNumber = {
    color: "#000",
    minWidth: "70px",
    minHeight: "70px",
    borderRadius: "50%",
    backgroundColor: "#fff",
    margin: "15px 0px 0px 15px",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#fff",
    }
}